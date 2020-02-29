import { CONST } from "./constants.js";
import { L_ } from "../lang/_.js";

export const G = {};

// Localized string globals ... initialized in loadLangStrings()
export function loadGlobalStrings() {
  // string representing "/s"
  G.perSec = `/${L_("TIME_SECS")}`.replace(/%d/, "").trim();

  // array of strings representing ["Mon", "Tue", ..., "Sun"]
  G.dayCodes = L_("ST_SCH_DAYCODES").split("||");
  // array of strings representing ["Monday", "Tuesday", ... , "Sunday"]
  G.dayNames = L_("ST_SCH_DAYNAMES").split("||");
  // object whose values are string explanations of scheduler table colors
  G.schLgndEx = {
    full: L_("ST_SCH_LGND_FULLEX"),
    limited: L_("ST_SCH_LGND_LIMITEDEX"),
    off: L_("ST_SCH_LGND_OFFEX"),
    seeding: L_("ST_SCH_LGND_SEEDINGEX")
  };

  // Constants
  G.winTitle = "µTorrent WebUI v" + CONST.VERSION;

  G.feedItemQlty = [
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
}

loadGlobalStrings();
