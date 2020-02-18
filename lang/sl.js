/*
Copyright (c) 2011 BitTorrent, Inc. All rights reserved.

Use of this source code is governed by a BSD-style that can be
found in the LICENSE file.
*/

var LANG_STR =
{
   "CT_MASK1":"Datoteke torrent||*.torrent||Vse datoteke (*.*)||*.*||",
   "DLG_BTN_OK":"V redu",
   "DLG_BTN_CANCEL":"Prekliči",
   "DLG_BTN_APPLY":"Uporabi",
   "DLG_BTN_YES":"Da",
   "DLG_BTN_NO":"Ne",
   "DLG_BTN_CLOSE":"Zapri",
   "DLG_SETTINGS_00":"Nastavitve",
   "DLG_SETTINGS_1_GENERAL_01":"Jezik",
   "DLG_SETTINGS_1_GENERAL_02":"Jezik:",
   "DLG_SETTINGS_1_GENERAL_10":"Zasebnost",
   "DLG_SETTINGS_1_GENERAL_11":"Samodejno preverjaj posodobitve",
   "DLG_SETTINGS_1_GENERAL_12":"Posodobi v razvojne (beta) verzije",
   "DLG_SETTINGS_1_GENERAL_13":"Ko preverjam za posodobitve, pošiljam informacije anonimno",
   "DLG_SETTINGS_1_GENERAL_17":"Ko prenašam",
   "DLG_SETTINGS_1_GENERAL_18":"Pripni končnico .!ut nedokončanim datotekam",
   "DLG_SETTINGS_1_GENERAL_19":"Vnaprej zasedi prostor na disku",
   "DLG_SETTINGS_1_GENERAL_20":"Prepreči stanje pripravljenosti, če so torrenti še dejavni",
   "DLG_SETTINGS_2_UI_01":"Možnosti prikaza",
   "DLG_SETTINGS_2_UI_02":"Zahtevaj potrditev, ko brišem torrente",
   "DLG_SETTINGS_2_UI_03":"Zahtevaj potrditev, ko brišem sledilnike",
   "DLG_SETTINGS_2_UI_04":"Zahtevaj potrditev izhoda",
   "DLG_SETTINGS_2_UI_05":"Izmenjujoča barva ozadja seznama",
   "DLG_SETTINGS_2_UI_06":"Prikaži trenutno hitrost v naslovni vrstici",
   "DLG_SETTINGS_2_UI_07":"Prikaži omejitve v statusni vrstici",
   "DLG_SETTINGS_2_UI_15":"Ob dodajanju torrentov",
   "DLG_SETTINGS_2_UI_16":"Ne začni prenosa samodejno",
   "DLG_SETTINGS_2_UI_17":"Aktiviraj okno programa",
   "DLG_SETTINGS_2_UI_18":"Pokaži okno s seznamom datotek v torrentu",
   "DLG_SETTINGS_2_UI_19":"Odzivi na dvojni klik",
   "DLG_SETTINGS_2_UI_20":"Za torrente, ki se sejejo:",
   "DLG_SETTINGS_2_UI_22":"Za torrente ki se prenašajo:",
   "DLG_SETTINGS_3_PATHS_01":"Mesto sprejetih datotek",
   "DLG_SETTINGS_3_PATHS_02":"Shrani nove datoteke v:",
   "DLG_SETTINGS_3_PATHS_03":"Prikaži pog. okno ob ročnem dodajanju",
   "DLG_SETTINGS_3_PATHS_06":"Premakni končane prenose v:",
   "DLG_SETTINGS_3_PATHS_07":"Dodaj oznako torrenta",
   "DLG_SETTINGS_3_PATHS_10":"Premakni le iz privzete mape za prenose",
   "DLG_SETTINGS_3_PATHS_11":"Mesto .torrent datotek",
   "DLG_SETTINGS_3_PATHS_12":"Shrani .torrente v:",
   "DLG_SETTINGS_3_PATHS_15":"Ob koncu prejema premakni .torrent v:",
   "DLG_SETTINGS_3_PATHS_18":"Samodejno naloži .torrente v mapi:",
   "DLG_SETTINGS_3_PATHS_19":"Zbriši naložene .torrente",
   "DLG_SETTINGS_4_CONN_01":"Vrata za komunikacijo",
   "DLG_SETTINGS_4_CONN_02":"Vrata za prihajajoče povezave:",
   "DLG_SETTINGS_4_CONN_04":"Naključna vrata",
   "DLG_SETTINGS_4_CONN_05":"Naključna vrata ob vsakem zagonu",
   "DLG_SETTINGS_4_CONN_06":"Omogoči UPnP preslikovanje vrat",
   "DLG_SETTINGS_4_CONN_07":"Omogoči NAT-PMP preslikovanje vrat",
   "DLG_SETTINGS_4_CONN_08":"Proxy strežnik",
   "DLG_SETTINGS_4_CONN_09":"Tip:",
   "DLG_SETTINGS_4_CONN_11":"Proxy:",
   "DLG_SETTINGS_4_CONN_13":"Vrata",
   "DLG_SETTINGS_4_CONN_15":"Avtentikacija",
   "DLG_SETTINGS_4_CONN_16":"Uporabniško ime:",
   "DLG_SETTINGS_4_CONN_18":"Geslo:",
   "DLG_SETTINGS_4_CONN_19":"Razreši naslove gostiteljev skozi posredovalnik",
   "DLG_SETTINGS_4_CONN_20":"Uporabi proxy strežnik za povezave med soležniki",
   "DLG_SETTINGS_4_CONN_21":"Dodaj izjeme Požarnega zidu programa Windows",
   "DLG_SETTINGS_4_CONN_22":"Zasebnost posredovalnika",
   "DLG_SETTINGS_4_CONN_23":"Onemogoči vse poizvedbe lokalnega domenskega strežnika (DNS)",
   "DLG_SETTINGS_4_CONN_24":"Onemogoči funkcije, ki omogočajo uhajanja pod. za ugotavljanje istovetnosti",
   "DLG_SETTINGS_4_CONN_25":"Onemogoči nepodprte povezave posredovalnika",
   "DLG_SETTINGS_5_BANDWIDTH_01":"Globalno omejevanje pasovne širine",
   "DLG_SETTINGS_5_BANDWIDTH_02":"Največja hitrost oddajanja (kB/s): [0: neomejeno]",
   "DLG_SETTINGS_5_BANDWIDTH_03":"Avtomatična",
   "DLG_SETTINGS_5_BANDWIDTH_05":"Alternativna hitrost oddajanja, ko ne prejemam (kB/s):",
   "DLG_SETTINGS_5_BANDWIDTH_07":"Globalno omejevanje hitrosti prejemanja",
   "DLG_SETTINGS_5_BANDWIDTH_08":"Največja hitrost prejemanja (kB/s): [0: neomejeno]",
   "DLG_SETTINGS_5_BANDWIDTH_10":"Število povezav",
   "DLG_SETTINGS_5_BANDWIDTH_11":"Največje skupno število povezav:",
   "DLG_SETTINGS_5_BANDWIDTH_14":"Največje število povezav s soležniki na torrent:",
   "DLG_SETTINGS_5_BANDWIDTH_15":"Število oddajnih povezav na torrent:",
   "DLG_SETTINGS_5_BANDWIDTH_17":"Oddajaj večim, če je hitrost oddajanja < 90%",
   "DLG_SETTINGS_5_BANDWIDTH_18":"Global Rate Limit Options",
   "DLG_SETTINGS_5_BANDWIDTH_19":"Uporabi omejitev hitrosti za presežek transporta",
   "DLG_SETTINGS_5_BANDWIDTH_20":"Uporabi omejitev hitrosti za uTP povezave",
   "DLG_SETTINGS_6_BITTORRENT_01":"Splošne posebnosti BitTorrenta",
   "DLG_SETTINGS_6_BITTORRENT_02":"Omogoči omrežje DHT",
   "DLG_SETTINGS_6_BITTORRENT_03":"Vprašaj sledilnik po povzetkih",
   "DLG_SETTINGS_6_BITTORRENT_04":"Omogoči DHT za nove torrente",
   "DLG_SETTINGS_6_BITTORRENT_05":"Omogoči izmenjavo soležnikov",
   "DLG_SETTINGS_6_BITTORRENT_06":"Omogoči odkrivanje lokalnih soležnikov",
   "DLG_SETTINGS_6_BITTORRENT_07":"Omeji pasovno širino lokalnih prenosov",
   "DLG_SETTINGS_6_BITTORRENT_08":"IP/ime gostitelja za oddajo sledilniku:",
   "DLG_SETTINGS_6_BITTORRENT_10":"Šifriranje protokola",
   "DLG_SETTINGS_6_BITTORRENT_11":"Izhodne:",
   "DLG_SETTINGS_6_BITTORRENT_13":"Dovoli dohodne nešifrirane povezave",
   "DLG_SETTINGS_6_BITTORRENT_14":"Omogoči upravljanje pasovne širine [uTP]",
   "DLG_SETTINGS_6_BITTORRENT_15":"Omogoči podporo UDP sledilnika",
   "DLG_SETTINGS_7_TRANSFERCAP_01":"Omogoči Omejitev prenosov",
   "DLG_SETTINGS_7_TRANSFERCAP_02":"Nastavitve omejitev",
   "DLG_SETTINGS_7_TRANSFERCAP_03":"Tip omejitve:",
   "DLG_SETTINGS_7_TRANSFERCAP_04":"Omejitev Pasovne širine:",
   "DLG_SETTINGS_7_TRANSFERCAP_05":"Časovno obdobje (dni):",
   "DLG_SETTINGS_7_TRANSFERCAP_06":"Zgodovina uporabe za izbrano obdobje:",
   "DLG_SETTINGS_7_TRANSFERCAP_07":"Oddano:",
   "DLG_SETTINGS_7_TRANSFERCAP_08":"Prejeto:",
   "DLG_SETTINGS_7_TRANSFERCAP_09":"Oddano + prejeto:",
   "DLG_SETTINGS_7_TRANSFERCAP_10":"Časovno obdobje:",
   "DLG_SETTINGS_7_TRANSFERCAP_11":"Zadnjih %d dni",
   "DLG_SETTINGS_7_TRANSFERCAP_12":"Počisti zgod.",
   "DLG_SETTINGS_8_QUEUEING_01":"Nastavitve čakalne vrste",
   "DLG_SETTINGS_8_QUEUEING_02":"Največje število dejavnih torrentov (sprejemanje ali oddajanje):",
   "DLG_SETTINGS_8_QUEUEING_04":"Največje število dejavnih prejemanj:",
   "DLG_SETTINGS_8_QUEUEING_06":"Oddajaj, dokler [privzete nastavitve]",
   "DLG_SETTINGS_8_QUEUEING_07":"Minimalni delilnik (%):",
   "DLG_SETTINGS_8_QUEUEING_09":"Minimalni čas sejanja (v minutah):",
   "DLG_SETTINGS_8_QUEUEING_11":"Oddajanje ima prednost pred prejemanjem",
   "DLG_SETTINGS_8_QUEUEING_12":"Ko µTorrent doseže cilj sejanja",
   "DLG_SETTINGS_8_QUEUEING_13":"meji hitrost oddajanja na: (kB/s): [0: ustavi]",
   "DLG_SETTINGS_9_SCHEDULER_01":"Vklopi urnik",
   "DLG_SETTINGS_9_SCHEDULER_02":"Tabela urnika",
   "DLG_SETTINGS_9_SCHEDULER_04":"Nastavitve urnika",
   "DLG_SETTINGS_9_SCHEDULER_05":"Omeji hitrost oddajanja (kB/s):",
   "DLG_SETTINGS_9_SCHEDULER_07":"Omeji hitrost prejemanja (kB/s):",
   "DLG_SETTINGS_9_SCHEDULER_09":"Onemogoči DHT ob ugašanju",
   "DLG_SETTINGS_9_WEBUI_01":"Omogoči spletni UV",
   "DLG_SETTINGS_9_WEBUI_02":"Avtentikacija",
   "DLG_SETTINGS_9_WEBUI_03":"Uporabniško ime:",
   "DLG_SETTINGS_9_WEBUI_05":"Geslo:",
   "DLG_SETTINGS_9_WEBUI_07":"Omogoči gosta z uporabniškim imenom:",
   "DLG_SETTINGS_9_WEBUI_09":"Povezljivost",
   "DLG_SETTINGS_9_WEBUI_10":"Alternativna vrata za vmesnik (privzeta so vrata za povezavo):",
   "DLG_SETTINGS_9_WEBUI_12":"Omeji dostop do naslednjih IP-jev (ločite vnose z vejico):",
   "DLG_SETTINGS_A_ADVANCED_01":"Napredne možnosti [POZOR: Ne spreminjajte!]",
   "DLG_SETTINGS_A_ADVANCED_02":"Nastavi:",
   "DLG_SETTINGS_A_ADVANCED_03":"Vklop",
   "DLG_SETTINGS_A_ADVANCED_04":"Izklop",
   "DLG_SETTINGS_A_ADVANCED_05":"Nastavi",
   "DLG_SETTINGS_B_ADV_UI_01":"Seznam omejitev hitrosti [ločite različne vrednosti z vejico]",
   "DLG_SETTINGS_B_ADV_UI_02":"Povozi privzeti seznam s hitrostmi",
   "DLG_SETTINGS_B_ADV_UI_03":"Seznam oddajanja:",
   "DLG_SETTINGS_B_ADV_UI_05":"Seznam prejemanja:",
   "DLG_SETTINGS_B_ADV_UI_07":"Stalne oznake [ločite več oznak z znakom | ]",
   "DLG_SETTINGS_B_ADV_UI_08":"Iskalniki [oblika: ime|URL]",
   "DLG_SETTINGS_C_ADV_CACHE_01":"Osnovne nastavitve predpomnilnika",
   "DLG_SETTINGS_C_ADV_CACHE_02":"Diskovni predpomnilnik se uporablja za hranjenje pogosto uporabljenih podatkov v pomnilniku, saj se tako zmanjša število branj in pisanj na disk. S temi nastavitvami lahko vplivate na samodejno upravljanje predpomnilnika, ki ga izvaja µTorrent.",
   "DLG_SETTINGS_C_ADV_CACHE_03":"Povozi privzeto velikost predpomnilnika in določite velikost ročno (MB):",
   "DLG_SETTINGS_C_ADV_CACHE_05":"Zmanjšaj uporabo pomnilnika, ko predpomnilnik ni potreben",
   "DLG_SETTINGS_C_ADV_CACHE_06":"Napredne nastavitve predpomnilnika",
   "DLG_SETTINGS_C_ADV_CACHE_07":"Omogoči predpomnjenje pisanja na disk",
   "DLG_SETTINGS_C_ADV_CACHE_08":"Zapiši nedotaknjene bloke vsaki 2 minuti",
   "DLG_SETTINGS_C_ADV_CACHE_09":"Takoj zapiši dokončane kose",
   "DLG_SETTINGS_C_ADV_CACHE_10":"Omogoči predpomnjenje branja iz diska",
   "DLG_SETTINGS_C_ADV_CACHE_11":"Izklopi predpomnjenje pisanja ko je hitrost oddajanja nizka",
   "DLG_SETTINGS_C_ADV_CACHE_12":"Odstrani stare bloke iz predpomnilnika",
   "DLG_SETTINGS_C_ADV_CACHE_13":"Ob 'thrashingu' predpomnilnika povečaj samodejno velikost predpomnilnika",
   "DLG_SETTINGS_C_ADV_CACHE_14":"Onemogoči Windows predpomnjenje pisanja na disk",
   "DLG_SETTINGS_C_ADV_CACHE_15":"Onemogoči Windows predpomnjenje branja iz diska",
   "DLG_SETTINGS_C_ADV_RUN_01":"Zaženi program",
   "DLG_SETTINGS_C_ADV_RUN_02":"Zaženi ta program, ko se konča torrent:",
   "DLG_SETTINGS_C_ADV_RUN_04":"Zaženi ta program, ko torrent spremeni stanje:",
   "DLG_SETTINGS_C_ADV_RUN_06":"Ukazi, ki so na voljo:\r\n%F - Ime datoteke (če je v torrentu prisotna le ena)\r\n%D - Mapa, kjer so shranjene datoteke\r\n%N - Naslov torrenta\r\n%S - Stanje torrenta\r\n%L - Oznaka\r\n%T - Sledilnik\r\n%M - Niz sporočila stanja (isto kot stolpec stanje)\r\n%I - Hex kodirano info-zgoščevanje\r\n\r\nStanje je kombinacija med:\r\nzačet = 1, v-preverjanju = 2, začet-po-preverjanju = 4,\r\npreverjen = 8, napaka = 16, v-premoru = 32, samodejno = 64, naložen = 128",
   "DLG_TORRENTPROP_00":"Lastnosti torrenta",
   "DLG_TORRENTPROP_1_GEN_01":"Sledilniki (loči jih s prazno vrstico)",
   "DLG_TORRENTPROP_1_GEN_03":"Nastavitve pasovne širine",
   "DLG_TORRENTPROP_1_GEN_04":"Največja hitrost oddajanja (kB/s): [privzeto 0]",
   "DLG_TORRENTPROP_1_GEN_06":"Največja hitrost prejemanja (kB/s): [privzeto 0]",
   "DLG_TORRENTPROP_1_GEN_08":"Število sejalnih mest: [privzeto 0]",
   "DLG_TORRENTPROP_1_GEN_10":"Sejaj, dokler je",
   "DLG_TORRENTPROP_1_GEN_11":"Povozi privzete nastavitve",
   "DLG_TORRENTPROP_1_GEN_12":"Minimalni delilnik (%):",
   "DLG_TORRENTPROP_1_GEN_14":"Minimalni čas sejanja (v minutah):",
   "DLG_TORRENTPROP_1_GEN_16":"Druge nastavitve",
   "DLG_TORRENTPROP_1_GEN_17":"Začetno oddajanje",
   "DLG_TORRENTPROP_1_GEN_18":"Vklopi DHT",
   "DLG_TORRENTPROP_1_GEN_19":"Izmenjava soležnikov",
   "DLG_ADDEDITRSSFEED_03":"Vir",
   "DLG_ADDEDITRSSFEED_04":"URL vira:",
   "DLG_ADDEDITRSSFEED_05":"Ime po meri:",
   "DLG_ADDEDITRSSFEED_06":"Naročnina",
   "DLG_ADDEDITRSSFEED_07":"Ne prenašaj vseh vnosov samodejno",
   "DLG_ADDEDITRSSFEED_08":"Samodejno prenesi vse vnose objavljene v viru",
   "DLG_ADDEDITRSSFEED_09":"Uporabi pameten filter za epizode",
   "DLG_RSSDOWNLOADER_02":"Viri||Priljubljeni||Zgodovina||",
   "DLG_RSSDOWNLOADER_03":"All Feeds",
   "DLG_RSSDOWNLOADER_04":"Nastavitve filtra",
   "DLG_RSSDOWNLOADER_05":"Ime:",
   "DLG_RSSDOWNLOADER_06":"Filter:",
   "DLG_RSSDOWNLOADER_07":"Brez:",
   "DLG_RSSDOWNLOADER_08":"Shrani v:",
   "DLG_RSSDOWNLOADER_09":"Vir:",
   "DLG_RSSDOWNLOADER_10":"Kvaliteta:",
   "DLG_RSSDOWNLOADER_11":"Št. nadaljevanja: [npr. 1x12-14]",
   "DLG_RSSDOWNLOADER_12":"Filter se namesto z očiščenim ujema z izvornim imenom",
   "DLG_RSSDOWNLOADER_13":"Ne začeti prenosov samodejno",
   "DLG_RSSDOWNLOADER_14":"Pameten filter",
   "DLG_RSSDOWNLOADER_15":"Prenosu daj najvišjo prednost",
   "DLG_RSSDOWNLOADER_16":"Najmanjši interval:",
   "DLG_RSSDOWNLOADER_17":"Oznaka novih torrentov:",
   "DLG_RSSDOWNLOADER_18":"Dodaj vir RSS …",
   "DLG_RSSDOWNLOADER_19":"Uredi vir …",
   "DLG_RSSDOWNLOADER_20":"Onemogoči vir",
   "DLG_RSSDOWNLOADER_21":"Omogoči vir",
   "DLG_RSSDOWNLOADER_22":"Posodobi vir",
   "DLG_RSSDOWNLOADER_23":"Zbriši vir",
   "DLG_RSSDOWNLOADER_24":"Prejemanje",
   "DLG_RSSDOWNLOADER_25":"Odpri URL v brskalniku",
   "DLG_RSSDOWNLOADER_26":"Dodaj med priljubljene",
   "DLG_RSSDOWNLOADER_27":"Dodaj",
   "DLG_RSSDOWNLOADER_28":"Izbriši",
   "DLG_RSSDOWNLOADER_29":"VSE",
   "DLG_RSSDOWNLOADER_30":"(Vse)",
   "DLG_RSSDOWNLOADER_31":"(vsako ujemanje)||(samo eno ujemanje)||12 ur||1 dan||2 dneva||3 dnevi||4 dnevi||1 teden||2 tedna||3 tedni||1 mesec||",
   "DLG_RSSDOWNLOADER_32":"Dodaj naročnino RSS",
   "DLG_RSSDOWNLOADER_33":"Uredi RSS vir",
   "DLG_RSSDOWNLOADER_34":"Remove RSS Feed(s)",
   "DLG_RSSDOWNLOADER_35":"Really delete the %d selected RSS Feeds?",
   "DLG_RSSDOWNLOADER_36":"Res zbrišem vir RSS \"%s\"?",
   "FEED_COL_FULLNAME":"Celo ime",
   "FEED_COL_NAME":"Ime",
   "FEED_COL_EPISODE":"Nadaljevanje",
   "FEED_COL_FORMAT":"Oblika",
   "FEED_COL_CODEC":"Kodek",
   "FEED_COL_DATE":"Date",
   "FEED_COL_FEED":"Vir",
   "FEED_COL_URL":"Izvorni URL",
   "PRS_COL_IP":"IP",
   "PRS_COL_PORT":"Vrata",
   "PRS_COL_CLIENT":"Klient",
   "PRS_COL_FLAGS":"Zastavice",
   "PRS_COL_PCNT":"%",
   "PRS_COL_RELEVANCE":"Pomembnost",
   "PRS_COL_DOWNSPEED":"Prejemanje",
   "PRS_COL_UPSPEED":"Oddajanje",
   "PRS_COL_REQS":"Zahtevki",
   "PRS_COL_WAITED":"Čakalna doba",
   "PRS_COL_UPLOADED":"Oddano",
   "PRS_COL_DOWNLOADED":"Prejeto",
   "PRS_COL_HASHERR":"Napaka izvlečka",
   "PRS_COL_PEERDL":"Solež. pr.",
   "PRS_COL_MAXUP":"Največja hitrost oddajanja",
   "PRS_COL_MAXDOWN":"Največja hitrost prejemanja",
   "PRS_COL_QUEUED":"Čakam",
   "PRS_COL_INACTIVE":"Nedejavni",
   "FI_COL_DONE":"Opravljeno",
   "FI_COL_FIRSTPC":"Prvi kos",
   "FI_COL_NAME":"Ime",
   "FI_COL_NUMPCS":"Št. kosov",
   "FI_COL_PCNT":"Odst.",
   "FI_COL_PRIO":"Prednost",
   "FI_COL_SIZE":"Velikost",
   "FI_PRI0":"preskoči",
   "FI_PRI1":"nizka",
   "FI_PRI2":"običajna",
   "FI_PRI3":"visoka",
   "GN_TP_01":"Prejeto:",
   "GN_TP_02":"Oddano:",
   "GN_TP_03":"Semena:",
   "GN_TP_04":"Ostaja:",
   "GN_TP_05":"Hitrost prejemanja:",
   "GN_TP_06":"Hitrost oddajanja:",
   "GN_TP_07":"Odjemalci:",
   "GN_TP_08":"Delilno razmerje:",
   "GN_TP_09":"Shrani kot:",
   "GN_TP_10":"Izvleček:",
   "GN_GENERAL":"Splošno",
   "GN_TRANSFER":"Prenos",
   "GN_XCONN":"%d od %d povezanih (%d v roju)",
   "MAIN_TITLEBAR_SPEED":"P:%s O:%s - %s",
   "MENU_COPY":"Kopiraj",
   "MENU_RESET":"Ponastavi",
   "MENU_UNLIMITED":"Neomejeno",
   "MP_RESOLVE_IPS":"Razreši naslove IP",
   "MF_GETFILE":"Get File(s)",
   "MF_DONT":"Ne prenesi",
   "MF_HIGH":"Visoka prednost",
   "MF_LOW":"Nizka prednost",
   "MF_NORMAL":"Običajna prednost",
   "ML_COPY_MAGNETURI":"Kopiraj magnetni URI",
   "ML_DELETE_DATA":"Zbriši podatke",
   "ML_DELETE_TORRENT":"Zbriši .torrent",
   "ML_DELETE_DATATORRENT":"Zbriši .torrent + podatke",
   "ML_FORCE_RECHECK":"Vsili preverbo",
   "ML_FORCE_START":"Vsili začetek",
   "ML_LABEL":"Oznaka",
   "ML_PAUSE":"Premor",
   "ML_PROPERTIES":"Lastnosti",
   "ML_QUEUEDOWN":"Premakni dol v vrsti",
   "ML_QUEUEUP":"Premakni gor v vrsti",
   "ML_REMOVE":"Odstrani",
   "ML_REMOVE_AND":"Odstrani in",
   "ML_START":"Začni",
   "ML_STOP":"Prenehaj",
   "OV_CAT_ACTIVE":"Dejavni",
   "OV_CAT_ALL":"Vsi",
   "OV_CAT_COMPL":"Dokončani",
   "OV_CAT_DL":"Nedokončani",
   "OV_CAT_INACTIVE":"Nedejavni",
   "OV_CAT_NOLABEL":"Brez oznake",
   "OV_COL_AVAIL":"||Razp.||Razpoložljivost",
   "OV_COL_DATE_ADDED":"Dodan na",
   "OV_COL_DATE_COMPLETED":"Dokončan na",
   "OV_COL_DONE":"Opravljeno",
   "OV_COL_DOWNLOADED":"Prejeto",
   "OV_COL_DOWNSPD":"Prejemanje",
   "OV_COL_ETA":"Čas",
   "OV_COL_LABEL":"Oznaka",
   "OV_COL_NAME":"Ime",
   "OV_COL_ORDER":"Št.",
   "OV_COL_PEERS":"Soležniki",
   "OV_COL_REMAINING":"Ostaja",
   "OV_COL_SEEDS":"Semena",
   "OV_COL_SEEDS_PEERS":"Semena/soležniki",
   "OV_COL_SHARED":"Delilnik",
   "OV_COL_SIZE":"Velikost",
   "OV_COL_SOURCE_URL":"Izvorni URL",
   "OV_COL_STATUS":"Stanje",
   "OV_COL_UPPED":"Oddano",
   "OV_COL_UPSPD":"Oddajanje",
   "OV_CONFIRM_DELETEDATA_MULTIPLE":"Ali ste prepričani, da želite odstraniti %d izbranih torrentov in vse pridružene podatke?",
   "OV_CONFIRM_DELETEDATA_ONE":"Ali ste prepričani, da želite odstraniti izbrani torrent in vse pridružene podatke?",
   "OV_CONFIRM_DELETE_MULTIPLE":"Ali ste prepričani, da želite odstraniti %d izbranih torrentov?",
   "OV_CONFIRM_DELETE_ONE":"Ali ste prepričani, da želite odstraniti izbrani torrent?",
   "OV_CONFIRM_DELETE_RSSFILTER":"Res zbrišem filter za RSS \"%s\"?",
   "OV_FL_CHECKED":"Preveril %:.1d%",
   "OV_FL_DOWNLOADING":"Prejemanje",
   "OV_FL_ERROR":"Napaka: %s",
   "OV_FL_FINISHED":"Dokončano",
   "OV_FL_PAUSED":"Premor",
   "OV_FL_QUEUED":"Čakam",
   "OV_FL_QUEUED_SEED":"Čakam sejanje",
   "OV_FL_SEEDING":"Oddajanje",
   "OV_FL_STOPPED":"Ustavljen",
   "OV_NEWLABEL_CAPTION":"Vnesite oznako",
   "OV_NEWLABEL_TEXT":"Vnesite novo oznako za izbrane torrente:",
   "OV_NEW_LABEL":"Nova oznaka …",
   "OV_REMOVE_LABEL":"Odstrani oznako",
   "OV_TABS":"Splošno||Sledilniki||Soležniki||Kosi||Datoteke||Hitrost||Dnevnik||",
   "OV_TB_ADDTORR":"Dodaj torrent",
   "OV_TB_ADDURL":"Dodaj torrent iz URL naslova",
   "OV_TB_PAUSE":"Premor",
   "OV_TB_PREF":"Nastavitve",
   "OV_TB_QUEUEDOWN":"Premakni dol v vrsti",
   "OV_TB_QUEUEUP":"Premakni gor v vrsti",
   "OV_TB_REMOVE":"Odstrani",
   "OV_TB_RSSDOWNLDR":"Prejemnik RSS",
   "OV_TB_START":"Začni",
   "OV_TB_STOP":"Ustavi",
   "MM_FILE":"Datoteka",
   "MM_FILE_ADD_TORRENT":"Dodaj torrent …",
   "MM_FILE_ADD_URL":"Dodaj torrent preko URL-ja …",
   "MM_OPTIONS":"Možnosti",
   "MM_OPTIONS_PREFERENCES":"Nastavitve",
   "MM_OPTIONS_SHOW_CATEGORY":"Pokaži seznam kategorij",
   "MM_OPTIONS_SHOW_DETAIL":"Pokaži podrobnosti",
   "MM_OPTIONS_SHOW_STATUS":"Pokaži vrstico stanja",
   "MM_OPTIONS_SHOW_TOOLBAR":"Pokaži orodno vrstico",
   "MM_OPTIONS_TAB_ICONS":"Ikone na zavihkih",
   "MM_HELP":"Pomoč",
   "MM_HELP_UT_WEBPAGE":"Spletna stran µTorrent-a",
   "MM_HELP_UT_FORUMS":"Forum µTorrent-a",
   "MM_HELP_WEBUI_FEEDBACK":"Send WebUI Feedback",
   "MM_HELP_ABOUT_WEBUI":"About µTorrent WebUI",
   "STM_TORRENTS":"Torrenti",
   "STM_TORRENTS_PAUSEALL":"Premor vseh torrentov",
   "STM_TORRENTS_RESUMEALL":"Vzpostavi vse torrente",
   "SB_DOWNLOAD":"P: %s%z/s",
   "SB_LOCAL":" L: %z/s",
   "SB_OVERHEAD":" P: %z/s",
   "SB_TOTAL":" S: %Z",
   "SB_UPLOAD":"O: %s%z/s",
   "SIZE_B":"B",
   "SIZE_EB":"EB",
   "SIZE_GB":"GB",
   "SIZE_KB":"kB",
   "SIZE_MB":"MB",
   "SIZE_PB":"PB",
   "SIZE_TB":"TB",
   "ST_CAPT_ADVANCED":"Napredno",
   "ST_CAPT_BANDWIDTH":"Pasovna širina",
   "ST_CAPT_CONNECTION":"Povezava",
   "ST_CAPT_DISK_CACHE":"Medpomnilnik diska",
   "ST_CAPT_FOLDER":"Imeniki",
   "ST_CAPT_GENERAL":"Splošno",
   "ST_CAPT_SCHEDULER":"Urnik",
   "ST_CAPT_QUEUEING":"Čakalna vrsta",
   "ST_CAPT_UI_EXTRAS":"Drugo o vmesniku",
   "ST_CAPT_UI_SETTINGS":"Nastavitve vmesnika",
   "ST_CAPT_BITTORRENT":"BitTorrent",
   "ST_CAPT_WEBUI":"Spletni vmesnik",
   "ST_CAPT_TRANSFER_CAP":"Omejitev prenosov",
   "ST_CAPT_RUN_PROGRAM":"Zaženi program",
   "ST_CBO_UI_DBLCLK_TOR":"Pokaži lastnosti||Ustavi/Poženi||Odpri mapo||Prikazi vrstico stanja prenosa||",
   "ST_CBO_ENCRYPTIONS":"Izklopljeno||Vklopljeno||Vsiljeno||",
   "ST_CBO_PROXY":"(prazno)||Socks4||Socks5||HTTPS||HTTP||",
   "ST_CBO_TCAP_MODES":"oddano||prejeto||oddano + prejeto||",
   "ST_CBO_TCAP_UNITS":"MB||GB||",
   "ST_CBO_TCAP_PERIODS":"1||2||5||7||10||14||15||20||21||28||30||31||",
   "ST_COL_NAME":"Ime",
   "ST_COL_VALUE":"Vrednost",
   "ST_SCH_DAYCODES":"Pon||Tor||Sre||Čet||Pet||Sob||Ned||",
   "ST_SCH_DAYNAMES":"Ponedeljek||Torek||Sreda||Četrtek||Petek||Sobota||Nedelja||",
   "ST_SCH_LGND_FULL":"Polna hitrost",
   "ST_SCH_LGND_FULLEX":"Polna hitrost - Uporabi normalno globalne omejitve pasovne širine",
   "ST_SCH_LGND_LIMITED":"Omejena",
   "ST_SCH_LGND_LIMITEDEX":"Omejena - Uporabi omejitve pasovne širine po urniku",
   "ST_SCH_LGND_SEEDING":"Samo oddajanje",
   "ST_SCH_LGND_SEEDINGEX":"Samo oddajanje - Samo naloži podatke (tudi nedokončane)",
   "ST_SCH_LGND_OFF":"Izklop",
   "ST_SCH_LGND_OFFEX":"Izklop - Ustavi vse torrente ki niso vsiljeni",
   "ST_SEEDTIMES_HOURS":"<= %d ur",
   "ST_SEEDTIMES_IGNORE":"(Prezri)",
   "ST_SEEDTIMES_MINUTES":"<= %d minut",
   "TIME_DAYS_HOURS":"%dd %dh",
   "TIME_HOURS_MINS":"%dh %dm",
   "TIME_MINS_SECS":"%dm %ds",
   "TIME_SECS":"%ds",
   "TIME_WEEKS_DAYS":"%dt %dd",
   "TIME_YEARS_WEEKS":"%dl %dt",
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
   "DLG_SETTINGS_10_REMOTE_01":"BitTorrent daljinski upravljalec",
   "DLG_SETTINGS_10_REMOTE_02":"BitTorrent daljinski upravljalec zagotavlja enostaven in zelo varen način za dostopanje do vašega odjemalca prek brskalnika.",
   "DLG_SETTINGS_10_REMOTE_03":"Samo omogočite spodnjo povezavo, izberite ime računalnika in geslo in ne pozabite pustiti priklopljenega računalnika.",
   "DLG_SETTINGS_10_REMOTE_04":"Naučite se več",
   "DLG_SETTINGS_10_REMOTE_05":"Omogoči dostop do BitTorrent daljinskega upravljalca",
   "DLG_SETTINGS_10_REMOTE_06":"Vpisovanje",
   "DLG_SETTINGS_10_REMOTE_07":"Ime računalnika:",
   "DLG_SETTINGS_10_REMOTE_08":"Geslo:",
   "DLG_SETTINGS_10_REMOTE_09":"Pošlji",
   "ST_CAPT_REMOTE":"BitTorrent daljinski upravljalec"
}
