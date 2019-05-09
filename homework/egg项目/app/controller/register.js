'use strict';

const Controller = require('egg').Controller;

class DetailsController extends Controller {
    async index() {
        const { ctx } = this;
        await ctx.render("register.html", {
            word:"注册",
            hasbtn: true,
            content: "获取验证码", // 按钮里显示的内容
            totalTime: 60 ,//记录具体倒计时时间
            canClick: true ,//添加canClick
            zhuce:"注册代表同意",
            yinsi:"《隐私条款》",
        })
    }
}

module.exports = DetailsController;