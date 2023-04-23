# 在docker上部署PaddleOCR服务

[参考](https://blog.csdn.net/apple_50678962/article/details/120731730)

**拉取预安装 PaddlePaddle 的镜像：**

```bash
docker pull registry.baidubce.com/paddlepaddle/paddle:2.3.2
```

**运行docker容器：**

```javascript
docker run --name ppocr -v /opt/paddle:/opt/paddle --network=host -it registry.baidubce.com/paddlepaddle/paddle:2.3.2 /bin/bash
# 或自己导出导入镜像
docker commit [容器id] ppocr:1.0
docker save -o ppocr_1.0.tar ppocr:1.0
docker load --input ppocr_1.0.tar
docker run --name ppocr -v /opt/paddle:/opt/paddle --network=host -itd ppocr:1.0 /bin/bash
```

- 基于PaddleHub Serving的部署：代码路径为"`PaddleOCR/deploy/hubservingg`" 已集成到PaddleOCR中（[code](https://github.com/PaddlePaddle/PaddleOCR/tree/develop/deploy/hubserving)）

> 当前用户在训练出一个可用的模型后，可以选择如下四种部署应用方式：
>
> 服务器端高性能部署：将模型部署在服务器上，利用服务器的高性能帮助用户处理推理业务
> 模型服务化部署：将模型以线上服务的形式部署在服务器或云端，用户通过客户端请求发送需要推理的输入内容，服务器或者云通过相应报文将推理结果返回给用户（paddle serving）
> 移动端部署：将模型部署在移动端上，例如手机/物联网的嵌入式端
> Web端部署：将模型部署在网页上，用户通过网页完成推理业务



PaddlehubServing作为paddlepaddle开源的在线服务框架

服务部署下包括 检测、识别、检测+识别串联 三种服务包，根据需求选择相应的服务包进行安装和启动

```
deploy/hubserving/
└─  ocr_det     检测模块服务包
└─  ocr_rec     识别模块服务包
└─  ocr_system  检测+识别串联服务包   <==== 我们直接这个，包括先检测然后识别
```


每个服务包下包含3个文件。以检测+识别串联 目录为例，目录如下：

```
deploy/hubserving/ocr_system/
└─  __init__.py    空文件，必选
└─  config.json    配置文件，可选，使用配置启动服务时作为参数传入
└─module.py      主模块，必选，包含服务的完整逻辑
└─params.py      参数文件，必选，包含模型路径、前后处理参数等参数
```

## 具体步骤（ocr_system 检测+识别串联）

### 1、准备环境

```bash
# 安装paddlehub 
pip install paddlehub --upgrade -i https://pypi.tuna.tsinghua.edu.cn/simple
```

### 2、从git clone/下载下来整个PaddleOCR项目

-  也可在本地下载压缩包后上传服务器
- 进入需要保存的工作目录拉取项目即可

```bash
git clone https://gitee.com/paddlepaddle/PaddleOCR
```

- 安装 PaddleOCR 的 python 依赖

```bash
cd PaddleOCR
pip3 install -r requirements.txt
```

### 3.下载推理模型

下载/使用自己的推理模型并放到正确路径：

> 若不手动下载则会自动下载并使用默认配置中的模型

1、在PaddleOCR（也就是刚刚解压的目录下面）目录里`mkdir inference`创建 inference 目录

2、从PaddleOCR提供的模型库下载以下三个模型压缩包

```
检测模型：ch_ppocr_server_v2.0_det_infer.tar
识别模型：ch_ppocr_server_v2.0_rec_infer.tar
方向分类器：ch_ppocr_mobile_v2.0_cls_infer

# 在inference目录下载并解压 OCR 文本检测模型
wget https://paddleocr.bj.bcebos.com/PP-OCRv3/chinese/ch_PP-OCRv3_det_infer.tar -O ch_PP-OCRv3_det_infer.tar && tar -xf ch_PP-OCRv3_det_infer.tar
# 下载并解压 OCR 文本识别模型
wget https://paddleocr.bj.bcebos.com/PP-OCRv3/chinese/ch_PP-OCRv3_rec_infer.tar -O ch_PP-OCRv3_rec_infer.tar && tar -xf ch_PP-OCRv3_rec_infer.tar
# 下载并解压 OCR 文本方向分类模型
wget https://paddleocr.bj.bcebos.com/dygraph_v2.0/ch/ch_ppocr_mobile_v2.0_cls_infer.tar -O ch_ppocr_mobile_v2.0_cls_infer.tar && tar -xf ch_ppocr_mobile_v2.0_cls_infer.tar
```

3、也可以把压缩包上传到`Paddle/inference`目录里，解压

4、检查一下解压出来的目录中，是否包含以下内容

```
./inference/ch_PP-OCRv3_det_infer/
└─  inference.pdiparams
└─  inference.pdiparams.info
└─  inference.pdmodel  

./inference/ch_PP-OCRv3_rec_infer/
└─ ._inference.pdiparams
└─ inference.pdiparams
└─ ._inference.pdiparams.info
└─ inference.pdiparams.info
└─ ._inference.pdmodel
└─ inference.pdmodel

./inference/ch_ppocr_mobile_v2.0_cls_infer/
└─  inference.pdiparams
└─  inference.pdiparams.info
└─  inference.pdmodel  
```

### 4、修改参数文件`params.py`中的模型路径

因为我们这里是安装部署`ocr_sysyem`，所以就去改`ocr_system`的就ok。若要更换自己训练的模型也是如此操作。
`ocr_system`参数文件路径：`PaddleOCR/ 	`

修改以下部分：

![image-20230416211649233](https://minboo-blog-img.oss-cn-guangzhou.aliyuncs.com/img/image-20230416211649233.png)

![image-20230416211723900](https://minboo-blog-img.oss-cn-guangzhou.aliyuncs.com/img/image-20230416211723900.png)

### 5、安装服务模块

PaddleOCR提供3种服务模块，根据需要安装所需模块。（这里我们是安装的ocr_system）

在 PaddleOCR 这个目录下运行

```
安装检测服务模块：
hub install deploy/hubserving/ocr_det/

或，安装识别服务模块：
hub install deploy/hubserving/ocr_rec/

或，安装检测+识别串联服务模块：
hub install deploy/hubserving/ocr_system/  <=== 我们选择这个
```

这样算成功

![image-20230416214932886](https://minboo-blog-img.oss-cn-guangzhou.aliyuncs.com/img/image-20230416214932886.png)

## 启动服务

### 配置文件启动（支持CPU、GPU）

**启动命令：**
`hub serving start -c config.json`

**或**(推荐)

`hub serving start -m ocr_system`

**启动成功**

![image-20230416215457884](https://minboo-blog-img.oss-cn-guangzhou.aliyuncs.com/img/image-20230416215457884.png)

**停止**

`hub serving stop -p 8866`

其中，`config.json`格式如下：

```shell
{
    "modules_info": {
        "ocr_system": {
            "init_args": {
                "version": "1.0.0",
                "use_gpu": true, #是否使用gpu，如果是cpu机器则设置成false，use_gpu不可与use_multiprocess同时为true
                "enable_mkldnn": true
            },
            "predict_args": {
            }
        }
    },
    "port": 8866, # 服务端口
    "use_multiprocess": false, # 是否使用多进程，默认为单进程，多核cpu可改为true
    "workers": 2 # 在并发方式下指定的并发任务数，默认为2*cpu_count-1，其中cpu_count为CPU核数
}
```

- `init_args`中的可配参数与`module.py`中的`_initialize`函数接口一致。其中，当`use_gpu`为`true`时，表示使用GPU启动服务

- `predict_args`中的可配参数与`module.py`中的`predict`函数接口一致。

**注意:**

- 使用配置文件启动服务时，其他参数会被忽略。
- 如果使用GPU预测(即，`use_gpu`置为`true`)，则需要在启动服务之前，设置`CUDA_VISIBLE_DEVICES`环境变量，如：`export CUDA_VISIBLE_DEVICES=0`，否则不用设置。
- `use_gpu`不可与`use_multiprocess`同时为`true`。
- **`use_gpu`与`enable_mkldnn`同时为`true`时，将忽略`enable_mkldnn`，而使用GPU**。

## 发送预测请求

配置好服务端，可使用以下命令发送预测请求，获取预测结果:

```bash
python tools/test_hubserving.py --server_url [serverurl] --image_dir [image_path]需要给脚本传递2个参数：
```

`server_url`：服务地址，格式为
`http://[ip_address]:[port]/predict/[module_name]`
例如，如果使用配置文件启动检测、识别、检测+识别2阶段服务，那么发送请求的url将分别是：
`http://127.0.0.1:8866/predict/ocr_det`
`http://127.0.0.1:8867/predict/ocr_rec`
`http://127.0.0.1:8868/predict/ocr_system`
`image_path`：测试图像路径，可以是单张图片路径，也可以是图像集合目录路径
这里我挂起服务之后用对本机请求测试了一下示例：

```bash
python tools/test_hubserving.py --server_url http://127.0.0.1:8866/predict/ocr_system --image_dir ./aaa.jpg
```

找张有文字的图片传到服务器上，路径写在image_path参数位置，测试结果如下
![image-20221005171950353](C:\Users\11973\AppData\Roaming\Typora\typora-user-images\image-20221005171950353.png)

Postman测试：

在postman中输入接口url`ip:8866/predict/ocr_system`，post请求，参数为json对象如下图

![image-20221005172523299](C:\Users\11973\AppData\Roaming\Typora\typora-user-images\image-20221005172523299.png)

返回结果：

![image-20221005172630879](C:\Users\11973\AppData\Roaming\Typora\typora-user-images\image-20221005172630879.png)

| 字段名称    | 数据类型 | 含义           |
| ----------- | -------- | -------------- |
| text        | str      | 文本内容       |
| confidence  | float    | 文本识别置信度 |
| text_region | list     | 文本位置坐标   |

## 自定义修改服务模块

如果需要修改服务逻辑，你一般需要操作以下步骤（以修改`ocr_system`为例）：

- 1、 停止服务
  `hub serving stop --port/-p XXXX`
- 2、 到相应的`module.py`和`params.py`等文件中根据实际需求修改代码。
  例如，如果需要替换部署服务所用模型，则需要到`params.py`中修改模型路径参数`det_model_dir`和`rec_model_dir`，如果需要关闭文本方向分类器，则将参数`use_angle_cls`置为`False`，当然，同时可能还需要修改其他相关参数，请根据实际情况修改调试。 **强烈建议修改后先直接运行`module.py`调试，能正确运行预测后再启动服务测试。** **注意** PPOCR-v3识别模型使用的图片输入shape为`3,48,320`,因此需要修改`params.py`中的`cfg.rec_image_shape = "3, 48, 320"`，如果不使用PPOCR-v3识别模型，则无需修改该参数。
- 3、 卸载旧服务包
  `hub uninstall ocr_system`
- 4、 安装修改后的新服务包
  `hub install deploy/hubserving/ocr_system/`
- 5、重新启动服务
  `hub serving start -m ocr_system`

# 训练模型脚本

训练模型有以下几点需要准备：

1、准备数据集，可官网下载或自己用官方PaddleLable标注工具制作

2、下载预训练模型pretrain models

```bash
cd PaddleOCR/
# 下载英文PP-OCRv3的预训练模型
wget -P ./pretrain_models/ https://paddleocr.bj.bcebos.com/PP-OCRv3/english/en_PP-OCRv3_rec_train.tar
# 解压模型参数
cd pretrain_models
tar -xf en_PP-OCRv3_rec_train.tar && rm -rf en_PP-OCRv3_rec_train.tar
```

3、修改预训练模型对应的yml配置文件

**如果安装的是cpu版本，将配置文件中的 `use_gpu` 字段修改为false**

4、执行命令训练

```bash
# GPU训练 支持单卡，多卡训练
# 训练icdar15英文数据 训练日志会自动保存为 "{save_model_dir}" 下的train.log

#单卡训练（训练周期长，不建议）
python tools/train.py -c configs/rec/PP-OCRv3/en_PP-OCRv3_rec.yml -o Global.pretrained_model=./pretrain_models/en_PP-OCRv3_rec_train/best_accuracy

#多卡训练，通过--gpus参数指定卡号
python -m paddle.distributed.launch --gpus '0,1,2,3'  tools/train.py -c configs/rec/PP-OCRv3/en_PP-OCRv3_rec.yml -o Global.pretrained_model=./pretrain_models/en_PP-OCRv3_rec_train/best_accuracy
```

# 模型导出与预测

inference 模型（`paddle.jit.save`保存的模型） 一般是模型训练，把模型结构和模型参数保存在文件中的固化模型，多用于预测部署场景。 训练过程中保存的模型是checkpoints模型，保存的只有模型的参数，多用于恢复训练等。 与checkpoints模型相比，inference 模型会额外保存模型的结构信息，在预测部署、加速推理上性能优越，灵活方便，适合于实际系统集成。

识别模型转inference模型与检测的方式相同，如下：

```
# -c 后面设置训练算法的yml配置文件
# -o 配置可选参数
# Global.pretrained_model 参数设置待转换的训练模型地址，不用添加文件后缀 .pdmodel，.pdopt或.pdparams。
# Global.save_inference_dir参数设置转换的模型将保存的地址。

python3 tools/export_model.py -c configs/rec/PP-OCRv3/ch_PP-OCRv3_rec.yml -o Global.pretrained_model=./pretrain_models/ch_PP-OCRv3_rec_train/best_accuracy  Global.save_inference_dir=./inference/ch_PP-OCRv3_rec/
```

**注意：**如果是在自己的数据集上训练的模型，并且调整了中文字符的字典文件，请注意修改配置文件中的`character_dict_path`为自定义字典文件。

转换成功后，在目录下有三个文件：

```
inference/en_PP-OCRv3_rec/
    ├── inference.pdiparams         # 识别inference模型的参数文件
    ├── inference.pdiparams.info    # 识别inference模型的参数信息，可忽略
    └── inference.pdmodel           # 识别inference模型的program文件
```

- 自定义模型推理

  如果训练时修改了文本的字典，在使用inference模型预测时，需要通过`--rec_char_dict_path`指定使用的字典路径，更多关于推理超参数的配置与解释，请参考：[模型推理超参数解释教程](https://gitee.com/paddlepaddle/PaddleOCR/blob/release/2.6/doc/doc_ch/inference_args.md)。

  ```
  python3 tools/infer/predict_rec.py --image_dir="./doc/imgs_words_en/word_336.png" --rec_model_dir="./your inference model" --rec_image_shape="3, 48, 320" --rec_char_dict_path="your text dict path"
  ```

# 从一个服务器登录到另一个服务器

例：

```
ssh root@192.168.0.12
```

# 从一个服务器传输文件到另一个服务器

首先两台服务器必须是可以ping通
1、复制文件
格式：
scp 目录/文件名.文件格式 目标服务器用户名@ip地址：目标服务器目录
例：

```
scp /backup/test/md3/export.sh iainst11@10.22.137.11:/ssx/dev/md
```

2、复制目录（包括目录下的文件）

```
scp -r /backup/test/md3 iainst11@10.22.137.11:/ssx/dev/md

scp -P port filename root@ip:/xxx/xxx
```



# curl命令

## 1、发送GET请求

```bash
curl URL
curl URL?a=1&b=nihao
```

## 2、发送POST请求

```bash
curl -X POST -d 'a=1&b=nihao' URL
```

## 3、发送json格式请求：

```bash
curl -H "Content-Type: application/json" -X POST -d '{"abc":123,"bcd":"nihao"}' URL
curl -H "Content-Type: application/json" -X POST -d @image.json http://127.0.0.1:8866/predict/ocr_system
```

其中，**-H**代表header头，**-X**是指定什么类型请求(POST/GET/HEAD/DELETE/PUT/PATCH)，**-d**代表传输什么数据。这几个是最常用的。

查看所有curl命令： man curl或者curl -h
请求头：H,A,e
响应头：I,i,D
cookie：b,c,j
传输：F(POST),G(GET),T(PUT),X
输出：o,O,w
断点续传：r
调试：v,--trace,--trace-ascii,--trace-time



# pdserving模型转换

```bash
python -m paddle_serving_client.convert --dirname /opt/paddle/PaddleOCR/inference/my_det/ \
                                         --model_filename inference.pdmodel          \
                                         --params_filename inference.pdiparams       \
                                         --serving_server ./my_det_serving/ \
                                         --serving_client ./my_det_client/
```

启动服务可运行如下命令：

```
# 启动服务，运行日志保存在log.txt
python3 web_service.py &>log.txt &
```

```vim
# 启动服务，运行日志保存在log.txt
nohup python3 -u web_service.py > log.log 2>&1 &
```

 docker run --privileged=true --gpus all -it --name ppocr  -v /opt/ppocr/service:/opt/ppocr/service -p 8866:8866 -d ppocr:1.1 /bin/bash

docker: Error response from daemon: could not select device driver "" with capabilities: [[gpu]].

# 使用GPU报错

```
Traceback (most recent call last):
  File "/root/.paddlehub/modules/ocr_system/module.py", line 55, in _initialize
    _places = os.environ["CUDA_VISIBLE_DEVICES"]
  File "/usr/lib/python3.7/os.py", line 681, in __getitem__
    raise KeyError(key) from None
KeyError: 'CUDA_VISIBLE_DEVICES'

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/usr/local/bin/hub", line 8, in <module>
    sys.exit(execute())
  File "/usr/local/lib/python3.7/dist-packages/paddlehub/commands/utils.py", line 78, in execute
    status = 0 if com['_entry']().execute(sys.argv[idx:]) else 1
  File "/usr/local/lib/python3.7/dist-packages/paddlehub/commands/serving.py", line 352, in execute
    self.start_serving()
  File "/usr/local/lib/python3.7/dist-packages/paddlehub/commands/serving.py", line 245, in start_serving
    self.start_single_app_with_args()
  File "/usr/local/lib/python3.7/dist-packages/paddlehub/commands/serving.py", line 221, in start_single_app_with_args
    self.preinstall_modules()
  File "/usr/local/lib/python3.7/dist-packages/paddlehub/commands/serving.py", line 152, in preinstall_modules
    m = hub.Module(**init_args)
  File "/usr/local/lib/python3.7/dist-packages/paddlehub/module/module.py", line 396, in __new__
    **kwargs)
  File "/usr/local/lib/python3.7/dist-packages/paddlehub/module/module.py", line 504, in init_with_name
    user_module._initialize(**kwargs)
  File "/usr/local/lib/python3.7/dist-packages/paddlehub/compat/paddle_utils.py", line 221, in runner
    return func(*args, **kwargs)
  File "/root/.paddlehub/modules/ocr_system/module.py", line 62, in _initialize
    "Environment Variable CUDA_VISIBLE_DEVICES is not set correctly. If you wanna use gpu, please set CUDA_VISIBLE_DEVICES via export CUDA_VISIBLE_DEVICES=cuda_device_id."
RuntimeError: Environment Variable CUDA_VISIBLE_DEVICES is not set correctly. If you wanna use gpu, please set CUDA_VISIBLE_DEVICES via export CUDA_VISIBLE_DEVICES=cuda_device_id.

```

提示要设置“CUDA_VISIBLE_DEVICES”
不知道怎么弄，查找“CUDA_VISIBLE_DEVICES”，找到文章

选择要用的GPU: CUDA_VISIBLE_DEVICES

设置

```
linux:
在~/.bashrc 的最后加上export CUDA_VISIBLE_DEVICES=1，然后source ~/.bashrc
windows:
打开我的电脑环境变量设置的地方，直接添加就行了。
```

修改linux系统时区

```
cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
```

```
为什公你不口家
[
    [
        {
            "err": "公"
        },
        {
            "fix": "么"
        },
        {
            "startIdx": "2"
        },
        {
            "endIdx": "3"
        }
    ],
    [
        {
            "err": "口"
        },
        {
            "fix": "回"
        },
        {
            "startIdx": "5"
        },
        {
            "endIdx": "6"
        }
    ]
]
```

