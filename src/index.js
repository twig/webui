import './css/main.css';
import './css/dialogs.css';
import './css/stable.css';

window.config = window.config || {
  webui: true
};

require('./js/globals.js');
// // require('mootools');
// // require('imports-loader?exports=>undefined&this=>window!./js/mootools.js');
require('./js/mootools_loader.js');
// require('./js/flotr.js');
require('./js/utils.js');

// require('./js/constants.js');
// require('./lang/en.js');
// require('./lang/_.js');
// require('./js/logger.js');
// require('./js/speedgraph.js');
// require('./js/stable.js');
// require('./js/tabs.js');
// require('./js/webui.js');
// require('./js/contextmenu.js');
// require('./js/dialogmanager.js');
require('./js/main.js');
