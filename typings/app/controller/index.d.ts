// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome = require('../../../app/controller/home');
import ExportAdminAdmin = require('../../../app/controller/admin/admin');
import ExportDefaultDefault = require('../../../app/controller/default/default');
import ExportRouterDefault = require('../../../app/controller/router/default');

declare module 'egg' {
  interface IController {
    home: ExportHome;
    admin: {
      admin: ExportAdminAdmin;
    }
    default: {
      default: ExportDefaultDefault;
    }
    router: {
      default: ExportRouterDefault;
    }
  }
}
