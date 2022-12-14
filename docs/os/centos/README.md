# 快速上手 CentOS

如果是新手，那么不妨先从虚拟机开始，此处选用 [VirtualBox](https://www.virtualbox.org/wiki/Downloads)。

接着需要准备好 CentOS 的 ISO 文件，此处选用 [CentOS7-1810](https://mirrors.tuna.tsinghua.edu.cn/centos/7.6.1810/isos/x86_64/) 版本。

虚拟机中加载镜像大同小异，可参考[加载 manjaro](/os/manjaro/how-to-install-manjaro-on-virtualbox.html#虚拟机中加载-manjaro) 。

## 在虚拟机中安装 CentOS

启动后会进入安装界面，并出现以下几个选项：

+ Install CentOS 7
+ Test this media & install CentOS 7
+ Troubleshooting（排除故障）
+ Press Tab for full configuration options on menu items

一般直接选中 Install 即可，当然你也可以按下 Tab 键进行额外 [配置](/os/centos/how-to-install-centos-on-virtualbox.html#配置)。

### 1. LOCALIZATION

+ DATE & TIME：修改为 Asia Shanghai；
+ KEYBOARD：默认即可；
+ LANGUAGE SUPPORT：默认即可。

### 2. SOFTWARE

+ INSTALLATION SOURCE：无需改动；
+ SOFTWARE SELECTION：Minimal Install
  + [x] Debugging Tools（调试工具）
  + [x] Compatibility Libraries（兼容库）
  + [x] Development Tools（开发工具）
  + [x] System Administration Tools（管理员工具）

### 3. SYSTEM

+ INSTALLATION DESTINATION：选择 `I will configure partitioning`。

  默认选项是 LVM（逻辑卷管理，动态分配主机磁盘大小），软件实现的动态调整，在高并发状态会导致磁盘性能下降（疑问句？按我所想其功能类似 RAID0 应该不会导致性能下降才对。）;。将其修改为 Standard Partition。

  分区可参考 [Manjaro](/os/manjaro/how-to-install-manjaro-on-virtualbox.html#安装-manjaro) 的手动分区来，不过 Manjaro 是桌面环境会存在一些区别。

+ KDUMP：学习时可关闭；

+ NETWORK & HOST NAME：可在此处查看到之前 tab 修改的网卡命名是否生效了，Host name 改为喜欢的名字即可。

  修改完 Host name，接着点击 Configure 进行配置 <Badge text="勿忘" type="danger"/>：

  1. General：启用 Automatically connect；
  2. IPv4 Settings：Method 修改为 Manual，点击 Add 添加[私有网络](https://zh.wikipedia.org/wiki/%E4%B8%93%E7%94%A8%E7%BD%91%E7%BB%9C)，配置对应的 Address、Netmask、Gateway、DNS。如果你对此不了解，可以还原为默认配置（Automatic DHCP），自动分配一个 IP 地址给你。

  启用 OFF 改为 ON 即可。

+ SECURITY POLICY：暂时默认。

接着点击同意，开始安装即可。在安装期间可以配置 root 密码，及创建新的用户账号及密码。
最后重启即可成功。

## 初始化 CentOS

### 更新源

CentOS 安装完毕，首先应该修改源，并更新到最新的系统。此处选用阿里云的源，[清华源](https://mirrors.tuna.tsinghua.edu.cn/)，[中科大源](http://mirrors.ustc.edu.cn/)也可。

```bash
# 安装工具 wget 或者 curl
yum install wget -y

# 备份源
mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.bak

# 下载阿里云源
curl -o /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo
curl -o /etc/yum.repos.d/epel.repo https://mirrors.aliyun.com/repo/epel-7.repo

# 清理、生成缓存
yum clean cache
yum makecache
```

### 更新系统

更换源之后就可以使用国内的镜像了，否则下载速度太慢。

```bash
yum update -y
```

### 常用包组

一般在安装系统时需要安装的软件包组。

```bash
yum groups mark convert

# 查看所有包组名称
yum grouplist

# 如果缺乏部分包组，指定该包组
yum groupinstall "Cinnamon" -y
```

### 常用工具

更新完系统后还需要一些常用的工具，使用 Ubuntu Server 的时候同样需要安装，只不过指令换为 `apt install`。

```bash
yum install tree nmap dos2unix lrzsz nc lsof wget tcpdump htop iftop iotop sysstat nethogs psmisc net-tools bash-completion vim-enhanced -y
```

## 修改 CentOS 配置

### 1. 网卡名 ethX

CentOS7 之前的 ethX 数字编号的网卡命名往往不一定准确对应网卡接口，所以 CentOS7 （enps）就解决了该问题，不过这会影响以往的习惯，所以还可以将命名改回来。

可以通过两种形式进行修改：

1. 形式一，需要在安装系统时，光标移至 Install CentOS 7 上，按下 tab 后追加：

   ```bash
   # 需要注意和之前的内容有一个空格
   net.ifnames=0 biosdevname=0
   ```

2. [形式二](/os/centos/modify-the-network-named-eth.html)。
