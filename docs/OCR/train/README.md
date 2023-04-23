将数据放到PaddleOCR/train_data目录下

```
PaddleOCR/train_data/fjp_data/
  └─ fjp/         图片存放的位置
  └─ train_label.txt    飞机票数据集的训练标注
  └─ test_label.txt     飞机票数据集的测试标注
```

自定义切分数据集

```python
import os
import shutil
from sklearn.model_selection import train_test_split


label_txt='../../train_data/fjp_data/fjp/Label.txt' #标注数据的路径
if not os.path.exists('tmp'):
    os.makedirs('tmp')
with open(label_txt, 'r') as f:
   txt_List=f.readlines()
   trainval_files, val_files = train_test_split(txt_List, test_size=0.1, random_state=42)
   print(trainval_files)
   f = open("train_label.txt", "w")
   f.writelines(trainval_files)
   f.close()
   f = open("test_label.txt", "w")
   f.writelines(val_files)
   f.close()
   for txt in txt_List:
       image_name=txt.split('\t')[0]
       new_path="./tmp/"+image_name.split('/')[1]
       shutil.move(image_name, new_path)
       print(image_name)
```

执行python det_train_val.py

det_train_ val.py内容为：注意修改label的路径

执行完成后将tmp文件夹里面的图片放到PaddleOCR/train_data/fjp_data/fjp/文件夹下面。

```
cp tmp/* fjp/
```

## 下载预训练模型

将预训练模型，将其放到PaddleOCR/pretrain_models文件夹中，没有则自行创建命令如下：

预训练模型已预先下载好了，即`ch_PP-OCRv3_det_distill_train`文件夹。若没有则到官网下载预训练模型https://github.com/PaddlePaddle/PaddleOCR/blob/release/2.6/doc/doc_ch/models_list.md



在PaddleOCR根目录中创建`pretrain_models`文件夹，将`ch_PP-OCRv3_det_distill_train`复制进去

## 修改配置文件

然后修改该config文件，路径： configs/det/ch_PP-OCRv3/ch_PP-OCRv3_det_cml.yml，打开文件对里面的参数进行修改。

下面是需要修改的位置，已用注释标出

```yml
Global:
  debug: false
  use_gpu: true
  epoch_num: 1200
  log_smooth_window: 20
  print_batch_step: 50
  save_model_dir: ./output/fjp_det/ # 模型输出路径
  save_epoch_step: 100
  eval_batch_step:
  - 0
  - 400
  cal_metric_during_train: false
  pretrained_model: ./pretrain_models/ch_PP-OCRv3_det_distill_train/best_accuracy # 预训练模型路径
  checkpoints: null
  save_inference_dir: null
  use_visualdl: false
  infer_img: doc/imgs_en/img_10.jpg
  save_res_path: ./checkpoints/det_db/predicts_db.txt
  distributed: true

Architecture:
  name: DistillationModel
  algorithm: Distillation
  model_type: det
  Models:
    Student:
      pretrained:
      model_type: det
      algorithm: DB
      Transform: null
      Backbone:
        name: MobileNetV3
        scale: 0.5
        model_name: large
        disable_se: true
      Neck:
        name: RSEFPN
        out_channels: 96
        shortcut: True
      Head:
        name: DBHead
        k: 50
    Student2:
      pretrained:
      model_type: det
      algorithm: DB
      Transform: null
      Backbone:
        name: MobileNetV3
        scale: 0.5
        model_name: large
        disable_se: true
      Neck:
        name: RSEFPN
        out_channels: 96
        shortcut: True
      Head:
        name: DBHead
        k: 50
    Teacher:
      freeze_params: true
      return_all_feats: false
      model_type: det
      algorithm: DB
      Backbone:
        name: ResNet_vd
        in_channels: 3
        layers: 50
      Neck:
        name: LKPAN
        out_channels: 256
      Head:
        name: DBHead
        kernel_list: [7,2,2]
        k: 50

Loss:
  name: CombinedLoss
  loss_config_list:
  - DistillationDilaDBLoss:
      weight: 1.0
      model_name_pairs:
      - ["Student", "Teacher"]
      - ["Student2", "Teacher"]
      key: maps
      balance_loss: true
      main_loss_type: DiceLoss
      alpha: 5
      beta: 10
      ohem_ratio: 3
  - DistillationDMLLoss:
      model_name_pairs:
      - ["Student", "Student2"]
      maps_name: "thrink_maps"
      weight: 1.0
      model_name_pairs: ["Student", "Student2"]
      key: maps
  - DistillationDBLoss:
      weight: 1.0
      model_name_list: ["Student", "Student2"]
      balance_loss: true
      main_loss_type: DiceLoss
      alpha: 5
      beta: 10
      ohem_ratio: 3

Optimizer:
  name: Adam
  beta1: 0.9
  beta2: 0.999
  lr:
    name: Cosine
    learning_rate: 0.001
    warmup_epoch: 2
  regularizer:
    name: L2
    factor: 5.0e-05

PostProcess:
  name: DistillationDBPostProcess
  model_name: ["Student"]
  key: head_out
  thresh: 0.3
  box_thresh: 0.6
  max_candidates: 1000
  unclip_ratio: 1.5

Metric:
  name: DistillationMetric
  base_metric_name: DetMetric
  main_indicator: hmean
  key: "Student"

Train:
  dataset:
    name: SimpleDataSet
    data_dir: ./train_data/fjp_data/ # 训练集数据路径
    label_file_list:
      - ./train_data//fjp_data/train_label.txt # 训练集label.txt路径
    ratio_list: [1.0]
    transforms:
    - DecodeImage:
        img_mode: BGR
        channel_first: false
    - DetLabelEncode: null
    - CopyPaste:
    - IaaAugment:
        augmenter_args:
        - type: Fliplr
          args:
            p: 0.5
        - type: Affine
          args:
            rotate:
            - -10
            - 10
        - type: Resize
          args:
            size:
            - 0.5
            - 3
    - EastRandomCropData:
        size:
        - 960
        - 960
        max_tries: 50
        keep_ratio: true
    - MakeBorderMap:
        shrink_ratio: 0.4
        thresh_min: 0.3
        thresh_max: 0.7
    - MakeShrinkMap:
        shrink_ratio: 0.4
        min_text_size: 8
    - NormalizeImage:
        scale: 1./255.
        mean:
        - 0.485
        - 0.456
        - 0.406
        std:
        - 0.229
        - 0.224
        - 0.225
        order: hwc
    - ToCHWImage: null
    - KeepKeys:
        keep_keys:
        - image
        - threshold_map
        - threshold_mask
        - shrink_map
        - shrink_mask
  loader:
    shuffle: true
    drop_last: false
    batch_size_per_card: 4 # 修改batch_size为4即可，太大显存不够
    num_workers: 4

Eval:
  dataset:
    name: SimpleDataSet
    data_dir: ./train_data/fjp_data # 验证集路径
    label_file_list:
      - ./train_data/jfp_data/test_label.txt # 验证集label文件路径
    transforms:
      - DecodeImage: # load image
          img_mode: BGR
          channel_first: False
      - DetLabelEncode: # Class handling label
      - DetResizeForTest:
      - NormalizeImage:
          scale: 1./255.
          mean: [0.485, 0.456, 0.406]
          std: [0.229, 0.224, 0.225]
          order: 'hwc'
      - ToCHWImage:
      - KeepKeys:
          keep_keys: ['image', 'shape', 'polys', 'ignore_tags']
  loader:
    shuffle: False
    drop_last: False
    batch_size_per_card: 1 # must be 1
    num_workers: 2
```

## 开启训练

**注意:在PaddleOCR的根目录执行命令。**

```
python tools/train.py -c configs/det/ch_PP-OCRv3/ch_PP-OCRv3_det_cml.yml
```

