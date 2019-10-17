'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    console.log('===================');
    console.log(this.app.mysql);
    console.log('===================');
    // this.ctx.body = await this.app.mysql.get("blog_content",{});
    this.ctx.body = 'sda';
  }
}

module.exports = HomeController;
