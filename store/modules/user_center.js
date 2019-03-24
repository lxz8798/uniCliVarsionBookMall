import types from '../types.js';

export default {
	state:{
		userInfo: {
			username: "",
			password: ""
		}
	},
	mutations: {
		[types.CENTER_USERINFO](state, value) {
			state.userInfo.username = value.username;
			state.userInfo.password = value.password;		
			sessionStorage.userInfo = JSON.stringify(state.userInfo);
		}
	},
	actions:{}
}