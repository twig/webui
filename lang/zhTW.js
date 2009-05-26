﻿var lang = [
	"Torrent檔案||*.torrent||所有檔案 (*.*)||*.*||",
	"選項",
	"確定",
	"取消",
	"語言(L):",
	"私隱",
	"自動檢查更新(C)",
	"更新到測試版本",
	"更新時傳送匿名資訊",
	"下載時",
	"附加 .!ut 到未完成的檔案(A)",
	"預先分配所有檔案的空間(R)",
	"如有活躍的Torrent便防止待命(E)",
	"刪除Torrent時確認(O)",
	"交替的列表背景顏色(L)",
	"在標題列上顯示目前的速度(T)",
	"加入Torrents時",
	"不要自動開始下載(D)",
	"下載檔案位置",
	"將新的下載放在(P):",
	"將完成的下載移至(M):",
	"附加Torrent的標籤(A)",
	"只移動預設下載位置的檔案(O)",
	"Torrent檔案的位置",
	"儲存Torrent檔案於",
	"下載完成後將Torrent檔案移至:",
	"從以下資料夾自動載入Torrent檔案(A):",
	"刪除已載入的Torrent檔案(D)",
	"監聽連接埠",
	"本機連接埠:",
	"隨機連接埠",
	"啟動時使用隨機連接埠(R)",
	"啟用UPnP連接埠映射",
	"啟用NAT-PMP連接埠映射",
	"代理伺服器",
	"類型(Y):",
	"代理(P):",
	"連接埠(O):",
	"驗證",
	"名稱:",
	"密碼:",
	"點對點連接時使用代理伺服器",
	"加到Windows防火牆的例外(F)",
	"整體上傳速度限制",
	"最大上傳速度 (kB/s): [0: 不限]",
	"自動",
	"非下載時上傳速度改為 (kB/s):",
	"整體下載速度限制",
	"最大下載速度 (kB/s): [0: 不限]",
	"連接數量",
	"整體最大連接數量:",
	"每個Torrent的使用者連接數量:",
	"每個Torrent的上傳連接數量:",
	"如果上傳速度 < 90% 便增加上傳連接數量",
	"基本BitTorrent功能",
	"啟用DHT網絡(E)",
	"向Tracker查詢使用者資訊(A)",
	"為新的Torrent啟用DHT(E)",
	"啟用使用者資訊交換(P)",
	"啟用本地使用者偵測(L)",
	"限制本地使用者流量(L)",
	"報告給Tracker的IP/主機名稱:",
	"協定加密",
	"連出的:",
	"允許連入的非加密的連接",
	"隊列設定",
	"最大活躍的Torrent數量 (上傳和下載):",
	"最大活躍下載的Torrent數量:",
	"做種滿足 [預設值]",
	"分享率: <=",
	"% 或做種時間:",
	"做種任務比下載任務有較高優先順序(S)",
	"當µTorrent達到上傳目標時",
	"上傳限速為 (kB/s): [0: 停止]",
	"啟用排程器(E)",
	"排程器設定",
	"上傳限速 (kB/s):",
	"下載限速 (kB/s):",
	"關閉時停用DHT(D)",
	"啟用網頁界面(W)",
	"驗證",
	"使用者名稱(U):",
	"密碼(P):",
	"啟用有以下使用者名稱的訪客帳戶(G):",
	"連接性",
	"監聽連接埠 (預設是連線的連接埠)(L):",
	"限制以下IP的存取 (使用逗號分開數個項目)(R):",
	"進階選項 [警告: 請勿修改!]",
	"持久標籤 [使用 | 符號分開數個標籤]",
	"基本快取設定",
	"硬碟快取是用來將頻繁地存取的資料保留在記憶體裏以減少讀出和寫入硬諜的次數. 通常µTorrent會自動地管理快取, 但你也可以透過更改這些設定來改變它的行為.",
	"忽視自動的快取大小並手動指定它的大小(O) (MB):",
	"不需要快取時減少記憶體使用量(R)",
	"進階快取設定",
	"啟用硬碟寫入快取(W)",
	"每兩分鐘寫出沒有碰到的分塊(I)",
	"立即寫出已完成的分塊(T)",
	"啟用硬碟讀出快取(R)",
	"如果上傳速度慢便關閉硬碟讀出快取",
	"從快取移除舊的分塊",
	"快取忙碌時增加自動的快取大小",
	"停用Windows硬碟寫入快取",
	"停用Windows硬碟讀出快取",
	"Torrent屬性",
	"確定",
	"取消",
	"Trackers (每排用一空行分隔)",
	"流量設定",
	"最大上傳速度 (kB/s): [0: 預設]",
	"最大下載速度 (kB/s): [0: 預設]",
	"上傳連接數量: [0: 預設]",
	"做種滿足",
	"忽視預設設定(O)",
	"分享率: <=",
	"% 或上傳時間是:",
	"其它設定",
	"超級種子(I)",
	"啟用DHT(E)",
	"使用者資訊交換(P)",
	"已完成",
	"名稱",
	"%",
	"優先順序",
	"大小",
	"忽略",
	"低",
	"標準",
	"高",
	"已經下載:",
	"已經上傳:",
	"種子數量:",
	"剩餘時間:",
	"下載速度:",
	"上傳速度:",
	"使用者數量:",
	"分享比率:",
	"傳輸",
	"%d/%d 已連接 (整個網絡: %d)",
	"下載:%s 上傳:%s -%s",
	"顯示種類列表(C)",
	"顯示詳細資料(D)",
	"不要下載(D)",
	"高優先順序(H)",
	"低優先順序(L)",
	"標準優先順序(N)",
	"刪除資料(L)",
	"強制重新檢查(H)",
	"強制開始(F)",
	"標籤(L)",
	"暫停(P)",
	"屬性(E)",
	"移除(R)",
	"移除並(N)",
	"開始(S)",
	"停止(S)",
	"活躍的",
	"全部",
	"已完成",
	"下載中",
	"不活躍的",
	"沒有標籤",
	"||可用性||可用性",
	"%",
	"已下載",
	"下載速度",
	"估計剩時",
	"標籤",
	"名稱",
	"#",
	"使用者",
	"剩餘的",
	"種子",
	"種子/使用者",
	"分享率",
	"大小",
	"狀態",
	"已上傳",
	"上傳速度",
	"您想要移除%d個已選擇的Torrents及所有相關的資料?",
	"您想要移除已選擇的Torrent及所有相關的資料?",
	"您想要移除%d個已選擇的Torrents?",
	"您想要移除已選擇的Torrent?",
	"已檢查 %:.1d%%",
	"下載中",
	"錯誤: %s",
	"已完成",
	"暫停",
	"隊列",
	"做種中",
	"停止",
	"輸入標籤",
	"為所選擇的Torrent輸入標籤:",
	"新標籤...",
	"移除標籤",
	"一般||Trackers||使用者||分塊||檔案||速度||紀錄||",
	"開啟Torrent檔案",
	"暫停",
	"選項",
	"移除",
	"開始",
	"停止",
	"GB",
	"kB",
	"MB",
	"進階",
	"流量",
	"連線",
	"硬碟快取",
	"資料夾",
	"一般",
	"排程器",
	"隊列",
	"BitTorrent",
	"網頁界面",
	"停用||啟用||強制||",
	"(沒有)||Socks4||Socks5||HTTPS||HTTP||",
	"名稱",
	"值",
	"<= %d 小時",
	"(忽略)",
	"<= %d 分鐘",
	"%dd %dh",
	"%dh %dm",
	"%dm %ds",
	"%ds",
	"%dw %dd",
	"%dy %dw"
], lang_code = "zhTW";