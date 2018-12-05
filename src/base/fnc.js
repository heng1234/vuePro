//格式化table字段 如果超过字符长度超过7位则用...代替
let formatFont = (row, column, cellValue) => {
    let str = '···';
    let value = '';
    if(cellValue.length > 7){
        value = cellValue.substr(0,7)+str;
        return value;
    }else {
        return cellValue;
    }
};


/**
 * 保留2位小数不四舍五入
 * @param value
 * @returns {*}
 */
let formatnumst = value => {

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



};
/**
 * 保留4位小数
 * @param x不四舍五入
 * @returns {*}
 */
let formatmumbf = value => {


    let fmtFloatf = x =>  {
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



};
/*金额格式化*/
let number_format = (number, decimals, dec_point, thousands_sep) => {

    /*参数说明：
  　　  number：要格式化的数字
  　　  decimals：保留几位小数
  　　  dec_point：小数点符号
  　　 thousands_sep：千分位符号*/

    number = (number + '').replace(/[^0-9+-Ee.]/g, '');
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 2 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function(n, prec) {
            var k = Math.pow(10, prec);
            return '' + Math.ceil(n * k) / k;
        };

    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    var re = /(-?\d+)(\d{3})/;
    while(re.test(s[0])) {
        s[0] = s[0].replace(re, "$1" + sep + "$2");
    }

    if((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}

/**
 * 校验手机号
 * @param num
 * @returns {*|boolean}
 */
let isSpecialPhone = num => {
    return /^1[2,3,4,5,7,8]\d{9}$/.test(num)

}
/**
 * 校验中英文姓名
 * @param name
 * @returns {*|boolean}
 */
let isName = name => {
    return /[a-zA-Z\u4E00-\u9FA5]+$/.test(name)

}

/**
 * 校验输入金额
 * @param n
 * @returns {*|boolean}
 */
let isMoney = n => {
    return /^\d+$/.test(n)
}

/**
 * 去空格
 * @param str
 * @returns {*}
 */
let trim = str => {
    return str.replace(/(^\s*)|(\s*$)/g, '')
}
/**
 * 返回精确的n位小数数值
 * @param num:number
 * @param dig:number
 */
let digitToFixed = (num, digit = 2) => {
    // NaN，undefined，空值
    if (typeof (num) == 'undefined') {
        return '0.00'
    }else {
        return parseFloat(num).toFixed(digit)
    }
}
/**
 * 返回账户金额，每隔三位数字添加一个逗号
 * @param str:string
 */
let threeNumberAPointer = str => {
    return parseFloat(str).toFixed(2).replace(/\d(?=(?:\d{3})+\b)/g, `$&,`)
}
/**
 * 将银行卡末尾n位数字截取出来
 *  @param cardCode:string 银行卡号
 *  @param digit:num  截取长度
 */
let bankCardLastNum = (cardCode, digit = 4) => {
    return cardCode.substring(cardCode.length - digit, cardCode.length)

}
/**
 * 返回银行卡号，每隔四个数字添加一个空格
 * @param str:string
 */
let formatBankCard =(cardCode, digit = 4)=>  {
    let newStr = str.replace(/\d(?=(?:\d{4})+\b)/g, `$& `);
    // let subStr = String(newStr).subStr(0,len-4)
    return String(newStr)
}



/**
 * 格式化日期
 * @param val
 * @returns {string}
 */
let fmtdt =val =>  {
    if(val){
        let date = new Date(val);
        let y = date.getFullYear();
        let m = date.getMonth() + 1;
        m = m < 10 ? '0' + m : m;
        let d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        return  y + '-' + m + '-' + d;
    }else {
        return  '';
    }
}
/**
 * 判断当前选择时间是否小于是当前实际时间
 */
let contrastTime = (start) =>{
    let dB = new Date(this.fmtdt(start));//获取当前选择日期
    let d = new Date();
    let str = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();//获取当前实际日期

    if (Date.parse(this.fmtdt(str)) >= Date.parse(dB)) {//时间戳对比
        return true;//true当前时间大于传入时间
    }
    return false;//当前时间小于传入时间
}


export default {
    formatFont,threeNumberAPointer,
    formatBankCard,bankCardLastNum,
    fmtdt,contrastTime,digitToFixed,
    isMoney,trim,isName,isSpecialPhone,
    number_format,formatmumbf,formatnumst

}