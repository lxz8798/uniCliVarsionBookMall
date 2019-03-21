import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false;

import store from "./store";

/*
	注册全局组件 loading
	需要用到的页面中 在最外层 加上 <fr-loading></fr-loading>  即可   fr-loading 可自定义名称
	js 中调用 this.$loading() 
	参数可选
	不填 -->  切换loading显示/隐藏
	'1' -->  显示
	'0' -->  隐藏
*/

import fr_loading from './components/loading/loading.vue';
import nav_bar from './components/cmd-nav-bar/cmd-nav-bar.vue';
import footer_nav from "./components/footer/footer_nav.vue";
Vue.component('fr-loading',fr_loading);
Vue.component('nav-bar',nav_bar);
Vue.component('footer-nav',footer_nav);

Vue.prototype.$loading = function(status){
	if(status){
		if(status=="1"||status=="0"){
			
			store.commit("switch_loading",status)
		}else{
			console.log("输入的参数 有误，应为 0/1");
		}
	}else{
		store.commit("switch_loading",'change')
	}
};

// 状态数据
Vue.prototype.$store = store;

// 请求模块
import $ajax from "./tools/ajax.js";
Vue.prototype.$ajax = $ajax;

// 上传图片插件
import upload_img from "./tools/upload_img.js";
Vue.prototype.$Uploader = upload_img;

App.mpType = 'app';

const app = new Vue({
	...App
})
app.$mount()
