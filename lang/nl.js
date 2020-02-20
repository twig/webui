/*
Copyright (c) 2011 BitTorrent, Inc. All rights reserved.

Use of this source code is governed by a BSD-style that can be
found in the LICENSE file.
*/

var LANG_STR = {
  CT_MASK1: "Torrentbestanden||*.torrent||Alle bestanden (*.*)||*.*||",
  DLG_BTN_OK: "OK",
  DLG_BTN_CANCEL: "Annuleren",
  DLG_BTN_APPLY: "Toepassen",
  DLG_BTN_YES: "Ja",
  DLG_BTN_NO: "Nee",
  DLG_BTN_CLOSE: "Sluiten",
  DLG_SETTINGS_00: "Voorkeuren",
  DLG_SETTINGS_1_GENERAL_01: "Taal",
  DLG_SETTINGS_1_GENERAL_02: "Taal:",
  DLG_SETTINGS_1_GENERAL_10: "Privacy",
  DLG_SETTINGS_1_GENERAL_11: "Automatisch op updates controleren",
  DLG_SETTINGS_1_GENERAL_12: "Bètaversies installeren",
  DLG_SETTINGS_1_GENERAL_13: "Anonieme informatie versturen bij updatecontrole",
  DLG_SETTINGS_1_GENERAL_17: "Tijdens downloaden",
  DLG_SETTINGS_1_GENERAL_18: ".!ut toevoegen aan onvoltooide bestanden",
  DLG_SETTINGS_1_GENERAL_19: "Schijfruimte altijd vooraf toewijzen",
  DLG_SETTINGS_1_GENERAL_20: "Stand-by voorkomen als torrents actief zijn",
  DLG_SETTINGS_2_UI_01: "Weergave-opties",
  DLG_SETTINGS_2_UI_02: "Bevestiging bij verwijderen torrents",
  DLG_SETTINGS_2_UI_03: "Bevestiging bij verwijderen trackers",
  DLG_SETTINGS_2_UI_04: "Bevestiging bij afsluiten",
  DLG_SETTINGS_2_UI_05: "Duidelijke lijstachtergrond",
  DLG_SETTINGS_2_UI_06: "Huidige snelheid in titelbalk weergeven",
  DLG_SETTINGS_2_UI_07: "Snelheidslimieten in statusbalk tonen",
  DLG_SETTINGS_2_UI_15: "Bij toevoegen torrents",
  DLG_SETTINGS_2_UI_16: "Niet automatisch starten",
  DLG_SETTINGS_2_UI_17: "Activeer programmavenster",
  DLG_SETTINGS_2_UI_18: "Venster met bestanden van torrents weergeven",
  DLG_SETTINGS_2_UI_19: "Acties voor dubbelklikken",
  DLG_SETTINGS_2_UI_20: "Voor uploadende torrents:",
  DLG_SETTINGS_2_UI_22: "Voor downloadende torrents:",
  DLG_SETTINGS_3_PATHS_01: "Locatie gedownloade bestanden",
  DLG_SETTINGS_3_PATHS_02: "Nieuwe downloads opslaan in:",
  DLG_SETTINGS_3_PATHS_03: "Altijd dialoogscherm bij handmatig toevoegen",
  DLG_SETTINGS_3_PATHS_06: "Verplaats voltooide downloads naar:",
  DLG_SETTINGS_3_PATHS_07: "Aan torrents etiket toevoegen",
  DLG_SETTINGS_3_PATHS_10: "Alleen uit standaard downloadmap verplaatsen",
  DLG_SETTINGS_3_PATHS_11: ".torrents-locatie",
  DLG_SETTINGS_3_PATHS_12: ".torrents opslaan in:",
  DLG_SETTINGS_3_PATHS_15: "Verplaats .torrents na downloaden naar:",
  DLG_SETTINGS_3_PATHS_18: "Automatisch .torrents inladen uit:",
  DLG_SETTINGS_3_PATHS_19: "Verwijder ingeladen .torrents",
  DLG_SETTINGS_4_CONN_01: "Luisterpoort",
  DLG_SETTINGS_4_CONN_02: "Poort voor inkomende verbindingen:",
  DLG_SETTINGS_4_CONN_04: "Willekeurige prt",
  DLG_SETTINGS_4_CONN_05: "Altijd willekeurige poort kiezen",
  DLG_SETTINGS_4_CONN_06: "Poorttoewijzing met UPnP",
  DLG_SETTINGS_4_CONN_07: "Poorttoewijzing met NAT-PMP",
  DLG_SETTINGS_4_CONN_08: "Proxyserver",
  DLG_SETTINGS_4_CONN_09: "Type:",
  DLG_SETTINGS_4_CONN_11: "Proxy:",
  DLG_SETTINGS_4_CONN_13: "Poort:",
  DLG_SETTINGS_4_CONN_15: "Authenticatie",
  DLG_SETTINGS_4_CONN_16: "Gebruikersnaam:",
  DLG_SETTINGS_4_CONN_18: "Wachtwoord:",
  DLG_SETTINGS_4_CONN_19: "Hostnamen door proxy laten oplossen",
  DLG_SETTINGS_4_CONN_20: "Gebruik proxyserver voor P2P-verbindingen",
  DLG_SETTINGS_4_CONN_21: "Uitzondering in Windows-firewall toevoegen",
  DLG_SETTINGS_4_CONN_22: "Proxy-privacy",
  DLG_SETTINGS_4_CONN_23: "Alle locale DNS-lookups uitschakelen",
  DLG_SETTINGS_4_CONN_24: "Functies die privéinformatie lekken uitschakelen",
  DLG_SETTINGS_4_CONN_25:
    "Verbindingen die proxy niet ondersteunt uitschakelen",
  DLG_SETTINGS_5_BANDWIDTH_01: "Algemene beperking uploadsnelheid",
  DLG_SETTINGS_5_BANDWIDTH_02: "Max. uploadsnelheid (kB/s): [0: onbeperkt]",
  DLG_SETTINGS_5_BANDWIDTH_03: "Automatisch",
  DLG_SETTINGS_5_BANDWIDTH_05:
    "Andere uploadsnelheid bij geen downloads (kB/s):",
  DLG_SETTINGS_5_BANDWIDTH_07: "Algemene beperking downloadsnelheid",
  DLG_SETTINGS_5_BANDWIDTH_08: "Max. downloadsnelheid (kB/s): [0: onbeperkt]",
  DLG_SETTINGS_5_BANDWIDTH_10: "Aantal verbindingen",
  DLG_SETTINGS_5_BANDWIDTH_11: "Max. aantal verbindingen in totaal:",
  DLG_SETTINGS_5_BANDWIDTH_14: "Max. aantal verbonden peers per torrent:",
  DLG_SETTINGS_5_BANDWIDTH_15: "Aantal uploadslots per torrent:",
  DLG_SETTINGS_5_BANDWIDTH_17:
    "Gebruik aanvullende uploadslots bij uploadsnelheid onder 90%",
  DLG_SETTINGS_5_BANDWIDTH_18: "Algemene snelheidsbeperkingopties",
  DLG_SETTINGS_5_BANDWIDTH_19: "Datalimiet toepassen op transportoverhead",
  DLG_SETTINGS_5_BANDWIDTH_20: "Datalimiet toepassen op uTP-verbindingen",
  DLG_SETTINGS_6_BITTORRENT_01: "Basismogelijkheden BitTorrent",
  DLG_SETTINGS_6_BITTORRENT_02: "DHT-netwerk inschakelen",
  DLG_SETTINGS_6_BITTORRENT_03: "Vraag tracker om scrape-informatie",
  DLG_SETTINGS_6_BITTORRENT_04: "DHT bij nieuwe torrents inschakelen",
  DLG_SETTINGS_6_BITTORRENT_05: "Peeruitwisseling inschakelen",
  DLG_SETTINGS_6_BITTORRENT_06: "Lokale peer-ontdekking inschakelen",
  DLG_SETTINGS_6_BITTORRENT_07: "Beperk lokale peerbandbreedte",
  DLG_SETTINGS_6_BITTORRENT_08: "Geef deze IP/Hostnaam aan tracker door:",
  DLG_SETTINGS_6_BITTORRENT_10: "Protocolversleuteling",
  DLG_SETTINGS_6_BITTORRENT_11: "Uitgaand:",
  DLG_SETTINGS_6_BITTORRENT_13: "Inkomende legacy-verb. toestaan",
  DLG_SETTINGS_6_BITTORRENT_14: "Bandbreedtebeheer inschakelen [uTP]",
  DLG_SETTINGS_6_BITTORRENT_15: "UDP-trackerondersteuning inschakelen",
  DLG_SETTINGS_7_TRANSFERCAP_01: "Gebruik datalimiet",
  DLG_SETTINGS_7_TRANSFERCAP_02: "Instellingen datalimiet",
  DLG_SETTINGS_7_TRANSFERCAP_03: "Limiettype:",
  DLG_SETTINGS_7_TRANSFERCAP_04: "Beperking bandbreedte:",
  DLG_SETTINGS_7_TRANSFERCAP_05: "Periode (dagen):",
  DLG_SETTINGS_7_TRANSFERCAP_06: "Gebruiksgeschiedenis voor deze periode:",
  DLG_SETTINGS_7_TRANSFERCAP_07: "Geüpload:",
  DLG_SETTINGS_7_TRANSFERCAP_08: "Gedownload:",
  DLG_SETTINGS_7_TRANSFERCAP_09: "Geüpload + gedownload:",
  DLG_SETTINGS_7_TRANSFERCAP_10: "Periode:",
  DLG_SETTINGS_7_TRANSFERCAP_11: "Afgelopen %d dagen",
  DLG_SETTINGS_7_TRANSFERCAP_12: "Gesch. legen",
  DLG_SETTINGS_8_QUEUEING_01: "Wachtrijopties",
  DLG_SETTINGS_8_QUEUEING_02: "Max. aantal actieve torrents (up- of download):",
  DLG_SETTINGS_8_QUEUEING_04: "Max. aantal actieve downloads:",
  DLG_SETTINGS_8_QUEUEING_06: "Uploaden terwijl [standaardwaarden]",
  DLG_SETTINGS_8_QUEUEING_07: "Minimum ratio (%):",
  DLG_SETTINGS_8_QUEUEING_09: "Minimale seed-tijd (minuten):",
  DLG_SETTINGS_8_QUEUEING_11:
    "Uploadtaken hebben hogere prioriteit dan downloadtaken",
  DLG_SETTINGS_8_QUEUEING_12: "Wanneer µTorrent uploaddoel heeft bereikt",
  DLG_SETTINGS_8_QUEUEING_13: "Beperk uploadsnelheid tot (kB/s): [0: stop]",
  DLG_SETTINGS_9_SCHEDULER_01: "Planner inschakelen",
  DLG_SETTINGS_9_SCHEDULER_02: "Plannertabel",
  DLG_SETTINGS_9_SCHEDULER_04: "Instellingen Planner",
  DLG_SETTINGS_9_SCHEDULER_05: "Beperkte uploadsnelheid (kB/s):",
  DLG_SETTINGS_9_SCHEDULER_07: "Beperkte downloadsnelheid (kB/s):",
  DLG_SETTINGS_9_SCHEDULER_09: "DHT uitschakelen bij afsluiten",
  DLG_SETTINGS_9_WEBUI_01: "WebUI inschakelen",
  DLG_SETTINGS_9_WEBUI_02: "Bevestiging",
  DLG_SETTINGS_9_WEBUI_03: "Naam:",
  DLG_SETTINGS_9_WEBUI_05: "Wachtwrd:",
  DLG_SETTINGS_9_WEBUI_07: "Gastaccount toestaan met gebruikersnaam:",
  DLG_SETTINGS_9_WEBUI_09: "Bereikbaarheid",
  DLG_SETTINGS_9_WEBUI_10:
    "Alternatieve luisterpoort (standaard is verbindingspoort):",
  DLG_SETTINGS_9_WEBUI_12:
    "Toegang alleen toestaan vanaf deze IP’s (als u meerdere IP’s invoert, moet u deze scheiden door een komma):",
  DLG_SETTINGS_A_ADVANCED_01:
    "Geavanceerde opties [WAARSCHUWING: niet wijzigen!]",
  DLG_SETTINGS_A_ADVANCED_02: "Waarde:",
  DLG_SETTINGS_A_ADVANCED_03: "Waar",
  DLG_SETTINGS_A_ADVANCED_04: "Onwaar",
  DLG_SETTINGS_A_ADVANCED_05: "Instellen",
  DLG_SETTINGS_B_ADV_UI_01:
    "Popupsnelheidslijst [Scheid waarden met een komma]",
  DLG_SETTINGS_B_ADV_UI_02: "Overschrijf automatische popupsnelheidslijst",
  DLG_SETTINGS_B_ADV_UI_03: "Uploadsnelheden:",
  DLG_SETTINGS_B_ADV_UI_05: "Downloadsnelheden:",
  DLG_SETTINGS_B_ADV_UI_07:
    "Vaste etiketten [meerdere etiketten scheiden met |]",
  DLG_SETTINGS_B_ADV_UI_08: "Zoekmachines [Formaat: naam|URL]",
  DLG_SETTINGS_C_ADV_CACHE_01: "Basisopies buffer",
  DLG_SETTINGS_C_ADV_CACHE_02:
    "De schijfbuffer wordt gebruikt om veelgebruikte gegevens op te slaan in het geheugen om het aantal schrijf- en leesbewerkingen op de harde schijf te verminderen. µTorrent beheert de buffer gewoonlijk zelf, maar je kunt dit ook zelf beheren met deze instellingen.",
  DLG_SETTINGS_C_ADV_CACHE_03:
    "Overschrijf automatische buffergrootte met eigen waarde (MB):",
  DLG_SETTINGS_C_ADV_CACHE_05:
    "Verminder geheugengebruik indien buffer niet nodig is",
  DLG_SETTINGS_C_ADV_CACHE_06: "Uitgebreide bufferopties",
  DLG_SETTINGS_C_ADV_CACHE_07: "Buffering van schrijfbewerkingen inschakelen",
  DLG_SETTINGS_C_ADV_CACHE_08:
    "Ongebruikte blokken elke 2 minuten wegschrijven",
  DLG_SETTINGS_C_ADV_CACHE_09: "Voltooide delen onmiddellijk wegschrijven",
  DLG_SETTINGS_C_ADV_CACHE_10: "Buffering van leesbewerkingen inschakelen",
  DLG_SETTINGS_C_ADV_CACHE_11: "Buffering uitschakelen bij lage uploadsnelheid",
  DLG_SETTINGS_C_ADV_CACHE_12: "Verwijder oude blokken uit buffer",
  DLG_SETTINGS_C_ADV_CACHE_13: "Automatische buffergrootte bij",
  DLG_SETTINGS_C_ADV_CACHE_14:
    "Windows-buffering van schijfschrijvingen uitschakelen",
  DLG_SETTINGS_C_ADV_CACHE_15:
    "Windows-buffering van schijfuitlezingen uitschakelen",
  DLG_SETTINGS_C_ADV_RUN_01: "Programma uitvoeren",
  DLG_SETTINGS_C_ADV_RUN_02:
    "Dit programma uitvoeren als een torrent voltooid is:",
  DLG_SETTINGS_C_ADV_RUN_04:
    "Dit programma uitvoeren als torrent van status wijzigt:",
  DLG_SETTINGS_C_ADV_RUN_06:
    "Gebruik de volgende commando's:\r\n%F - Naam van gedownload bestand (voor torrents met 1 bestand)\r\n%D - Map waar bestanden worden opgeslagen\r\n%N - Titel van torrent\r\n%S - Torrentstatus\r\n%L - Etiket\r\n%T - Tracker\r\n%M - Statusmelding (zelfde als statuskolom)\r\n%I - HEX-gecodeerde info-hash\r\n\r\nStatus is een combinatie van:\r\ngestart = 1, controleren = 2, start-na-controle = 4,\r\ngecontroleerd = 8, fout = 16, gepauzeerd = 32, auto = 64, geladen = 128",
  DLG_TORRENTPROP_00: "Eigenschappen",
  DLG_TORRENTPROP_1_GEN_01: "Trackers (scheid rijen met lege regel)",
  DLG_TORRENTPROP_1_GEN_03: "Bandbreedte-opties",
  DLG_TORRENTPROP_1_GEN_04: "Max. uploadsnelheid (kB/s): [0: standaard]",
  DLG_TORRENTPROP_1_GEN_06: "Max. downloadsnelheid (kB/s): [0: standaard]",
  DLG_TORRENTPROP_1_GEN_08: "Aantal uploadposities: [0: standaard]",
  DLG_TORRENTPROP_1_GEN_10: "Seed terwijl",
  DLG_TORRENTPROP_1_GEN_11: "Overschrijf standaardinstellingen",
  DLG_TORRENTPROP_1_GEN_12: "Minimale ratio (%):",
  DLG_TORRENTPROP_1_GEN_14: "Minimale uploadtijd (minuten):",
  DLG_TORRENTPROP_1_GEN_16: "Andere instellingen",
  DLG_TORRENTPROP_1_GEN_17: "Aanvankelijk uploaden",
  DLG_TORRENTPROP_1_GEN_18: "DHT inschakelen",
  DLG_TORRENTPROP_1_GEN_19: "Peer-uitwisseling",
  DLG_ADDEDITRSSFEED_03: "Feed",
  DLG_ADDEDITRSSFEED_04: "Feed-adres:",
  DLG_ADDEDITRSSFEED_05: "Eigen alias:",
  DLG_ADDEDITRSSFEED_06: "Abonnement",
  DLG_ADDEDITRSSFEED_07: "Items niet automatisch downloaden",
  DLG_ADDEDITRSSFEED_08: "Automatisch items in feed downloaden",
  DLG_ADDEDITRSSFEED_09: "Slimme afleveringsfilter",
  DLG_RSSDOWNLOADER_02: "Feeds||Favorieten|Geschiedenis||",
  DLG_RSSDOWNLOADER_03: "All Feeds",
  DLG_RSSDOWNLOADER_04: "Filterinstellingen",
  DLG_RSSDOWNLOADER_05: "Naam:",
  DLG_RSSDOWNLOADER_06: "Filter:",
  DLG_RSSDOWNLOADER_07: "Niet:",
  DLG_RSSDOWNLOADER_08: "Locatie:",
  DLG_RSSDOWNLOADER_09: "Feed:",
  DLG_RSSDOWNLOADER_10: "Kwaliteit:",
  DLG_RSSDOWNLOADER_11: "Aflevering nr.: [bijv. 1x12-14]",
  DLG_RSSDOWNLOADER_12:
    "Filteren volgens originele naam i.p.v. gedecodeerde naam",
  DLG_RSSDOWNLOADER_13: "Downloads niet automatisch starten",
  DLG_RSSDOWNLOADER_14: "Slimme afl.filter",
  DLG_RSSDOWNLOADER_15: "Downloads hoogste prioriteit geven",
  DLG_RSSDOWNLOADER_16: "Minimale interval:",
  DLG_RSSDOWNLOADER_17: "Etiket voor nieuwe torrents:",
  DLG_RSSDOWNLOADER_18: "RSS-feed toevoegen...",
  DLG_RSSDOWNLOADER_19: "Feed wijzigen...",
  DLG_RSSDOWNLOADER_20: "Feed uitschakelen",
  DLG_RSSDOWNLOADER_21: "Feed inschakelen",
  DLG_RSSDOWNLOADER_22: "Feed bijwerken",
  DLG_RSSDOWNLOADER_23: "Feed verwijderen",
  DLG_RSSDOWNLOADER_24: "Downloaden",
  DLG_RSSDOWNLOADER_25: "Open koppeling in browser",
  DLG_RSSDOWNLOADER_26: "Toevoegen aan favorieten",
  DLG_RSSDOWNLOADER_27: "Toevoegen",
  DLG_RSSDOWNLOADER_28: "Verwijderen",
  DLG_RSSDOWNLOADER_29: "ALLES",
  DLG_RSSDOWNLOADER_30: "(Alle)",
  DLG_RSSDOWNLOADER_31:
    "(komt altijd overeen)||(komt eens overeen)||12 uur||1 dag||2 dagen||3 dagen||4 dagen||1 week||2 weken||3 weken||1 maand||",
  DLG_RSSDOWNLOADER_32: "RSS-feed toevoegen",
  DLG_RSSDOWNLOADER_33: "Wijzig RSS-feed",
  DLG_RSSDOWNLOADER_34: "Remove RSS Feed(s)",
  DLG_RSSDOWNLOADER_35: "Really delete the %d selected RSS Feeds?",
  DLG_RSSDOWNLOADER_36: 'RSS-feed "%s" echt verwijderen?',
  FEED_COL_FULLNAME: "Volledige naam",
  FEED_COL_NAME: "Naam",
  FEED_COL_EPISODE: "Aflevering",
  FEED_COL_FORMAT: "Formaat",
  FEED_COL_CODEC: "Codec",
  FEED_COL_DATE: "Datum",
  FEED_COL_FEED: "Feed",
  FEED_COL_URL: "Bron-URL",
  PRS_COL_IP: "IP",
  PRS_COL_PORT: "Poort",
  PRS_COL_CLIENT: "Cliënt",
  PRS_COL_FLAGS: "Vlaggen",
  PRS_COL_PCNT: "%",
  PRS_COL_RELEVANCE: "Relevantie",
  PRS_COL_DOWNSPEED: "Downsnelheid",
  PRS_COL_UPSPEED: "Upsnelheid",
  PRS_COL_REQS: "Verz",
  PRS_COL_WAITED: "Gewacht",
  PRS_COL_UPLOADED: "Geüpload",
  PRS_COL_DOWNLOADED: "Gedownload",
  PRS_COL_HASHERR: "Hashfout",
  PRS_COL_PEERDL: "Peer-dl.",
  PRS_COL_MAXUP: "MaxUp",
  PRS_COL_MAXDOWN: "MaxDown",
  PRS_COL_QUEUED: "Wachtrij",
  PRS_COL_INACTIVE: "Niet actief",
  FI_COL_DONE: "Klaar",
  FI_COL_FIRSTPC: "Eerste deel",
  FI_COL_NAME: "Naam",
  FI_COL_NUMPCS: "Aant. delen",
  FI_COL_PCNT: "%",
  FI_COL_PRIO: "Prioriteit",
  FI_COL_SIZE: "Grootte",
  FI_PRI0: "overslaan",
  FI_PRI1: "laag",
  FI_PRI2: "normaal",
  FI_PRI3: "hoog",
  GN_TP_01: "Gedownload:",
  GN_TP_02: "Geüpload:",
  GN_TP_03: "Seeds:",
  GN_TP_04: "Resterend:",
  GN_TP_05: "Downsnelheid:",
  GN_TP_06: "Upsnelheid:",
  GN_TP_07: "Peers:",
  GN_TP_08: "Deelverh.:",
  GN_TP_09: "Opslaan als:",
  GN_TP_10: "Hash:",
  GN_GENERAL: "Algemeen",
  GN_TRANSFER: "Overdracht",
  GN_XCONN: "%d van %d verbonden (%d in zwerm)",
  MAIN_TITLEBAR_SPEED: "D:%s U:%s - %s",
  MENU_COPY: "Kopiëren",
  MENU_RESET: "Herstel",
  MENU_UNLIMITED: "Onbeperkt",
  MP_RESOLVE_IPS: "IP's oplossen",
  MF_GETFILE: "Get File(s)",
  MF_DONT: "Niet downloaden",
  MF_HIGH: "Hoge prioriteit",
  MF_LOW: "Lage prioriteit",
  MF_NORMAL: "Normale prioriteit",
  ML_COPY_MAGNETURI: "Kopieer Magnet-URI",
  ML_DELETE_DATA: "Verwijder gegevens",
  ML_DELETE_TORRENT: "Verwijder .torrent",
  ML_DELETE_DATATORRENT: "Verwijder .torrent + gegevens",
  ML_FORCE_RECHECK: "Forceer hercontrole",
  ML_FORCE_START: "Forceer start",
  ML_LABEL: "Etiket",
  ML_PAUSE: "Pauze",
  ML_PROPERTIES: "Eigenschappen",
  ML_QUEUEDOWN: "Verplaats omlaag",
  ML_QUEUEUP: "Verplaats omhoog",
  ML_REMOVE: "Verwijderen",
  ML_REMOVE_AND: "Verwijder en",
  ML_START: "Start",
  ML_STOP: "Stop",
  OV_CAT_ACTIVE: "Actief",
  OV_CAT_ALL: "Alles",
  OV_CAT_COMPL: "Voltooid",
  OV_CAT_DL: "Downloaden",
  OV_CAT_INACTIVE: "Inactief",
  OV_CAT_NOLABEL: "Geen etiket",
  OV_COL_AVAIL: "||Besch.||Beschikbaarheid",
  OV_COL_DATE_ADDED: "Toegevoegd op",
  OV_COL_DATE_COMPLETED: "Voltooid op",
  OV_COL_DONE: "Klaar",
  OV_COL_DOWNLOADED: "Gedownload",
  OV_COL_DOWNSPD: "Downsnelheid",
  OV_COL_ETA: "Resterend",
  OV_COL_LABEL: "Etiket",
  OV_COL_NAME: "Naam",
  OV_COL_ORDER: "#",
  OV_COL_PEERS: "Peers",
  OV_COL_REMAINING: "Resterend",
  OV_COL_SEEDS: "Seeds",
  OV_COL_SEEDS_PEERS: "Uploaders/downloaders",
  OV_COL_SHARED: "Verhouding",
  OV_COL_SIZE: "Grootte",
  OV_COL_SOURCE_URL: "Bron-URL",
  OV_COL_STATUS: "Status",
  OV_COL_UPPED: "Geüpload",
  OV_COL_UPSPD: "Upsnelheid",
  OV_CONFIRM_DELETEDATA_MULTIPLE:
    "Weet je zeker dat je de %d geselecteerde torrents met bijbehorende gegevens wilt verwijderen?",
  OV_CONFIRM_DELETEDATA_ONE:
    "Weet je zeker dat je de geselecteerde torrent met bijbehorende gegevens wilt verwijderen?",
  OV_CONFIRM_DELETE_MULTIPLE:
    "Weet je zeker dat je de %d geselecteerde torrents wilt verwijderen?",
  OV_CONFIRM_DELETE_ONE:
    "Weet je zeker dat je de geselecteerde torrent wilt verwijderen?",
  OV_CONFIRM_DELETE_RSSFILTER: 'RSS-filter "%S" echt verwijderen?',
  OV_FL_CHECKED: "Gecontroleerd %:.1d%",
  OV_FL_DOWNLOADING: "Downloaden",
  OV_FL_ERROR: "Fout: %s",
  OV_FL_FINISHED: "Gereed",
  OV_FL_PAUSED: "Gepauzeerd",
  OV_FL_QUEUED: "Wachtrij",
  OV_FL_QUEUED_SEED: "Seed in wachtrij",
  OV_FL_SEEDING: "Uploaden",
  OV_FL_STOPPED: "Gestopt",
  OV_NEWLABEL_CAPTION: "Geef etiket",
  OV_NEWLABEL_TEXT: "Geef het nieuwe etiket voor geselecteerde torrents op:",
  OV_NEW_LABEL: "Nieuw etiket...",
  OV_REMOVE_LABEL: "Verwijder etiket",
  OV_TABS: "Algemeen||Trackers||Peers||Delen||Bestanden||Snelheid||Log||",
  OV_TB_ADDTORR: "Torrent toevoegen",
  OV_TB_ADDURL: "Voeg Torrent toe van URL",
  OV_TB_PAUSE: "Pauze",
  OV_TB_PREF: "Instellingen",
  OV_TB_QUEUEDOWN: "Verplaats omlaag",
  OV_TB_QUEUEUP: "Verplaats omhoog",
  OV_TB_REMOVE: "Verwijder",
  OV_TB_RSSDOWNLDR: "RSS-downloader",
  OV_TB_START: "Start",
  OV_TB_STOP: "Stop",
  MM_FILE: "Bestand",
  MM_FILE_ADD_TORRENT: "Torrent toevoegen...",
  MM_FILE_ADD_URL: "Torrent toevoegen via URL...",
  MM_OPTIONS: "Opties",
  MM_OPTIONS_PREFERENCES: "Voorkeuren",
  MM_OPTIONS_SHOW_CATEGORY: "Toon categorielijst",
  MM_OPTIONS_SHOW_DETAIL: "Toon gedetailleerde info",
  MM_OPTIONS_SHOW_STATUS: "Toon statusbalk",
  MM_OPTIONS_SHOW_TOOLBAR: "Toon werkbalk",
  MM_OPTIONS_TAB_ICONS: "Iconen op tabs",
  MM_HELP: "Help",
  MM_HELP_UT_WEBPAGE: "µTorrent-webpagina",
  MM_HELP_UT_FORUMS: "µTorrent-forums",
  MM_HELP_WEBUI_FEEDBACK: "Send WebUI Feedback",
  MM_HELP_ABOUT_WEBUI: "About µTorrent WebUI",
  STM_TORRENTS: "Torrents",
  STM_TORRENTS_PAUSEALL: "Pauzeer alle torrents",
  STM_TORRENTS_RESUMEALL: "Hervat alle torrents",
  SB_DOWNLOAD: "D: %s%z/s",
  SB_LOCAL: " L: %z/s",
  SB_OVERHEAD: " O: %z/s",
  SB_TOTAL: " T: %Z",
  SB_UPLOAD: "U: %s%z/s",
  SIZE_B: "B",
  SIZE_EB: "EB",
  SIZE_GB: "GB",
  SIZE_KB: "kB",
  SIZE_MB: "MB",
  SIZE_PB: "PB",
  SIZE_TB: "TB",
  ST_CAPT_ADVANCED: "Geavanceerd",
  ST_CAPT_BANDWIDTH: "Bandbreedte",
  ST_CAPT_CONNECTION: "Verbinding",
  ST_CAPT_DISK_CACHE: "Schijfcache",
  ST_CAPT_FOLDER: "Mappen",
  ST_CAPT_GENERAL: "Algemeen",
  ST_CAPT_SCHEDULER: "Planner",
  ST_CAPT_QUEUEING: "Wachtrij",
  ST_CAPT_UI_EXTRAS: "Extra's UI",
  ST_CAPT_UI_SETTINGS: "Uiterlijk",
  ST_CAPT_BITTORRENT: "BitTorrent",
  ST_CAPT_WEBUI: "Web UI",
  ST_CAPT_TRANSFER_CAP: "Datalimiet",
  ST_CAPT_RUN_PROGRAM: "Programma uitvoeren",
  ST_CBO_UI_DBLCLK_TOR:
    "Toon eigenschappen||Start/stop||Open map||Toon downloadbalk||",
  ST_CBO_ENCRYPTIONS: "Uitgeschakeld||Ingeschakeld||Geforceerd||",
  ST_CBO_PROXY: "(geen)||Socks4||Socks5||HTTPS|HTTPS||",
  ST_CBO_TCAP_MODES: "Uploads||Downloads||Uploads + downloads||",
  ST_CBO_TCAP_UNITS: "MB||GB||",
  ST_CBO_TCAP_PERIODS: "1||2||5||7||10||14||15||20||21||28||30||31||",
  ST_COL_NAME: "Naam",
  ST_COL_VALUE: "Waarde",
  ST_SCH_DAYCODES: "Ma||Di||Wo||Do||Vr||Za||Zo||",
  ST_SCH_DAYNAMES:
    "Maandag||Dinsdag||Woensdag||Donderdag||Vrijdag||Zaterdag||Zondag||",
  ST_SCH_LGND_FULL: "Snel",
  ST_SCH_LGND_FULLEX:
    "Volledige snelheid - Gebruik standaard bandbreedtelimieten",
  ST_SCH_LGND_LIMITED: "Beperkt",
  ST_SCH_LGND_LIMITEDEX:
    "Beperkt - Gebruik bandbreedtelimieten volgens de planner",
  ST_SCH_LGND_SEEDING: "Slechts uploaden",
  ST_SCH_LGND_SEEDINGEX:
    "Slechts uploaden - Alleen gegevens uploaden (incl. onvolledige)",
  ST_SCH_LGND_OFF: "Uitschakelen",
  ST_SCH_LGND_OFFEX:
    "Uitschakelen - Stopt alle torrents die niet geforceerd zijn",
  ST_SEEDTIMES_HOURS: "<= %d uren",
  ST_SEEDTIMES_IGNORE: "(Negeer)",
  ST_SEEDTIMES_MINUTES: "<= %d minuten",
  TIME_DAYS_HOURS: "%dd %dh",
  TIME_HOURS_MINS: "%dh %dm",
  TIME_MINS_SECS: "%dm %ds",
  TIME_SECS: "%ds",
  TIME_WEEKS_DAYS: "%dw %dd",
  TIME_YEARS_WEEKS: "%dj %dw",
  ML_MORE_ACTIONS: "More Action",
  Torrents: "Torrents",
  Feeds: "Feeds",
  App: "Applicatie",
  country: "land",
  ETA: "Resterend",
  of: "van",
  "/s": "/s",
  "Paste a torrent or feed URL": "Plak de URL van een torrent of feed",
  Home: "Home",
  Logout: "Afmelden",
  Seeding: "Uploaden",
  "All Feeds": "Alle feeds",
  bitrate: "bitrate",
  resolution: "resolutie",
  length: "lengte",
  streamable: "streambaar",
  type: "type",
  remote: "extern",
  about: "over",
  sessions: "sessies",
  share: "Delen",
  "Share this torrent": "Deze torrent delen",
  "Share link": "Link delen",
  add: "toevoegen",
  logout: "afmelden",
  "log in": "aanmelden",
  "anywhere access": "toegang overal",
  "stay signed in": "aangemeld blijven",
  download: "downloaden",
  "Your client is currently not available. Verify that it is connected to the internet.":
    "De client is momenteel niet beschikbaar. Controleer of deze verbonden is met internet.",
  "Unable to communicate with your &micro;Torrent client. This message will disappear automatically when a connection is re-established.":
    "Kan niet communiceren met de &micro;Torrent-client. Dit bericht verdwijnt automatisch zodra er weer een verbinding tot stand komt.",
  "Open file": "Bestand openen",
  "Download to your computer": "Downloaden naar je computer",
  "Open with VLC Media Player": "Openen met VLC Media Player",
  Actions: "Acties",
  season: "seizoen",
  DLG_ABOUT_VERSION_LEGEND: null,
  DLG_ABOUT_VERSION_VERSION: null,
  DLG_ABOUT_VERSION_REVISION: null,
  DLG_ABOUT_VERSION_BUILD_DATE: null,
  DLG_ABOUT_VERSION_PEER_ID: null,
  DLG_ABOUT_VERSION_USER_AGENT: null,
  DLG_ABOUT_UPNP_EXTERNAL_ADDRESS: null,
  DLG_ABOUT_UI_REVISION: null,
  DLG_SETTINGS_SAVE: "instellingen opslaan",
  DLG_SETTINGS_MENU_TITLE: "Instellingen",
  DLG_SETTINGS_10_REMOTE_01: "BitTorrent Remote",
  DLG_SETTINGS_10_REMOTE_02:
    "BitTorrent Remote zorgt voor een makkelijke en goed beveiligde manier om je client via een browser te benaderen.",
  DLG_SETTINGS_10_REMOTE_03:
    "Schakel de verbinding beneden is, kiezen een computernaam en wachtwoord en vergeet niet deze computer aan te laten.",
  DLG_SETTINGS_10_REMOTE_04: "Meer weten",
  DLG_SETTINGS_10_REMOTE_05: "Toegang op afstand inschakelen",
  DLG_SETTINGS_10_REMOTE_06: "Beveiliging",
  DLG_SETTINGS_10_REMOTE_07: "Computernaam:",
  DLG_SETTINGS_10_REMOTE_08: "Wachtwrd:",
  DLG_SETTINGS_10_REMOTE_09: "Versturen",
  ST_CAPT_REMOTE: "BitTorrent Remote",
  STATUS_REMOTE_01: "Toegankelijk",
  STATUS_REMOTE_02: "Verbinden..",
  STATUS_REMOTE_03: "Niet toegankelijk",
  STATUS_REMOTE_04: "Registratie mislukt",
  STATUS_REMOTE_05:
    "Je moet een wachtwoord opgeven om BitTorrent Remote te gebruiken",
  STATUS_REMOTE_06:
    "Kan niet verbinden met de service van BitTorrent Remote om te registreren",
  STATUS_REMOTE_07: "Er is al een computer in gebruik met de naam",
  STATUS_REMOTE_08: "De gebruikersnaam mag geen speciale tekens bevatten",
  STATUS_REMOTE_09: "Het wachtwoord mag geen speciale tekens bevatten",
  STATUS_REMOTE_10: "Status: "
};
