---
description: Nginx
tags:
  - nginx
---
# Nginx

![image-20220910174009085](https://minboo-blog-img.oss-cn-guangzhou.aliyuncs.com/img/image-20220910174009085.png)

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

## Nginx介绍

    - Nginx开源版 http://nginx.org/en/
    
      官方原始的Nginx版本
    
    - Nginx plus商业版
    
      开箱即用，集成了大量功能
    
    - Open Resty https://openresty.org/cn/
    
      OpenResty是一个基于Nginx与 Lua 的高性能 Web 平台，其内部集成了大量精良的 Lua 库、第三方模块以及大多数的依赖项。**更适用于需要大量二次开发的场景，有极强的扩展性**
    
    - Tengine https://tengine.taobao.org/
    
      由淘宝网发起的Web服务器项目。它在[Nginx (opens new window)](http://nginx.org/)的基础上，针对大访问量网站的需求，添加了很多高级功能和特性。Tengine的性能和稳定性已经在大型的网站如[淘宝网 (opens new window)](http://www.taobao.com/)，[天猫商城 (opens new window)](http://www.tmall.com/)等得到了很好的检验。相比于Open Resty，扩展性不够强，但是能够满足绝多数使用场景

## Nginx安装

- **下载Nginx包**

  [官网下载地址](http://nginx.org/en/download.html)

  ![image-20220910161044819](https://minboo-blog-img.oss-cn-guangzhou.aliyuncs.com/img/image-20220910161044819.png)

  使用FTP工具将文件上传到虚拟机中

  - 解压Nginx包，并安装

    ```shell
    tar -zxvf  nginx-1.23.1.tar.gz #解压到当前目录
    
    cd nginx-1.23.1 #进入解压后的文件夹
    ls #文件夹中的文件：auto     CHANGES.ru  configure  html     man     src CHANGES  conf        contrib    LICENSE  README
    ```

    安装依赖库

    ```shell
    #安装C编译器
    yum install -y gcc
    
    #安装pcre库
    yum install -y pcre pcre-devel
    
    #安装zlib
    yum install -y zlib zlib-devel
    ```

    安装

    ```shell
    cd nginx-1.23.1
    ./configure --prefix=/usr/local/nginx #使用prefix选项指定安装的目录
    make
    make install
    ```

    启动

    ```shell
    cd /usr/local/nginx/sbin
    
    ls # 里面是一个nginx的可执行文件
    
    ./nginx # 启动这个可执行
    ```

    **关于防火墙**

    关闭防火墙

    ```shell
    systemctl stop firewalld.service
    ```

    禁止防火墙开机启动

    ```shell
    systemctl disable firewalld.service 
    ```

    放行端口

    ```shell
    firewall-cmd --zone=public --add-port=80/tcp --permanent 
    ```

    重启防火墙

    ```shell
    firewall-cmd --reload
    systemctl restart firewalld
    ```

    **补充Nginx命令**

    ```shell
    ./nginx -s stop #快速停止
    ./nginx -s quit #完成已接受的请求后，停止
    ./nginx -s reload #重新加载配置
    ./nginx -t #检查nginx配置是否正确
    ```

    查看nginx状态

    ```text
    ps -ef|grep nginx
    ```

    启动时：

    ![image-20220501205303265](https://hedaodao-1256075778.cos.ap-beijing.myqcloud.com/Nginx/image-20220501205303265.png)

    停止时：

    ![image-20220501205333304](https://hedaodao-1256075778.cos.ap-beijing.myqcloud.com/Nginx/image-20220501205333304.png)

  - 注册系统服务

    通过系统服务的方式启动nginx

    ```text
    vi /usr/lib/systemd/system/nginx.service
    ```

    ```shell
    [Unit] 
    Description=nginx
    After=network.target remote-fs.target nss-lookup.target
    
    [Service]
    Type=forking
    PIDFile=/usr/local/nginx/logs/nginx.pid
    ExecStartPre=/usr/local/nginx/sbin/nginx -t -c /usr/local/nginx/conf/nginx.conf
    ExecStart=/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf
    ExecReload=/usr/local/nginx/sbin/nginx -s reload
    ExecStop=/usr/local/nginx/sbin/nginx -s stop
    ExecQuit=/usr/local/nginx/sbin/nginx -s quit 
    PrivateTmp=true
       
    [Install]   
    WantedBy=multi-user.target  # 多用户
    ```

    重新加载系统服务

    ```shell
    systemctl daemon-reload
    ```

    启动服务

    ```shell
    systemctl start nginx.service 
    ```

    开机启动

    ```shell
    systemctl enable nginx.service
    ```

    配置软链接，以便全局使用nginx命令：

    ```shell
    ln -s /usr/local/nginx/sbin/nginx /usr/sbin/nginx
    ```

## Nginx 目录

  进入Nginx的主目录我们可以看到这些文件夹

  ```shell
  [root@localhost nginx]# ls
  client_body_temp  conf  fastcgi_temp  html  logs  proxy_temp  sbin  scgi_temp  uwsgi_temp
  ```

  其中这几个文件夹在刚安装后是没有的，主要用来存放运行过程中的临时文件

  ```shell
  client_body_temp fastcgi_temp proxy_temp scgi_temp
  ```

  **conf** 用来存放配置文件相关

  **html** 用来存放静态文件的默认目录 html、css等

  **sbin** nginx的主程序

  **logs** 文件夹用于存放日志信息

  ```shell
  [root@localhost ~]# tree /usr/local/nginx
  /usr/local/nginx
  ├── client_body_temp                 # POST 大文件暂存目录
  ├── conf                             # Nginx所有配置文件的目录
  │   ├── fastcgi.conf                 # fastcgi相关参数的配置文件
  │   ├── fastcgi.conf.default         # fastcgi.conf的原始备份文件
  │   ├── fastcgi_params               # fastcgi的参数文件
  │   ├── fastcgi_params.default       
  │   ├── koi-utf
  │   ├── koi-win
  │   ├── mime.types                   # 媒体类型
  │   ├── mime.types.default
  │   ├── nginx.conf                   #这是Nginx默认的主配置文件，日常使用和修改的文件
  │   ├── nginx.conf.default
  │   ├── scgi_params                  # scgi相关参数文件
  │   ├── scgi_params.default  
  │   ├── uwsgi_params                 # uwsgi相关参数文件
  │   ├── uwsgi_params.default
  │   └── win-utf
  ├── fastcgi_temp                     # fastcgi临时数据目录
  ├── html                             # Nginx默认站点目录
  │   ├── 50x.html                     # 错误页面优雅替代显示文件，例如出现502错误时会调用此页面
  │   └── index.html                   # 默认的首页文件
  ├── logs                             # Nginx日志目录
  │   ├── access.log                   # 访问日志文件
  │   ├── error.log                    # 错误日志文件
  │   └── nginx.pid                    # pid文件，Nginx进程启动后，会把所有进程的ID号写到此文件
  ├── proxy_temp                       # 临时目录
  ├── sbin                             # Nginx 可执行文件目录
  │   └── nginx                        # Nginx 二进制可执行程序
  ├── scgi_temp                        # 临时目录
  └── uwsgi_temp                       # 临时目录
  
  ```

## 基本运行原理

**Nginx多进程模型和基本请求流程**

![image-20220910171916479](https://minboo-blog-img.oss-cn-guangzhou.aliyuncs.com/img/image-20220910171916479.png)

**Nginx的进程是使用经典的「Master-Worker」模型，Nginx在启动后，会有一个master（主进程）进程和多个worker（子进程）进程，主进程用于协调子进程。**

- **master**进程主要用来管理worker进程，包含：接收来自外界的信号，向各worker进程发送信号，监控worker进程的运行状态，当worker进程退出后(异常情况下)，会自动重新启动新的worker进程。

- **worker**进程主要处理基本的网络事件，多个worker进程之间是对等的，他们同等竞争来自客户端的请求，各进程互相之间是独立的。一个请求，只可能在一个worker进程中处理，一个worker进程，不可能处理其它进程的请求。worker进程的个数是可以设置的，一般会设置与机器cpu核数一致，这里面的原因与nginx的进程模型以及事件处理模型是分不开的。

## Nginx配置

后面学习Nginx配置，每次修改配置文件，一定要重载才能生效

```shell
systemctl reload nginx
```

### 简化版的nginx.conf

```shell
worker_processes  1; #允许进程数量，建议设置为cpu核心数或者auto自动检测，注意Windows服务器上虽然可以启动多个processes，但是实际只会用其中一个

events {
    worker_connections  1024; # 单个进程最大连接数（最大连接数=连接数*进程数）
}


http {
    include       mime.types; #include是引入关键字，这里引入了mime.types这个配置文件（同在conf目录下，mime.types是用来定义，请求返回的content-type）
    default_type  application/octet-stream; #mime.types未定义的，使用默认格式application/octet-stream

    sendfile        on; #sendfile指令指定nginx是否调用sendfile 函数（zero copy 方式）来输出文件，对于普通应用，必须设为on。如果用来进行下载等应用磁盘IO重负载应用，可设置为off，以平衡磁盘与网络IO处理速度。
    
    keepalive_timeout  65; #长连接超时时间，单位是秒
 
 #一个nginx可以启用多个server（虚拟服务器）
    server {
        listen       80;#监听端口80
        server_name  localhost;  #接收的域名

        location / { 
            root   html; #根目录指向html目录
            index  index.html index.htm; #域名/index 指向 index.html index.htm文件
        }

        error_page   500 502 503 504  /50x.html; # 服务器错误码为500 502 503 504，转到"域名/50x.html"
        location = /50x.html {# 指定到html文件夹下找/50x.htm
            root   html;
        }

    }
}
```

### 最小配置

**worker_processes**

`worker_processes 1;`默认为1，表示开启一个业务进程

**worker_connections**

`worker_connections 1024;`单个业务进程可接受连接数

**include mime.types;**

`include mime.types;` 引入http mime类型

**default_type application/octet-stream;**

`default_type application/octet-stream;` 如果mime类型没匹配上，默认使用二进制流的方式传输。

**sendfile on;**

`sendfile on;` 使用linux的 sendfile(socket, file, len) 高效网络传输，也就是数据0拷贝。 未开启sendfile

**sendfile**

打开sendfile，用户请求的数据不用再加载到nginx的内存中，而是直接发送

![image-20220502113913235](https://minboo-blog-img.oss-cn-guangzhou.aliyuncs.com/img/image-20220502113913235.png)

### Nginx配置使用场景

修改nginx配置文件后，记得重新加载nginx

```text
systemctl reload nginx
```

**不同二级域名，映射到不同静态网页**

可以写多个server字段，从前向后匹配，先匹配到哪个就用哪个

用户访问`aa.minboo.cn`，就会走到第一个server配置；`bb.minboo.cn`走到第二个配置

```shell
 http {
   #....其他属性
   server {
        listen       80;
        server_name  aa.minboo.cn;

        location / { 
            root   html/aa; 
            index  index.html index.htm;
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
  }

   server {
        listen       80;
        server_name  bb.minboo.cn;

        location / { 
            root   html/bb; 
            index  index.html index.htm;
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
  }
}
```

**不同域名，映射到同一静态页面**

**server_name**

- 可以写多个，用空格分开
- 使用通配符（*）
- 使用正则表达式（<https://blog.csdn.net/yangyelin/article/details/112976539>）

```shell
http{   
   server {
        listen       80;
        server_name  *.minboo.cn  ~^[0-9]+\.minboo\.cn$; # "\."是转译"."

        location / { 
            root   html/aa; 
            index  index.html index.htm;
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
  }
}
```

## 反向代理与负载均衡

**反向代理**：这种代理方式叫做，隧道代理。有性能瓶颈，因为所有的数据都经过Nginx，所以Nginx服务器的性能至关重要

![image-20220502173846436](https://minboo-blog-img.oss-cn-guangzhou.aliyuncs.com/img/image-20220502173846436.png)

**负载均衡**：把请求，按照一定算法规则，分配给多台业务服务器（即使其中一个坏了/维护升级，还有其他服务器可以继续提供服务）

![image-20220502174023144](https://minboo-blog-img.oss-cn-guangzhou.aliyuncs.com/img/image-20220502174023144.png)

### 反向代理

#### 使用proyx_pass进行代理配置

启用proxy_pass，root和index字段就会失效

proxy_pass后的地址必须写完整 `http://xxx`，不支持https

当访问localhost时（Nginx服务器），网页打开的是`http://xxx`（应用服务器），网页地址栏写的还是localhost

```shell
http{   
  server {
        listen       80;
        server_name  localhost;

        location / { 
         proxy_pass http://xxx;
            #root   html/test; 
            #index  index.html index.htm;
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
 }
}
```

可以把配置修改成如下，就会反向代理到百度

```shell
http{   
  server {
        listen       80;
        server_name  localhost;

        location / { 
         proxy_pass http://baidu.com;
            #root   html/test; 
            #index  index.html index.htm;
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
 }
}
```

### 负载均衡

**【轮询模式】**

使用`upstream`定义一组地址【在server字段下】 upstream后的别名可随意定义，但是proxy_pass处需要和此别名一致

访问localhost，访问都会代理到`192.168.75.101:80`和`192.168.75.103:80`这两个地址之一，每次访问这两个地址轮着切换（后面讲到，因为默认权重相等）

```shell
http{
 upstream httpds{ 
  server 192.168.75.101:80; #如果是80端口，可以省略不写
  server 192.168.75.103:80;
 }
 server {
        listen       80;
        server_name  localhost;

        location / { 
         proxy_pass http://httpds;
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
 }
}
```

#### 负载均衡策略

- 轮询：默认算法按时间顺序逐一分配到不同的后端服务器;

- weight：权重

- down：当前server暂不参与负载均衡
- backup : 预留的备份服务器； 其它所有的非backup机器down或者忙的时候，请求backup机器
- ip_hash：为每一个请求访问的IP的hash结果分配，可以将来自一个IP的固定访问一个后端服务器
- url_hash：需要安装模块安装访问的URL的hash结果来分配，这样每个URL定向到同一个后端服务器
- least_conn：按照某台机器最少连接数的进行分配访问
- hash关键数值：hash 自定义 KEY

**【轮询**】

使用`upstream`定义一组地址【在server字段下】 upstream后的别名可随意定义，但是proxy_pass处需要和此别名一致

访问localhost，访问都会代理到`192.168.75.101:80`和`192.168.75.103:80`这两个地址之一，每次访问这两个地址轮着切换（后面讲到，因为默认权重相等）

```shell
http{
 upstream httpds{ 
  server 192.168.75.101:80; #如果是80端口，可以省略不写
  server 192.168.75.103:80;
 }
 server {
        listen       80;
        server_name  localhost;

        location / { 
         proxy_pass http://httpds;
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
 }
}
```

**weight：默认为1.weight越大，负载的权重就越大【权重模式】**

访问使用哪个地址的权重，weigth的数值越高表示权重越高

```text
upstream httpds{
    server 192.168.75.101:80 weight=10;
    server 192.168.75.103:80 weight=40;
    server 192.168.75.104:80 weight=80;
}
```

**down：表示当前的server暂时不参与负载**

权重后面加down的表示不参与负载均衡，相当于下线

```text
upstream httpds{
 server 192.168.75.101:80 weight=10;
 server 192.168.75.103:80 weight=40 down;
 server 192.168.75.104:80 weight=80;
}
```

**backup： 其它所有的非backup机器down或者忙的时候，请求backup机器**

如果`192.168.75.104:80`出现故障，无法提供服务，就用使用backup的这个机器

正常情况下不会使用`192.168.75.101`，只有当`192.168.75.104`发生故障时才会使用该服务器

```text
upstream httpds{
 server 192.168.75.101:80 weight=10 backup;
 server 192.168.75.103:80 weight=40 down;
 server 192.168.75.104:80 weight=80;
}
```

#### 其他负载均衡策略（不常用）

【**ip_hash**】

根据客户端的ip地址转发同一台服务器，可以保持会话

**【least_conn】**

最少连接访问

**【url_hash】**

根据用户访问的url定向转发请求

**【fair】**

根据后端服务器响应时间转发请求

## 动静分离

> 为了提高网站的响应速度，减轻程序服务器（Tomcat，Jboss等）的负载，对于静态资源，如图片、js、css等文件，可以在反向代理服务器中进行缓存，这样浏览器在请求一个静态资源时，代理服务器就可以直接处理，而不用将请求转发给后端服务器。对于用户请求的动态文件，如servlet、jsp，则转发给Tomcat，Jboss服务器处理，这就是动静分离。即动态文件与静态文件的分离。

### 动静分类原理

<img src="https://minboo-blog-img.oss-cn-guangzhou.aliyuncs.com/img/1a28235590b24a13cef2173e4ce55c7a.webp" alt="img" style="zoom: 50%;" />

动静分离可通过location对请求url进行匹配，将网站静态资源（HTML，JavaScript，CSS，img等文件）与后台应用分开部署，提高用户访问静态代码的速度，降低对后台应用访问。通常将静态资源放到nginx中，动态资源转发到tomcat服务器中。

![image.png](https://minboo-blog-img.oss-cn-guangzhou.aliyuncs.com/img/1650505887062-47f2f7d3-d565-4184-9dee-5d8a2651ef53.png)

**例子：**

- 如果请求的资源地址是`location/`，`/`的优先级比较低，如果下面的location没匹配到，就会走<http://192.168.75.104:8080>这个地址的机器
- 如果请求的资源地址是`location/css/*`，就会被匹配到nginx的html目录下的css文件夹中（我们把css静态资源放在这个位置）

```shell
server {
    listen       80;
    server_name  localhost;

    location / { # /的优先级比较低，如果下面的location没匹配到，就会走http://xxx这个地址的机器
     proxy_pass http://192.168.75.104:8080;
    }

    location /css {  # root指的是html，location/css指的是root下的css，所以地址就是html/css
     root html;
     index  index.html index.htm;
    }

    error_page   500 502 503 504  /50x.html;
     location = /50x.html {
     root   html;
    }
}
```

**使用正则**

```shell
location ~*/(js|css|img){
    root html;
    index  index.html index.htm;
}
```

### location匹配顺序

- 多个正则location直接按书写顺序匹配，成功后就不会继续往后面匹配

- 普通（非正则）location会一直往下，直到找到匹配度最高的（最大前缀匹配）

- 当普通location与正则location同时存在，如果正则匹配成功,则不会再执行普通匹配

- 所有类型location存在时，“=”匹配 > “^~”匹配 > 正则匹配 > 普通（最大前缀匹配）

## URL重写（URLRewrite）

```shell
rewrite是URL重写的关键指令，根据regex（正则表达式）部分内容，重定向到replacement，结尼是flag标记。

rewrite    <regex>   <replacement>  [flag];
关键字    正则    替代内容     flagt标记

正则：per1森容正则表达式语句进行规则匹配
替代内容：将正则匹配的内容替换成replacement

flag标记说明：
last  #本条规则匹配完成后，继续向下匹配新的1ocation URI规则
break #本条规则匹配完成即终止，不再匹配后面的任何规则

redirect #返回302临重定向，游览器地址会显示跳转后的URL地址
permanent #返回301永久重定向，测览器地址栏会显示跳转后的URL地址
```

浏览器地址栏访问 `xxx/123.html`实际上是访问`xxx/index.jsp?pageNum=123`

```shell
server {
    listen       80;
     server_name  localhost;

    location / {
     // URL重写
     rewrite ^/([0-9]+).html$ /index.jsp?pageNum=$1  break;
     proxy_pass http://xxx;
    }


    error_page   500 502 503 504  /50x.html;
     location = /50x.html {
     root   html;
    }
}
```

## 负载均衡+URLRewirte

![image-20220503121135171](https://minboo-blog-img.oss-cn-guangzhou.aliyuncs.com/img/image-20220503121135171.png)

上图中，应用服务器，不能直接被外网访问到，只能通过Nginx服务器进行访问（使用proxy_pass），这时候这台Nginx服务器就成为了网关服务器（承担入口的功能）

所以，我们启动应用服务器的防火墙，设置其只能接受这台Nginx服务器的请求

此前我们从`192.168.75.101`Nginx服务器反向代理到`192.168.75.104`Tomcat服务器

**开启被反向代理服务器防火墙**

```bash
systemctl start firewalld
```

**重载规则**

```bash
firewall-cmd --reload
```

**查看已配置规则**

```bash
firewall-cmd --list-all
```

**添加rich规则，添加指定端口和ip访问**

```bash
firewall-cmd --permanent --add-rich-rule="rule family="ipv4" source address="192.168.75.101" port protocol="tcp" port="8080" accept" #添加指定端口和ip访问，此条命令表示允许192.168.75.101访问当前服务器的8080端口
```

**移除rich规则**

```shell
firewall-cmd --permanent --remove-rich-rule="rule family="ipv4" source address="192.168.75.101" port port="8080" protocol="tcp" accept"
```

**重启**

移除和添加规则都要重启才能生效

```shell
firewall-cmd --reload
```

**查看所有规则**

```shell
firewall-cmd --list-all #所有开启的规则
```
