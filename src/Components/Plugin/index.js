'use strict';

function myPlugin(opts) {
  console.log("Plugin invoked", opts);
};

global.jQuery.fn.myPlugin = myPlugin;

export default myPlugin;