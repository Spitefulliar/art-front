'use strict';

const template = require('./template.html');
// import controller from './controller';

import moduleConfig from './config';
const PAGE_NAME = moduleConfig.name;
const PAGE_STATE = moduleConfig.state || moduleConfig.name.toLowerCase();
const PAGE_STATE_PARENT = moduleConfig.parent || false;
const PAGE_URL = moduleConfig.url || '/' + PAGE_STATE + '/';
const PAGE_TITLE = moduleConfig.title || false;
const PAGE_API_PARAM = moduleConfig.apiParam || PAGE_STATE;
const PAGE_API_FULL_PATH = moduleConfig.apiFullPath || false;

var routing = ['$stateProvider', '$urlRouterProvider', 
function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state(PAGE_STATE, {
      url: PAGE_URL + ':pageCode',
      // template: template,
      templateUrl: '/local/templates/articulmedia/js/app/pages/newsdetail/template.html',
      parent: PAGE_STATE_PARENT,
      controller: CONFIG.APP.PREFIX + PAGE_NAME + CONFIG.APP.PAGE_POSTFIX + CONFIG.APP.CONTROLLER_POSTFIX,
      data: {
        pageBgType: moduleConfig.pageBgType || false,
        apiParam: PAGE_API_PARAM,
        apiFullPath: PAGE_API_FULL_PATH,
        title: PAGE_TITLE
      }
    });
}];

export default routing;