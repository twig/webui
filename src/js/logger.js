/*
Copyright (c) 2011 BitTorrent, Inc. All rights reserved.

Use of this source code is governed by a BSD-style that can be
found in the LICENSE file.
*/
import { $ } from "./mootools_loader.js";

//================================================================================
// LOGGER
//================================================================================

export var Logger = {
  element: null,
  log_date: false,

  init: function(element) {
    this.element = $(element);
  },

  log: function() {
    if (!this.element) return;
    var text = Array.prototype.slice.call(arguments).join(" ");
    var dt = new Date();

    var YYYY = dt.getFullYear();
    var MM = dt.getMonth() + 1;
    MM = MM < 10 ? "0" + MM : MM;
    var DD = dt.getDate();
    DD = DD < 10 ? "0" + DD : DD;

    var hh = dt.getHours();
    hh = hh < 10 ? "0" + hh : hh;
    var mm = dt.getMinutes();
    mm = mm < 10 ? "0" + mm : mm;
    var ss = dt.getSeconds();
    ss = ss < 10 ? "0" + ss : ss;

    var time =
      (this.log_date ? YYYY + "-" + MM + "-" + DD + " " : "") +
      hh +
      ":" +
      mm +
      ":" +
      ss;

    this.element.grab(
      new Element("p")
        .grab(new Element("span.timestamp", { text: "[" + time + "] " }))
        .appendText(text)
    );

    this.scrollBottom();
  },

  scrollBottom: function() {
    if (!this.element) return;
    this.element.scrollTo(0, this.element.getScrollSize().y);
  },

  setLogDate: function(log_date) {
    this.log_date = !!log_date;
  }
};
