'use strict';

const Controller = require('egg').Controller;

class DetailsController extends Controller {
    async index() {
        const { ctx } = this;
        await ctx.render("details.html", {
            bxx: "保险箱详情",
            span1: "保险箱名称",
            span2: "MIKO保险箱",
            span3: "品牌",
            span4: "三星",
            span11:"序列号",
            span22:"GFRGR44FDFD5FD",
            span33:"设备IP",
            span44:"192.168.1.1",
            span55:"固态版本",
            span66:"V2.01245",
            span77:"连接状态",
            span88:"已连接",
        })
    }
}

module.exports = DetailsController;