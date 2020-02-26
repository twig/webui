import CONST from './constants.js';

// Localized string globals ... initialized in loadLangStrings()

window.g_perSec; // string representing "/s"
window.g_dayCodes; // array of strings representing ["Mon", "Tue", ..., "Sun"]
window.g_dayNames; // array of strings representing ["Monday", "Tuesday", ... , "Sunday"]
window.g_schLgndEx; // object whose values are string explanations of scheduler table colors

window.g_winTitle = "µTorrent WebUI v" + CONST.VERSION;

// Constants

window.g_feedItemQlty = [
  ["?", CONST.RSSITEMQUALITY_NONE],
  ["DSRip", CONST.RSSITEMQUALITY_DSRIP],
  ["DVBRip", CONST.RSSITEMQUALITY_DVBRIP],
  ["DVDR", CONST.RSSITEMQUALITY_DVDR],
  ["DVDRip", CONST.RSSITEMQUALITY_DVDRIP],
  ["DVDScr", CONST.RSSITEMQUALITY_DVDSCR],
  ["HDTV", CONST.RSSITEMQUALITY_HDTV],
  ["HR.HDTV", CONST.RSSITEMQUALITY_HRHDTV],
  ["HR.PDTV", CONST.RSSITEMQUALITY_HRPDTV],
  ["PDTV", CONST.RSSITEMQUALITY_PDTV],
  ["SatRip", CONST.RSSITEMQUALITY_SATRIP],
  ["SVCD", CONST.RSSITEMQUALITY_SVCD],
  ["TVRip", CONST.RSSITEMQUALITY_TVRIP],
  ["WebRip", CONST.RSSITEMQUALITY_WEBRIP],
  ["720p", CONST.RSSITEMQUALITY_720P],
  ["1080i", CONST.RSSITEMQUALITY_1080I],
  ["1080p", CONST.RSSITEMQUALITY_1080P]
];
