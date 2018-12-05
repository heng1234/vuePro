/**
 * 封装本地存储的方法 模块化文件
 */
var storage={
    set:function (key,val) {
        localStorage.setItem(key,JSON.stringify(val));
    },
    get:function (key) {
        return JSON.parse(localStorage.getItem(key));
    },
    remove:function (key) {
        localStorage.removeItem(key);
    }
}
//注意需要暴露出去
export default storage;
