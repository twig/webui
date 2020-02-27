/*
Copyright (c) 2011 BitTorrent, Inc. All rights reserved.

Use of this source code is governed by a BSD-style that can be
found in the LICENSE file.
*/

var LANG_STR = {
  CT_MASK1: "Torrent-tiedostot||*.torrent||Kaikki tiedostot (*.*)||*.*||",
  DLG_BTN_OK: "OK",
  DLG_BTN_CANCEL: "Peruuta",
  DLG_BTN_APPLY: "Käytä",
  DLG_BTN_YES: "Kyllä",
  DLG_BTN_NO: "Ei",
  DLG_BTN_CLOSE: "Sulje",
  DLG_SETTINGS_00: "Asetukset",
  DLG_SETTINGS_1_GENERAL_01: "Kieli",
  DLG_SETTINGS_1_GENERAL_02: "Kieli:",
  DLG_SETTINGS_1_GENERAL_10: "Yksityisyys",
  DLG_SETTINGS_1_GENERAL_11: "Tarkista päivitykset automaattisesti",
  DLG_SETTINGS_1_GENERAL_12: "Päivitä myös beta-versioihin",
  DLG_SETTINGS_1_GENERAL_13:
    "Lähetä käyttötietoja anonyymisti päivityksen yhteydessä",
  DLG_SETTINGS_1_GENERAL_17: "Ladattaessa",
  DLG_SETTINGS_1_GENERAL_18: "Pääte .!ut keskeneräisille tiedostoille",
  DLG_SETTINGS_1_GENERAL_19: "Varaa levytila kaikille tiedostoille",
  DLG_SETTINGS_1_GENERAL_20: "Estä valmiustila kun aktiivisia torrenteja",
  DLG_SETTINGS_2_UI_01: "Ulkonäkö",
  DLG_SETTINGS_2_UI_02: "Vahvista torrentien poisto",
  DLG_SETTINGS_2_UI_03: "Vahvista palvelimien poisto",
  DLG_SETTINGS_2_UI_04: "Vahvista ohjelman sammutus",
  DLG_SETTINGS_2_UI_05: "Riveittäin vaihteleva taustaväri",
  DLG_SETTINGS_2_UI_06: "Näytä nopeudet otsikkopalkissa",
  DLG_SETTINGS_2_UI_07: "Näytä nopeusrajoitukset tilarivissä",
  DLG_SETTINGS_2_UI_15: "Torrentin lisäyksessä",
  DLG_SETTINGS_2_UI_16: "Älä aloita latauksia automaattisesti",
  DLG_SETTINGS_2_UI_17: "Aktivoi ohjelman ikkuna",
  DLG_SETTINGS_2_UI_18: "Näytä valintaikkuna, josta näkee torrentin sisällön",
  DLG_SETTINGS_2_UI_19: "Kaksoispainalluksen toiminnot",
  DLG_SETTINGS_2_UI_20: "Jaettavat torrentit:",
  DLG_SETTINGS_2_UI_22: "Ladattavat torrentit:",
  DLG_SETTINGS_3_PATHS_01: "Ladattujen tiedostojen sijainti",
  DLG_SETTINGS_3_PATHS_02: "Uudet lataukset kansioon:",
  DLG_SETTINGS_3_PATHS_03: "Näytä valintaikkuna lisäyksessä",
  DLG_SETTINGS_3_PATHS_06: "Siirrä valmiit lataukset kansioon:",
  DLG_SETTINGS_3_PATHS_07: "Lisää torrentin nimike",
  DLG_SETTINGS_3_PATHS_10: "Siirrä vain oletuslatauskansiosta",
  DLG_SETTINGS_3_PATHS_11: "Torrent-tiedostot",
  DLG_SETTINGS_3_PATHS_12: "Tallenna .torrent-tiedostot kansioon:",
  DLG_SETTINGS_3_PATHS_15: "Siirrä valmiiden tehtävien torrentit kansioon:",
  DLG_SETTINGS_3_PATHS_18: "Avaa automaattisesti kansiosta:",
  DLG_SETTINGS_3_PATHS_19: "Poista avauksen jälkeen",
  DLG_SETTINGS_4_CONN_01: "Portti",
  DLG_SETTINGS_4_CONN_02: "Saapuville yhteyksille käytettävä portti:",
  DLG_SETTINGS_4_CONN_04: "Satunnainen",
  DLG_SETTINGS_4_CONN_05: "Arvo satunnainen portti",
  DLG_SETTINGS_4_CONN_06: "Käytä UPnP-porttikartoitusta",
  DLG_SETTINGS_4_CONN_07: "Käytä NAT-PMP-porttikartoitusta",
  DLG_SETTINGS_4_CONN_08: "Välityspalvelin",
  DLG_SETTINGS_4_CONN_09: "Tyyppi:",
  DLG_SETTINGS_4_CONN_11: "Palvelin:",
  DLG_SETTINGS_4_CONN_13: "Portti:",
  DLG_SETTINGS_4_CONN_15: "Kirjautuminen",
  DLG_SETTINGS_4_CONN_16: "Käyttäjä:",
  DLG_SETTINGS_4_CONN_18: "Salasana:",
  DLG_SETTINGS_4_CONN_19: "Selvitä verkkonimet välityspalv. kautta",
  DLG_SETTINGS_4_CONN_20:
    "Käytä välityspalvelinta myös käyttäjien välisessä liikenteessä",
  DLG_SETTINGS_4_CONN_21: "Säädä Windowsin palomuuri",
  DLG_SETTINGS_4_CONN_22: "Yksityisyys",
  DLG_SETTINGS_4_CONN_23: "Estä kaikki paikalliset DNS-haut",
  DLG_SETTINGS_4_CONN_24: "Estä ominaisuudet jotka saattavat paljastaa tietoja",
  DLG_SETTINGS_4_CONN_25: "Estä yhteydet joita välityspalvelin ei tue",
  DLG_SETTINGS_5_BANDWIDTH_01: "Yleinen lähetysnopeusrajoitus",
  DLG_SETTINGS_5_BANDWIDTH_02: "Lähetysnopeus (kt/s): [0: rajaton]",
  DLG_SETTINGS_5_BANDWIDTH_03: "Automaattinen",
  DLG_SETTINGS_5_BANDWIDTH_05:
    "Vaihtoehtoinen lähetysnopeus kun ei ladata (kt/s):",
  DLG_SETTINGS_5_BANDWIDTH_07: "Yleinen latausnopeusrajoitus",
  DLG_SETTINGS_5_BANDWIDTH_08: "Latausnopeus (kt/s): [0: rajaton]",
  DLG_SETTINGS_5_BANDWIDTH_10: "Yhteyksien määrä",
  DLG_SETTINGS_5_BANDWIDTH_11: "Yleinen yhteyksien enimmäismäärä:",
  DLG_SETTINGS_5_BANDWIDTH_14: "Yhteyksien enimmäismäärä per torrent:",
  DLG_SETTINGS_5_BANDWIDTH_15: "Lähetyspaikkojen määrä per torrent:",
  DLG_SETTINGS_5_BANDWIDTH_17:
    "Lisää lähetyspaikkoja kun lähetysnopeus on alle 90%",
  DLG_SETTINGS_5_BANDWIDTH_18: "Global Rate Limit Options",
  DLG_SETTINGS_5_BANDWIDTH_19:
    "Nopeusrajoitukset koskevat myös oheisliikennettä",
  DLG_SETTINGS_5_BANDWIDTH_20: "Nopeusrajoitukset koskevat myös uTP-yhteyksiä",
  DLG_SETTINGS_6_BITTORRENT_01: "BitTorrent-ominaisuudet",
  DLG_SETTINGS_6_BITTORRENT_02: "Käytä DHT-verkkoa",
  DLG_SETTINGS_6_BITTORRENT_03: "Pyydä palvelimelta scrape-tietoja",
  DLG_SETTINGS_6_BITTORRENT_04: "DHT oletuksena käytössä",
  DLG_SETTINGS_6_BITTORRENT_05: "Käyttäjien vaihto (PEX)",
  DLG_SETTINGS_6_BITTORRENT_06: "Lähikäyttäjien haku (LPD)",
  DLG_SETTINGS_6_BITTORRENT_07: "Rajoita myös lähiliikennettä",
  DLG_SETTINGS_6_BITTORRENT_08: "Palvelimelle ilmoitettava IP tai nimi:",
  DLG_SETTINGS_6_BITTORRENT_10: "Protokollan salaus",
  DLG_SETTINGS_6_BITTORRENT_11: "Lähtevä:",
  DLG_SETTINGS_6_BITTORRENT_13: "Salli saapuvat ei-salatut yhteydet",
  DLG_SETTINGS_6_BITTORRENT_14: "Hallittu kaistankäyttö (uTP)",
  DLG_SETTINGS_6_BITTORRENT_15: "Tuki UDP-seurantapalvelimille",
  DLG_SETTINGS_7_TRANSFERCAP_01: "Käytä siirtorajaa",
  DLG_SETTINGS_7_TRANSFERCAP_02: "Rajoitusasetukset",
  DLG_SETTINGS_7_TRANSFERCAP_03: "Rajoituksen tyyppi:",
  DLG_SETTINGS_7_TRANSFERCAP_04: "Siirtoraja:",
  DLG_SETTINGS_7_TRANSFERCAP_05: "Ajanjakso (päivää):",
  DLG_SETTINGS_7_TRANSFERCAP_06: "Käyttöhistoria valitulla ajanjaksolla:",
  DLG_SETTINGS_7_TRANSFERCAP_07: "Lähetetty:",
  DLG_SETTINGS_7_TRANSFERCAP_08: "Ladattu:",
  DLG_SETTINGS_7_TRANSFERCAP_09: "Siirretty yhteensä:",
  DLG_SETTINGS_7_TRANSFERCAP_10: "Ajanjakso:",
  DLG_SETTINGS_7_TRANSFERCAP_11: "Viimeiset %d päivää",
  DLG_SETTINGS_7_TRANSFERCAP_12: "Nollaa historia",
  DLG_SETTINGS_8_QUEUEING_01: "Jonoasetukset",
  DLG_SETTINGS_8_QUEUEING_02:
    "Aktiivisten torrentien enimmäismäärä (lähetys tai lataus):",
  DLG_SETTINGS_8_QUEUEING_04: "Aktiivisten latausten enimmäismäärä:",
  DLG_SETTINGS_8_QUEUEING_06: "Jaa kunnes [oletusarvot]",
  DLG_SETTINGS_8_QUEUEING_07: "Jakosuhde vähintään (%):",
  DLG_SETTINGS_8_QUEUEING_09: "Jakoaika vähintään (minuuttia):",
  DLG_SETTINGS_8_QUEUEING_11:
    "Jakotehtäville korkeampi tärkeysaste kuin lataustehtäville",
  DLG_SETTINGS_8_QUEUEING_12: "Kun µTorrent saavuttaa jakotavoitteen",
  DLG_SETTINGS_8_QUEUEING_13: "Rajoita lähetysnopeutta (kt/s): [0: pysäytä]",
  DLG_SETTINGS_9_SCHEDULER_01: "Käytä ajastinta",
  DLG_SETTINGS_9_SCHEDULER_02: "Ajastintaulukko",
  DLG_SETTINGS_9_SCHEDULER_04: "Ajastimen asetukset",
  DLG_SETTINGS_9_SCHEDULER_05: "Rajoitettu lähetysnopeus (kt/s):",
  DLG_SETTINGS_9_SCHEDULER_07: "Rajoitettu latausnopeus (kt/s):",
  DLG_SETTINGS_9_SCHEDULER_09: "Poista DHT käytöstä suljettaessa",
  DLG_SETTINGS_9_WEBUI_01: "Käytä Web-käyttöliittymää",
  DLG_SETTINGS_9_WEBUI_02: "Kirjautuminen",
  DLG_SETTINGS_9_WEBUI_03: "Käyttäjä:",
  DLG_SETTINGS_9_WEBUI_05: "Salasana:",
  DLG_SETTINGS_9_WEBUI_07: "Salli vierailu käyttäjänimellä:",
  DLG_SETTINGS_9_WEBUI_09: "Yhteys",
  DLG_SETTINGS_9_WEBUI_10: "Vaihtoehtoinen portti (oletuksena yhteysportti):",
  DLG_SETTINGS_9_WEBUI_12:
    "Salli pääsy vain seuraavista IP-osoitteista (erota pilkulla):",
  DLG_SETTINGS_A_ADVANCED_01:
    "Lisäasetukset [Älä muokkaa ellet tiedä mitä teet!]",
  DLG_SETTINGS_A_ADVANCED_02: "Arvo:",
  DLG_SETTINGS_A_ADVANCED_03: "Tosi",
  DLG_SETTINGS_A_ADVANCED_04: "Epätosi",
  DLG_SETTINGS_A_ADVANCED_05: "Aseta",
  DLG_SETTINGS_B_ADV_UI_01: "Nopeuslistat [erota useat arvot pilkulla]",
  DLG_SETTINGS_B_ADV_UI_02: "Korvaa automaattinen lista",
  DLG_SETTINGS_B_ADV_UI_03: "Lähetysnopeuslista:",
  DLG_SETTINGS_B_ADV_UI_05: "Latausnopeuslista:",
  DLG_SETTINGS_B_ADV_UI_07: "Pysyvät nimikkeet [erota nimikkeet |-merkillä]",
  DLG_SETTINGS_B_ADV_UI_08: "Hakukoneet [muoto: nimi|osoite]",
  DLG_SETTINGS_C_ADV_CACHE_01: "Välimuistin asetukset",
  DLG_SETTINGS_C_ADV_CACHE_02:
    "Välimuisti tarkoittaa usein tarvittavan tiedon säilyttämistä muistissa vähentäen kovalevyn luku- ja kirjoituskertoja. µTorrent hallitsee välimuistia automaattisesti, mutta voit muuttaa sen toimintaa muokkaamalla näitä asetuksia.",
  DLG_SETTINGS_C_ADV_CACHE_03:
    "Määritä välimuistin koko itse automaattisen koon sijaan (Mt):",
  DLG_SETTINGS_C_ADV_CACHE_05: "Vähennä muistinvarausta kun muistia ei tarvita",
  DLG_SETTINGS_C_ADV_CACHE_06: "Tarkemmat muistiasetukset",
  DLG_SETTINGS_C_ADV_CACHE_07: "Käytä muistia levylle kirjoituksessa",
  DLG_SETTINGS_C_ADV_CACHE_08: "Kirjoita koskemattomat lohkot 2 min. välein",
  DLG_SETTINGS_C_ADV_CACHE_09: "Kirjoita valmistuneet osat välittömästi",
  DLG_SETTINGS_C_ADV_CACHE_10: "Käytä muistia levyltä lukemisessa",
  DLG_SETTINGS_C_ADV_CACHE_11:
    "Lukumuisti pois käytöstä alhaisilla lähetysnopeuksilla",
  DLG_SETTINGS_C_ADV_CACHE_12: "Poista vanhat lohkot muistista",
  DLG_SETTINGS_C_ADV_CACHE_13:
    "Kasvata muistin kokoa kun muisti täyttyy liikaa",
  DLG_SETTINGS_C_ADV_CACHE_14: "Windowsin kirjoitusvälimuisti pois käytöstä",
  DLG_SETTINGS_C_ADV_CACHE_15: "Windowsin lukuvälimuisti pois käytöstä",
  DLG_SETTINGS_C_ADV_RUN_01: "Suorita ohjelma",
  DLG_SETTINGS_C_ADV_RUN_02: "Suorita tämä ohjelma kun torrent valmistuu:",
  DLG_SETTINGS_C_ADV_RUN_04: "Suorita tämä ohjelma kun torrentin tila muuttuu:",
  DLG_SETTINGS_C_ADV_RUN_06:
    "Voit käyttää näitä muuttujia:\r\n%F - Ladatun tiedoston nimi (yhden tiedoston torrenteille)\r\n%D - Polku latauskansioon\r\n%N - Torrentin nimi\r\n%S - Torrentin tila\r\n%L - Nimike\r\n%T - Seurantapalvelin\r\n%M - Tilaviesti (sama kuin tilasarakeessa)\r\n%I - Tarkistussumma hex-muodossa\r\n\r\ntila on yhdistelmä seuraavista: käynnistetty = 1, tarkistaa = 2, käynnistys tarkistuksen jälkeen = 4,\r\ntarkistettu = 8, virhe = 16, keskeytetty = 32, auto = 64, ladattu = 128",
  DLG_TORRENTPROP_00: "Torrentin ominaisuudet",
  DLG_TORRENTPROP_1_GEN_01: "Seurantapalvelimet (erota tyhjällä rivillä)",
  DLG_TORRENTPROP_1_GEN_03: "Rajoitukset",
  DLG_TORRENTPROP_1_GEN_04: "Lähetysnopeus (kt/s): [0: oletus]",
  DLG_TORRENTPROP_1_GEN_06: "Latausnopeus (kt/s): [0: oletus]",
  DLG_TORRENTPROP_1_GEN_08: "Lähetyspaikkoja: [0: oletus]",
  DLG_TORRENTPROP_1_GEN_10: "Jaa kunnes",
  DLG_TORRENTPROP_1_GEN_11: "Ohita oletusasetukset",
  DLG_TORRENTPROP_1_GEN_12: "Jakosuhde vähintään (%):",
  DLG_TORRENTPROP_1_GEN_14: "Jakoaika vähintään (minuuttia):",
  DLG_TORRENTPROP_1_GEN_16: "Muut asetukset",
  DLG_TORRENTPROP_1_GEN_17: "Alkujako",
  DLG_TORRENTPROP_1_GEN_18: "DHT-verkko",
  DLG_TORRENTPROP_1_GEN_19: "Käyttäjien vaihto",
  DLG_ADDEDITRSSFEED_03: "Syöte",
  DLG_ADDEDITRSSFEED_04: "Osoite:",
  DLG_ADDEDITRSSFEED_05: "Aseta nimi:",
  DLG_ADDEDITRSSFEED_06: "Lataaminen",
  DLG_ADDEDITRSSFEED_07: "Älä lataa kaikkia julkaisuja automaattisesti",
  DLG_ADDEDITRSSFEED_08: "Lataa automaattisesti kaikki syötteen julkaisut",
  DLG_ADDEDITRSSFEED_09: "Käytä älykästä jaksosuodinta",
  DLG_RSSDOWNLOADER_02: "Syötteet||Suosikit||Historia||",
  DLG_RSSDOWNLOADER_03: "All Feeds",
  DLG_RSSDOWNLOADER_04: "Suodattimen asetukset",
  DLG_RSSDOWNLOADER_05: "Nimi:",
  DLG_RSSDOWNLOADER_06: "Hae:",
  DLG_RSSDOWNLOADER_07: "Ei:",
  DLG_RSSDOWNLOADER_08: "Kohde:",
  DLG_RSSDOWNLOADER_09: "Syöte:",
  DLG_RSSDOWNLOADER_10: "Laatu:",
  DLG_RSSDOWNLOADER_11: "Jakson numero: [esim. 1x12-14]",
  DLG_RSSDOWNLOADER_12: "Vertaa alkuperäistä nimeä tulkitun nimen sijaan",
  DLG_RSSDOWNLOADER_13: "Älä aloita latauksia automaattisesti",
  DLG_RSSDOWNLOADER_14: "Älykäs jaksosuod.",
  DLG_RSSDOWNLOADER_15: "Lataukselle korkein tärkeysaste",
  DLG_RSSDOWNLOADER_16: "Väliaika vähintään:",
  DLG_RSSDOWNLOADER_17: "Uusien torrentien nimike:",
  DLG_RSSDOWNLOADER_18: "Lisää RSS-syöte...",
  DLG_RSSDOWNLOADER_19: "Muokkaa syötettä",
  DLG_RSSDOWNLOADER_20: "Poista käytöstä",
  DLG_RSSDOWNLOADER_21: "Ota käyttöön",
  DLG_RSSDOWNLOADER_22: "Päivitä syöte",
  DLG_RSSDOWNLOADER_23: "Poista syöte",
  DLG_RSSDOWNLOADER_24: "Lataa",
  DLG_RSSDOWNLOADER_25: "Avaa osoite selaimessa",
  DLG_RSSDOWNLOADER_26: "Lisää suosikkeihin",
  DLG_RSSDOWNLOADER_27: "Lisää",
  DLG_RSSDOWNLOADER_28: "Poista",
  DLG_RSSDOWNLOADER_29: "KAIKKI",
  DLG_RSSDOWNLOADER_30: "(Kaikki)",
  DLG_RSSDOWNLOADER_31:
    "(vertaa aina)||(vertaa vain kerran)||12 tuntia||1 päivä||2 päivää||3 päivää||4 päivää||1 viikko||2 viikkoa||3 viikkoa||1 kuukausi||",
  DLG_RSSDOWNLOADER_32: "Lisää RSS-syöte",
  DLG_RSSDOWNLOADER_33: "Muokkaa RSS-syötettä",
  DLG_RSSDOWNLOADER_34: "Remove RSS Feed(s)",
  DLG_RSSDOWNLOADER_35: "Really delete the %d selected RSS Feeds?",
  DLG_RSSDOWNLOADER_36: 'Haluatko varmasit poistaan RSS-syötteen "%s"?',
  FEED_COL_FULLNAME: "Koko nimi",
  FEED_COL_NAME: "Nimi",
  FEED_COL_EPISODE: "Jakso",
  FEED_COL_FORMAT: "Muoto",
  FEED_COL_CODEC: "Koodekki",
  FEED_COL_DATE: "Date",
  FEED_COL_FEED: "Syöte",
  FEED_COL_URL: "Lähteen osoite",
  PRS_COL_IP: "IP-osoite",
  PRS_COL_PORT: "Portti",
  PRS_COL_CLIENT: "Ohjelma",
  PRS_COL_FLAGS: "Liput",
  PRS_COL_PCNT: "%",
  PRS_COL_RELEVANCE: "Kiinnostavuus",
  PRS_COL_DOWNSPEED: "Latausnopeus",
  PRS_COL_UPSPEED: "Lähetysnopeus",
  PRS_COL_REQS: "Pyynnöt",
  PRS_COL_WAITED: "Odotettu",
  PRS_COL_UPLOADED: "Lähetetty",
  PRS_COL_DOWNLOADED: "Ladattu",
  PRS_COL_HASHERR: "Tark.virhe",
  PRS_COL_PEERDL: "Käyttäjän nop.",
  PRS_COL_MAXUP: "Maks. lähetys",
  PRS_COL_MAXDOWN: "Maks. lataus",
  PRS_COL_QUEUED: "Jonossa",
  PRS_COL_INACTIVE: "Ei aktiivinen",
  FI_COL_DONE: "Valmiina",
  FI_COL_FIRSTPC: "Ensimmäinen osa",
  FI_COL_NAME: "Nimi",
  FI_COL_NUMPCS: "Osia",
  FI_COL_PCNT: "%",
  FI_COL_PRIO: "Tärkeysaste",
  FI_COL_SIZE: "Koko",
  FI_PRI0: "ohita",
  FI_PRI1: "alhainen",
  FI_PRI2: "normaali",
  FI_PRI3: "korkea",
  GN_TP_01: "Ladattu:",
  GN_TP_02: "Lähetetty:",
  GN_TP_03: "Jakajia:",
  GN_TP_04: "Jäljellä:",
  GN_TP_05: "Latausnopeus:",
  GN_TP_06: "Lähetysnopeus:",
  GN_TP_07: "Lataajia:",
  GN_TP_08: "Jakosuhde:",
  GN_TP_09: "Kohde:",
  GN_TP_10: "Tarkistussumma:",
  GN_GENERAL: "Yleiset",
  GN_TRANSFER: "Siirto",
  GN_XCONN: "%d / %d yhteydessä (%d ryhmässä)",
  MAIN_TITLEBAR_SPEED: "Lat:%s Läh:%s - %s",
  MENU_COPY: "Kopioi",
  MENU_RESET: "Nollaa",
  MENU_UNLIMITED: "Rajoittamaton",
  MP_RESOLVE_IPS: "Selvitä IP-osoitteiden nimet",
  MF_GETFILE: "Get File(s)",
  MF_DONT: "Älä lataa",
  MF_HIGH: "Korkea tärkeysaste",
  MF_LOW: "Alhainen tärkeysaste",
  MF_NORMAL: "Normaali tärkeysaste",
  ML_COPY_MAGNETURI: "Kopioi Magnet-osoite",
  ML_DELETE_DATA: "Poista tiedosto(t)",
  ML_DELETE_TORRENT: "Poista .torrent",
  ML_DELETE_DATATORRENT: "Poista .torrent ja tiedosto(t)",
  ML_FORCE_RECHECK: "Pakota uudelleentarkistus",
  ML_FORCE_START: "Pakota aloitus",
  ML_LABEL: "Nimike",
  ML_PAUSE: "Keskeytä",
  ML_PROPERTIES: "Ominaisuudet",
  ML_QUEUEDOWN: "Siirrä alas jonossa",
  ML_QUEUEUP: "Siirrä ylös jonossa",
  ML_REMOVE: "Poista",
  ML_REMOVE_AND: "Poista ja...",
  ML_START: "Aloita",
  ML_STOP: "Pysäytä",
  OV_CAT_ACTIVE: "Aktiiviset",
  OV_CAT_ALL: "Kaikki",
  OV_CAT_COMPL: "Valmiit",
  OV_CAT_DL: "Lataukset",
  OV_CAT_INACTIVE: "Toimettomat",
  OV_CAT_NOLABEL: "Ei nimikettä",
  OV_COL_AVAIL: "||Saata.||Saatavuus",
  OV_COL_DATE_ADDED: "Lisätty",
  OV_COL_DATE_COMPLETED: "Valmistunut",
  OV_COL_DONE: "Valmiina",
  OV_COL_DOWNLOADED: "Ladattu",
  OV_COL_DOWNSPD: "Latausnopeus",
  OV_COL_ETA: "Aika",
  OV_COL_LABEL: "Nimike",
  OV_COL_NAME: "Nimi",
  OV_COL_ORDER: "#",
  OV_COL_PEERS: "Lataajat",
  OV_COL_REMAINING: "Jäljellä",
  OV_COL_SEEDS: "Jakajat",
  OV_COL_SEEDS_PEERS: "Jakajat/lataajat",
  OV_COL_SHARED: "Suhde",
  OV_COL_SIZE: "Koko",
  OV_COL_SOURCE_URL: "Lähteen osoite",
  OV_COL_STATUS: "Tila",
  OV_COL_UPPED: "Lähetetty",
  OV_COL_UPSPD: "Lähetysnopeus",
  OV_CONFIRM_DELETEDATA_MULTIPLE:
    "Haluatko varmasti poistaa valitut %d torrentia ja kaikki niiden tiedostot?",
  OV_CONFIRM_DELETEDATA_ONE:
    "Haluatko varmasti poistaa valitun torrentin ja kaikki sen tiedostot?",
  OV_CONFIRM_DELETE_MULTIPLE: "Haluatko varmasti poistaa valitut %d torrentia?",
  OV_CONFIRM_DELETE_ONE: "Haluatko varmasti poistaa valitun torrentin?",
  OV_CONFIRM_DELETE_RSSFILTER:
    'Haluatko varmasti poistaa RSS-suodattimen "%s"?',
  OV_FL_CHECKED: "Tarkistettu %:.1d%",
  OV_FL_DOWNLOADING: "Lataa",
  OV_FL_ERROR: "Virhe: %s",
  OV_FL_FINISHED: "Valmistunut",
  OV_FL_PAUSED: "Keskeytetty",
  OV_FL_QUEUED: "Jonossa",
  OV_FL_QUEUED_SEED: "Jako jonossa",
  OV_FL_SEEDING: "Valmis",
  OV_FL_STOPPED: "Pysäytetty",
  OV_NEWLABEL_CAPTION: "Anna nimike",
  OV_NEWLABEL_TEXT: "Anna uusi nimike valituille torrenteille:",
  OV_NEW_LABEL: "Uusi nimike...",
  OV_REMOVE_LABEL: "Poista nimike",
  OV_TABS: "Yleiset||Palvelimet||Yhteydet||Osat||Tiedostot||Nopeus||Loki||",
  OV_TB_ADDTORR: "Lisää torrent",
  OV_TB_ADDURL: "Avaa torrent osoitteesta",
  OV_TB_PAUSE: "Keskeytä",
  OV_TB_PREF: "Asetukset",
  OV_TB_QUEUEDOWN: "Siirrä alas",
  OV_TB_QUEUEUP: "Siirrä ylös",
  OV_TB_REMOVE: "Poista",
  OV_TB_RSSDOWNLDR: "RSS-lataaja",
  OV_TB_START: "Aloita",
  OV_TB_STOP: "Pysäytä",
  MM_FILE: "Tiedosto",
  MM_FILE_ADD_TORRENT: "Avaa torrent...",
  MM_FILE_ADD_URL: "Avaa torrent osoitteesta...",
  MM_OPTIONS: "Ominaisuudet",
  MM_OPTIONS_PREFERENCES: "Asetukset",
  MM_OPTIONS_SHOW_CATEGORY: "Näytä kategoriat",
  MM_OPTIONS_SHOW_DETAIL: "Näytä yksityiskohtaiset tiedot",
  MM_OPTIONS_SHOW_STATUS: "Näytä tilarivi",
  MM_OPTIONS_SHOW_TOOLBAR: "Näytä työkalupalkki",
  MM_OPTIONS_TAB_ICONS: "Kuvakkeet välilehdillä",
  MM_HELP: "Ohje",
  MM_HELP_UT_WEBPAGE: "Kotisivu",
  MM_HELP_UT_FORUMS: "Keskustelualue",
  MM_HELP_WEBUI_FEEDBACK: "Send WebUI Feedback",
  MM_HELP_ABOUT_WEBUI: "About µTorrent WebUI",
  STM_TORRENTS: "Torrentit",
  STM_TORRENTS_PAUSEALL: "Keskeytä kaikki torrentit",
  STM_TORRENTS_RESUMEALL: "Jatka kaikkia torrenteja",
  SB_DOWNLOAD: "Lat: %s%z/s",
  SB_LOCAL: " Lähi: %z/s",
  SB_OVERHEAD: " Oheis: %z/s",
  SB_TOTAL: " Yht: %Z",
  SB_UPLOAD: "Läh: %s%z/s",
  SIZE_B: "B",
  SIZE_EB: "Et",
  SIZE_GB: "Gt",
  SIZE_KB: "kt",
  SIZE_MB: "Mt",
  SIZE_PB: "Pt",
  SIZE_TB: "Tt",
  ST_CAPT_ADVANCED: "Lisäasetukset",
  ST_CAPT_BANDWIDTH: "Kaistankäyttö",
  ST_CAPT_CONNECTION: "Yhteydet",
  ST_CAPT_DISK_CACHE: "Välimuisti",
  ST_CAPT_FOLDER: "Kansiot",
  ST_CAPT_GENERAL: "Yleiset",
  ST_CAPT_SCHEDULER: "Ajastin",
  ST_CAPT_QUEUEING: "Jonot",
  ST_CAPT_UI_EXTRAS: "Käyttöliittymä",
  ST_CAPT_UI_SETTINGS: "Käyttöliittymä",
  ST_CAPT_BITTORRENT: "BitTorrent",
  ST_CAPT_WEBUI: "Web-käyttö",
  ST_CAPT_TRANSFER_CAP: "Siirtoraja",
  ST_CAPT_RUN_PROGRAM: "Suorita ohjelma",
  ST_CBO_UI_DBLCLK_TOR:
    "Ominaisuudet||Käynnistä/Pysäytä||Avaa latauskansio||Näytä latauspalkki||",
  ST_CBO_ENCRYPTIONS: "Ei käytössä||Käytössä||Pakotettu||",
  ST_CBO_PROXY: "(ei käytössä)||Socks4||Socks5||HTTPS||HTTP||",
  ST_CBO_TCAP_MODES: "Lähetykset||Lataukset||Siirrot yhteensä||",
  ST_CBO_TCAP_UNITS: "Mt||Gt||",
  ST_CBO_TCAP_PERIODS: "1||2||5||7||10||14||15||20||21||28||30||31||",
  ST_COL_NAME: "Nimi",
  ST_COL_VALUE: "Arvo",
  ST_SCH_DAYCODES: "Ma||Ti||Ke||To||Pe||La||Su||",
  ST_SCH_DAYNAMES:
    "Maanantai||Tiistai||Keskiviikko||Torstai||Perjantai||Lauantai||Sunnuntai||",
  ST_SCH_LGND_FULL: "Normaali",
  ST_SCH_LGND_FULLEX: "Normaali: Noudattaa yleisiä nopeusrajoituksia",
  ST_SCH_LGND_LIMITED: "Rajoitettu",
  ST_SCH_LGND_LIMITEDEX: "Rajoitettu: Käyttää ajastimen nopeusrajoituksia",
  ST_SCH_LGND_SEEDING: "Vain jako",
  ST_SCH_LGND_SEEDINGEX:
    "Vain jako: Ainoastaan lähettää tietoa (myös keskeneräiset siirrot)",
  ST_SCH_LGND_OFF: "Sulje",
  ST_SCH_LGND_OFFEX:
    "Pysäytys: Pysäyttää kaikki siirrot joita ei ole pakotettu",
  ST_SEEDTIMES_HOURS: "<= %d tuntia",
  ST_SEEDTIMES_IGNORE: "(Ei käytössä)",
  ST_SEEDTIMES_MINUTES: "<= %d minuuttia",
  TIME_DAYS_HOURS: "%dpv %dt",
  TIME_HOURS_MINS: "%dt %dmin",
  TIME_MINS_SECS: "%dmin %ds",
  TIME_SECS: "%ds",
  TIME_WEEKS_DAYS: "%dvk %dpv",
  TIME_YEARS_WEEKS: "%dv %dvk",
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
  DLG_SETTINGS_10_REMOTE_01: "BitTorrent Remote",
  DLG_SETTINGS_10_REMOTE_02:
    "BitTorrent remote tarjoaa helpon ja turvallisen tavan etäkäyttää ohjelmaa selaimen kautta",
  DLG_SETTINGS_10_REMOTE_03:
    "Ota yhteys käyttöön alla, valitse tietokoneelle nimi ja salasana ja muista jättää tämä tietokone päälle.",
  DLG_SETTINGS_10_REMOTE_04: "Lue lisää",
  DLG_SETTINGS_10_REMOTE_05: "Ota käyttöön BitTorrentin etäkäyttö",
  DLG_SETTINGS_10_REMOTE_06: "Kirjautuminen",
  DLG_SETTINGS_10_REMOTE_07: "Tietokoneen nimi:",
  DLG_SETTINGS_10_REMOTE_08: "Salasana:",
  DLG_SETTINGS_10_REMOTE_09: "Lähetä",
  ST_CAPT_REMOTE: "BitTorrent Remote"
};