/*
Copyright (c) 2011 BitTorrent, Inc. All rights reserved.

Use of this source code is governed by a BSD-style that can be
found in the LICENSE file.
*/

var LANG_STR = {
  CT_MASK1: "Torrent檔||*.torrent||所有檔案 (*.*)||*.*||",
  DLG_BTN_OK: "確定",
  DLG_BTN_CANCEL: "取消",
  DLG_BTN_APPLY: "套用(A)",
  DLG_BTN_YES: "確定",
  DLG_BTN_NO: "否",
  DLG_BTN_CLOSE: "關閉(C)",
  DLG_SETTINGS_00: "選項",
  DLG_SETTINGS_1_GENERAL_01: "語言",
  DLG_SETTINGS_1_GENERAL_02: "語言選項(L):",
  DLG_SETTINGS_1_GENERAL_10: "隱私訊息",
  DLG_SETTINGS_1_GENERAL_11: "自動檢查軟體更新(C)",
  DLG_SETTINGS_1_GENERAL_12: "更新到Beta版",
  DLG_SETTINGS_1_GENERAL_13: "檢查更新時傳送匿名訊息",
  DLG_SETTINGS_1_GENERAL_17: "下載任務時",
  DLG_SETTINGS_1_GENERAL_18: "附加 .!ut 到未完成檔案(A)",
  DLG_SETTINGS_1_GENERAL_19: "預先分配磁碟空間(r)",
  DLG_SETTINGS_1_GENERAL_20: "如有活躍的torrents, 禁止待命",
  DLG_SETTINGS_2_UI_01: "顯示選項",
  DLG_SETTINGS_2_UI_02: "刪除 Torrent 時要求確認(o)",
  DLG_SETTINGS_2_UI_03: "刪除 Tracker 時要求確認(e)",
  DLG_SETTINGS_2_UI_04: "離開時顯示確認對話框(H)",
  DLG_SETTINGS_2_UI_05: "交替的列表背景顏色(l)",
  DLG_SETTINGS_2_UI_06: "在標題列顯示目前速度(t)",
  DLG_SETTINGS_2_UI_07: "在狀態列顯示速度限制(o)",
  DLG_SETTINGS_2_UI_15: "當加入torrent",
  DLG_SETTINGS_2_UI_16: "不要自動開始下載(D)",
  DLG_SETTINGS_2_UI_17: "啟動程式視窗",
  DLG_SETTINGS_2_UI_18: "顯示torrent文件內的檔案",
  DLG_SETTINGS_2_UI_19: "雙擊操作",
  DLG_SETTINGS_2_UI_20: "做種中的 Torrent:",
  DLG_SETTINGS_2_UI_22: "下載中的 Torrent:",
  DLG_SETTINGS_3_PATHS_01: "下載檔案位置",
  DLG_SETTINGS_3_PATHS_02: "將新的下載存放在:",
  DLG_SETTINGS_3_PATHS_03: "手動新增時永遠顯示對話視窗",
  DLG_SETTINGS_3_PATHS_06: "將完成的下載移至:",
  DLG_SETTINGS_3_PATHS_07: "附加Torrent標籤(A)",
  DLG_SETTINGS_3_PATHS_10: "只移動預設下載位置的檔案(O)",
  DLG_SETTINGS_3_PATHS_11: "Torrent 位置",
  DLG_SETTINGS_3_PATHS_12: "儲存 .torrents 至:",
  DLG_SETTINGS_3_PATHS_15: "下載完成後將Torrent檔案移至:",
  DLG_SETTINGS_3_PATHS_18: "自動載入資料夾內的.torrent檔載入:",
  DLG_SETTINGS_3_PATHS_19: "刪除已載入的 .torrents",
  DLG_SETTINGS_4_CONN_01: "監聽通訊埠",
  DLG_SETTINGS_4_CONN_02: "本機通訊埠:",
  DLG_SETTINGS_4_CONN_04: "隨機通訊埠",
  DLG_SETTINGS_4_CONN_05: "每次啟動時隨機選擇一個通訊埠(R)",
  DLG_SETTINGS_4_CONN_06: "啟用UPnP通訊埠映射",
  DLG_SETTINGS_4_CONN_07: "啟用NAT-PMP通訊埠映射",
  DLG_SETTINGS_4_CONN_08: "代理伺服器",
  DLG_SETTINGS_4_CONN_09: "類型(y):",
  DLG_SETTINGS_4_CONN_11: "代理(P):",
  DLG_SETTINGS_4_CONN_13: "通訊埠(o):",
  DLG_SETTINGS_4_CONN_15: "認證",
  DLG_SETTINGS_4_CONN_16: "帳號:",
  DLG_SETTINGS_4_CONN_18: "密碼:",
  DLG_SETTINGS_4_CONN_19: "藉由Proxy解析主機名稱",
  DLG_SETTINGS_4_CONN_20: "使用代理伺服器來作P2P連線",
  DLG_SETTINGS_4_CONN_21: "加到Windows防火牆的例外(F)",
  DLG_SETTINGS_4_CONN_22: "代理隱私",
  DLG_SETTINGS_4_CONN_23: "停用所有本地 DNS 查詢",
  DLG_SETTINGS_4_CONN_24: "停用會洩漏驗證訊息的功能",
  DLG_SETTINGS_4_CONN_25: "停用代理不支援的連結",
  DLG_SETTINGS_5_BANDWIDTH_01: "整體上傳速度限制",
  DLG_SETTINGS_5_BANDWIDTH_02: "最大上傳速度 (kB/s): [0: 無限制]",
  DLG_SETTINGS_5_BANDWIDTH_03: "自動",
  DLG_SETTINGS_5_BANDWIDTH_05: "下載停止時上傳速度改為 (kB/s):",
  DLG_SETTINGS_5_BANDWIDTH_07: "整體下載速度限制",
  DLG_SETTINGS_5_BANDWIDTH_08: "最大下載速度 (kB/s): [0: 無限制]",
  DLG_SETTINGS_5_BANDWIDTH_10: "連線數量",
  DLG_SETTINGS_5_BANDWIDTH_11: "整體最大連線數量:",
  DLG_SETTINGS_5_BANDWIDTH_14: "每個Torrent的用戶連線數量:",
  DLG_SETTINGS_5_BANDWIDTH_15: "每個Torrent的上傳連線數量:",
  DLG_SETTINGS_5_BANDWIDTH_17: "如果上傳速度 < 90% 便增加上傳連線數量",
  DLG_SETTINGS_5_BANDWIDTH_18: "Global Rate Limit Options",
  DLG_SETTINGS_5_BANDWIDTH_19: "將速度限制套用在傳輸流量",
  DLG_SETTINGS_5_BANDWIDTH_20: "將速度限制套用在uTP連接",
  DLG_SETTINGS_6_BITTORRENT_01: "基本 BitTorrent 功能",
  DLG_SETTINGS_6_BITTORRENT_02: "啟用DHT網路(E)",
  DLG_SETTINGS_6_BITTORRENT_03: "詢問tracker 狀態檢查訊息(A)",
  DLG_SETTINGS_6_BITTORRENT_04: "為新的Torrent啟用DHT(E)",
  DLG_SETTINGS_6_BITTORRENT_05: "啟動用戶資訊交換(P)",
  DLG_SETTINGS_6_BITTORRENT_06: "啟動本地用戶收尋(L)",
  DLG_SETTINGS_6_BITTORRENT_07: "限制本地用戶傳輸頻寬(L)",
  DLG_SETTINGS_6_BITTORRENT_08: "報告給Tracker的IP/主機名稱:",
  DLG_SETTINGS_6_BITTORRENT_10: "協定加密",
  DLG_SETTINGS_6_BITTORRENT_11: "加密傳送:",
  DLG_SETTINGS_6_BITTORRENT_13: "允許連線非加密用戶",
  DLG_SETTINGS_6_BITTORRENT_14: "啟用流量管理[uTP]",
  DLG_SETTINGS_6_BITTORRENT_15: "啟用UDP tracker支援",
  DLG_SETTINGS_7_TRANSFERCAP_01: "啟用傳輸限制",
  DLG_SETTINGS_7_TRANSFERCAP_02: "限制設定",
  DLG_SETTINGS_7_TRANSFERCAP_03: "限制類型:",
  DLG_SETTINGS_7_TRANSFERCAP_04: "頻寬限制:",
  DLG_SETTINGS_7_TRANSFERCAP_05: "時段(天):",
  DLG_SETTINGS_7_TRANSFERCAP_06: "選擇時段的使用歷史",
  DLG_SETTINGS_7_TRANSFERCAP_07: "已上傳:",
  DLG_SETTINGS_7_TRANSFERCAP_08: "已下載:",
  DLG_SETTINGS_7_TRANSFERCAP_09: "已上傳+已下載",
  DLG_SETTINGS_7_TRANSFERCAP_10: "時段:",
  DLG_SETTINGS_7_TRANSFERCAP_11: "持續 %d 日",
  DLG_SETTINGS_7_TRANSFERCAP_12: "重置歷史",
  DLG_SETTINGS_8_QUEUEING_01: "佇列設定",
  DLG_SETTINGS_8_QUEUEING_02: "最大活躍的Torrent數量 (上傳和下載):",
  DLG_SETTINGS_8_QUEUEING_04: "最大活躍下載的Torrent數量:",
  DLG_SETTINGS_8_QUEUEING_06: "做種規則 [預設值]",
  DLG_SETTINGS_8_QUEUEING_07: "最小比例 (%):",
  DLG_SETTINGS_8_QUEUEING_09: "最小做種時間 (分鐘):",
  DLG_SETTINGS_8_QUEUEING_11: "做種任務比下載任務有較高優先順序(S)",
  DLG_SETTINGS_8_QUEUEING_12:
    "當µTorrent達成做種的目標 當µTorrent達成做種的目標",
  DLG_SETTINGS_8_QUEUEING_13: "上傳限速為 [0表示停止]:",
  DLG_SETTINGS_9_SCHEDULER_01: "啟用排程器(E)",
  DLG_SETTINGS_9_SCHEDULER_02: "排程器列表",
  DLG_SETTINGS_9_SCHEDULER_04: "排程器設定",
  DLG_SETTINGS_9_SCHEDULER_05: "上傳限速 (kB/s):",
  DLG_SETTINGS_9_SCHEDULER_07: "下載限速 (kB/s):",
  DLG_SETTINGS_9_SCHEDULER_09: "關閉時停用DHT(D)",
  DLG_SETTINGS_9_WEBUI_01: "啟用網頁介面(W)",
  DLG_SETTINGS_9_WEBUI_02: "認證",
  DLG_SETTINGS_9_WEBUI_03: "帳號:",
  DLG_SETTINGS_9_WEBUI_05: "密碼:",
  DLG_SETTINGS_9_WEBUI_07: "啟用訪客帳號(G):",
  DLG_SETTINGS_9_WEBUI_09: "連線設定",
  DLG_SETTINGS_9_WEBUI_10: "可選監聽通訊埠(L) (預設為µTorrent的本機通訊埠):",
  DLG_SETTINGS_9_WEBUI_12: '限制下列 IP 地址的訪問(R) (多個實例請用 "," 分隔):',
  DLG_SETTINGS_A_ADVANCED_01: "進階設定 [警告: 請勿修改!]",
  DLG_SETTINGS_A_ADVANCED_02: "參數(V):",
  DLG_SETTINGS_A_ADVANCED_03: "True",
  DLG_SETTINGS_A_ADVANCED_04: "False",
  DLG_SETTINGS_A_ADVANCED_05: "設定(S)",
  DLG_SETTINGS_B_ADV_UI_01: "速度彈出列表 [用逗號分隔多重數值]",
  DLG_SETTINGS_B_ADV_UI_02: "覆蓋自動速度彈出列表(O)",
  DLG_SETTINGS_B_ADV_UI_03: "上傳速度列表:",
  DLG_SETTINGS_B_ADV_UI_05: "下載速度列表:",
  DLG_SETTINGS_B_ADV_UI_07: '永久標籤 [請用 "|" 字符分隔多重數值。]',
  DLG_SETTINGS_B_ADV_UI_08: "收尋引擎 [格式: 名稱|網址]",
  DLG_SETTINGS_C_ADV_CACHE_01: "基本快取設定",
  DLG_SETTINGS_C_ADV_CACHE_02:
    "磁碟快取的作用是將用戶頻繁存取的資料存放在記憶體中, 減少磁碟的讀寫次數. µTorrent本身可以自動管理記憶體, 但您可以手動修改下列設定來更變其操作模式.",
  DLG_SETTINGS_C_ADV_CACHE_03:
    "手動設定快取大小以覆蓋自動設定的快取大小(MB)(O):",
  DLG_SETTINGS_C_ADV_CACHE_05: "不需要快取時減少記憶體的使用量(R)",
  DLG_SETTINGS_C_ADV_CACHE_06: "進階快取設定",
  DLG_SETTINGS_C_ADV_CACHE_07: "啟用磁碟寫入快取(W)",
  DLG_SETTINGS_C_ADV_CACHE_08: "每 2 分鐘寫入未使用的區塊(I)",
  DLG_SETTINGS_C_ADV_CACHE_09: "立即寫入已下載完畢的區塊(T)",
  DLG_SETTINGS_C_ADV_CACHE_10: "啟用磁碟讀取快取(R)",
  DLG_SETTINGS_C_ADV_CACHE_11: "如果上傳速度較低則關閉讀取快取",
  DLG_SETTINGS_C_ADV_CACHE_12: "從快取中移除較舊的區塊從快取中移除較舊的區塊",
  DLG_SETTINGS_C_ADV_CACHE_13: "快取超負荷時自動增加快取的大小",
  DLG_SETTINGS_C_ADV_CACHE_14: "停用視窗的寫入快取",
  DLG_SETTINGS_C_ADV_CACHE_15: "停用視窗的讀取快取",
  DLG_SETTINGS_C_ADV_RUN_01: "執行程式",
  DLG_SETTINGS_C_ADV_RUN_02: "當下載完成時執行該程式:",
  DLG_SETTINGS_C_ADV_RUN_04: "當torrent狀態變更時執行該程式:",
  DLG_SETTINGS_C_ADV_RUN_06:
    "您可以使用以下命令:\r\n%F - 下載檔案的名稱 (單一檔案 Torrent 適用)\r\n%D - 檔案儲存資料夾\r\n%N - Torrent 的標題\r\n%S - Torrent 的狀態\r\n%L - 標籤\r\n%T - Tracker\r\n%M - 狀態訊息狀態(與狀態列相同)\r\n%I - 十六進位編碼訊息\r\n\r\n狀態為以下組合:\r\n已啟動 =1, 檢測中 = 2, 檢測後啟動 = 4,\r\n已檢查 = 8, 錯誤 = 16, 已暫停 = 32, 自動 = 64, 已載入 = 128",
  DLG_TORRENTPROP_00: "Torrent 屬性",
  DLG_TORRENTPROP_1_GEN_01: "Tracker (用一個空行來區隔)",
  DLG_TORRENTPROP_1_GEN_03: "流量設定",
  DLG_TORRENTPROP_1_GEN_04: "最大上傳速度 (kB/s): [0: 無限制]",
  DLG_TORRENTPROP_1_GEN_06: "最大下載速度 (kB/s): [0: 無限制]",
  DLG_TORRENTPROP_1_GEN_08: "上傳連線數: [0:預設]",
  DLG_TORRENTPROP_1_GEN_10: "做種時",
  DLG_TORRENTPROP_1_GEN_11: "取代預設設定(O)",
  DLG_TORRENTPROP_1_GEN_12: "最小比例(%):",
  DLG_TORRENTPROP_1_GEN_14: "最小做種時間(分鐘):",
  DLG_TORRENTPROP_1_GEN_16: "其它設定",
  DLG_TORRENTPROP_1_GEN_17: "初始種子(I)",
  DLG_TORRENTPROP_1_GEN_18: "啟用 DHT(E)",
  DLG_TORRENTPROP_1_GEN_19: "用戶交換(P)",
  DLG_ADDEDITRSSFEED_03: "訂閱",
  DLG_ADDEDITRSSFEED_04: "訂閱網址:",
  DLG_ADDEDITRSSFEED_05: "自訂別名(C):",
  DLG_ADDEDITRSSFEED_06: "訂閱",
  DLG_ADDEDITRSSFEED_07: "不要自動下載所有項目",
  DLG_ADDEDITRSSFEED_08: "自動下載在訂閱中發布的所有項目(A)",
  DLG_ADDEDITRSSFEED_09: "使用智能劇集過濾(S)",
  DLG_RSSDOWNLOADER_02: "訂閱||書籤||歷史||",
  DLG_RSSDOWNLOADER_03: "All Feeds",
  DLG_RSSDOWNLOADER_04: "過濾器設定",
  DLG_RSSDOWNLOADER_05: "名稱:",
  DLG_RSSDOWNLOADER_06: "過濾:",
  DLG_RSSDOWNLOADER_07: "不含:",
  DLG_RSSDOWNLOADER_08: "儲存至:",
  DLG_RSSDOWNLOADER_09: "訂閱:",
  DLG_RSSDOWNLOADER_10: "品質:",
  DLG_RSSDOWNLOADER_11: "劇集數: [例如 1x12-14](E)",
  DLG_RSSDOWNLOADER_12: "過濾和原本的名稱相符代替和解碼的名稱相符(F)",
  DLG_RSSDOWNLOADER_13: "不要自動開始下載",
  DLG_RSSDOWNLOADER_14: "智慧劇集過濾器",
  DLG_RSSDOWNLOADER_15: "給予下載任務最高優先權(G)",
  DLG_RSSDOWNLOADER_16: "最小間隔(M):",
  DLG_RSSDOWNLOADER_17: "新Torrent的標籤:",
  DLG_RSSDOWNLOADER_18: "加入RSS訂閱...",
  DLG_RSSDOWNLOADER_19: "編輯訂閱...(E)",
  DLG_RSSDOWNLOADER_20: "取消訂閱(a)",
  DLG_RSSDOWNLOADER_21: "啟用訂閱",
  DLG_RSSDOWNLOADER_22: "更新訂閱(U)",
  DLG_RSSDOWNLOADER_23: "刪除訂閱(D)",
  DLG_RSSDOWNLOADER_24: "下載(D)",
  DLG_RSSDOWNLOADER_25: "在瀏覽器開啟網址(B)",
  DLG_RSSDOWNLOADER_26: "加到書籤(A)",
  DLG_RSSDOWNLOADER_27: "加入(A)",
  DLG_RSSDOWNLOADER_28: "刪除(D)",
  DLG_RSSDOWNLOADER_29: "全部",
  DLG_RSSDOWNLOADER_30: "(全部)",
  DLG_RSSDOWNLOADER_31:
    "(總是符合)||(此次符合)||12 小時|| 1 天|| 2 天|| 3 天|| 4 天|| 1 周|| 2 周|| 3 周||每月||",
  DLG_RSSDOWNLOADER_32: "加入 RSS 訂閱",
  DLG_RSSDOWNLOADER_33: "編輯RSS訂閱",
  DLG_RSSDOWNLOADER_34: "Remove RSS Feed(s)",
  DLG_RSSDOWNLOADER_35: "Really delete the %d selected RSS Feeds?",
  DLG_RSSDOWNLOADER_36: '確定刪除 RSS 訂閱 "%s" 嗎？',
  FEED_COL_FULLNAME: "全名",
  FEED_COL_NAME: "名稱",
  FEED_COL_EPISODE: "季集",
  FEED_COL_FORMAT: "格式",
  FEED_COL_CODEC: "編碼",
  FEED_COL_DATE: "Date",
  FEED_COL_FEED: "訂閱",
  FEED_COL_URL: "網址來源",
  PRS_COL_IP: "IP",
  PRS_COL_PORT: "通訊埠",
  PRS_COL_CLIENT: "客戶端",
  PRS_COL_FLAGS: "標識",
  PRS_COL_PCNT: "%",
  PRS_COL_RELEVANCE: "關聯",
  PRS_COL_DOWNSPEED: "下載速度",
  PRS_COL_UPSPEED: "上傳速度",
  PRS_COL_REQS: "請求",
  PRS_COL_WAITED: "等待中",
  PRS_COL_UPLOADED: "已上傳",
  PRS_COL_DOWNLOADED: "已下載",
  PRS_COL_HASHERR: "特徵碼錯誤",
  PRS_COL_PEERDL: "用戶下載速度",
  PRS_COL_MAXUP: "最大上載",
  PRS_COL_MAXDOWN: "最大下載",
  PRS_COL_QUEUED: "佇列中",
  PRS_COL_INACTIVE: "停止",
  FI_COL_DONE: "完成",
  FI_COL_FIRSTPC: "第一個區塊",
  FI_COL_NAME: "名稱",
  FI_COL_NUMPCS: "# 區塊",
  FI_COL_PCNT: "%",
  FI_COL_PRIO: "優先等級",
  FI_COL_SIZE: "大小",
  FI_PRI0: "略過",
  FI_PRI1: "低",
  FI_PRI2: "正常",
  FI_PRI3: "高",
  GN_TP_01: "已經下載:",
  GN_TP_02: "已經上傳:",
  GN_TP_03: "種子數量:",
  GN_TP_04: "剩餘時間:",
  GN_TP_05: "下載速度:",
  GN_TP_06: "上傳速度:",
  GN_TP_07: "用戶數量:",
  GN_TP_08: "分享比率:",
  GN_TP_09: "儲存位置:",
  GN_TP_10: "特徵碼:",
  GN_GENERAL: "一般",
  GN_TRANSFER: "傳輸",
  GN_XCONN: "%d/%d 已連線 (快取: %d)",
  MAIN_TITLEBAR_SPEED: "D:%s U:%s - %s",
  MENU_COPY: "複製(C)",
  MENU_RESET: "重設(R)",
  MENU_UNLIMITED: "無限制",
  MP_RESOLVE_IPS: "解析 IP 位址(R)",
  MF_GETFILE: "Get File(s)",
  MF_DONT: "取消下載(D)",
  MF_HIGH: "較高優先級(H)",
  MF_LOW: "較低優先級(L)",
  MF_NORMAL: "正常優先級(N)",
  ML_COPY_MAGNETURI: "複製 Magnet 連線(M)",
  ML_DELETE_DATA: "刪除資料(L)",
  ML_DELETE_TORRENT: "刪除 Torrent(D)",
  ML_DELETE_DATATORRENT: "刪除 Torrent 和資料(E)",
  ML_FORCE_RECHECK: "強制再檢查",
  ML_FORCE_START: "強制開始(F)",
  ML_LABEL: "標籤(L)",
  ML_PAUSE: "暫停(P)",
  ML_PROPERTIES: "屬性(e)",
  ML_QUEUEDOWN: "下移佇列任務(D)",
  ML_QUEUEUP: "上移佇列任務(D)",
  ML_REMOVE: "移除(R)",
  ML_REMOVE_AND: "移除並(n)",
  ML_START: "開始(S)",
  ML_STOP: "停止(s)",
  OV_CAT_ACTIVE: "活躍",
  OV_CAT_ALL: "全部",
  OV_CAT_COMPL: "完成",
  OV_CAT_DL: "下載中",
  OV_CAT_INACTIVE: "停止",
  OV_CAT_NOLABEL: "無標籤",
  OV_COL_AVAIL: "||健康度||健康度",
  OV_COL_DATE_ADDED: "加入時間",
  OV_COL_DATE_COMPLETED: "完成時間",
  OV_COL_DONE: "完成率",
  OV_COL_DOWNLOADED: "已下載",
  OV_COL_DOWNSPD: "下載速度",
  OV_COL_ETA: "剩餘時間",
  OV_COL_LABEL: "標籤",
  OV_COL_NAME: "名稱",
  OV_COL_ORDER: "#",
  OV_COL_PEERS: "用戶",
  OV_COL_REMAINING: "剩餘",
  OV_COL_SEEDS: "種子",
  OV_COL_SEEDS_PEERS: "種子/用戶",
  OV_COL_SHARED: "分享率",
  OV_COL_SIZE: "大小",
  OV_COL_SOURCE_URL: "網址來源",
  OV_COL_STATUS: "狀態",
  OV_COL_UPPED: "已上傳",
  OV_COL_UPSPD: "上傳速度",
  OV_CONFIRM_DELETEDATA_MULTIPLE:
    "你確定要移除已選擇 %d 個下載任務及所有相關的資料嗎?",
  OV_CONFIRM_DELETEDATA_ONE: "你確定要移除已選擇的下載任務及所有相關的資料嗎?",
  OV_CONFIRM_DELETE_MULTIPLE: "你確定要移除已選擇 %d 個下載任務?",
  OV_CONFIRM_DELETE_ONE: "你確定要移除所選擇的任務?",
  OV_CONFIRM_DELETE_RSSFILTER: '確定刪除 RSS 過濾 "%s" 嗎？',
  OV_FL_CHECKED: "已檢查 %:.1d%",
  OV_FL_DOWNLOADING: "下載中",
  OV_FL_ERROR: "錯誤: %s",
  OV_FL_FINISHED: "已完成",
  OV_FL_PAUSED: "已暫停",
  OV_FL_QUEUED: "佇列中",
  OV_FL_QUEUED_SEED: "佇列做種",
  OV_FL_SEEDING: "做種中",
  OV_FL_STOPPED: "已停止",
  OV_NEWLABEL_CAPTION: "輸入標籤",
  OV_NEWLABEL_TEXT: "為選定的 Torrent 輸入新的標籤:",
  OV_NEW_LABEL: "新增標籤...",
  OV_REMOVE_LABEL: "移除標籤",
  OV_TABS: "一般||Trackers||用戶||區塊||檔案||速度||日誌||",
  OV_TB_ADDTORR: "加入 Torrent",
  OV_TB_ADDURL: "從網址加入 Torrent",
  OV_TB_PAUSE: "暫停",
  OV_TB_PREF: "設定",
  OV_TB_QUEUEDOWN: "下移佇列任務",
  OV_TB_QUEUEUP: "上移佇列任務",
  OV_TB_REMOVE: "移除",
  OV_TB_RSSDOWNLDR: "RSS下載器",
  OV_TB_START: "開始",
  OV_TB_STOP: "停止",
  MM_FILE: "檔案(F)",
  MM_FILE_ADD_TORRENT: "加入 Torrent(A)...",
  MM_FILE_ADD_URL: "從網址加入 Torrent(U)...",
  MM_OPTIONS: "選項(O)",
  MM_OPTIONS_PREFERENCES: "設定(P)",
  MM_OPTIONS_SHOW_CATEGORY: "顯示分類列表(C)",
  MM_OPTIONS_SHOW_DETAIL: "顯示詳細資訊(D) ",
  MM_OPTIONS_SHOW_STATUS: "顯示狀態列(S)",
  MM_OPTIONS_SHOW_TOOLBAR: "顯示工具列(T)",
  MM_OPTIONS_TAB_ICONS: "顯示索引標籤圖示(I)",
  MM_HELP: "幫助(H)",
  MM_HELP_UT_WEBPAGE: "µTorrent 首頁(W)",
  MM_HELP_UT_FORUMS: "µTorrent 論壇(F)",
  MM_HELP_WEBUI_FEEDBACK: "Send WebUI Feedback",
  MM_HELP_ABOUT_WEBUI: "About µTorrent WebUI",
  STM_TORRENTS: "Torrents",
  STM_TORRENTS_PAUSEALL: "暫停所有的torrent(P)",
  STM_TORRENTS_RESUMEALL: "續傳所有的torrent(R)",
  SB_DOWNLOAD: "下載: %s%z/s",
  SB_LOCAL: " 本地: %z/s",
  SB_OVERHEAD: " 開銷: %z/s",
  SB_TOTAL: " 傳輸: %Z",
  SB_UPLOAD: "上傳: %s%z/s",
  SIZE_B: "B",
  SIZE_EB: "EB",
  SIZE_GB: "GB",
  SIZE_KB: "KB",
  SIZE_MB: "MB",
  SIZE_PB: "PB",
  SIZE_TB: "TB",
  ST_CAPT_ADVANCED: "進階",
  ST_CAPT_BANDWIDTH: "流量",
  ST_CAPT_CONNECTION: "連線",
  ST_CAPT_DISK_CACHE: "磁碟快取",
  ST_CAPT_FOLDER: "目錄",
  ST_CAPT_GENERAL: "一般",
  ST_CAPT_SCHEDULER: "排程",
  ST_CAPT_QUEUEING: "佇列",
  ST_CAPT_UI_EXTRAS: "使用介面",
  ST_CAPT_UI_SETTINGS: "介面",
  ST_CAPT_BITTORRENT: "通訊",
  ST_CAPT_WEBUI: "遠端操作",
  ST_CAPT_TRANSFER_CAP: "傳輸限制",
  ST_CAPT_RUN_PROGRAM: "執行程式",
  ST_CBO_UI_DBLCLK_TOR: "顯示屬性||開始/停止||打開資料夾||顯示下載列||",
  ST_CBO_ENCRYPTIONS: "停用||啟用||強制||",
  ST_CBO_PROXY: "(無)||Socks4||Socks5||HTTPS||HTTP||",
  ST_CBO_TCAP_MODES: "上傳||下載||上傳+下載||",
  ST_CBO_TCAP_UNITS: "MB||GB||",
  ST_CBO_TCAP_PERIODS: "1||2||5||7||10||14||15||20||21||28||30||31||",
  ST_COL_NAME: "名稱",
  ST_COL_VALUE: "參數",
  ST_SCH_DAYCODES: "週一||週二||週三||週四||週五||週六||週日||",
  ST_SCH_DAYNAMES: "週一||週二||週三||週四||週五||週六||週日||",
  ST_SCH_LGND_FULL: "全速",
  ST_SCH_LGND_FULLEX: "全速 - 使用一般整體規則流量限制",
  ST_SCH_LGND_LIMITED: "限速",
  ST_SCH_LGND_LIMITEDEX: "限制 - 使用自訂排程流量限制",
  ST_SCH_LGND_SEEDING: "只做種",
  ST_SCH_LGND_SEEDINGEX: "只做種 - 僅上傳資料(包括未完成任務)",
  ST_SCH_LGND_OFF: "關閉",
  ST_SCH_LGND_OFFEX: "關閉 - 停止所有torrents非強制性",
  ST_SEEDTIMES_HOURS: "<= %d 小時",
  ST_SEEDTIMES_IGNORE: "(忽略)",
  ST_SEEDTIMES_MINUTES: "<= %d 分鍾",
  TIME_DAYS_HOURS: "%d天 %d時",
  TIME_HOURS_MINS: "%d時 %d分",
  TIME_MINS_SECS: "%d分 %d秒",
  TIME_SECS: "%d秒",
  TIME_WEEKS_DAYS: "%d週 %d天",
  TIME_YEARS_WEEKS: "%d年 %d週",
  ML_MORE_ACTIONS: null,
  Torrents: null,
  Feeds: null,
  App: null,
  country: null,
  ETA: null,
  of: null,
  "/s": null,
  "Paste a torrent or feed URL": null,
  Home: null,
  Logout: null,
  Seeding: null,
  "All Feeds": null,
  bitrate: null,
  resolution: null,
  length: null,
  streamable: null,
  type: null,
  remote: null,
  about: null,
  sessions: null,
  share: null,
  "Share this torrent": null,
  "Share link": null,
  add: null,
  logout: null,
  "log in": null,
  "anywhere access": null,
  "stay signed in": null,
  download: null,
  "Your client is currently not available. Verify that it is connected to the internet.": null,
  "Unable to communicate with your &micro;Torrent client. This message will disappear automatically when a connection is re-established.": null,
  "Open file": null,
  "Download to your computer": null,
  "Open with VLC Media Player": null,
  Actions: null,
  season: null,
  DLG_ABOUT_VERSION_LEGEND: null,
  DLG_ABOUT_VERSION_VERSION: null,
  DLG_ABOUT_VERSION_REVISION: null,
  DLG_ABOUT_VERSION_BUILD_DATE: null,
  DLG_ABOUT_VERSION_PEER_ID: null,
  DLG_ABOUT_VERSION_USER_AGENT: null,
  DLG_ABOUT_UPNP_EXTERNAL_ADDRESS: null,
  DLG_ABOUT_UI_REVISION: null,
  DLG_SETTINGS_SAVE: null,
  DLG_SETTINGS_MENU_TITLE: null,
  DLG_SETTINGS_10_REMOTE_01: "BitTorrent遠端操控",
  DLG_SETTINGS_10_REMOTE_02:
    "BitTorrent遠端操作利用瀏覽器提供簡單和安全的方法來存取您的用戶端.",
  DLG_SETTINGS_10_REMOTE_03:
    "只需啟用下列的連線, 選擇電腦名稱及密碼, 並且保持電腦開啟.",
  DLG_SETTINGS_10_REMOTE_04: "進一步瞭解",
  DLG_SETTINGS_10_REMOTE_05: "啟用BitTorrent遠端操作",
  DLG_SETTINGS_10_REMOTE_06: "認證",
  DLG_SETTINGS_10_REMOTE_07: "電腦名稱:",
  DLG_SETTINGS_10_REMOTE_08: "密碼:",
  DLG_SETTINGS_10_REMOTE_09: "提交",
  ST_CAPT_REMOTE: "BitTorrent遠端操控"
};
