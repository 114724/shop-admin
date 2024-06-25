import config from "@/config";
import http from "@/utils/request";

export default {
	list: {
		url: `${config.API_URL}/StayApi`,
		name: "滞留订单主页",
		post: async function (data = {}) {
			return await http.post(this.url, data);
		},
	},
	del: {
		url: `${config.API_URL}/StayDelpost`,
		name: "删除滞留订单",
		post: async function (data = {}) {
			return await http.post(this.url, data);
		},
	},
	edit: {
		url: `${config.API_URL}/StayEditpost`,
		name: "修改滞留订单接口",
		post: async function (data = {}) {
			return await http.post(this.url, data);
		},
	},
	add: {
		url: `${config.API_URL}/StayAddpost`,
		name: "添加滞留订单",
		post: async function (data = {}) {
			return await http.post(this.url, data);
		},
	},
};
