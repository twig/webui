/*
Copyright (c) 2011 BitTorrent, Inc. All rights reserved.

Use of this source code is governed by a BSD-style that can be
found in the LICENSE file.
*/

var LANG_STR =
{
   "CT_MASK1":"Torrent 文件||*.torrent||所有文件 (*.*)||*.*||",
   "DLG_BTN_OK":"确定",
   "DLG_BTN_CANCEL":"取消",
   "DLG_BTN_APPLY":"应用(A)",
   "DLG_BTN_YES":"是",
   "DLG_BTN_NO":"否",
   "DLG_BTN_CLOSE":"关闭(C)",
   "DLG_SETTINGS_00":"设置",
   "DLG_SETTINGS_1_GENERAL_01":"语言设置",
   "DLG_SETTINGS_1_GENERAL_02":"选用语言(L)",
   "DLG_SETTINGS_1_GENERAL_10":"隐私信息",
   "DLG_SETTINGS_1_GENERAL_11":"自动检查更新(C)",
   "DLG_SETTINGS_1_GENERAL_12":"更新到 Beta 版本",
   "DLG_SETTINGS_1_GENERAL_13":"在检测更新时发送匿名信息",
   "DLG_SETTINGS_1_GENERAL_17":"下载任务",
   "DLG_SETTINGS_1_GENERAL_18":"未完成文件添加 .!ut 后缀(A)",
   "DLG_SETTINGS_1_GENERAL_19":"预先分配磁盘空间(R)",
   "DLG_SETTINGS_1_GENERAL_20":"任务活动时避免进入待机状态(E)",
   "DLG_SETTINGS_2_UI_01":"显示选项",
   "DLG_SETTINGS_2_UI_02":"删除 Torrent 时要求确认(O)",
   "DLG_SETTINGS_2_UI_03":"删除 Tracker 时要求确认(E)",
   "DLG_SETTINGS_2_UI_04":"退出时显示确认对话框(H)",
   "DLG_SETTINGS_2_UI_05":"交替显示列表背景色(L)",
   "DLG_SETTINGS_2_UI_06":"在标题栏显示当前速度(T)",
   "DLG_SETTINGS_2_UI_07":"在状态栏显示速度限制(O)",
   "DLG_SETTINGS_2_UI_15":"添加任务时",
   "DLG_SETTINGS_2_UI_16":"不要自动开始下载(D)",
   "DLG_SETTINGS_2_UI_17":"激活程序窗口(A)",
   "DLG_SETTINGS_2_UI_18":"显示添加文件窗口(H)",
   "DLG_SETTINGS_2_UI_19":"双击操作",
   "DLG_SETTINGS_2_UI_20":"做种中的 Torrent:",
   "DLG_SETTINGS_2_UI_22":"下载中的 Torrent:",
   "DLG_SETTINGS_3_PATHS_01":"下载文件的保存位置",
   "DLG_SETTINGS_3_PATHS_02":"下载时保存目录(P):",
   "DLG_SETTINGS_3_PATHS_03":"手动添加时总是显示对话框(W)",
   "DLG_SETTINGS_3_PATHS_06":"下载完成后移至(M):",
   "DLG_SETTINGS_3_PATHS_07":"添加 Torrent 标签(A)",
   "DLG_SETTINGS_3_PATHS_10":"只从默认下载目录移动(O)",
   "DLG_SETTINGS_3_PATHS_11":"Torrent 位置",
   "DLG_SETTINGS_3_PATHS_12":"保存 Torrent 到:",
   "DLG_SETTINGS_3_PATHS_15":"任务完成后将 Torrent 文件移动到:",
   "DLG_SETTINGS_3_PATHS_18":"自动载入 Torrent 于(A):",
   "DLG_SETTINGS_3_PATHS_19":"删除载入的 Torrent(D)",
   "DLG_SETTINGS_4_CONN_01":"监听端口",
   "DLG_SETTINGS_4_CONN_02":"传入连接所使用的端口:",
   "DLG_SETTINGS_4_CONN_04":"随机端口",
   "DLG_SETTINGS_4_CONN_05":"每次启动后使用随机端口(R)",
   "DLG_SETTINGS_4_CONN_06":"启用 UPnP 端口映射(U)",
   "DLG_SETTINGS_4_CONN_07":"启用 NAT-PMP 端口映射(N)",
   "DLG_SETTINGS_4_CONN_08":"代理服务",
   "DLG_SETTINGS_4_CONN_09":"类型(Y):",
   "DLG_SETTINGS_4_CONN_11":"代理(P):",
   "DLG_SETTINGS_4_CONN_13":"端口(O):",
   "DLG_SETTINGS_4_CONN_15":"验证",
   "DLG_SETTINGS_4_CONN_16":"用户:",
   "DLG_SETTINGS_4_CONN_18":"密码:",
   "DLG_SETTINGS_4_CONN_19":"通过代理服务器解析主机名",
   "DLG_SETTINGS_4_CONN_20":"使用点对点连接代理服务器",
   "DLG_SETTINGS_4_CONN_21":"添加系统防火墙例外(F)",
   "DLG_SETTINGS_4_CONN_22":"代理隐私",
   "DLG_SETTINGS_4_CONN_23":"禁用所有本地 DNS 查询",
   "DLG_SETTINGS_4_CONN_24":"禁用会泄露验证信息的功能",
   "DLG_SETTINGS_4_CONN_25":"禁用代理不支持的连接",
   "DLG_SETTINGS_5_BANDWIDTH_01":"全局上传比率限制",
   "DLG_SETTINGS_5_BANDWIDTH_02":"最大上传速度(KB/s): [0: 无限制]",
   "DLG_SETTINGS_5_BANDWIDTH_03":"自动",
   "DLG_SETTINGS_5_BANDWIDTH_05":"无下载时切换上传速度为(KB/s):",
   "DLG_SETTINGS_5_BANDWIDTH_07":"全局下载比率限制",
   "DLG_SETTINGS_5_BANDWIDTH_08":"最大下载速度(KB/s): [0: 无限制]",
   "DLG_SETTINGS_5_BANDWIDTH_10":"连接数值",
   "DLG_SETTINGS_5_BANDWIDTH_11":"全局最大连接数量:",
   "DLG_SETTINGS_5_BANDWIDTH_14":"每个 Torrent 的最大连接数:",
   "DLG_SETTINGS_5_BANDWIDTH_15":"每个 Torrent 的上传通道数:",
   "DLG_SETTINGS_5_BANDWIDTH_17":"使用额外的上传通道如果上传速度 < 90%",
   "DLG_SETTINGS_5_BANDWIDTH_18":"整體速度限制選項",
   "DLG_SETTINGS_5_BANDWIDTH_19":"应用比率限制到传输开销",
   "DLG_SETTINGS_5_BANDWIDTH_20":"应用比率限制到 uTP 连接",
   "DLG_SETTINGS_6_BITTORRENT_01":"基本 BitTorrent 功能",
   "DLG_SETTINGS_6_BITTORRENT_02":"启用 DHT 网络(E)",
   "DLG_SETTINGS_6_BITTORRENT_03":"向 Tracker 查询状态信息(A)",
   "DLG_SETTINGS_6_BITTORRENT_04":"新建 Torrent 时启用 DHT(E)",
   "DLG_SETTINGS_6_BITTORRENT_05":"启用用户交换(P)",
   "DLG_SETTINGS_6_BITTORRENT_06":"启用本地用户发现(L)",
   "DLG_SETTINGS_6_BITTORRENT_07":"限制本地用户带宽(L)",
   "DLG_SETTINGS_6_BITTORRENT_08":"向 Tracker 提交的 IP 地址/主机名:",
   "DLG_SETTINGS_6_BITTORRENT_10":"协议加密",
   "DLG_SETTINGS_6_BITTORRENT_11":"传出连接:",
   "DLG_SETTINGS_6_BITTORRENT_13":"允许传入旧式连接",
   "DLG_SETTINGS_6_BITTORRENT_14":"启用带宽管理 [uTP]",
   "DLG_SETTINGS_6_BITTORRENT_15":"启用 UDP Tracker 支持",
   "DLG_SETTINGS_7_TRANSFERCAP_01":"启用传输限定",
   "DLG_SETTINGS_7_TRANSFERCAP_02":"限定设置",
   "DLG_SETTINGS_7_TRANSFERCAP_03":"限制类型:",
   "DLG_SETTINGS_7_TRANSFERCAP_04":"带宽限制:",
   "DLG_SETTINGS_7_TRANSFERCAP_05":"时间期间(天):",
   "DLG_SETTINGS_7_TRANSFERCAP_06":"选定时段的使用历史",
   "DLG_SETTINGS_7_TRANSFERCAP_07":"已经上传:",
   "DLG_SETTINGS_7_TRANSFERCAP_08":"已经下载:",
   "DLG_SETTINGS_7_TRANSFERCAP_09":"已经上传 + 已经下载",
   "DLG_SETTINGS_7_TRANSFERCAP_10":"时段:",
   "DLG_SETTINGS_7_TRANSFERCAP_11":"持续 %d 天",
   "DLG_SETTINGS_7_TRANSFERCAP_12":"重置历史",
   "DLG_SETTINGS_8_QUEUEING_01":"队列设置",
   "DLG_SETTINGS_8_QUEUEING_02":"最大的活动任务数(上传或下载):",
   "DLG_SETTINGS_8_QUEUEING_04":"最大的活动下载数:",
   "DLG_SETTINGS_8_QUEUEING_06":"做种目标 [默认]",
   "DLG_SETTINGS_8_QUEUEING_07":"最小比率(%):",
   "DLG_SETTINGS_8_QUEUEING_09":"最小做种时间(分):",
   "DLG_SETTINGS_8_QUEUEING_11":"做种任务的优先级高于下载任务(S)",
   "DLG_SETTINGS_8_QUEUEING_12":"当 µTorrent 达到做种目标时",
   "DLG_SETTINGS_8_QUEUEING_13":"限制上传速度为(KB/s): [0: 停止]",
   "DLG_SETTINGS_9_SCHEDULER_01":"启用计划任务(E)",
   "DLG_SETTINGS_9_SCHEDULER_02":"计划任务列表",
   "DLG_SETTINGS_9_SCHEDULER_04":"计划任务设置",
   "DLG_SETTINGS_9_SCHEDULER_05":"限制上传速度为(KB/s):",
   "DLG_SETTINGS_9_SCHEDULER_07":"限制下载速度为(KB/s):",
   "DLG_SETTINGS_9_SCHEDULER_09":"关闭时禁用 DHT 网络",
   "DLG_SETTINGS_9_WEBUI_01":"启用网页界面(W)",
   "DLG_SETTINGS_9_WEBUI_02":"验证",
   "DLG_SETTINGS_9_WEBUI_03":"用户(U):",
   "DLG_SETTINGS_9_WEBUI_05":"密码(P):",
   "DLG_SETTINGS_9_WEBUI_07":"以以下用户名启用来宾账户:",
   "DLG_SETTINGS_9_WEBUI_09":"连接设置",
   "DLG_SETTINGS_9_WEBUI_10":"可选监听端口(L)(默认为连接端口):",
   "DLG_SETTINGS_9_WEBUI_12":"仅允许从以下 IP 地址进行访问 (每个地址条目之间用逗号隔开):",
   "DLG_SETTINGS_A_ADVANCED_01":"高级选项 [警告: 请勿修改！]",
   "DLG_SETTINGS_A_ADVANCED_02":"参数(V):",
   "DLG_SETTINGS_A_ADVANCED_03":"True(T)",
   "DLG_SETTINGS_A_ADVANCED_04":"False(F)",
   "DLG_SETTINGS_A_ADVANCED_05":"设置(S)",
   "DLG_SETTINGS_B_ADV_UI_01":"速度弹出列表 [用逗号分隔多重数值]",
   "DLG_SETTINGS_B_ADV_UI_02":"覆盖自动速度弹出列表(O)",
   "DLG_SETTINGS_B_ADV_UI_03":"上传速度列表:",
   "DLG_SETTINGS_B_ADV_UI_05":"下载速度列表:",
   "DLG_SETTINGS_B_ADV_UI_07":"永久标签 [请用 \"|\" 字符分隔多重标签]",
   "DLG_SETTINGS_B_ADV_UI_08":"搜索引擎 [格式: 名称|链接]",
   "DLG_SETTINGS_C_ADV_CACHE_01":"基本缓存设置",
   "DLG_SETTINGS_C_ADV_CACHE_02":"磁盘缓存的作用是将用户频繁访问的数据保存在内存中，从而减少读写硬盘的次数。µTorrent 通常自动管理缓存，但您可以通过修改以下设置更改其操作模式。",
   "DLG_SETTINGS_C_ADV_CACHE_03":"手动指定缓存大小以覆盖自动设置的缓存大小(MB)(O):",
   "DLG_SETTINGS_C_ADV_CACHE_05":"不需要缓存时减少内存的使用量(R)。",
   "DLG_SETTINGS_C_ADV_CACHE_06":"高级缓存设置",
   "DLG_SETTINGS_C_ADV_CACHE_07":"启用磁盘写入缓存(W)",
   "DLG_SETTINGS_C_ADV_CACHE_08":"每 2 分钟写入未使用的区块(I)",
   "DLG_SETTINGS_C_ADV_CACHE_09":"立即写入已下载完毕的区块(T)",
   "DLG_SETTINGS_C_ADV_CACHE_10":"启用磁盘读取缓存(R)",
   "DLG_SETTINGS_C_ADV_CACHE_11":"如果上传速度较低则关闭读取缓存",
   "DLG_SETTINGS_C_ADV_CACHE_12":"从读取缓存中移除较旧的缓存区块",
   "DLG_SETTINGS_C_ADV_CACHE_13":"缓存超负荷时增加自动缓存的大小",
   "DLG_SETTINGS_C_ADV_CACHE_14":"对磁盘写入禁用系统缓存",
   "DLG_SETTINGS_C_ADV_CACHE_15":"对磁盘读取禁用系统缓存",
   "DLG_SETTINGS_C_ADV_RUN_01":"运行程序",
   "DLG_SETTINGS_C_ADV_RUN_02":"当下载完成时运行此程序:",
   "DLG_SETTINGS_C_ADV_RUN_04":"当状态变更时运行此程序:",
   "DLG_SETTINGS_C_ADV_RUN_06":"您可以使用以下命令:\r\n%F - 下载文件的名称 (单文件 Torrent 适用)\r\n%D - 文件保存的目录\r\n%N - Torrent 的标题\r\n%S - Torrent 的状态\r\n%L - 标签\r\n%T - Tracker\r\n%M - 消息信息状态(与状态列相同)\r\n%I - 十六进制编码信息\r\n\r\n状态为以下组合:\r\n已启动 =1, 检测中 = 2, 检测后启动 = 4,\r\n已检测 = 8, 错误 = 16, 已暂停 = 32, 自动 = 64, 已载入 = 128",
   "DLG_TORRENTPROP_00":"Torrent 属性",
   "DLG_TORRENTPROP_1_GEN_01":"Tracker (用一个空行来分割)",
   "DLG_TORRENTPROP_1_GEN_03":"带宽设置",
   "DLG_TORRENTPROP_1_GEN_04":"最大上传速度(KB/s): [0: 默认]",
   "DLG_TORRENTPROP_1_GEN_06":"最大下载速度(KB/s): [0: 默认]",
   "DLG_TORRENTPROP_1_GEN_08":"上传通道数: [0: 默认]",
   "DLG_TORRENTPROP_1_GEN_10":"做种时",
   "DLG_TORRENTPROP_1_GEN_11":"替代默认设置(O)",
   "DLG_TORRENTPROP_1_GEN_12":"最小比率 (%s):",
   "DLG_TORRENTPROP_1_GEN_14":"最小做种时间(分):",
   "DLG_TORRENTPROP_1_GEN_16":"其他设置",
   "DLG_TORRENTPROP_1_GEN_17":"初始做种(I)",
   "DLG_TORRENTPROP_1_GEN_18":"启用 DHT(E)",
   "DLG_TORRENTPROP_1_GEN_19":"用户交换(P)",
   "DLG_ADDEDITRSSFEED_03":"订阅",
   "DLG_ADDEDITRSSFEED_04":"订阅链接:",
   "DLG_ADDEDITRSSFEED_05":"自定别名(C):",
   "DLG_ADDEDITRSSFEED_06":"订阅",
   "DLG_ADDEDITRSSFEED_07":"不自动下载所有项目(N)",
   "DLG_ADDEDITRSSFEED_08":"自动下载在订阅中发布的所有项目(A)",
   "DLG_ADDEDITRSSFEED_09":"使用智能剧集过滤(S)",
   "DLG_RSSDOWNLOADER_02":"订阅||收藏||历史||",
   "DLG_RSSDOWNLOADER_03":"All Feeds",
   "DLG_RSSDOWNLOADER_04":"过滤设置",
   "DLG_RSSDOWNLOADER_05":"名称:",
   "DLG_RSSDOWNLOADER_06":"过滤:",
   "DLG_RSSDOWNLOADER_07":"排除:",
   "DLG_RSSDOWNLOADER_08":"保存:",
   "DLG_RSSDOWNLOADER_09":"订阅:",
   "DLG_RSSDOWNLOADER_10":"画质:",
   "DLG_RSSDOWNLOADER_11":"季集示例(E): [例如: 1x12-14]",
   "DLG_RSSDOWNLOADER_12":"过滤匹配的原始名称而代替解码名称(F)",
   "DLG_RSSDOWNLOADER_13":"不要自动开始下载",
   "DLG_RSSDOWNLOADER_14":"智能季集过滤",
   "DLG_RSSDOWNLOADER_15":"赋予下载最高优先级(G)",
   "DLG_RSSDOWNLOADER_16":"最小间隔(M):",
   "DLG_RSSDOWNLOADER_17":"新建 Torrent 标签:",
   "DLG_RSSDOWNLOADER_18":"添加 RSS 订阅...",
   "DLG_RSSDOWNLOADER_19":"编辑订阅(E)",
   "DLG_RSSDOWNLOADER_20":"禁用订阅(A)",
   "DLG_RSSDOWNLOADER_21":"启用订阅(A)",
   "DLG_RSSDOWNLOADER_22":"更新订阅(U)",
   "DLG_RSSDOWNLOADER_23":"删除订阅(D)",
   "DLG_RSSDOWNLOADER_24":"下载(D)",
   "DLG_RSSDOWNLOADER_25":"在浏览器中打开链接(B)",
   "DLG_RSSDOWNLOADER_26":"添加到收藏(A)",
   "DLG_RSSDOWNLOADER_27":"添加(A)",
   "DLG_RSSDOWNLOADER_28":"删除(D)",
   "DLG_RSSDOWNLOADER_29":"全部",
   "DLG_RSSDOWNLOADER_30":"(全部)",
   "DLG_RSSDOWNLOADER_31":"(总是匹配)||(此次匹配)||12 小时|| 1 天|| 2 天|| 3 天|| 4 天|| 1 周|| 2 周|| 3 周||每月||",
   "DLG_RSSDOWNLOADER_32":"添加 RSS 订阅",
   "DLG_RSSDOWNLOADER_33":"编辑 RSS 订阅",
   "DLG_RSSDOWNLOADER_34":"Remove RSS Feed(s)",
   "DLG_RSSDOWNLOADER_35":"Really delete the %d selected RSS Feeds?",
   "DLG_RSSDOWNLOADER_36":"确定删除 RSS 订阅 \"%s\" 吗？",
   "FEED_COL_FULLNAME":"全称",
   "FEED_COL_NAME":"名称",
   "FEED_COL_EPISODE":"季集",
   "FEED_COL_FORMAT":"格式",
   "FEED_COL_CODEC":"编码",
   "FEED_COL_DATE":"Date",
   "FEED_COL_FEED":"订阅",
   "FEED_COL_URL":"来源链接",
   "PRS_COL_IP":"IP 地址",
   "PRS_COL_PORT":"端口",
   "PRS_COL_CLIENT":"客户端",
   "PRS_COL_FLAGS":"标识",
   "PRS_COL_PCNT":"完成率(%)",
   "PRS_COL_RELEVANCE":"关联",
   "PRS_COL_DOWNSPEED":"下载速度",
   "PRS_COL_UPSPEED":"上传速度",
   "PRS_COL_REQS":"请求",
   "PRS_COL_WAITED":"等待中",
   "PRS_COL_UPLOADED":"已上传",
   "PRS_COL_DOWNLOADED":"已下载",
   "PRS_COL_HASHERR":"散列错误",
   "PRS_COL_PEERDL":"用户下载速度",
   "PRS_COL_MAXUP":"最大上传",
   "PRS_COL_MAXDOWN":"最大下载",
   "PRS_COL_QUEUED":"排队中",
   "PRS_COL_INACTIVE":"停止",
   "FI_COL_DONE":"完成",
   "FI_COL_FIRSTPC":"首个区块",
   "FI_COL_NAME":"名称",
   "FI_COL_NUMPCS":"区块数",
   "FI_COL_PCNT":"完成率",
   "FI_COL_PRIO":"优先级",
   "FI_COL_SIZE":"大小",
   "FI_PRI0":"跳过",
   "FI_PRI1":"较低",
   "FI_PRI2":"正常",
   "FI_PRI3":"较高",
   "GN_TP_01":"已经下载:",
   "GN_TP_02":"已经上传:",
   "GN_TP_03":"种子数量:",
   "GN_TP_04":"剩余时间:",
   "GN_TP_05":"下载速度:",
   "GN_TP_06":"上传速度:",
   "GN_TP_07":"用户数量:",
   "GN_TP_08":"分享比率:",
   "GN_TP_09":"文件位置:",
   "GN_TP_10":"散列数值:",
   "GN_GENERAL":"常规",
   "GN_TRANSFER":"传输",
   "GN_XCONN":"%d/%d 已连接 (缓存: %d)",
   "MAIN_TITLEBAR_SPEED":"下载:%s 上传:%s - %s",
   "MENU_COPY":"复制(C)",
   "MENU_RESET":"重置(R)",
   "MENU_UNLIMITED":"无限制",
   "MP_RESOLVE_IPS":"解析 IP 地址(R)",
   "MF_GETFILE":"Get File(s)",
   "MF_DONT":"取消下载(D)",
   "MF_HIGH":"较高优先级(H)",
   "MF_LOW":"较低优先级(L)",
   "MF_NORMAL":"正常优先级(N)",
   "ML_COPY_MAGNETURI":"复制 Magnet 链接(M)",
   "ML_DELETE_DATA":"删除数据(L)",
   "ML_DELETE_TORRENT":"删除 Torrent(D)",
   "ML_DELETE_DATATORRENT":"删除 Torrent 和数据(E)",
   "ML_FORCE_RECHECK":"强制校验(H)",
   "ML_FORCE_START":"强制开始(F)",
   "ML_LABEL":"标签(L)",
   "ML_PAUSE":"暂停(P)",
   "ML_PROPERTIES":"属性(E)",
   "ML_QUEUEDOWN":"下移(D)",
   "ML_QUEUEUP":"上移(U)",
   "ML_REMOVE":"移除(R)",
   "ML_REMOVE_AND":"移除并(N)",
   "ML_START":"开始(S)",
   "ML_STOP":"停止(S)",
   "OV_CAT_ACTIVE":"活动",
   "OV_CAT_ALL":"全部",
   "OV_CAT_COMPL":"完成",
   "OV_CAT_DL":"下载",
   "OV_CAT_INACTIVE":"停止",
   "OV_CAT_NOLABEL":"其他",
   "OV_COL_AVAIL":"||健康度||健康度",
   "OV_COL_DATE_ADDED":"添加时间",
   "OV_COL_DATE_COMPLETED":"完成时间",
   "OV_COL_DONE":"完成率",
   "OV_COL_DOWNLOADED":"已下载",
   "OV_COL_DOWNSPD":"下载速度",
   "OV_COL_ETA":"剩余时间",
   "OV_COL_LABEL":"标签",
   "OV_COL_NAME":"名称",
   "OV_COL_ORDER":"序号",
   "OV_COL_PEERS":"用户",
   "OV_COL_REMAINING":"剩余",
   "OV_COL_SEEDS":"种子",
   "OV_COL_SEEDS_PEERS":"种子/用户",
   "OV_COL_SHARED":"分享率",
   "OV_COL_SIZE":"大小",
   "OV_COL_SOURCE_URL":"来源链接",
   "OV_COL_STATUS":"状态",
   "OV_COL_UPPED":"已上传",
   "OV_COL_UPSPD":"上传速度",
   "OV_CONFIRM_DELETEDATA_MULTIPLE":"您确定要移除选定的 %d 个 Torrent 以及所有相关的数据吗？",
   "OV_CONFIRM_DELETEDATA_ONE":"您确定要移除选定的 Torrent 以及所有相关的数据吗？",
   "OV_CONFIRM_DELETE_MULTIPLE":"您确定要移除选定的 %d 个 Torrent 吗？",
   "OV_CONFIRM_DELETE_ONE":"您确定要移除选定的 Torrent 吗？",
   "OV_CONFIRM_DELETE_RSSFILTER":"确定删除 RSS 过滤 \"%s\" 吗？",
   "OV_FL_CHECKED":"已检查 %:.1d%",
   "OV_FL_DOWNLOADING":"下载中",
   "OV_FL_ERROR":"错误: %s",
   "OV_FL_FINISHED":"已完成",
   "OV_FL_PAUSED":"已暂停",
   "OV_FL_QUEUED":"排队中",
   "OV_FL_QUEUED_SEED":"排队做种",
   "OV_FL_SEEDING":"做种中",
   "OV_FL_STOPPED":"已停止",
   "OV_NEWLABEL_CAPTION":"输入标签",
   "OV_NEWLABEL_TEXT":"为选定的 Torrent 输入新的标签:",
   "OV_NEW_LABEL":"新建标签...",
   "OV_REMOVE_LABEL":"移除标签",
   "OV_TABS":"常规||伺服||用户||区块||文件||速度||日志||",
   "OV_TB_ADDTORR":"添加 Torrent",
   "OV_TB_ADDURL":"从链接添加 Torrent",
   "OV_TB_PAUSE":"暂停",
   "OV_TB_PREF":"设置",
   "OV_TB_QUEUEDOWN":"下移",
   "OV_TB_QUEUEUP":"上移",
   "OV_TB_REMOVE":"移除",
   "OV_TB_RSSDOWNLDR":"RSS 下载器",
   "OV_TB_START":"开始",
   "OV_TB_STOP":"停止",
   "MM_FILE":"文件(F)",
   "MM_FILE_ADD_TORRENT":"添加 Torrent(A)...",
   "MM_FILE_ADD_URL":"从链接添加 Torrent(U)...",
   "MM_OPTIONS":"选项(O)",
   "MM_OPTIONS_PREFERENCES":"设置(P)",
   "MM_OPTIONS_SHOW_CATEGORY":"显示类别列表(C)",
   "MM_OPTIONS_SHOW_DETAIL":"显示详细信息(D)",
   "MM_OPTIONS_SHOW_STATUS":"显示状态栏(S)",
   "MM_OPTIONS_SHOW_TOOLBAR":"显示工具栏(T)",
   "MM_OPTIONS_TAB_ICONS":"显示页签图标(I)",
   "MM_HELP":"帮助(H)",
   "MM_HELP_UT_WEBPAGE":"µTorrent 主页(W)",
   "MM_HELP_UT_FORUMS":"µTorrent 论坛(F)",
   "MM_HELP_WEBUI_FEEDBACK":"Send WebUI Feedback",
   "MM_HELP_ABOUT_WEBUI":"About µTorrent WebUI",
   "STM_TORRENTS":"任务",
   "STM_TORRENTS_PAUSEALL":"暂停所有的 Torrent(P)",
   "STM_TORRENTS_RESUMEALL":"续传所有的 Torrent(R)",
   "SB_DOWNLOAD":"下载: %s%z/s",
   "SB_LOCAL":" 本地: %z/s",
   "SB_OVERHEAD":" 开销: %z/s",
   "SB_TOTAL":" 传输: %Z",
   "SB_UPLOAD":"上传: %s%z/s",
   "SIZE_B":"B",
   "SIZE_EB":"EB",
   "SIZE_GB":"GB",
   "SIZE_KB":"KB",
   "SIZE_MB":"MB",
   "SIZE_PB":"PB",
   "SIZE_TB":"TB",
   "ST_CAPT_ADVANCED":"高级",
   "ST_CAPT_BANDWIDTH":"带宽",
   "ST_CAPT_CONNECTION":"连接",
   "ST_CAPT_DISK_CACHE":"缓存",
   "ST_CAPT_FOLDER":"目录",
   "ST_CAPT_GENERAL":"常规",
   "ST_CAPT_SCHEDULER":"计划",
   "ST_CAPT_QUEUEING":"队列",
   "ST_CAPT_UI_EXTRAS":"界面",
   "ST_CAPT_UI_SETTINGS":"界面",
   "ST_CAPT_BITTORRENT":"任务",
   "ST_CAPT_WEBUI":"远程",
   "ST_CAPT_TRANSFER_CAP":"传输上限",
   "ST_CAPT_RUN_PROGRAM":"运行程序",
   "ST_CBO_UI_DBLCLK_TOR":"显示属性||开始/停止||打开目录||显示下载栏||",
   "ST_CBO_ENCRYPTIONS":"禁用||启用||强制||",
   "ST_CBO_PROXY":"(无)||Socks4||Socks5||HTTPS||HTTP||",
   "ST_CBO_TCAP_MODES":"上传||下载||上传 + 下载||",
   "ST_CBO_TCAP_UNITS":"MB||GB||",
   "ST_CBO_TCAP_PERIODS":"1||2||5||7||10||14||15||20||21||28||30||31||",
   "ST_COL_NAME":"名称",
   "ST_COL_VALUE":"数值",
   "ST_SCH_DAYCODES":"周一||周二||周三||周四||周五||周六||周日||",
   "ST_SCH_DAYNAMES":"星期一||星期二||星期三||星期四||星期五||星期六||星期日||",
   "ST_SCH_LGND_FULL":"全速",
   "ST_SCH_LGND_FULLEX":"全速 - 使用常规全局的带宽设置",
   "ST_SCH_LGND_LIMITED":"限速",
   "ST_SCH_LGND_LIMITEDEX":"限速 - 使用计划制定的带宽设置",
   "ST_SCH_LGND_SEEDING":"做种",
   "ST_SCH_LGND_SEEDINGEX":"做种 - 仅上传数据(包括未完成任务)",
   "ST_SCH_LGND_OFF":"关闭",
   "ST_SCH_LGND_OFFEX":"关闭 - 停止所有非强制Torrent",
   "ST_SEEDTIMES_HOURS":"<= %d 小时",
   "ST_SEEDTIMES_IGNORE":"(忽略)",
   "ST_SEEDTIMES_MINUTES":"<= %d 分钟",
   "TIME_DAYS_HOURS":"%d 天 %d 小时",
   "TIME_HOURS_MINS":"%d 小时 %d 分钟",
   "TIME_MINS_SECS":"%d 分钟 %d 秒",
   "TIME_SECS":"%d 秒",
   "TIME_WEEKS_DAYS":"%d 周 %d 天",
   "TIME_YEARS_WEEKS":"%d 年 %d 周",
   "ML_MORE_ACTIONS":"More Action",
   "Torrents":"Torrent",
   "Feeds":"订阅",
   "App":"程序",
   "country":"国家/地区",
   "ETA":"剩余时间",
   "of":"/",
   "/s":"/s",
   "Paste a torrent or feed URL":"粘贴 Torrent 或订阅 URL",
   "Home":"主页",
   "Logout":"注销",
   "Seeding":"正在做种",
   "All Feeds":"所有订阅",
   "bitrate":"比特率",
   "resolution":"分辨率",
   "length":"长度",
   "streamable":"可点播",
   "type":"类型",
   "remote":"远程",
   "about":"关于",
   "sessions":"会话",
   "share":"共享",
   "Share this torrent":"共享此 Torrent",
   "Share link":"共享链接",
   "add":"添加",
   "logout":"注销",
   "log in":"登录",
   "anywhere access":"随处访问",
   "stay signed in":"保持登录",
   "download":"下载",
   "Your client is currently not available. Verify that it is connected to the internet.":"您的客户端当前无法使用。请确认其已经连接到互联网。",
   "Unable to communicate with your &micro;Torrent client. This message will disappear automatically when a connection is re-established.":"无法与您的 &micro;Torrent 客户端进行通信。重新建立连接后，此消息会自动消失。",
   "Open file":"打开文件",
   "Download to your computer":"下载到您的计算机",
   "Open with VLC Media Player":"使用 VLC 媒体播放器打开",
   "Actions":"操作",
   "season":"集",
   "DLG_ABOUT_VERSION_LEGEND":null,
   "DLG_ABOUT_VERSION_VERSION":null,
   "DLG_ABOUT_VERSION_REVISION":null,
   "DLG_ABOUT_VERSION_BUILD_DATE":null,
   "DLG_ABOUT_VERSION_PEER_ID":null,
   "DLG_ABOUT_VERSION_USER_AGENT":null,
   "DLG_ABOUT_UPNP_EXTERNAL_ADDRESS":null,
   "DLG_ABOUT_UI_REVISION":null,
   "DLG_SETTINGS_SAVE":"保存设置",
   "DLG_SETTINGS_MENU_TITLE":"设置",
   "DLG_SETTINGS_10_REMOTE_01":"远程控制",
   "DLG_SETTINGS_10_REMOTE_02":"BitTorrent 远程控制提供简单和安全的方法用浏览器来访问您的客户端。",
   "DLG_SETTINGS_10_REMOTE_03":"启用下面的连接，选择计算机名和密码并保持该计算机开机。",
   "DLG_SETTINGS_10_REMOTE_04":"进一步了解",
   "DLG_SETTINGS_10_REMOTE_05":"启用BitTorrent远程控制",
   "DLG_SETTINGS_10_REMOTE_06":"验证",
   "DLG_SETTINGS_10_REMOTE_07":"计算机名:",
   "DLG_SETTINGS_10_REMOTE_08":"密码:",
   "DLG_SETTINGS_10_REMOTE_09":"提交",
   "ST_CAPT_REMOTE":"远程控制",
   "STATUS_REMOTE_01":"可存取",
   "STATUS_REMOTE_02":"正在连接..",
   "STATUS_REMOTE_03":"无法获取",
   "STATUS_REMOTE_04":"注册失败",
   "STATUS_REMOTE_05":"您必须输入密码以使用 BitTorrent 远程控制",
   "STATUS_REMOTE_06":"无法连接至 BitTorrent 远程控制服务",
   "STATUS_REMOTE_07":"帐户名已经被使用",
   "STATUS_REMOTE_08":"账户名称不能包含非英语字符",
   "STATUS_REMOTE_09":"密码不能包含非英文字符",
   "STATUS_REMOTE_10":"状态: "
};
