'use strict';
import Controller from './controller';
import Directive from './directive';

import moduleConfig from './config';
const MODULE_NAME = moduleConfig.name;

export default angular
  .module(CONFIG.APP.PREFIX + MODULE_NAME, [])
  .controller(CONFIG.APP.PREFIX + MODULE_NAME + CONFIG.APP.CONTROLLER_POSTFIX, Controller)
  .directive(CONFIG.APP.PREFIX + MODULE_NAME + CONFIG.APP.DIRECTIVE_POSTFIX, Directive);