import config from "@/config";
import http from "@/utils/request";

export default {
	token: {
		url: `${config.API_URL}/login`,
		name: "登录获取TOKEN",
		post: async function (data = {}) {
			return await http.post(this.url, data);
		},
	},
	captcha: {
		url: `${config.API_URL}/user.login/captcha`,
		name: "验证码",
		get: async function (data = {}) {
			return await http.get(this.url, data);
		},
	},
	rate: {
		url: `${config.API_URL}/rate`,
		name: "配置接口",
		post: async function (data = {}) {
			return await http.post(this.url, data);
		},
	},
};
