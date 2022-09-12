## 基本运行原理

**Nginx多进程模型和基本请求流程**

![image-20220910171916479](https://minboo-blog-img.oss-cn-guangzhou.aliyuncs.com/img/image-20220910171916479.png)

**Nginx的进程是使用经典的「Master-Worker」模型，Nginx在启动后，会有一个master（主进程）进程和多个worker（子进程）进程，主进程用于协调子进程。**

- **master**进程主要用来管理worker进程，包含：接收来自外界的信号，向各worker进程发送信号，监控worker进程的运行状态，当worker进程退出后(异常情况下)，会自动重新启动新的worker进程。

- **worker**进程主要处理基本的网络事件，多个worker进程之间是对等的，他们同等竞争来自客户端的请求，各进程互相之间是独立的。一个请求，只可能在一个worker进程中处理，一个worker进程，不可能处理其它进程的请求。worker进程的个数是可以设置的，一般会设置与机器cpu核数一致，这里面的原因与nginx的进程模型以及事件处理模型是分不开的。

