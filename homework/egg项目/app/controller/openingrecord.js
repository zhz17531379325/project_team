'use strict';

const Controller = require('egg').Controller;

class StateController extends Controller {
    async index() {
        const { ctx } = this;
        await ctx.render("openingrecord.html", {
            word:"米克保险箱",
                  door: "开门",
                  time: "2分钟前",
                  address: "杭州",
                  "pic1":"/public/images/tab_safebox@2x.png",
                  "pic2":"/public/images/tab_opendoor_pre@2x.png",
                  "pic3":"/public/images/tab_alarm@2x.png",
                  "pic4":"/public/images/tab_associated@2x.png",
        })
    }
}

module.exports = StateController;