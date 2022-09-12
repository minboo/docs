## 前提准备

### 安装

注意：安装虚拟机是为了在本地虚拟化Linux环境，便于学习。对应了实际应用场景中，企业的云服务器

- 本地安装虚拟机Vmware、Virtualbox、Parallls

  有云服务器也可在服务器上操作

  本次使用Vmware16，软件安装过程省略

- 系统CentOS 7

  [官网](https://www.centos.org/download/)下载适合自己的版本
  
  ![image-20220910151913324](https://minboo-blog-img.oss-cn-guangzhou.aliyuncs.com/img/image-20220910151913324.png)
  可随意选择一个镜像站下载
  ![image-20220910152123490](https://minboo-blog-img.oss-cn-guangzhou.aliyuncs.com/img/image-20220910152123490.png)
  
  ![image-20220910152405332](https://minboo-blog-img.oss-cn-guangzhou.aliyuncs.com/img/image-20220910152405332.png)
  
  | 版本           | 说明                                                         |
  | -------------- | ------------------------------------------------------------ |
  | DVD ISO        | 标准安装版                                                   |
  | Everything ISO | 对完整版安装盘的软件进行补充，集成所有软件。(包含[centos7](https://so.csdn.net/so/search?q=centos7&spm=1001.2101.3001.7020)的一套完整的软件包，可以用来安装系统或者填充本地镜像) |
  | Minimal ISO    | 精简版，自带的软件最少                                       |
  | NetInstall ISO | 网络安装镜像(从网络安装或者救援系统)                         |
  
- 在虚拟机中安装CentOS镜像，安装步骤省略

    ![image-20220910153032582](https://minboo-blog-img.oss-cn-guangzhou.aliyuncs.com/img/image-20220910153032582.png)

    安装成功后重启系统登录

    ![image-20220910154037280](https://minboo-blog-img.oss-cn-guangzhou.aliyuncs.com/img/image-20220910154037280.png)

    <img src="https://minboo-blog-img.oss-cn-guangzhou.aliyuncs.com/img/image-20220910154207899.png"  />

### 配置虚拟机网络

```shell
ip addr #查看网络
```

可以看到两个网卡 `lo`和`ens33`（lo是本地网卡）

![image-20220910154354632](https://minboo-blog-img.oss-cn-guangzhou.aliyuncs.com/img/image-20220910154354632.png)

使用vi编辑器打开`ens33`网络的配置文件，修改启动配置（如何使用vi编辑器：`i`修模式改数据，`esc`退出，`:wq`保存退出vi编辑器）

```shell
vi /etc/sysconfig/network-scripts/ifcfg-ens33
```

![image-20220910154720589](https://minboo-blog-img.oss-cn-guangzhou.aliyuncs.com/img/image-20220910154720589.png)

重启网络

```text
systemctl restart network
```

就能看到ens33被分配在了网络IP（192.168.75.136），但是这个网路是动态分配的内网地址，重启后会可能会变化。

![image-20220910154905916](https://minboo-blog-img.oss-cn-guangzhou.aliyuncs.com/img/image-20220910154905916.png)

### 克隆虚拟机

两种克隆方式，选择哪种都可以将前面配置的虚拟机克隆出来新的

![image-20220910155137275](https://minboo-blog-img.oss-cn-guangzhou.aliyuncs.com/img/image-20220910155137275.png)

### 使用SSH连接虚拟机

使用SSH可以方便的在本地连接远程云服务器（对应的就是我们这里装在本地的虚拟机），对其进行

SSH软件很多，比如Xshell，他们的使用都大同小异，我这里使用的是Mac上的Termius，

**新建连接**

![image-20220910155322683](https://minboo-blog-img.oss-cn-guangzhou.aliyuncs.com/img/image-20220910155322683.png)

主机地址就是云服务器的公网地址，对应就是上面本地虚拟机ens33这个网卡的地址，与公网地址不同，这个地址是内网地址，每次重启都会动态分配，所以我们使用这个地址链接上

![image-20220910155529771](https://minboo-blog-img.oss-cn-guangzhou.aliyuncs.com/img/image-20220910155529771.png)

**修改固定IP**

这一步仅仅是因为，ens33这个网卡的地址，每次重启都会动态分配，所以我们使用这个地址每次都需要修改SSH工具的“主机名”，所以，我们改成固定的。（如果你使用的是云服务器，使用公网IP连接，这个公网IP是不会变化的，就不用这一步）

还是进入ens33网卡的配置文件

```shell
vi /etc/sysconfig/network-scripts/ifcfg-ens33
```

![image-20220910155943952](https://minboo-blog-img.oss-cn-guangzhou.aliyuncs.com/img/image-20220910155943952.png)

增加一下配置

```shell
IPADDR=192.168.75.101 # 设置IP
NETMASK=225.225.225.0 #子网掩码
GATEWAY=192.168.75.2 #网关
DNS1=8.8.8.8 # DNS服务器地址
```

修改文件中BOOTPROTO字段为static后，后IP就固定为了IPADDR的值

```shell
BOOTPROTO=static #原来值是dhcp，就是动态获取ip的一个协议
```
