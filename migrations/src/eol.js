"use strict";
var _os = require('os');

module.exports = _os.platform
  ? ('win32' == _os.platform() ? '\r\n' : '\n')
  : '\n';