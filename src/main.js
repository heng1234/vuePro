import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import hlvyLoading from '@/components/hlvyLoading.vue'
import  'lib-flexible'//自适应插件
import './assets/icon/iconfont.css';
import './assets/icon/demo.css';
import pagination from '@/components/pagination.vue';
import hlvyTitle from '@/components/hlvyTitle.vue';
/*自定义element标签名开始*/
import Mock from "mockjs";
Vue.use(Mock);
import {Input,
    Button,
    Radio,
    RadioGroup,
    RadioButton,
    Checkbox,
    CheckboxButton,
    CheckboxGroup,
    Switch,
    Select,
    Tabs,
    TabPane,
    Form,
    FormItem,
    MessageBox,
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// table 的样式需要手动引入
import 'element-ui/lib/theme-chalk/icon.css'
import 'element-ui/lib/theme-chalk/table.css'
import 'element-ui/lib/theme-chalk/table-column.css'
Vue.config.productionTip = false
function _extend(base, clazz) {
    return {
        extends:base,
        mounted:function() {
            var el = this.$el;
            el.className = el.className + " " + clazz;
        }
    };
}

function _install(Vue, name, comp) {
    Vue.component(name, _extend(comp, name));
}

function _confirm(message, fok, fcancel) {
    MessageBox.confirm(message, '确认', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
    }).then(() => {
        if(fok) {
            fok();
        }
    }).catch(() => {
        if(fcancel) {
            fcancel();
        }
    });
}

const install = function(Vue, opts = {}) {
    _install(Vue, "hlvy-input", Input);
    _install(Vue, "hlvy-button", Button);
    _install(Vue, "hlvy-switch", Switch);
    _install(Vue, "hlvy-radio", Radio);
    _install(Vue, "hlvy-radio-group", RadioGroup);
    _install(Vue, "hlvy-form", Form);
    _install(Vue, "hlvy-form-item", FormItem);
    _install(Vue, "hlvy-tabs", Tabs);
    _install(Vue, "hlvy-tab-pane", TabPane);
    _install(Vue, "hlvy-loading", hlvyLoading);
    _install(Vue, "hlvy-checkbox", Checkbox);
    _install(Vue, "hlvy-page", pagination);
    _install(Vue, "hlvy-title", hlvyTitle);
    Vue.prototype.$confirm = _confirm;
};
Vue.use(install);
/*自定义element标签名结束*/


import  elementUi from 'element-ui'
Vue.use(elementUi);
//全局过滤器文件
import * as custom from '@/filter/filter.js'

Object.keys(custom).forEach(key => {
    Vue.filter(key, custom[key])
})
/**
 * 全局方法
 */
import fnc from './base/fnc.js'
Vue.prototype.$fnc=fnc;
require("@/mock/mock.js");//Mockjs
import axios from 'axios'
Vue.prototype.$http=axios;

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

/**
 * axios
 */
import {post,fetch,patch,put} from "@/http/http.js";
Vue.prototype.$axios=axios;
Vue.prototype.$post=post;
Vue.prototype.$fetch=fetch;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;


/**
 * 登录拦截
 */
router.beforeEach((to, from, next) => {
    let reg = /^\/login\/*/;
    if (to.path == "/login") {
        sessionStorage.removeItem("loginMsg");
        sessionStorage.clear();
    }
    let userLogin = JSON.parse(sessionStorage.getItem('loginMsg'));
//	console.log("用户名 userLogin:",userLogin)
    if (!userLogin && !reg.exec(to.path)) {
        next({path: '/login'})
    } else {
        next()
    }
})

/**
 * 一键注册components下的组件
 */

import  '@/components/global.js'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
