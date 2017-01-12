'use strict';

const template = require('./template.html');
// import controller from './controller';

import moduleConfig from './config';
const PAGE_NAME = moduleConfig.name;
const PAGE_STATE = moduleConfig.state;
const PAGE_URL = moduleConfig.url;
const PAGE_TITLE = moduleConfig.title;
const PAGE_API_PARAM = moduleConfig.apiParam;

var routing = ['$stateProvider', '$urlRouterProvider', 
function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state(PAGE_STATE, {
      url: PAGE_URL+ ':pageCode',
      template: template,
      controller: CONFIG.APP.PREFIX + PAGE_NAME + CONFIG.APP.PAGE_POSTFIX + CONFIG.APP.CONTROLLER_POSTFIX,
      data: {
        footerIsStatic : true,
        apiParam: PAGE_API_PARAM,
      }
    });
}];

export default routing;