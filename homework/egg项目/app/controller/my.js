'use strict';

const Controller = require('egg').Controller;

class StateController extends Controller {
    async index() {
        const { ctx } = this;
        await ctx.render("my.html", {
            span1: "我的",
            span2: "大风起兮",
            num1: "通知消息",
            num2: "修改密码",
            span3: "意见反馈",
            span4: "关于",
            span5: "退出登录"
        })
    }
}

module.exports = StateController;