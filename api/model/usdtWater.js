import config from "@/config";
import http from "@/utils/request";

export default {
	list: {
		url: `${config.API_URL}/UsdtlistApi`,
		name: "USDT流水",
		post: async function (data = {}) {
			return await http.post(this.url, data);
		},
	},
	add: {
		url: `${config.API_URL}/UsdtlistAddpost`,
		name: "添加usdt流水",
		post: async function (data = {}) {
			return await http.post(this.url, data);
		},
	},
	del: {
		url: `${config.API_URL}/UsdtlistDelpost`,
		name: "删除usdt流水",
		post: async function (data = {}) {
			return await http.post(this.url, data);
		},
	},

};
