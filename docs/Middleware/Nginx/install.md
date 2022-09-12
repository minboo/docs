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
