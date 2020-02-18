/*
Copyright (c) 2011 BitTorrent, Inc. All rights reserved.

Use of this source code is governed by a BSD-style that can be
found in the LICENSE file.
*/

var LANG_STR =
{
   "CT_MASK1":"Comhaid Torrent||*.torrent||Gach comhad (*.*)||*.*||",
   "DLG_BTN_OK":"Tá go maith",
   "DLG_BTN_CANCEL":"Cealaigh",
   "DLG_BTN_APPLY":"Cuir i bhfeidhm",
   "DLG_BTN_YES":"Tá",
   "DLG_BTN_NO":"Níl",
   "DLG_BTN_CLOSE":"Dún",
   "DLG_SETTINGS_00":"Sainroghanna",
   "DLG_SETTINGS_1_GENERAL_01":"Béarla",
   "DLG_SETTINGS_1_GENERAL_02":"Béarla:",
   "DLG_SETTINGS_1_GENERAL_10":"Príobháideachas",
   "DLG_SETTINGS_1_GENERAL_11":"Téigh ar thóir nuashonraithe go huathoibríoch",
   "DLG_SETTINGS_1_GENERAL_12":"Nuashonraigh go dtí leagain beta",
   "DLG_SETTINGS_1_GENERAL_13":"Seol faisnéis anaithnid nuair atá tú sa tóir ar nuashonruithe",
   "DLG_SETTINGS_1_GENERAL_17":"Nuair atáim ag Íosluchtú",
   "DLG_SETTINGS_1_GENERAL_18":"Cuir .!ut le comhaid neamhchríochnaithe",
   "DLG_SETTINGS_1_GENERAL_19":"Réamh-leithdháil gach comhad",
   "DLG_SETTINGS_1_GENERAL_20":"Cuir bac ar Fuireachas má tá torrentí gníomhacha ann",
   "DLG_SETTINGS_2_UI_01":"Roghanna Táispeána",
   "DLG_SETTINGS_2_UI_02":"Deimhnigh nuair atá torrentí á scrios",
   "DLG_SETTINGS_2_UI_03":"Deimhnigh nuair atá lorgairí á scrios",
   "DLG_SETTINGS_2_UI_04":"Taispeáin fuinneog deimhniúchán ag am scor",
   "DLG_SETTINGS_2_UI_05":"Uainigh dath an chúlra sa réim",
   "DLG_SETTINGS_2_UI_06":"Taispeáin an luas reatha i sabh an teidil",
   "DLG_SETTINGS_2_UI_07":"Taispeáin luas teorainn sa threoshabh",
   "DLG_SETTINGS_2_UI_15":"Nuair Atá Torrentí á Chur Leis",
   "DLG_SETTINGS_2_UI_16":"Ná tosaigh an t-íosluchtú go huathoibríoch",
   "DLG_SETTINGS_2_UI_17":"Gníomhachtaigh fuinneog na feidhmchláir",
   "DLG_SETTINGS_2_UI_18":"Taispeáin fuinneog a thaispeánann na comhaid istigh sa torrent",
   "DLG_SETTINGS_2_UI_19":"Gníomhartha le haghaidh Cliceáil Dhúbailte",
   "DLG_SETTINGS_2_UI_20":"Le haghaidh torrentí a shíolú:",
   "DLG_SETTINGS_2_UI_22":"Le haghaidh torrentí a íosluchtú:",
   "DLG_SETTINGS_3_PATHS_01":"Suíomh na Comhaid Íosluchtaithe",
   "DLG_SETTINGS_3_PATHS_02":"Cuir íosluchtaithe nua i:",
   "DLG_SETTINGS_3_PATHS_03":"Taispeáin i gcónaí dialóg ar chuir le de lámh",
   "DLG_SETTINGS_3_PATHS_06":"Bog íosluchtaithe críochnaithe chuig:",
   "DLG_SETTINGS_3_PATHS_07":"Cuir lipéid an torrent le",
   "DLG_SETTINGS_3_PATHS_10":"Bog ón gcomhadlann íosluchtaithe reamhshocraithe amháin",
   "DLG_SETTINGS_3_PATHS_11":"Suíomh na .torrents",
   "DLG_SETTINGS_3_PATHS_12":"Cuir comhaid .torrent i dtaisce i:",
   "DLG_SETTINGS_3_PATHS_15":"Bog .torrents do chúramaí críochnaithe chuig:",
   "DLG_SETTINGS_3_PATHS_18":"Uathluchtaigh .torrents ó:",
   "DLG_SETTINGS_3_PATHS_19":"Scrios .torrents luchtaithe",
   "DLG_SETTINGS_4_CONN_01":"Port Éisteachta",
   "DLG_SETTINGS_4_CONN_02":"An port a bhaintear feidhm as le haghaidh naisc isteach:",
   "DLG_SETTINGS_4_CONN_04":"Port fánach",
   "DLG_SETTINGS_4_CONN_05":"Roghnaigh port go fánach gach uair a thosaíonn µTorrent",
   "DLG_SETTINGS_4_CONN_06":"Cumasaigh léarscáiliú port UPnP",
   "DLG_SETTINGS_4_CONN_07":"Cumasaigh léarscáiliú na poirt NAT-PMP",
   "DLG_SETTINGS_4_CONN_08":"Seachfhreastalaí",
   "DLG_SETTINGS_4_CONN_09":"Cineál:",
   "DLG_SETTINGS_4_CONN_11":"Seach:",
   "DLG_SETTINGS_4_CONN_13":"Port:",
   "DLG_SETTINGS_4_CONN_15":"Fíordheimhniú",
   "DLG_SETTINGS_4_CONN_16":"Ainm Úsáideora:",
   "DLG_SETTINGS_4_CONN_18":"Focal Faire:",
   "DLG_SETTINGS_4_CONN_19":"Réitigh óstainmneacha tríd an seachfhreastalaí",
   "DLG_SETTINGS_4_CONN_20":"Bain feidhm as seachfhreastalaí le haghaidh naisc idir chomhghleacaithe",
   "DLG_SETTINGS_4_CONN_21":"Cuir eisceacht i mBalla Dóiteáin Windows",
   "DLG_SETTINGS_4_CONN_22":"Proxy Privacy",
   "DLG_SETTINGS_4_CONN_23":"Disable all local DNS lookups",
   "DLG_SETTINGS_4_CONN_24":"Díchumasaigh gnéithe a sceitheann eolas a aithníonn thú",
   "DLG_SETTINGS_4_CONN_25":"Disable connections unsupported by the proxy",
   "DLG_SETTINGS_5_BANDWIDTH_01":"Teorannú Luas Uasluchtú Domhanda",
   "DLG_SETTINGS_5_BANDWIDTH_02":"Barrluas uasluchtú (kB/s): [0: gan teorann]",
   "DLG_SETTINGS_5_BANDWIDTH_03":"Uathoibríoch",
   "DLG_SETTINGS_5_BANDWIDTH_05":"Luas uasluchtú malartach nuair nach bhfuilir ag íosluchtú (kB/s):",
   "DLG_SETTINGS_5_BANDWIDTH_07":"Teorannú Luas Íosluchtú Domhanda",
   "DLG_SETTINGS_5_BANDWIDTH_08":"Barrluas íosluchtú (kB/s): [0: gan teorann]",
   "DLG_SETTINGS_5_BANDWIDTH_10":"Líon na Naisc",
   "DLG_SETTINGS_5_BANDWIDTH_11":"Uasmhéid domhanda na naisc:",
   "DLG_SETTINGS_5_BANDWIDTH_14":"Uasmhéid na comhghleacaithe nasctha an torrent:",
   "DLG_SETTINGS_5_BANDWIDTH_15":"Líon na sliotáin uasluchtú an torrent:",
   "DLG_SETTINGS_5_BANDWIDTH_17":"Bain feidhm as breis sliotáin uasluchtú má tá an luas uasluchtú < 90%",
   "DLG_SETTINGS_5_BANDWIDTH_18":"Global Rate Limit Options",
   "DLG_SETTINGS_5_BANDWIDTH_19":"Apply rate limit to transport overhead",
   "DLG_SETTINGS_5_BANDWIDTH_20":"Apply rate limit to uTP connections",
   "DLG_SETTINGS_6_BITTORRENT_01":"Gnéithe Bhunúsacha BitTorrent",
   "DLG_SETTINGS_6_BITTORRENT_02":"Cumasaigh Líonra DHT",
   "DLG_SETTINGS_6_BITTORRENT_03":"Iarr ar fhaisnéis scríbe ón lorgaire",
   "DLG_SETTINGS_6_BITTORRENT_04":"Cumasaigh DHT le haghaidh torrentí nua:",
   "DLG_SETTINGS_6_BITTORRENT_05":"Cumasaigh Malartán na gComhghleacaithe",
   "DLG_SETTINGS_6_BITTORRENT_06":"Cumasaigh Fionnachtain Comhghleacaithe Áitiúil",
   "DLG_SETTINGS_6_BITTORRENT_07":"Teorannaigh leithead an chreasa na gcomhghleacaithe áitiúil",
   "DLG_SETTINGS_6_BITTORRENT_08":"IP/Óstainm chun tuairisc a thabhairt don lorgaire:",
   "DLG_SETTINGS_6_BITTORRENT_10":"Gnás Criptiúcháin",
   "DLG_SETTINGS_6_BITTORRENT_11":"Amach:",
   "DLG_SETTINGS_6_BITTORRENT_13":"Ceadaigh naisc oidhreachta isteach",
   "DLG_SETTINGS_6_BITTORRENT_14":"Enable bandwidth management [uTP]",
   "DLG_SETTINGS_6_BITTORRENT_15":"Enable UDP tracker support",
   "DLG_SETTINGS_7_TRANSFERCAP_01":"Cumasaigh an Teorainn Aistrithe",
   "DLG_SETTINGS_7_TRANSFERCAP_02":"Socruithe na Teorann",
   "DLG_SETTINGS_7_TRANSFERCAP_03":"Limit Type:",
   "DLG_SETTINGS_7_TRANSFERCAP_04":"Bandwidth Cap:",
   "DLG_SETTINGS_7_TRANSFERCAP_05":"Aga (lá):",
   "DLG_SETTINGS_7_TRANSFERCAP_06":"Usage history for selected period:",
   "DLG_SETTINGS_7_TRANSFERCAP_07":"Uasluchtaithe:",
   "DLG_SETTINGS_7_TRANSFERCAP_08":"Íosluchtaithe:",
   "DLG_SETTINGS_7_TRANSFERCAP_09":"Uasluchtaithe + Íosluchtaithe:",
   "DLG_SETTINGS_7_TRANSFERCAP_10":"Aga ama:",
   "DLG_SETTINGS_7_TRANSFERCAP_11":"Na %d lá deiridh",
   "DLG_SETTINGS_7_TRANSFERCAP_12":"Athshocraigh an tOireas",
   "DLG_SETTINGS_8_QUEUEING_01":"Socruithe na Scuaine",
   "DLG_SETTINGS_8_QUEUEING_02":"Uasmhéid na torrentí gníomhacha (uasluchtú nó íosluchtú):",
   "DLG_SETTINGS_8_QUEUEING_04":"Uasmhéid líon na torrentí gníomhacha:",
   "DLG_SETTINGS_8_QUEUEING_06":"Síolaigh Fad Is Atá [Luachanna réamhshocraithe]",
   "DLG_SETTINGS_8_QUEUEING_07":"Cóimheas íosta (%):",
   "DLG_SETTINGS_8_QUEUEING_09":"Minimum seeding time (minutes):",
   "DLG_SETTINGS_8_QUEUEING_11":"Tá tosaíocht níos airde ag curamaí síolú ná cúramaí íosluchtú",
   "DLG_SETTINGS_8_QUEUEING_12":"Nuair a Shroicheann µTorrent an Sprioc Síolú",
   "DLG_SETTINGS_8_QUEUEING_13":"Teorannaigh an luas uasluchtú chuig : [0: stad]",
   "DLG_SETTINGS_9_SCHEDULER_01":"Cumasaigh an Sceidealóir",
   "DLG_SETTINGS_9_SCHEDULER_02":"Clár na Sceidealóra",
   "DLG_SETTINGS_9_SCHEDULER_04":"Socruithe na Sceidealóra",
   "DLG_SETTINGS_9_SCHEDULER_05":"Teorannaigh an luas uasluchtú (kB/s):",
   "DLG_SETTINGS_9_SCHEDULER_07":"Teorannaigh an luas íosluchtú (kB/s):",
   "DLG_SETTINGS_9_SCHEDULER_09":"Díchumasaigh DHT nuair atáthar ag múchadh",
   "DLG_SETTINGS_9_WEBUI_01":"Cumasaigh Comhéadan don Gréasán",
   "DLG_SETTINGS_9_WEBUI_02":"Fíordheimhniú",
   "DLG_SETTINGS_9_WEBUI_03":"Ainm Úsáideora:",
   "DLG_SETTINGS_9_WEBUI_05":"Focal Faire:",
   "DLG_SETTINGS_9_WEBUI_07":"Cumasaigh Aoichuntas le ainm úsáideora:",
   "DLG_SETTINGS_9_WEBUI_09":"Nascacht",
   "DLG_SETTINGS_9_WEBUI_10":"Port éisteachta malartach (an réamhshocrú ná an nasc port):",
   "DLG_SETTINGS_9_WEBUI_12":"Srian rochtain chuig an na IPanna a leanas (scar iontrálacha iolracha le camóg):",
   "DLG_SETTINGS_A_ADVANCED_01":"Ardroghanna [RABHADH: Ná athraigh!]",
   "DLG_SETTINGS_A_ADVANCED_02":"Luach",
   "DLG_SETTINGS_A_ADVANCED_03":"Fíor",
   "DLG_SETTINGS_A_ADVANCED_04":"Bréagach",
   "DLG_SETTINGS_A_ADVANCED_05":"Socraigh",
   "DLG_SETTINGS_B_ADV_UI_01":"Mearréim Míreanna Aníos [Scar luachanna iolracha le camóg]",
   "DLG_SETTINGS_B_ADV_UI_02":"Sáraigh an luas réim aníos uathoibríoch",
   "DLG_SETTINGS_B_ADV_UI_03":"Réim na luasanna uasluchtú:",
   "DLG_SETTINGS_B_ADV_UI_05":"Réim na luasanna íosluchtú:",
   "DLG_SETTINGS_B_ADV_UI_07":"Lipéid Dianseasmhach [Scar lipéid iolracha le | ]",
   "DLG_SETTINGS_B_ADV_UI_08":"Innill Cuardaigh [Ar nós: ainm|URL]",
   "DLG_SETTINGS_C_ADV_CACHE_01":"Bunshocruithe na Taisce",
   "DLG_SETTINGS_C_ADV_CACHE_02":"Baintear feidhm as an dhioscthaisce chun sonraí a dhéantar rochtain orthu go minic chun líon na léamhanna agus scríobhanna chuig an tiomántán crua a laghdú. De ghnáth, bainistíonn µTorrent an taisce go huathoibríoch, ach is féidir leat a iompar a athrú trí na socruithe seo a mhionathrú.",
   "DLG_SETTINGS_C_ADV_CACHE_03":"Sáraigh uathmhéid na taisce agus sonraigh an mhéid de lámh (MB):",
   "DLG_SETTINGS_C_ADV_CACHE_05":"Laghdaigh feidhm na cuimhne nuair nach bhfuil gá leis an taisce",
   "DLG_SETTINGS_C_ADV_CACHE_06":"Ardsocruithe na Taisce",
   "DLG_SETTINGS_C_ADV_CACHE_07":"Cumasaigh taisceadh scríobhanna na diosca",
   "DLG_SETTINGS_C_ADV_CACHE_08":"Scríobh amach ceapa gan láimhseáil gach 2 nóiméad",
   "DLG_SETTINGS_C_ADV_CACHE_09":"Scríobh amach giotaí chríochnaithe láithreach",
   "DLG_SETTINGS_C_ADV_CACHE_10":"Cumasaigh taisceadh léamhanna na diosca",
   "DLG_SETTINGS_C_ADV_CACHE_11":"Múch taisceadh léamhanna má tá an luas uasluchtú mall",
   "DLG_SETTINGS_C_ADV_CACHE_12":"Bain sean ceapa ón taisce",
   "DLG_SETTINGS_C_ADV_CACHE_13":"Méadaigh uathmhéid na taisce nuair atáthar ag glanadh an taisce",
   "DLG_SETTINGS_C_ADV_CACHE_14":"Díchumasaigh taisceadh Windows de scríobhanna diosca",
   "DLG_SETTINGS_C_ADV_CACHE_15":"Díchumasaigh taisceadh Windows de léamhanna diosca",
   "DLG_SETTINGS_C_ADV_RUN_01":"Rith an Ríomchlár",
   "DLG_SETTINGS_C_ADV_RUN_02":"Rith an ríomhchlár seo nuair a chríochnaíonn torrent:",
   "DLG_SETTINGS_C_ADV_RUN_04":"Rith an ríomhchlár seo nuair a athraíonn torrent:",
   "DLG_SETTINGS_C_ADV_RUN_06":"You can use these commands:\r\n%F - Name of downloaded file (for single file torrents)\r\n%D - Directory where files are saved\r\n%N - Title of torrent\r\n%S - State of torrent\r\n%L - Label\r\n%T - Tracker\r\n%M - Status message string (same as status column)\r\n%I - hex encoded info-hash\r\n\r\nState is a combination of:\r\nstarted = 1, checking = 2, start-after-check = 4,\r\nchecked = 8, error = 16, paused = 32, auto = 64, loaded = 128",
   "DLG_TORRENTPROP_00":"Airíonna an Torrent",
   "DLG_TORRENTPROP_1_GEN_01":"Lorgairí (scar sraitheanna le líne folamh)",
   "DLG_TORRENTPROP_1_GEN_03":"Socruithe Leithead an Chreasa",
   "DLG_TORRENTPROP_1_GEN_04":"Barrluas uasluchtú (kB/s): [0: réamhshocraithe]",
   "DLG_TORRENTPROP_1_GEN_06":"Barrluas íosluchtú (kB/s): [0: réamhshocraithe]",
   "DLG_TORRENTPROP_1_GEN_08":"Líon na sliotáin uasluchtú: [bán: bain feidhm as an réamhshocrú]",
   "DLG_TORRENTPROP_1_GEN_10":"Síolraigh fad is atá",
   "DLG_TORRENTPROP_1_GEN_11":"Sáraigh na socruithe réamhshocraithe",
   "DLG_TORRENTPROP_1_GEN_12":"Cóimheas íosta (%):",
   "DLG_TORRENTPROP_1_GEN_14":"Minimum seeding time (minutes):",
   "DLG_TORRENTPROP_1_GEN_16":"Socruithe Eile",
   "DLG_TORRENTPROP_1_GEN_17":"Síolú Tionscantach",
   "DLG_TORRENTPROP_1_GEN_18":"Cumasaigh DHT",
   "DLG_TORRENTPROP_1_GEN_19":"Malartán na gComhghleacaithe",
   "DLG_ADDEDITRSSFEED_03":"Fothaire",
   "DLG_ADDEDITRSSFEED_04":"URL an Fhothaire:",
   "DLG_ADDEDITRSSFEED_05":"Ainm Bréige Saincheaptha:",
   "DLG_ADDEDITRSSFEED_06":"Síntiús",
   "DLG_ADDEDITRSSFEED_07":"Ná íosluchtaigh gach mír go huathoibríoch",
   "DLG_ADDEDITRSSFEED_08":"Íosluchtaigh gach mír foilsithe sa fotha go huathoibríoch",
   "DLG_ADDEDITRSSFEED_09":"Bain feidhm as an scagaire teagmhais cliste",
   "DLG_RSSDOWNLOADER_02":"Fothaí||Ceanáin||Oireas||",
   "DLG_RSSDOWNLOADER_03":"All Feeds",
   "DLG_RSSDOWNLOADER_04":"Socruithe an Scagaire",
   "DLG_RSSDOWNLOADER_05":"Ainm:",
   "DLG_RSSDOWNLOADER_06":"Scagaire:",
   "DLG_RSSDOWNLOADER_07":"Ní:",
   "DLG_RSSDOWNLOADER_08":"Cur i dtaisce i:",
   "DLG_RSSDOWNLOADER_09":"Fothaire:",
   "DLG_RSSDOWNLOADER_10":"Cáilíocht:",
   "DLG_RSSDOWNLOADER_11":"Uimhir an Chláir: [msh: 1x12-14]",
   "DLG_RSSDOWNLOADER_12":"Comhoiriúnann an scagaire an t-ainm bunaidh seachas an t-ainm díchódaithe",
   "DLG_RSSDOWNLOADER_13":"Ná tosaigh íosluchtaithe go huathoibríoch",
   "DLG_RSSDOWNLOADER_14":"Scagaire cliste",
   "DLG_RSSDOWNLOADER_15":"Tabhair an tosaíocht is airde don t-íosluchtú",
   "DLG_RSSDOWNLOADER_16":"Íos-idirlinn:",
   "DLG_RSSDOWNLOADER_17":"Lipéad do torrentí nua:",
   "DLG_RSSDOWNLOADER_18":"Cuir Fothaire RSS Leis...",
   "DLG_RSSDOWNLOADER_19":"Cuir in Eagar an Fothaire",
   "DLG_RSSDOWNLOADER_20":"Díchumasaigh an Fothaire",
   "DLG_RSSDOWNLOADER_21":"Cumasaigh an Fothaire",
   "DLG_RSSDOWNLOADER_22":"Nuashonraigh an Fothaire",
   "DLG_RSSDOWNLOADER_23":"Scrios an Fothaire",
   "DLG_RSSDOWNLOADER_24":"Íosluchtaigh",
   "DLG_RSSDOWNLOADER_25":"Oscail an URL sa Líonléitheoir",
   "DLG_RSSDOWNLOADER_26":"Cuir le do Cheanáin",
   "DLG_RSSDOWNLOADER_27":"Cuir le",
   "DLG_RSSDOWNLOADER_28":"Scrios",
   "DLG_RSSDOWNLOADER_29":"UILE",
   "DLG_RSSDOWNLOADER_30":"(Uile)",
   "DLG_RSSDOWNLOADER_31":"(comhoiriúnaigh i gcónaí)||(comhoiriúnaig uair amháin)||12 uaireanta||1 lá||2 lá||3 lá||4 lá||1 seachtain||2 seachtain||3 seachtain||1 mí||",
   "DLG_RSSDOWNLOADER_32":"Cuir Fothaire RSS Leis",
   "DLG_RSSDOWNLOADER_33":"Cuir in Eagar an Fothaire RSS",
   "DLG_RSSDOWNLOADER_34":"Remove RSS Feed(s)",
   "DLG_RSSDOWNLOADER_35":"Really delete the %d selected RSS Feeds?",
   "DLG_RSSDOWNLOADER_36":"Scrios Fothaire RSS Feed \"%s\" i ndáiríre?",
   "FEED_COL_FULLNAME":"Ainm Iomlán",
   "FEED_COL_NAME":"Ainm",
   "FEED_COL_EPISODE":"Clár",
   "FEED_COL_FORMAT":"Cruth",
   "FEED_COL_CODEC":"Comhbhrú/dí-chomhbhrú",
   "FEED_COL_DATE":"Date",
   "FEED_COL_FEED":"Fothaire",
   "FEED_COL_URL":"Fréamh URL",
   "PRS_COL_IP":"IP",
   "PRS_COL_PORT":"Port",
   "PRS_COL_CLIENT":"Comhghleacaí",
   "PRS_COL_FLAGS":"Bratacha",
   "PRS_COL_PCNT":"%",
   "PRS_COL_RELEVANCE":"Ábharthacht",
   "PRS_COL_DOWNSPEED":"Íosluas",
   "PRS_COL_UPSPEED":"Uasluas",
   "PRS_COL_REQS":"Iarr",
   "PRS_COL_WAITED":"Fuirithe",
   "PRS_COL_UPLOADED":"Uasluchtaithe",
   "PRS_COL_DOWNLOADED":"Íosluchtaithe",
   "PRS_COL_HASHERR":"Hasherr",
   "PRS_COL_PEERDL":"Íosl Comh.",
   "PRS_COL_MAXUP":"Uasmhéid Suas",
   "PRS_COL_MAXDOWN":"Uasmhéid Síos",
   "PRS_COL_QUEUED":"I scuaine",
   "PRS_COL_INACTIVE":"Neamhghníomhach",
   "FI_COL_DONE":"Déanta",
   "FI_COL_FIRSTPC":"An Chéad Giota",
   "FI_COL_NAME":"Ainm",
   "FI_COL_NUMPCS":"# Giotaí",
   "FI_COL_PCNT":"%",
   "FI_COL_PRIO":"Tosaíocht",
   "FI_COL_SIZE":"Méid",
   "FI_PRI0":"failligh",
   "FI_PRI1":"íseal",
   "FI_PRI2":"gnáth",
   "FI_PRI3":"ard",
   "GN_TP_01":"Íosluchtaithe:",
   "GN_TP_02":"Uasluchtaithe:",
   "GN_TP_03":"Síolta:",
   "GN_TP_04":"Fágtha:",
   "GN_TP_05":"Luas Íosluchtú:",
   "GN_TP_06":"Luas Uasluchtú:",
   "GN_TP_07":"Comhghleacaithe:",
   "GN_TP_08":"Cóimheas:",
   "GN_TP_09":"Taisc Mar:",
   "GN_TP_10":"Hais:",
   "GN_GENERAL":"Coiteann",
   "GN_TRANSFER":"Aistriú",
   "GN_XCONN":"%d de %d nasctha (%d sa saithe)",
   "MAIN_TITLEBAR_SPEED":"Í:%s U:%s - %s",
   "MENU_COPY":"Macasamhlaigh",
   "MENU_RESET":"Athshocraigh",
   "MENU_UNLIMITED":"Gan teorainn",
   "MP_RESOLVE_IPS":"Réitigh IPanna",
   "MF_GETFILE":"Get File(s)",
   "MF_DONT":"Ná Íosluchtaigh",
   "MF_HIGH":"Tosaíocht Ard",
   "MF_LOW":"Tosaíocht Íseal",
   "MF_NORMAL":"Gnáth Tosaíocht",
   "ML_COPY_MAGNETURI":"Macasamhlaigh URI an Magnet",
   "ML_DELETE_DATA":"Scrios na Sonraí",
   "ML_DELETE_TORRENT":"Scrios an .torrent",
   "ML_DELETE_DATATORRENT":"Scrios an .torrent + Sonraí",
   "ML_FORCE_RECHECK":"Éignigh Athdhearbhú",
   "ML_FORCE_START":"Éignigh Tosú",
   "ML_LABEL":"Lipéid",
   "ML_PAUSE":"Moilligh",
   "ML_PROPERTIES":"Airíonna",
   "ML_QUEUEDOWN":"Bog Síos sa Scuaine",
   "ML_QUEUEUP":"Bog Suas sa Scuaine",
   "ML_REMOVE":"Bain",
   "ML_REMOVE_AND":"Bain Agus",
   "ML_START":"Tosaigh",
   "ML_STOP":"Stad",
   "OV_CAT_ACTIVE":"Gníomhach",
   "OV_CAT_ALL":"Uile",
   "OV_CAT_COMPL":"Críochnaithe",
   "OV_CAT_DL":"Ag Íosluchtú",
   "OV_CAT_INACTIVE":"Neamhghíomhach",
   "OV_CAT_NOLABEL":"Gan Lipéad",
   "OV_COL_AVAIL":"||Infh.||Infhaighteacht",
   "OV_COL_DATE_ADDED":"Churtha Leis",
   "OV_COL_DATE_COMPLETED":"Críochnaithe Ar An",
   "OV_COL_DONE":"Déanta",
   "OV_COL_DOWNLOADED":"Íosluchtaithe",
   "OV_COL_DOWNSPD":"Luas Síos",
   "OV_COL_ETA":"ASM",
   "OV_COL_LABEL":"Lipéad",
   "OV_COL_NAME":"Ainm",
   "OV_COL_ORDER":"#",
   "OV_COL_PEERS":"Comhghleacaithe",
   "OV_COL_REMAINING":"Fágtha",
   "OV_COL_SEEDS":"Síolta",
   "OV_COL_SEEDS_PEERS":"Síolta/Comhghleacaithe",
   "OV_COL_SHARED":"Cóimheas",
   "OV_COL_SIZE":"Méid",
   "OV_COL_SOURCE_URL":"Fréamh URL",
   "OV_COL_STATUS":"Treo",
   "OV_COL_UPPED":"Uasluchtaithe",
   "OV_COL_UPSPD":"Luas Suas",
   "OV_CONFIRM_DELETEDATA_MULTIPLE":"An bhfuil tú cinnte go dteastaíonn uait na %d torrentí roghnaithe agus na sonraí gaolmhar uile a bhaint?",
   "OV_CONFIRM_DELETEDATA_ONE":"An bhfuil tú cinnte go dteastaíonn uait an torrent roghnaithe agus na sonraí gaolmhar uile a bhaint?",
   "OV_CONFIRM_DELETE_MULTIPLE":"An bhfuil tú cinnte go dteastaíonn uait na d torrentí roghnaithe a bhaint?",
   "OV_CONFIRM_DELETE_ONE":"An bhfuil tú cinnte go dteastaíonn uait an torrent roghnaithe a bhaint?",
   "OV_CONFIRM_DELETE_RSSFILTER":"Scrios i ndáiríre Scagaire RSS \"%s\"?",
   "OV_FL_CHECKED":"Dearbhaithe %:.1d%",
   "OV_FL_DOWNLOADING":"Ag Íosluchtú",
   "OV_FL_ERROR":"Botún: %s",
   "OV_FL_FINISHED":"Críochnaithe",
   "OV_FL_PAUSED":"Ar Sos",
   "OV_FL_QUEUED":"I Scuaine",
   "OV_FL_QUEUED_SEED":"Síol i Scuaine",
   "OV_FL_SEEDING":"Ag Síolú",
   "OV_FL_STOPPED":"Stadta",
   "OV_NEWLABEL_CAPTION":"Cuir isteach lipéad",
   "OV_NEWLABEL_TEXT":"Cuir isteach an lipéad nua do na torrentí roghnaithe:",
   "OV_NEW_LABEL":"Lipéad Nua...",
   "OV_REMOVE_LABEL":"Bain an Lipéad",
   "OV_TABS":"Coiteann||Lorgairí||Comhghleacaithe||Giotaí||Comhaid||Luas||Taifead||",
   "OV_TB_ADDTORR":"Cuir Torrent Leis",
   "OV_TB_ADDURL":"Cuir Torrent leis ó URL",
   "OV_TB_PAUSE":"Moilligh",
   "OV_TB_PREF":"Sainroghanna",
   "OV_TB_QUEUEDOWN":"Bog Síos sa Scuaine",
   "OV_TB_QUEUEUP":"Bog Suas sa Scuaine",
   "OV_TB_REMOVE":"Bain",
   "OV_TB_RSSDOWNLDR":"Íosluchtaitheoir RSS",
   "OV_TB_START":"Tosaigh",
   "OV_TB_STOP":"Stad",
   "MM_FILE":"Comhad",
   "MM_FILE_ADD_TORRENT":"Cuir Torrent Leis...",
   "MM_FILE_ADD_URL":"Cuir Torrent Leis ó URL...",
   "MM_OPTIONS":"Roghanna",
   "MM_OPTIONS_PREFERENCES":"Sainroghanna",
   "MM_OPTIONS_SHOW_CATEGORY":"Taispeáin Réim na nAicmí",
   "MM_OPTIONS_SHOW_DETAIL":"Taispeáin Faisnéis Sonraithe",
   "MM_OPTIONS_SHOW_STATUS":"Taispeáin an Treoshabh",
   "MM_OPTIONS_SHOW_TOOLBAR":"Taispeáin Sabh na nUirlisí",
   "MM_OPTIONS_TAB_ICONS":"Deilbhíní ar na Cluaisíní",
   "MM_HELP":"Cabhair",
   "MM_HELP_UT_WEBPAGE":"Láithreán Gréasáin µTorrent",
   "MM_HELP_UT_FORUMS":"Cláir Plé µTorrent",
   "MM_HELP_WEBUI_FEEDBACK":"Send WebUI Feedback",
   "MM_HELP_ABOUT_WEBUI":"About µTorrent WebUI",
   "STM_TORRENTS":"Torrentí",
   "STM_TORRENTS_PAUSEALL":"Moilligh gach torrent",
   "STM_TORRENTS_RESUMEALL":"Atosaigh gach torrent",
   "SB_DOWNLOAD":"D: %s%z/s",
   "SB_LOCAL":" L: %z/s",
   "SB_OVERHEAD":" O: %z/s",
   "SB_TOTAL":" T: %Z",
   "SB_UPLOAD":"U: %s%z/s",
   "SIZE_B":"B",
   "SIZE_EB":"EB",
   "SIZE_GB":"GB",
   "SIZE_KB":"kB",
   "SIZE_MB":"MB",
   "SIZE_PB":"PB",
   "SIZE_TB":"TB",
   "ST_CAPT_ADVANCED":"Ardroghanna",
   "ST_CAPT_BANDWIDTH":"Leithead an Chreasa",
   "ST_CAPT_CONNECTION":"Nasc",
   "ST_CAPT_DISK_CACHE":"Dioscthaisce",
   "ST_CAPT_FOLDER":"Comhadlanna",
   "ST_CAPT_GENERAL":"Coiteann",
   "ST_CAPT_SCHEDULER":"Sceidealóir",
   "ST_CAPT_QUEUEING":"Ag Dul i Scuaine",
   "ST_CAPT_UI_EXTRAS":"Breiseáin an Chomhéadain",
   "ST_CAPT_UI_SETTINGS":"Socruithe an Chomhéadain",
   "ST_CAPT_BITTORRENT":"BitTorrent",
   "ST_CAPT_WEBUI":"Comhéadan Gréasáin",
   "ST_CAPT_TRANSFER_CAP":"Teorainn Aistrithe",
   "ST_CAPT_RUN_PROGRAM":"Rith an Ríomhchlár",
   "ST_CBO_UI_DBLCLK_TOR":"Taispeáin Airíonna||Tosaigh/Stad||Oscail Fillteán||Taispeáin Sabh na n-Íosluchtaithe||",
   "ST_CBO_ENCRYPTIONS":"Díchumasaithe||Cumascaithe||Éignithe||",
   "ST_CBO_PROXY":"(dada)||Socks4||Socks5||HTTPS||HTTP||",
   "ST_CBO_TCAP_MODES":"Uasluchtuithe||Íosluchtuithe||Uasluchtuithe + Íosluchtuithe||",
   "ST_CBO_TCAP_UNITS":"MB||GB||",
   "ST_CBO_TCAP_PERIODS":"1||2||5||7||10||14||15||20||21||28||30||31||",
   "ST_COL_NAME":"Ainm",
   "ST_COL_VALUE":"Luach",
   "ST_SCH_DAYCODES":"Lua||Mar||Céa||Déa||Aoi||Sat||Dom||",
   "ST_SCH_DAYNAMES":"Dé Luain||Dé Máirt||Dé Céadaoin||Déardaoin||Dé hAoine||Dé Sathairn||Dé Domhnaigh||",
   "ST_SCH_LGND_FULL":"Luas iomlán",
   "ST_SCH_LGND_FULLEX":"Luas iomlán - Feidhmeanna gnáth domhanda teorainneacha leithead an chreasa",
   "ST_SCH_LGND_LIMITED":"Teoranta",
   "ST_SCH_LGND_LIMITEDEX":"Teoranta - Feidhmeanna sonraithe ag an sceidealóir teorainneacha leithead an chreasa",
   "ST_SCH_LGND_SEEDING":"Síolú amháin",
   "ST_SCH_LGND_SEEDINGEX":"Síolú amháin - Sonraí uasluchtaithe amháin (neamhchríochnaithe san áireamh)",
   "ST_SCH_LGND_OFF":"Múch",
   "ST_SCH_LGND_OFFEX":"Múch - Stadann sé gach torrent nach bhfuil éignithe",
   "ST_SEEDTIMES_HOURS":"<= %d uaireanta",
   "ST_SEEDTIMES_IGNORE":"(Ná bac leis)",
   "ST_SEEDTIMES_MINUTES":"<= %d nóiméid",
   "TIME_DAYS_HOURS":"%dl %du",
   "TIME_HOURS_MINS":"%du %dn",
   "TIME_MINS_SECS":"dn %ds",
   "TIME_SECS":"%ds",
   "TIME_WEEKS_DAYS":"%ds %dl",
   "TIME_YEARS_WEEKS":"%db %ds",
   "ML_MORE_ACTIONS":null,
   "Torrents":null,
   "Feeds":null,
   "App":null,
   "country":null,
   "ETA":null,
   "of":null,
   "/s":null,
   "Paste a torrent or feed URL":null,
   "Home":null,
   "Logout":null,
   "Seeding":null,
   "All Feeds":null,
   "bitrate":null,
   "resolution":null,
   "length":null,
   "streamable":null,
   "type":null,
   "remote":null,
   "about":null,
   "sessions":null,
   "share":null,
   "Share this torrent":null,
   "Share link":null,
   "add":null,
   "logout":null,
   "log in":null,
   "anywhere access":null,
   "stay signed in":null,
   "download":null,
   "Your client is currently not available. Verify that it is connected to the internet.":null,
   "Unable to communicate with your &micro;Torrent client. This message will disappear automatically when a connection is re-established.":null,
   "Open file":null,
   "Download to your computer":null,
   "Open with VLC Media Player":null,
   "Actions":null,
   "season":null,
   "DLG_ABOUT_VERSION_LEGEND":null,
   "DLG_ABOUT_VERSION_VERSION":null,
   "DLG_ABOUT_VERSION_REVISION":null,
   "DLG_ABOUT_VERSION_BUILD_DATE":null,
   "DLG_ABOUT_VERSION_PEER_ID":null,
   "DLG_ABOUT_VERSION_USER_AGENT":null,
   "DLG_ABOUT_UPNP_EXTERNAL_ADDRESS":null,
   "DLG_ABOUT_UI_REVISION":null,
   "DLG_SETTINGS_SAVE":null,
   "DLG_SETTINGS_MENU_TITLE":null,
   "DLG_SETTINGS_10_REMOTE_01":"BitTorrent Remote",
   "DLG_SETTINGS_10_REMOTE_02":"BitTorrent Remote provides an easy and highly secure way of accessing your client through a browser.",
   "DLG_SETTINGS_10_REMOTE_03":"Cumasaigh an nasc thíos, roghnaigh ainm ríomhaire agus focal faire agus ná dearmad an ríomhaire seo a fhágáil ar siúl.",
   "DLG_SETTINGS_10_REMOTE_04":"Foghlaim A Thuilleadh",
   "DLG_SETTINGS_10_REMOTE_05":"Enable BitTorrent Remote Access",
   "DLG_SETTINGS_10_REMOTE_06":"Fíordheimhniú",
   "DLG_SETTINGS_10_REMOTE_07":"Ainm an ríomhaire:",
   "DLG_SETTINGS_10_REMOTE_08":"Focal Faire:",
   "DLG_SETTINGS_10_REMOTE_09":"Seol",
   "ST_CAPT_REMOTE":"BitTorrent Remote"
}
