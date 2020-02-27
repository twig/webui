/*
Copyright (c) 2011 BitTorrent, Inc. All rights reserved.

Use of this source code is governed by a BSD-style that can be
found in the LICENSE file.
*/

var LANG_STR = {
  CT_MASK1: "ტორენტ ფაილები||*.torrent||All files (*.*)||*.*||",
  DLG_BTN_OK: "OK",
  DLG_BTN_CANCEL: "გაუქმება",
  DLG_BTN_APPLY: "მიდი",
  DLG_BTN_YES: "კი",
  DLG_BTN_NO: "არა",
  DLG_BTN_CLOSE: "დახურვა",
  DLG_SETTINGS_00: "პარამეტრები",
  DLG_SETTINGS_1_GENERAL_01: "ენა",
  DLG_SETTINGS_1_GENERAL_02: "ენა:",
  DLG_SETTINGS_1_GENERAL_10: "პირადულობა",
  DLG_SETTINGS_1_GENERAL_11: "შეამოწმე განახლებაზე ავტომატურად",
  DLG_SETTINGS_1_GENERAL_12: "განაახლე ბეტა ვერსიამდე",
  DLG_SETTINGS_1_GENERAL_13:
    "გაგზავნე ანონიმური ინფორმაცია როდესაც ამოწმებ განახლებაზე",
  DLG_SETTINGS_1_GENERAL_17: "როდესაც ვიწერე",
  DLG_SETTINGS_1_GENERAL_18: "დაურთე .!ut დაუმთავრებელ ფაილებს",
  DLG_SETTINGS_1_GENERAL_19: "პრე-განათავსე ყველა ფაილი",
  DLG_SETTINGS_1_GENERAL_20: "აიცილე ლოდინის რეჟიმი თუ არის აქტიური ტორენტები",
  DLG_SETTINGS_2_UI_01: "გამოსახულების ოფციები",
  DLG_SETTINGS_2_UI_02: "დაამოწმე როცა შლი ტორენტს",
  DLG_SETTINGS_2_UI_03: "დაამოწმე როცა შლი ტრეკერებს",
  DLG_SETTINGS_2_UI_04: "აჩვენე დასტურის დიალოგი გამოსვლის დროს",
  DLG_SETTINGS_2_UI_05: "ცვალე სიის ფონის ფერი",
  DLG_SETTINGS_2_UI_06: "აჩვენე მიმდინარე სიჩქარე სათაურის არეში",
  DLG_SETTINGS_2_UI_07: "აჩვენე სიჩქარის ლიმიტი სტატუსის არეში",
  DLG_SETTINGS_2_UI_15: "როდესაც ამატებ ტორენტს",
  DLG_SETTINGS_2_UI_16: "არ დაიწყო გადმოწერა ავტომატურად",
  DLG_SETTINGS_2_UI_17: "გაააქტიურე პროგრამის ფანჯარა",
  DLG_SETTINGS_2_UI_18: "აჩვენე ფანჯარა რომელიც ასახავს ფაილებს ტორენტში",
  DLG_SETTINGS_2_UI_19: "შედეგები ორმაგ დაწკაპუნებაზე",
  DLG_SETTINGS_2_UI_20: "სიდირებული ტორენტებისთვის:",
  DLG_SETTINGS_2_UI_22: "გადმოსაწერი ტორენტებისთვის:",
  DLG_SETTINGS_3_PATHS_01: "ადგილი გადმოწერილი ფაილების",
  DLG_SETTINGS_3_PATHS_02: "მოათავსე ახალი გადმოწერები:",
  DLG_SETTINGS_3_PATHS_03: "ყოველთვის აჩვენე დიალოგი მანუალურ დამატებაზე",
  DLG_SETTINGS_3_PATHS_06: "გადაიტანე დასრულებული გადმოწერები:",
  DLG_SETTINGS_3_PATHS_07: "დაურთე ტორენტის იარლიყი",
  DLG_SETTINGS_3_PATHS_10:
    "მხოლოდ გადაიტანე სტანდარტული გადმოწერების დირექტორიიდან",
  DLG_SETTINGS_3_PATHS_11: "ადგილი .torrents-ების",
  DLG_SETTINGS_3_PATHS_12: "მოატავსე .torrents:",
  DLG_SETTINGS_3_PATHS_15: "გადაიტანე დასრულებული დავალების .torrent-ები:",
  DLG_SETTINGS_3_PATHS_18: "ავტომატურად ჩატვირთე .torrent-ები აქიდან:",
  DLG_SETTINGS_3_PATHS_19: "წაშალე ცატვირთული .torrent-ები",
  DLG_SETTINGS_4_CONN_01: "მოსმენის პორტი",
  DLG_SETTINGS_4_CONN_02: "პორტი შემომავალი კავშირებისთვის:",
  DLG_SETTINGS_4_CONN_04: "შემთხვევითი პორტი",
  DLG_SETTINGS_4_CONN_05: "შემთხვევითი პორტი ყოველ ჩართვაზე",
  DLG_SETTINGS_4_CONN_06: "ჩართე UPnP port mapping",
  DLG_SETTINGS_4_CONN_07: "ჩართე NAT-PMP port mapping",
  DLG_SETTINGS_4_CONN_08: "Proxy სერვერი",
  DLG_SETTINGS_4_CONN_09: "ტიპი:",
  DLG_SETTINGS_4_CONN_11: "Proxy:",
  DLG_SETTINGS_4_CONN_13: "Port:",
  DLG_SETTINGS_4_CONN_15: "აუთენტიკაცია",
  DLG_SETTINGS_4_CONN_16: "სახელი:",
  DLG_SETTINGS_4_CONN_18: "პაროლი:",
  DLG_SETTINGS_4_CONN_19: "გაარკვიე მასპინძელი პროქსით",
  DLG_SETTINGS_4_CONN_20: "გამოიყენე proxy სერვერი P2P შეერთებებისთვის",
  DLG_SETTINGS_4_CONN_21: "დაამატე Windows-ის Firewall-ის გამონაკლისებში",
  DLG_SETTINGS_4_CONN_22: "პროქსი საიდუმლოება",
  DLG_SETTINGS_4_CONN_23: "გათიშე ყველა ლოკალური DNS-ის ძიება",
  DLG_SETTINGS_4_CONN_24:
    "გათიშე ფუნქციები, რომლებიც ეხება ინფორმაციის იდენტიფიკაციას",
  DLG_SETTINGS_4_CONN_25:
    "გათიშე ყველა კავშირი, რომელიც არ არის Proxy-სგან მხარდაჭერილი",
  DLG_SETTINGS_5_BANDWIDTH_01: "გლობალური ატვირთვის სიჩქარის ლიმიტი",
  DLG_SETTINGS_5_BANDWIDTH_02:
    "მაქსიმუმ ატვირთვის სიჩქარე (kB/s): [0: შეუზღუდავი]",
  DLG_SETTINGS_5_BANDWIDTH_03: "ავტომატური",
  DLG_SETTINGS_5_BANDWIDTH_05:
    "ალტერნატიული ატვირტვის სიჩქარე როცა არ ვიწერ (kB/s):",
  DLG_SETTINGS_5_BANDWIDTH_07: "გლობალური გადმოწერის სიჩქარის შეზღუდვა",
  DLG_SETTINGS_5_BANDWIDTH_08:
    "მაქსიმუმ გადმოწერის სიჩქარე (kB/s): [0: შეუზღუდავი]",
  DLG_SETTINGS_5_BANDWIDTH_10: "რაოდენობა კავშირების",
  DLG_SETTINGS_5_BANDWIDTH_11: "გლობალური რაოდენობა მაქსიმომი შეერთებების:",
  DLG_SETTINGS_5_BANDWIDTH_14:
    "მაქსიმუმი რაოდენობა დაკავშირებული პირების თითო ტორენტზე:",
  DLG_SETTINGS_5_BANDWIDTH_15: "რაოდენობა ატვირთვის სლოტების თითო ტორენთზე:",
  DLG_SETTINGS_5_BANDWIDTH_17:
    "გამოიყენე დამატებითი ატვირთვის სლოტები თუ ატვირთვის სიჩქარე < 90%",
  DLG_SETTINGS_5_BANDWIDTH_18: "Global Rate Limit Options",
  DLG_SETTINGS_5_BANDWIDTH_19: "Apply rate limit to transport overhead",
  DLG_SETTINGS_5_BANDWIDTH_20: "შეზღუდე სიჩქარე uTP კავშირებზე",
  DLG_SETTINGS_6_BITTORRENT_01: "ძირიტადი ბიტტორენტ მახასიათებლები",
  DLG_SETTINGS_6_BITTORRENT_02: "ჩართე DHT ქსელი",
  DLG_SETTINGS_6_BITTORRENT_03: "კითხე ტრეკერს scrape ინფორმაცია",
  DLG_SETTINGS_6_BITTORRENT_04: "ჩართე DHT ახალი ტორენტებისთვის",
  DLG_SETTINGS_6_BITTORRENT_05: "ჩარტე პირებთან გაცვლა",
  DLG_SETTINGS_6_BITTORRENT_06: "ჩართე ლოკალური პირების აღმოჩენა",
  DLG_SETTINGS_6_BITTORRENT_07: "შეზღუდე ლოკალური პირების სიჩქარე",
  DLG_SETTINGS_6_BITTORRENT_08: "IP/Hostname ტრეკერისთვის საცნობებლად:",
  DLG_SETTINGS_6_BITTORRENT_10: "პროტოკოლის ენკრიფცია",
  DLG_SETTINGS_6_BITTORRENT_11: "გამავალი:",
  DLG_SETTINGS_6_BITTORRENT_13: "დაუშვი შემომავალი მოძველებული კავშირები",
  DLG_SETTINGS_6_BITTORRENT_14: "ჩართე სიჩქარის მენეჯმენტი [uTP]",
  DLG_SETTINGS_6_BITTORRENT_15: "ჩართე UDP ტრეკერის მხარდაჭერა",
  DLG_SETTINGS_7_TRANSFERCAP_01: "ჩართე Transfer Cap",
  DLG_SETTINGS_7_TRANSFERCAP_02: "Cap პარამეტრები",
  DLG_SETTINGS_7_TRANSFERCAP_03: "შეზღუდული ტიპი:",
  DLG_SETTINGS_7_TRANSFERCAP_04: "გამტარობის ზღვარი:",
  DLG_SETTINGS_7_TRANSFERCAP_05: "დროის პერიოდი (დღეები):",
  DLG_SETTINGS_7_TRANSFERCAP_06: "გამოყენების ისტორია არჩეული პერიოდისთვის:",
  DLG_SETTINGS_7_TRANSFERCAP_07: "ატვირთული:",
  DLG_SETTINGS_7_TRANSFERCAP_08: "გადმოწერილი:",
  DLG_SETTINGS_7_TRANSFERCAP_09: "ატვირთული + გადმოწერილი",
  DLG_SETTINGS_7_TRANSFERCAP_10: "დროის პერიოდი:",
  DLG_SETTINGS_7_TRANSFERCAP_11: "ბოლო %d დღე",
  DLG_SETTINGS_7_TRANSFERCAP_12: "ისტორიის წაშლა",
  DLG_SETTINGS_8_QUEUEING_01: "რიგის პარამეტრები",
  DLG_SETTINGS_8_QUEUEING_02:
    "მაქსიმუმ რაოდენობა აქტიური ტორენტების (ატვირთვა ან გადმოწერა):",
  DLG_SETTINGS_8_QUEUEING_04: "მაქსიმუმ რაოდენობა აქტიური გადმოწერების:",
  DLG_SETTINGS_8_QUEUEING_06: "ასიდირე სანამ [სტანდარტული]",
  DLG_SETTINGS_8_QUEUEING_07: "შეფარდება არის (%):",
  DLG_SETTINGS_8_QUEUEING_09: "სიდირების დროის მინიმუმი (წუთები):",
  DLG_SETTINGS_8_QUEUEING_11: "სიდირებას აქვს მეტი პრიორიტეტი ვიდრე გადმოწერას",
  DLG_SETTINGS_8_QUEUEING_12: "როდესაც µTorrent მიაღწევს სიდირების მიზანს",
  DLG_SETTINGS_8_QUEUEING_13: "შეზღუდე ატვირთვის სიჩქარე (kB/s): [0: გააჩერე]",
  DLG_SETTINGS_9_SCHEDULER_01: "ჩართე განრიგი",
  DLG_SETTINGS_9_SCHEDULER_02: "განრიგის ცხრილი",
  DLG_SETTINGS_9_SCHEDULER_04: "განრიგის პარამეტრები",
  DLG_SETTINGS_9_SCHEDULER_05: "შეზღუდე ატვირთვის სიჩქარე (kB/s):",
  DLG_SETTINGS_9_SCHEDULER_07: "შეზღუდე გადმოწერის სიჩქარე (kB/s):",
  DLG_SETTINGS_9_SCHEDULER_09: "დათიშე DHT როდესას გამორთავ",
  DLG_SETTINGS_9_WEBUI_01: "ჩართე ვებინტერფეისი",
  DLG_SETTINGS_9_WEBUI_02: "აუტენტიკაცია",
  DLG_SETTINGS_9_WEBUI_03: "სახელი:",
  DLG_SETTINGS_9_WEBUI_05: "პაროლი:",
  DLG_SETTINGS_9_WEBUI_07: "დაუშვი სტუმარი ანგარიში ამ სახელით:",
  DLG_SETTINGS_9_WEBUI_09: "შეერთებადობა",
  DLG_SETTINGS_9_WEBUI_10:
    "ალტერნატიული მოსმენის პორტი (სტანდარტულია შეერთების პორტი):",
  DLG_SETTINGS_9_WEBUI_12:
    "შეუზღუდე წვდომა შემდეგ IP-ებს (გამოყავი რამოდენიმე IP მძიმით):",
  DLG_SETTINGS_A_ADVANCED_01: "დამატებითი ოფციები [გაფრთხილება: არ შეცვალო!]",
  DLG_SETTINGS_A_ADVANCED_02: "მონაცემი:",
  DLG_SETTINGS_A_ADVANCED_03: "True",
  DLG_SETTINGS_A_ADVANCED_04: "False",
  DLG_SETTINGS_A_ADVANCED_05: "Set",
  DLG_SETTINGS_B_ADV_UI_01: "სიჩქარის სია [გამოყავით მონაცემები მძიმით]",
  DLG_SETTINGS_B_ADV_UI_02: "გადააჭარბე ავტომატური სიჩქარის სიას",
  DLG_SETTINGS_B_ADV_UI_03: "ატვირთვის სიჩქარის სია:",
  DLG_SETTINGS_B_ADV_UI_05: "გადმოწერის სიჩქარის სია:",
  DLG_SETTINGS_B_ADV_UI_07:
    "მიდმივი იარლიყები [გამოყავით რამოდენიმე ამ | სიმბოლოთი]",
  DLG_SETTINGS_B_ADV_UI_08: "საძიებო ძრავები [ფორმატი: სახელი|URL]",
  DLG_SETTINGS_C_ADV_CACHE_01: "ქეშის ძირითადი პარამეტრები",
  DLG_SETTINGS_C_ADV_CACHE_02:
    "Disk cache გამოიყენება ხშირად საჭირო ინფორმაციისთვის რატა შემცირდეს ვინსტერიდან კითხვა და წერა. µTorrent ჩვეულებრივ განაგებს ქეშს ავტომატურად, მაგრამ თქვენ შეგიძლიათ შეცვალოთ ეს საქციელი ამ პარამეტრების მოდიფიცირებით.",
  DLG_SETTINGS_C_ADV_CACHE_03:
    "გადააჭაბე ქეშის ავტომატურ ზომას და მიუთითე ზომა ხელით (MB):",
  DLG_SETTINGS_C_ADV_CACHE_05:
    "შეამცირე მეხსიერების გამოყენება როცა ქეში არაა საჭირო",
  DLG_SETTINGS_C_ADV_CACHE_06: "დამატებითი ქეშის პარამეტრები",
  DLG_SETTINGS_C_ADV_CACHE_07: "ჩართე დისკის ქეშირება ჩაწერები",
  DLG_SETTINGS_C_ADV_CACHE_08: "ჩაწერე ხალშეუხებელი ბლოკები ყოველ 2 წუთში",
  DLG_SETTINGS_C_ADV_CACHE_09: "ჩაწერე დასრულებული ნაწილები დაუყოვნებლივ",
  DLG_SETTINGS_C_ADV_CACHE_10: "ჩართე დისკის ქეშირება წაკითხვები",
  DLG_SETTINGS_C_ADV_CACHE_11:
    "გამორთე წაკითხვის ქეშირება თუ ატვირთვის სიჩქარე დაბალია",
  DLG_SETTINGS_C_ADV_CACHE_12: "წასალო ძველი ბლოკები ქეშიდან",
  DLG_SETTINGS_C_ADV_CACHE_13:
    "გაზარდე ავტომატური ქეშის ზომა როდესაც ქეში იფლანგება",
  DLG_SETTINGS_C_ADV_CACHE_14: "გათიშე ვინ$დოუსის დისკზე ჩაწერის ქეშირება",
  DLG_SETTINGS_C_ADV_CACHE_15: "გათიშე ვინ$დოუსის დისკიდან კითხვის ქეშირება",
  DLG_SETTINGS_C_ADV_RUN_01: "გაუშვი პროგრამა",
  DLG_SETTINGS_C_ADV_RUN_02: "გაუშვი ეს პროგრამა, როსესაც ტორენტი დასრულდება:",
  DLG_SETTINGS_C_ADV_RUN_04:
    "გაუშვი ეს პროგრამა, როდესაც ტორენტი შეიცვლის რეჟიმს:",
  DLG_SETTINGS_C_ADV_RUN_06:
    "შეგიძლიათ გამოიყენოთ ეს ბრძანებები:\r\n%F - გადმოსაწერი ფაილის სახელი (ერთ ფაილიანი ტორენტისტვის)\r\n%D - დირექტორია სადაც ფაილები ინახება\r\n%N - ტორენტის სახელი\r\n%S - ტორენტის მდგომარეობა\r\n%L - Label\r\n%T - ტრეკერი\r\n%M - Status message string (same as status column)\r\n%I - hex encoded info-hash\r\n\r\nმდგომარეობა არის კომბინაცია:\r\nჩართული = 1, მოწმდება = 2, ჩაირთვება-შემოწმების-შემდეგ = 4,\r\nშემოწმებული = 8, შეცდომა = 16, პაუზა = 32, ავტო = 64, ჩატვირთული = 128",
  DLG_TORRENTPROP_00: "ტორენტის მახასიათებლები/პარამეტრები",
  DLG_TORRENTPROP_1_GEN_01: "ტრეკერები (გამოყავი რიგები ცარიელი ხაზით)",
  DLG_TORRENTPROP_1_GEN_03: "გამტარუნარიანობის პარამეტრები",
  DLG_TORRENTPROP_1_GEN_04:
    "მაქსიმუმ ატვირთვის სიჩქარე (kB/s): [0: სტანდარტული]",
  DLG_TORRENTPROP_1_GEN_06:
    "მაქსიმუმ გადმოწერის სიჩქარე (kB/s): [0: სტანდარტული]",
  DLG_TORRENTPROP_1_GEN_08: "მაქსიმუმ ატვირთვის სლოტები: [0: სტანდარტული]",
  DLG_TORRENTPROP_1_GEN_10: "ასიდირე სანამ",
  DLG_TORRENTPROP_1_GEN_11: "გადააჭარბე სტანდარტულ პარამეტრებს",
  DLG_TORRENTPROP_1_GEN_12: "Minimum ratio (%):",
  DLG_TORRENTPROP_1_GEN_14: "Minimum seeding time (minutes):",
  DLG_TORRENTPROP_1_GEN_16: "სხვა პარამეტრები",
  DLG_TORRENTPROP_1_GEN_17: "დაიწყე სიდირება",
  DLG_TORRENTPROP_1_GEN_18: "ჩართე DHT",
  DLG_TORRENTPROP_1_GEN_19: "პირებთან გაცვლა",
  DLG_ADDEDITRSSFEED_03: "არხი",
  DLG_ADDEDITRSSFEED_04: "არხის მისამართი:",
  DLG_ADDEDITRSSFEED_05: "არჩეული მოკავშჲრეები:",
  DLG_ADDEDITRSSFEED_06: "გამოწერა",
  DLG_ADDEDITRSSFEED_07: "არ გადმოწერო ყველა ელემენტი ავტომატურად",
  DLG_ADDEDITRSSFEED_08:
    "ავტომატურად გადმოწერე არხში გამოქვეყნებული ყველა ელემენტი",
  DLG_ADDEDITRSSFEED_09: "გამოიყენე გონიერი ეპიზოდის ფილტრი",
  DLG_RSSDOWNLOADER_02: "Feed-ები||სანიშნეები||ისტორია||",
  DLG_RSSDOWNLOADER_03: "All Feeds",
  DLG_RSSDOWNLOADER_04: "ფილტრის პარამეტრები",
  DLG_RSSDOWNLOADER_05: "სახელი:",
  DLG_RSSDOWNLOADER_06: "ფილტრი:",
  DLG_RSSDOWNLOADER_07: "არა:",
  DLG_RSSDOWNLOADER_08: "შეინახე აქ:",
  DLG_RSSDOWNLOADER_09: "არხი:",
  DLG_RSSDOWNLOADER_10: "ხარისხი:",
  DLG_RSSDOWNLOADER_11: "ეპიზოდის ნომერი: [მაგ. 1x12-14]",
  DLG_RSSDOWNLOADER_12: "ფილტრი დეკოდირებულის ნაცვლად ამოწმებს ნამდვილ სახელს",
  DLG_RSSDOWNLOADER_13: "არ დაიწყო გადმოწერა ავტომატურად",
  DLG_RSSDOWNLOADER_14: "გონიერი ეპ.ფილტრი",
  DLG_RSSDOWNLOADER_15: "გადმოწერისთვის უმაღლესი პრიორიტეტის მინიჭება",
  DLG_RSSDOWNLOADER_16: "მინიმალური ინტერვალი:",
  DLG_RSSDOWNLOADER_17: "იარლიყი ახალი ტორენტებისთვის:",
  DLG_RSSDOWNLOADER_18: "RSS არხის დამატება...",
  DLG_RSSDOWNLOADER_19: "არხის რედაქტირება...",
  DLG_RSSDOWNLOADER_20: "გათიშე არხი",
  DLG_RSSDOWNLOADER_21: "ჩართე არხი",
  DLG_RSSDOWNLOADER_22: "განაახლე არხი",
  DLG_RSSDOWNLOADER_23: "წაშალე არხი",
  DLG_RSSDOWNLOADER_24: "გადმოწერა",
  DLG_RSSDOWNLOADER_25: "გახსენი URL-ი ბროუსერში",
  DLG_RSSDOWNLOADER_26: "სანიშნეში დამატება",
  DLG_RSSDOWNLOADER_27: "დამატება",
  DLG_RSSDOWNLOADER_28: "წაშლა",
  DLG_RSSDOWNLOADER_29: "ყველა",
  DLG_RSSDOWNLOADER_30: "(ყველა)",
  DLG_RSSDOWNLOADER_31:
    "(ყოველთვის შეადარე )||(მხოლოდ ერთხელ შეადარე )||12 საათი||1 დღე||2 დღე||3 დღე||4 დღე||1 კვირა||2 კვირა||3 კვირა||1 თვე||",
  DLG_RSSDOWNLOADER_32: "RSS არხის დამატება",
  DLG_RSSDOWNLOADER_33: "RSS არხების რედაქტირება",
  DLG_RSSDOWNLOADER_34: "Remove RSS Feed(s)",
  DLG_RSSDOWNLOADER_35: "Really delete the %d selected RSS Feeds?",
  DLG_RSSDOWNLOADER_36: 'ნამდვილად წავშალო RSS არხი "%s"?',
  FEED_COL_FULLNAME: "სრული სახელი",
  FEED_COL_NAME: "სახელი",
  FEED_COL_EPISODE: "ეპიზოდი",
  FEED_COL_FORMAT: "ფორმატი",
  FEED_COL_CODEC: "კოდეკი",
  FEED_COL_DATE: "Date",
  FEED_COL_FEED: "არხი",
  FEED_COL_URL: "წყაროს მისამართი",
  PRS_COL_IP: "IP",
  PRS_COL_PORT: "პორტი",
  PRS_COL_CLIENT: "კლიენტი",
  PRS_COL_FLAGS: "ალმები",
  PRS_COL_PCNT: "%",
  PRS_COL_RELEVANCE: "შესაბამისობა",
  PRS_COL_DOWNSPEED: "აქეთ სიჩქარე",
  PRS_COL_UPSPEED: "იქით სიჩქარე",
  PRS_COL_REQS: "Reqs",
  PRS_COL_WAITED: "ლოდინი",
  PRS_COL_UPLOADED: "ატვირთული",
  PRS_COL_DOWNLOADED: "გადმოწერილი",
  PRS_COL_HASHERR: "ჰაშერი",
  PRS_COL_PEERDL: "პირი იწერ.",
  PRS_COL_MAXUP: "მაქს იქით",
  PRS_COL_MAXDOWN: "მაქს აქეთ",
  PRS_COL_QUEUED: "რიგში",
  PRS_COL_INACTIVE: "არააქტიური",
  FI_COL_DONE: "მზადაა",
  FI_COL_FIRSTPC: "პირველი ნაწილი",
  FI_COL_NAME: "სახელი",
  FI_COL_NUMPCS: "# ნაწილები",
  FI_COL_PCNT: "%",
  FI_COL_PRIO: "პრიორიტეტი",
  FI_COL_SIZE: "ზომა",
  FI_PRI0: "გამოტოვება",
  FI_PRI1: "დაბალი",
  FI_PRI2: "ნორმალური",
  FI_PRI3: "მაღალი",
  GN_TP_01: "გადმოწერილი:",
  GN_TP_02: "ატვირთული:",
  GN_TP_03: "სიდირება:",
  GN_TP_04: "დარჩენილი:",
  GN_TP_05: "გადმოწერის სიჩქარე:",
  GN_TP_06: "ატვირთვის სიჩქარე:",
  GN_TP_07: "პირები:",
  GN_TP_08: "გაზიარების ფარდობა:",
  GN_TP_09: "შეინახე როგორც:",
  GN_TP_10: "ჰაში:",
  GN_GENERAL: "ზოგადი",
  GN_TRANSFER: "ტრანსფერი",
  GN_XCONN: "%d დან %d დაკავშირებულია (%d გუნდში)",
  MAIN_TITLEBAR_SPEED: "D:%s U:%s - %s",
  MENU_COPY: "კოპირება",
  MENU_RESET: "აღდგენა",
  MENU_UNLIMITED: "შეუზღუდავი",
  MP_RESOLVE_IPS: "გაწყვიტე IP-ები",
  MF_GETFILE: "Get File(s)",
  MF_DONT: "არ გადმოწერო",
  MF_HIGH: "მაღალი პრიორიტეტი",
  MF_LOW: "დაბალი პრიორიტეტი",
  MF_NORMAL: "ნორმალური პრიორიტეტი",
  ML_COPY_MAGNETURI: "დააკოპირე Magnet URI",
  ML_DELETE_DATA: "წაშალე მონაცემები",
  ML_DELETE_TORRENT: "წაშალე .torrent",
  ML_DELETE_DATATORRENT: "წაშელე .torrent + მონაცემებიც",
  ML_FORCE_RECHECK: "ფორსირებული გა-დამოწმება",
  ML_FORCE_START: "ფორსირებული სტარტი",
  ML_LABEL: "იარლიყი",
  ML_PAUSE: "პაუზა",
  ML_PROPERTIES: "მახასიათებლები",
  ML_QUEUEDOWN: "გადაწიე ქვევით რიგში",
  ML_QUEUEUP: "გადაწიე ზევით რიგში",
  ML_REMOVE: "ამოიღე",
  ML_REMOVE_AND: "ამოიღე და",
  ML_START: "დაწყება",
  ML_STOP: "გაჩერება",
  OV_CAT_ACTIVE: "აქტიური",
  OV_CAT_ALL: "ყველა",
  OV_CAT_COMPL: "დასრულებული",
  OV_CAT_DL: "იწერება",
  OV_CAT_INACTIVE: "არააქტიური",
  OV_CAT_NOLABEL: "უიარლიყო",
  OV_COL_AVAIL: "||ხელმის.||ხელმიწვდომობა",
  OV_COL_DATE_ADDED: "დამატებულია",
  OV_COL_DATE_COMPLETED: "დასრულდა",
  OV_COL_DONE: "მზადაა",
  OV_COL_DOWNLOADED: "გადმოწერილი",
  OV_COL_DOWNSPD: "აქეთ სიჩქარე",
  OV_COL_ETA: "დრო",
  OV_COL_LABEL: "იარლიყი",
  OV_COL_NAME: "სახელი",
  OV_COL_ORDER: "#",
  OV_COL_PEERS: "პირები",
  OV_COL_REMAINING: "დარჩენილი",
  OV_COL_SEEDS: "სიდირება",
  OV_COL_SEEDS_PEERS: "სიდერი/პირი",
  OV_COL_SHARED: "შეფარდება",
  OV_COL_SIZE: "ზომა",
  OV_COL_SOURCE_URL: "წყაროს მისამართი",
  OV_COL_STATUS: "სტატუსი",
  OV_COL_UPPED: "ატვირთული",
  OV_COL_UPSPD: "იქით სიჩქარე",
  OV_CONFIRM_DELETEDATA_MULTIPLE:
    "დარწმუნებული ხარ რომ გინდა ამოიღო %d არჩეული ტორენტები და ყველა ასოცირებული მონაცემი?",
  OV_CONFIRM_DELETEDATA_ONE:
    "დარწმუნებული ხარ რომ გინდა ამოიღო არჩეული ტორენტი და ყველა ასოცირებული მონაცემი?",
  OV_CONFIRM_DELETE_MULTIPLE:
    "დარწმუნებული ხარ რომ გინდა ამოიღო %d არჩეული ტორენტები?",
  OV_CONFIRM_DELETE_ONE: "დარწმუნებული ხარ რომ გინდა ამოიღო არჩეული ტორენტი?",
  OV_CONFIRM_DELETE_RSSFILTER: 'ნამდვილად წავშალო RSS ფილტრი "%s"?',
  OV_FL_CHECKED: "შემოწმებულია %:.1d%",
  OV_FL_DOWNLOADING: "ვიწერ",
  OV_FL_ERROR: "შეცდომა: %s",
  OV_FL_FINISHED: "დასრულებული",
  OV_FL_PAUSED: "დაპაუზებული",
  OV_FL_QUEUED: "რიგში",
  OV_FL_QUEUED_SEED: "რიგით სიდირება",
  OV_FL_SEEDING: "ვასიდირებ",
  OV_FL_STOPPED: "გაჩერებული",
  OV_NEWLABEL_CAPTION: "შეიყვანეთ იარლიყი",
  OV_NEWLABEL_TEXT: "შეიყვანეთ ახალი იარლიყი მონიშნული ტორენტებისტვის:",
  OV_NEW_LABEL: "ახალი იარლიყი...",
  OV_REMOVE_LABEL: "მოხსენი იარლიყი",
  OV_TABS: "ზოგადი||ტრეკერები||პირები||ნაწილები||ფაილები||სიჩქარე||Log-ერი||",
  OV_TB_ADDTORR: "დაამატე ტორენტი",
  OV_TB_ADDURL: "დაამათე ტორენტი URL -დან",
  OV_TB_PAUSE: "პაუზა",
  OV_TB_PREF: "პარამეტრები",
  OV_TB_QUEUEDOWN: "გადაწიე ქვევით რიგში",
  OV_TB_QUEUEUP: "გადაწიე ზევით რიგში",
  OV_TB_REMOVE: "ამოშლა",
  OV_TB_RSSDOWNLDR: "RSS ჩამწერი",
  OV_TB_START: "დაწყება",
  OV_TB_STOP: "შეჩერება",
  MM_FILE: "ფაილი",
  MM_FILE_ADD_TORRENT: "ტორენტის დამატება...",
  MM_FILE_ADD_URL: "ტორენტის დამატება URL-დან...",
  MM_OPTIONS: "პარამეტრები",
  MM_OPTIONS_PREFERENCES: "პარამეტრები",
  MM_OPTIONS_SHOW_CATEGORY: "აჩვენე კატეგორიების სია",
  MM_OPTIONS_SHOW_DETAIL: "აჩვენე დეტალური ინფორმაცია",
  MM_OPTIONS_SHOW_STATUS: "აჩვენე სტატუსის ზოლი",
  MM_OPTIONS_SHOW_TOOLBAR: "ჩვენება ინსტრუმენტები",
  MM_OPTIONS_TAB_ICONS: "ხატულები ჩანართებზე",
  MM_HELP: "დახმარება",
  MM_HELP_UT_WEBPAGE: "µTorrent-ის ვებ-გვერდი",
  MM_HELP_UT_FORUMS: "µTorrent-ის ფორუმი",
  MM_HELP_WEBUI_FEEDBACK: "Send WebUI Feedback",
  MM_HELP_ABOUT_WEBUI: "About µTorrent WebUI",
  STM_TORRENTS: "Torrent-ები",
  STM_TORRENTS_PAUSEALL: "შეაჩერე ყველა ტორენტი",
  STM_TORRENTS_RESUMEALL: "გააგრძელე ყველა ტორენტი",
  SB_DOWNLOAD: "გ: %s%z/წ",
  SB_LOCAL: "ლ: %z/წ",
  SB_OVERHEAD: "ო: %z/წ",
  SB_TOTAL: "ს: %Z",
  SB_UPLOAD: "ა: %s%z/წ",
  SIZE_B: "B",
  SIZE_EB: "EB",
  SIZE_GB: "GB",
  SIZE_KB: "kB",
  SIZE_MB: "MB",
  SIZE_PB: "PB",
  SIZE_TB: "TB",
  ST_CAPT_ADVANCED: "დამატებით",
  ST_CAPT_BANDWIDTH: "გამტარუნარიანობა",
  ST_CAPT_CONNECTION: "კავშირი",
  ST_CAPT_DISK_CACHE: "Disk Cache",
  ST_CAPT_FOLDER: "დირექტორიები",
  ST_CAPT_GENERAL: "ზოგადი",
  ST_CAPT_SCHEDULER: "დამგეგმავი",
  ST_CAPT_QUEUEING: "რიგში",
  ST_CAPT_UI_EXTRAS: "ინტერფეისის დამატებები",
  ST_CAPT_UI_SETTINGS: "ინტერფეისის პარამეტრები",
  ST_CAPT_BITTORRENT: "ბიტტორენტი",
  ST_CAPT_WEBUI: "ვებ ინტერფეისი",
  ST_CAPT_TRANSFER_CAP: "Transfer Cap",
  ST_CAPT_RUN_PROGRAM: "გაუშვი პროგრამა",
  ST_CBO_UI_DBLCLK_TOR:
    "მახასიათებლების ჩვენება||Start/Stop||გახსენი ფოლდერი||გადმოწერის არის ჩვენება||",
  ST_CBO_ENCRYPTIONS: "გატიშული||ჩართული||ფორსირებული||",
  ST_CBO_PROXY: "(არაფერი)||Socks4||Socks5||HTTPS||HTTP||",
  ST_CBO_TCAP_MODES: "ატვირთვები||გადმოწერები||ატვირთვებს + გადმოწერები||",
  ST_CBO_TCAP_UNITS: "MB||GB||",
  ST_CBO_TCAP_PERIODS: "1||2||5||7||10||14||15||20||21||28||30||31||",
  ST_COL_NAME: "სახელი",
  ST_COL_VALUE: "მნიშვნელობა",
  ST_SCH_DAYCODES: "ორშ||სამ||ოთხ||ხუთ||პარ||შაბ||კვირა||",
  ST_SCH_DAYNAMES:
    "ორშაბათი||სამშაბათი||ოთხშაბათი||ხუთშაბათი||პარასკევი||შაბათი||კვირა||",
  ST_SCH_LGND_FULL: "სრული სიჩქარე",
  ST_SCH_LGND_FULLEX:
    "სრული სიჩქარე - გამოიყენე ნორმალური გლობალი გამტარობის ლიმიტები",
  ST_SCH_LGND_LIMITED: "შეზღუდული",
  ST_SCH_LGND_LIMITEDEX:
    "შეზღუდული - იყენებს განრიგით-მითითებულ გამტარობის ლიმიტებს",
  ST_SCH_LGND_SEEDING: "სიდირება მხოლოდ",
  ST_SCH_LGND_SEEDINGEX:
    "სიდირება მხოლოდ - მხოლოდ ატვირთვები (შეიცავს არასრულებსაც)",
  ST_SCH_LGND_OFF: "გამორთვა",
  ST_SCH_LGND_OFFEX:
    "გამორთე - შეაჩერე ყველა ტორენტი რომელის არ არი ფორსირებული",
  ST_SEEDTIMES_HOURS: "<= %d საათი",
  ST_SEEDTIMES_IGNORE: "(იგნორი)",
  ST_SEEDTIMES_MINUTES: "<= %d წუთი",
  TIME_DAYS_HOURS: "%dდ %dს",
  TIME_HOURS_MINS: "%dს %dწთ",
  TIME_MINS_SECS: "%dწთ %dწმ",
  TIME_SECS: "%წმ",
  TIME_WEEKS_DAYS: "%dკ %dდ",
  TIME_YEARS_WEEKS: "%dწლ %dკ"
};