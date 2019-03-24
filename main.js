import Vue from 'vue'
import App from './App'

import '@/static/css/reset.scss'
import '@/static/iconfont/iconfont.css' //使用字体图标
import '@/static/js/constant.js'

Vue.config.productionTip = false;

/*
	注册全局组件 loading
	需要用到的页面中 在最外层 加上 <fr-loading></fr-loading>  即可   fr-loading 可自定义名称
	js 中调用 this.$loading() 
	参数可选
	不填 -->  切换loading显示/隐藏
	'1' -->  显示
	'0' -->  隐藏
*/

import fr_loading from './components/loading/';
import loading from '@/components/myLoading/myLoading.vue'
import nav_bar from './components/navbar/';
import footer_nav from "./components/footer/";
import new_icon from "./components/icon/";
Vue.component('loading', loading);
Vue.component('nav-bar', nav_bar);
Vue.component('footer-nav', footer_nav);
Vue.component('new-icon', new_icon);

// 状态数据
Vue.prototype.$store = store;
import store from "./store";
// 请求模块
import $ajax from "./tools/ajax.js";
Vue.prototype.$ajax = $ajax;

// 上传图片插件
import upload_img from "./tools/upload_img.js";
Vue.prototype.$Uploader = upload_img;

Vue.prototype.$gotoPath = function(url) {
	uni.navigateTo({
		url: url,
		animationType: "pop-in"
	})
}

App.mpType = 'app';

const app = new Vue({
	store,
	...App
})
app.$mount()
