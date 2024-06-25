import config from "@/config";
import http from "@/utils/request";

export default {
	list: {
		url: `${config.API_URL}/paidlist`,
		name: "代付列表",
		post: async function (data = {}) {
			return await http.post(this.url, data);
		},
	},
	edit: {
		url: `${config.API_URL}/editpaid`,
		name: "修改状态",
		post: async function (data = {}) {
			return await http.post(this.url, data);
		},
	},
	cxpp: {
		url: `${config.API_URL}/cxpp`,
		name: "重新匹配",
		post: async function (data = {}) {
			return await http.post(this.url, data);
		},
	},
	bfdd: {
		url: `${config.API_URL}/bfdd`,
		name: "补发通知",
		post: async function (data = {}) {
			return await http.post(this.url, data);
		},
	},
};
