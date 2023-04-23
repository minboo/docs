(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{309:function(a,t,s){"use strict";s.r(t);var e=s(8),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"使用-docker-搭建-etcd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-docker-搭建-etcd"}},[a._v("#")]),a._v(" 使用 Docker 搭建 ETCD")]),a._v(" "),t("h2",{attrs:{id:"etcd-基础概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#etcd-基础概念"}},[a._v("#")]),a._v(" ETCD 基础概念")]),a._v(" "),t("ul",[t("li",[a._v("Raft：etcd 所采用的保证分布式系统强一致性的算法")]),a._v(" "),t("li",[a._v("Node：一个 Raft 状态实例机")]),a._v(" "),t("li",[a._v("Member：一个 etcd 实例。它管理着一个 Node，并且可以为客户端请求提供服务")]),a._v(" "),t("li",[a._v("Cluster：由多个 Member 构成可以协同工作的 etcd 集群")]),a._v(" "),t("li",[a._v("Peer：对同一个 etcd 集群中的另外一个 Member 的称呼")]),a._v(" "),t("li",[a._v("Client：向 etcd 集群发送 HTTP 请求的客户端")]),a._v(" "),t("li",[a._v("WAL：预写式日志，etcd 用于持久化存储的日志格式")]),a._v(" "),t("li",[a._v("snapshot：etcd 防止 WAL 文件过多而设置的快照，存储 etcd 数据状态")]),a._v(" "),t("li",[a._v("Proxy：etcd 的一种模式，为 etcd 集群提供反向代理服务")]),a._v(" "),t("li",[a._v("Leader：Raft 算法中通过竞选而产生的处理所有数据的节点")]),a._v(" "),t("li",[a._v("Follower：竞选失败的节点作为 Raft 中的从属节点，为算法提供强一致性保证")]),a._v(" "),t("li",[a._v("Candidate：当 Follower 超过一定时间接收不到 Leader 的心跳时转变为 Candidate 开始竞选")]),a._v(" "),t("li",[a._v("Term：某个节点成为 Leader 到下一次竞选时间，称为一个 Term")]),a._v(" "),t("li",[a._v("Index：数据项编号。Raft 中通过 Term 和 Index 来定位数据")])]),a._v(" "),t("h2",{attrs:{id:"部署-etcd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署-etcd"}},[a._v("#")]),a._v(" 部署 ETCD")]),a._v(" "),t("p",[a._v("在部署时，不确定其他成员 IP 是常见的，可以使用"),t("a",{attrs:{href:"https://etcd.io/docs/v3.4.0/dev-internal/discovery_protocol/",target:"_blank",rel:"noopener noreferrer"}},[a._v("动态发现"),t("OutboundLink")],1),a._v("的方式解决。")]),a._v(" "),t("h3",{attrs:{id:"准备"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备"}},[a._v("#")]),a._v(" 准备")]),a._v(" "),t("p",[a._v("拉取镜像：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" pull bitnami/etcd:3.4.14\n")])])]),t("p",[a._v("确认 ETCD 节点数量，例如三个：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" https://discovery.etcd.io/new?size"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# https://discovery.etcd.io/fbcc7b00dbd102b74d8daa1781fbb941")]),a._v("\n")])])]),t("p",[a._v("环境变量：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("REGISTRY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("bitnami/etcd\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ETCD_VERSION")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3.4")]),a._v(".14\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("TOKEN")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("etcd-token\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CLUSTER_STATE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("new\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("NAME_1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("etcd-n1\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("NAME_2")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("etcd-n2\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("NAME_3")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("etcd-n3\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("HOST_1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10.0")]),a._v(".0.137\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("HOST_2")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10.0")]),a._v(".0.138\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("HOST_3")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10.0")]),a._v(".0.139\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DISCOVERY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("https://discovery.etcd.io/fbcc7b00dbd102b74d8daa1781fbb941\n")])])]),t("h3",{attrs:{id:"基于-ip-部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基于-ip-部署"}},[a._v("#")]),a._v(" 基于 IP 部署")]),a._v(" "),t("p",[t("code",[a._v("node1")]),a._v("：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" stop etcd "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" etcd\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("THIS_NAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${NAME_1}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("THIS_IP")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${HOST_1}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" etcd "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2379")]),a._v(":2379 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2380")]),a._v(":2380 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--env")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ALLOW_NONE_AUTHENTICATION")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("yes "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--env")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ETCD_LISTEN_CLIENT_URLS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("http://0.0.0.0:2379 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--env")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ETCD_ADVERTISE_CLIENT_URLS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("http://"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${THIS_IP}")]),a._v(":2379 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${REGISTRY}")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${ETCD_VERSION}")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n   etcd "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${THIS_NAME}")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --initial-advertise-peer-urls http://"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${THIS_IP}")]),a._v(":2380 --listen-peer-urls http://0.0.0.0:2380 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n   "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--discovery")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${DISCOVERY}")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n   --initial-cluster-state "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${CLUSTER_STATE}")]),a._v(" --initial-cluster-token "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${TOKEN}")]),a._v("\n")])])]),t("p",[t("code",[a._v("node2")]),a._v("：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" stop etcd "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" etcd\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("THIS_NAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${NAME_2}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("THIS_IP")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${HOST_2}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" etcd "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2379")]),a._v(":2379 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2380")]),a._v(":2380 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--env")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ALLOW_NONE_AUTHENTICATION")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("yes "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--env")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ETCD_LISTEN_CLIENT_URLS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("http://0.0.0.0:2379 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--env")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ETCD_ADVERTISE_CLIENT_URLS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("http://"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${THIS_IP}")]),a._v(":2379 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${REGISTRY}")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${ETCD_VERSION}")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n   etcd "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${THIS_NAME}")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --initial-advertise-peer-urls http://"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${THIS_IP}")]),a._v(":2380 --listen-peer-urls http://0.0.0.0:2380 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n   "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--discovery")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${DISCOVERY}")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n   --initial-cluster-state "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${CLUSTER_STATE}")]),a._v(" --initial-cluster-token "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${TOKEN}")]),a._v("\n")])])]),t("p",[t("code",[a._v("node3")]),a._v("：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" stop etcd "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" etcd\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("THIS_NAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${NAME_3}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("THIS_IP")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${HOST_3}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" etcd "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2379")]),a._v(":2379 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2380")]),a._v(":2380 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--env")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ALLOW_NONE_AUTHENTICATION")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("yes "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--env")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ETCD_LISTEN_CLIENT_URLS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("http://0.0.0.0:2379 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--env")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ETCD_ADVERTISE_CLIENT_URLS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("http://"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${THIS_IP}")]),a._v(":2379 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${REGISTRY}")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${ETCD_VERSION}")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n   etcd "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${THIS_NAME}")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --initial-advertise-peer-urls http://"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${THIS_IP}")]),a._v(":2380 --listen-peer-urls http://0.0.0.0:2380 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n   "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--discovery")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${DISCOVERY}")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n   --initial-cluster-state "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${CLUSTER_STATE}")]),a._v(" --initial-cluster-token "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${TOKEN}")]),a._v("\n")])])]),t("h3",{attrs:{id:"基于-dns-部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基于-dns-部署"}},[a._v("#")]),a._v(" 基于 DNS 部署")]),a._v(" "),t("p",[a._v("编辑 DNS 服务器的 "),t("code",[a._v("/etc/dnsmasq.conf")]),a._v("：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# etcd 动态发现")]),a._v("\nsrv-host"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("_etcd-server._tcp.example.com,etcd1.example.com,2380,0,100\nsrv-host"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("_etcd-server._tcp.example.com,etcd2.example.com,2380,0,100\nsrv-host"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("_etcd-server._tcp.example.com,etcd3.example.com,2380,0,100\n")])])]),t("p",[a._v("再在 "),t("code",[a._v("/etc/dnsmasq.hosts")]),a._v(" 增加解析：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10.0")]),a._v(".0.137 etcd1.example.com\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10.0")]),a._v(".0.138 etcd2.example.com\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10.0")]),a._v(".0.139 etcd3.example.com\n")])])]),t("p",[a._v("在每台服务器上指定 DNS 后验证解析：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("dig")]),a._v(" +noall +answer SRV _etcd-server._tcp.example.com\n")])])]),t("p",[a._v("此处仅以 "),t("code",[a._v("node1")]),a._v(" 示例，注 etcd 新版本"),t("a",{attrs:{href:"https://github.com/etcd-io/etcd/issues/11321",target:"_blank",rel:"noopener noreferrer"}},[a._v("需要 HTTPS"),t("OutboundLink")],1),a._v("，所以切换为旧版：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" stop etcd "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" etcd\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ETCD_VERSION")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3.3")]),a._v(".15\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("THIS_NAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${NAME_1}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("THIS_URLS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("etcd1.example.com\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" etcd "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2379")]),a._v(":2379 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2380")]),a._v(":2380 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--env")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ALLOW_NONE_AUTHENTICATION")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("yes "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--env")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ETCD_DISCOVERY_SRV")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("example.com "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--env")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ETCD_LISTEN_CLIENT_URLS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("http://0.0.0.0:2379 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--env")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ETCD_ADVERTISE_CLIENT_URLS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("http://"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${THIS_URLS}")]),a._v(":2379 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${REGISTRY}")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${ETCD_VERSION}")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n   etcd "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${THIS_NAME}")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --initial-advertise-peer-urls http://"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${THIS_URLS}")]),a._v(":2380 --listen-peer-urls http://0.0.0.0:2380 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n   --initial-cluster-state "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${CLUSTER_STATE}")]),a._v(" --initial-cluster-token "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${TOKEN}")]),a._v("\n")])])]),t("h3",{attrs:{id:"校验结果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#校验结果"}},[a._v("#")]),a._v(" 校验结果")]),a._v(" "),t("p",[a._v("查看集群成员：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v(" etcd etcdctl member list\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 得到")]),a._v("\nc45dc290bba2bf1, started, etcd-n1, http://10.0.0.137:2380, http://10.0.0.137:2379, "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),a._v("\n26788b649bce5709, started, etcd-n2, http://10.0.0.138:2380, http://10.0.0.138:2379, "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),a._v("\n510527ca792cc2da, started, etcd-n3, http://10.0.0.139:2380, http://10.0.0.139:2379, "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),a._v("\n")])])]),t("p",[a._v("查看健康状态：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v(" etcd etcdctl --write-out"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("table "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--endpoints")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"http://10.0.0.137:2379,http://10.0.0.138:2379,http://10.0.0.139:2379"')]),a._v(" endpoint  health\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 得到")]),a._v("\nhttp://10.0.0.138:2379 is healthy: successfully committed proposal: took "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("11")]),a._v(".12227ms\nhttp://10.0.0.139:2379 is healthy: successfully committed proposal: took "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("11")]),a._v(".674569ms\nhttp://10.0.0.137:2379 is healthy: successfully committed proposal: took "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("11")]),a._v(".993285ms\n\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v(" etcd etcdctl --write-out"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("table "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--endpoints")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"http://etcd1.example.com:2379,http://etcd2.example.com:2379,http://etcd3.example.com:2379"')]),a._v(" endpoint  health\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 得到")]),a._v("\n+--------------------------+--------+------------+-------+\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("         ENDPOINT         "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" HEALTH "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("    TOOK    "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" ERROR "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n+--------------------------+--------+------------+-------+\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" http://etcd1.example.com:2379 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("   "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8")]),a._v(".615217ms "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("       "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" http://etcd3.example.com:2379 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("   "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8")]),a._v(".97122ms "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("       "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" http://etcd2.example.com:2379 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("   "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("9")]),a._v(".323943ms "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("       "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n+--------------------------+--------+------------+-------+\n")])])]),t("h2",{attrs:{id:"数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据"}},[a._v("#")]),a._v(" 数据")]),a._v(" "),t("h3",{attrs:{id:"crud"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#crud"}},[a._v("#")]),a._v(" CRUD")]),a._v(" "),t("p",[t("code",[a._v("node1")]),a._v(" 设置：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v(" etcd etcdctl put /testdir/testkey "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Hello world"')]),a._v("\n")])])]),t("p",[t("code",[a._v("node3")]),a._v(" 读取：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v(" etcd etcdctl get /testdir/testkey\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 得到")]),a._v("\n/testdir/testkey\nHello world\n")])])]),t("h3",{attrs:{id:"watch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#watch"}},[a._v("#")]),a._v(" WATCH")]),a._v(" "),t("p",[t("code",[a._v("node2")]),a._v(" 监听：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v(" etcd etcdctl "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("watch")]),a._v(" hi \n")])])]),t("p",[t("code",[a._v("node3")]),a._v(" 设置：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v(" etcd etcdctl put hi shanyuhai\n")])])]),t("p",[t("code",[a._v("node2")]),a._v(" 会得到响应：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("PUT\nhi\nshanyuhai\n")])])]),t("h2",{attrs:{id:"处理问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#处理问题"}},[a._v("#")]),a._v(" 处理问题")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" logs etcd\n")])])]),t("table",[t("thead",[t("tr",[t("th",[a._v("日志")]),a._v(" "),t("th",[a._v("说明")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[t("code",[a._v("health check for peer xxx could not connect: dial tcp IP:2380: getsockopt: connection refused")])]),a._v(" "),t("td",[a._v("无法建立与这个 IP 的 2380 端口进行连接。检查 etcd 容器是否在那个 IP 的主机上运行。")])]),a._v(" "),t("tr",[t("td",[t("code",[a._v("xxx is starting a new election at term x")])]),a._v(" "),t("td",[a._v("etcd 集群已经失去了法定人数，正在尝试建立新的领导者。当大多数运行 etcd 的节点出现故障或无法访问时，可能会发生这种情况。")])]),a._v(" "),t("tr",[t("td",[t("code",[a._v('connection error: desc = "transport: Error while dialing dial tcp 0.0.0.0:2379: i/o timeout"; Reconnecting to {0.0.0.0:2379 0 <nil>}')])]),a._v(" "),t("td",[a._v("主机防火墙阻止了网络通信。")])]),a._v(" "),t("tr",[t("td",[t("code",[a._v("rafthttp: request cluster ID mismatch")])]),a._v(" "),t("td",[a._v("运行着 etcd 实例并记录"),t("code",[a._v("rafthttp: request cluster ID mismatch")]),a._v("的节点正在尝试加入另一个由其他成员构成的集群。应该从集群中删除这个节点，然后重新添加。")])]),a._v(" "),t("tr",[t("td",[t("code",[a._v("rafthttp: failed to find member")])]),a._v(" "),t("td",[a._v("集群状态 ("),t("code",[a._v("/var/lib/etcd")]),a._v(") 包含错误信息，无法加入集群。应该从集群中删除这个节点，并删除状态目录，然后重新添加。")])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);