import Vue from 'vue';
import Vuex from 'vuex';
import footer_store from "./modules/footer_store.js";
import user_center from "./modules/user_center.js";
import types from "./types.js";
 
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		loading: '0' || false,
		base_url: "https://cnodejs.org/api/v1",
		list: [],
		detail: '',
		hasLogin: false
	},
	mutations: {
		[types.COMMIT_LOGIN](state, value) {
			state.hasLogin = value
		},
		/**
		 * @name 是否显示全局组件loading
		 */
		switch_loading(state){
			state.loading = !state.loading
		},
		update_list(state, data) {
			state.list = data
		},
		update_detail(state, data) {
			state.detail = data
		}
	},
	actions: {
		get_data(ctx) {

			console.log(ctx)
			ctx.commit("switch_loading", "1")

			uni.request({
				url: ctx.state.base_url + "/topics",
				data: {
					page: 1,
					tab: "share",
					limit: 10,
					mdrender: false
				},
				success(res) {
					ctx.commit("update_list", res.data.data)
				},
				complete() {
					ctx.commit("switch_loading", "0")
				}
			})
		},
		get_detail(ctx, id) {
			ctx.commit("switch_loading", "1")
			uni.request({
				url: ctx.state.base_url + "/topic/" + id,
				data: {
					mdrender: true
				},
				success(res) {
					console.log(res)
					ctx.commit("update_detail", res.data.data.content)
				},
				complete() {
					ctx.commit("switch_loading", "0")
				}
			})
		}
	},
	modules: {
		footer_store,
		user_center
	}
})

export default store
