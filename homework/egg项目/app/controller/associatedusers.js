'use strict';

const Controller = require('egg').Controller;

class DetailsController extends Controller {
    async index() {
        const { ctx } = this;
        await ctx.render("associatedusers.html", {
            span:"米克保险箱",
            span1:"保险箱将按此顺序拨号，拖动可排序",
            num:"13149869439",
            num:"13149869440",
            num:"13149869441",     
            num:"13149869442",
            "pic1":"/public/images/tab_safebox@2x.png",
            "pic2":"/public/images/tab_opendoor@2x.png",
            "pic3":"/public/images/tab_alarm@2x.png",
            "pic4":"/public/images/tab_associated_pre@2x.png",
        })
    }
}

module.exports = DetailsController;