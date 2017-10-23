'use strict';

import example from './Example';

// Include Plugin
import './Plugin';

global.jQuery(function() {
  console.log('Hello, World!');
});

// Invoke plugin
global.jQuery(document).myPlugin({foo: "Bar"});
