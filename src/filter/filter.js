import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);


//测试过滤器
  /* 设置金额格式  1,234.56 */
  let moneyFormat = value =>  {
   /* //金额转换 分->元 保留2位小数 并每隔3位用逗号分开 1,234.56
    let intSum = value.substring(0,value.indexOf(".")).replace( /\B(?=(?:\d{3})+$)/g, ',' );//取到整数部分
    let dot = value.substring(value.length,value.indexOf("."))//取到小数部分搜索
    let ret = intSum + dot;*/
   // return ret;
    return value;
  }// 将num四舍五入并截取n位小数。

/**
 * 保留2位小数
 * @param x不四舍五入
 * @returns {*}
 */
  let fmtResult = x =>  {
    var f = parseFloat(x);
    if (isNaN(f)) {
      return false;
    }
    var f = Math.round(x*100)/100;
    var s = f.toString();
    var rs = s.indexOf('.');
    if (rs < 0) {
      rs = s.length;
      s += '.';
    }
    while (s.length <= rs + 2) {
      s += '0';
    }
    return s;


  }
/**
 * 保留4位小数
 * @param x不四舍五入
 * @returns {*}
 */
  let fmtFloat = x =>  {
    var f = parseFloat(x);
    if (isNaN(f)) {
      return false;
    }
    var f = Math.round(x*10000)/10000;
    var s = f.toString();
    var rs = s.indexOf('.');
    if (rs < 0) {
      rs = s.length;
      s += '.';
    }
    while (s.length <= rs + 4) {
      s += '0';
    }
    return s;


  }

//定义下全局过滤器  往 {}里面加 逗号隔开
export  {moneyFormat,fmtResult,fmtFloat}

