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
