import "./css/main.css";
import "./css/dialogs.css";
import "./css/stable.css";

window.config = window.config || {
  webui: true
};

// require() keeps order, import() is hoisted
import "./js/globals.js";
import "./js/mootools_loader.js";
// import('./js/flotr.js');
import "./js/utils.js";

// import './js/constants.js';
// import './lang/en.js';
// import './lang/_.js';
// import './js/logger.js';
// import './js/speedgraph.js';
// import './js/stable.js';
// import './js/tabs.js';
// import './js/webui.js';
// import './js/contextmenu.js';
// import './js/dialogmanager.js';
require("./js/main.js");
