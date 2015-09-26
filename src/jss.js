// Setup jss plugins.
var jss = require('jss').create();
var useSheet = require('react-jss')(jss);
jss.use(require('jss-extend'));
jss.use(require('jss-nested'));
jss.use(require('jss-camel-case'));
jss.use(require('jss-px'));
jss.use(require('jss-vendor-prefixer'));
exports.jss = jss;
exports.useSheet = useSheet;
