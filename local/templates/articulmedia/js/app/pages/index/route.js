'use strict';

const template = require('./template.html');
// import controller from './controller';

import moduleConfig from './config';
const PAGE_NAME = moduleConfig.name;
const PAGE_STATE = moduleConfig.state;
const PAGE_TITLE = moduleConfig.title;

// function routing($stateProvider) {
//   $stateProvider
//     .state('index', {
//       url: '/',
//       template: template,
//       controller: controller,
//       controllerAs: 'pageCtrl'
//     });
// }

// routing.$inject = ['$stateProvider'];

// module.exports = routing;

var routing = ['$stateProvider', '$urlRouterProvider', 
function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('index', {
      url: '/',
      template: template,
      controller: CONFIG.APP.PREFIX + PAGE_NAME + CONFIG.APP.PAGE_POSTFIX + CONFIG.APP.CONTROLLER_POSTFIX,
      controllerAs: 'pageCtrl'
    });
}];

export default routing;