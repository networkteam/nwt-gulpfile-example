'use strict';

function doSomething() {
  console.log('Something');
};

global.jQuery(doSomething);

export default doSomething;