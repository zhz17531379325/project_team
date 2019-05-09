'use strict';

const Controller = require('egg').Controller;

class DetailsController extends Controller {
    async index() {
        const { ctx } = this;
        await ctx.render("login.html", {
            name:"用户名",
            pass:"密码",
            word:"登录",
            register:"注册用户",
            pass2:"忘记密码",
        })
    }
}

module.exports = DetailsController;