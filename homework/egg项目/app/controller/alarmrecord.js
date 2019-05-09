'use strict';

const Controller = require('egg').Controller;

class DetailsController extends Controller {
    async index() {
        const { ctx } = this;
        await ctx.render("alarmrecord.html", {
            sp1:"<",
            sp2:"米克保险箱",
                bt1:'有人移动保险箱',
                sj1:'2分钟前',
                dz1:'杭州',
                bt2:'保险箱电量低于20%',
                sj2:'25分钟前',
                dz2:'广东',
                bt3:'修改配置',
                sj3:'两天前',
                dz3:'上海',
                bt4:'保险箱电量低于20%',
                sj4:'18天前',
                dz4:'上海',
                bt5:'有人移动保险箱',
                sj5:'2分钟前',
                dz5:'杭州',
                bt6:'有人移动保险箱',
                sj6:'2分钟前',
                dz6:'杭州',
                "pic1":"/public/images/tab_safebox@2x.png",
                "pic2":"/public/images/tab_opendoor@2x.png",
                "pic3":"/public/images/tab_alarm_pre@2x.png",
                "pic4":"/public/images/tab_associated@2x.png",
        })
    }
}

module.exports = DetailsController;