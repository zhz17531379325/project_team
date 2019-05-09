'use strict';

const Controller = require('egg').Controller;

class StateController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render("state.html",{
      word1:"安全情况",
      word2:"安全",
      val1:"最后位置:杭州",
      val2:"当前状态:打开",
      font:"米克保险箱",
      word3:"灵敏度设置",
      word4:"灵敏度介绍",
      font1:"一级",
      font2:"二级",
      font3:"三级",
      font4:"四级",
      "pic1":"/public/images/tab_safebox_pre.png",
      "pic2":"/public/images/tab_opendoor@2x.png",
      "pic3":"/public/images/tab_alarm@2x.png",
      "pic4":"/public/images/tab_associated@2x.png",
    })
  }
}

module.exports = StateController;
