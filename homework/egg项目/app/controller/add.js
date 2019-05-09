'use strict';

const Controller = require('egg').Controller;

class DetailsController extends Controller {
    async index() {
        const { ctx } = this;
        await ctx.render("add.html", {
            tjbxx: "添加保险箱",
            sys: "扫一扫保险箱二维码即可自动添加保险箱",
            word: "扫描二维码添加",
        })
    }
}

module.exports = DetailsController;