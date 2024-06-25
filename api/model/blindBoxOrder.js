import config from "@/config";
import http from "@/utils/request";

export default {
	list: {
		url: `${config.API_URL}/orderlist`,
		name: "订单列表",
		post: async function (data = {}) {
			return await http.post(this.url, data);
		},
	},
	editMoney: {
		url: `${config.API_URL}/agenteditmoney`,
		name: "代收修改金额",
		post: async function (data = {}) {
			return await http.post(this.url, data);
		},
	},
	upImg: {
		url: `${config.API_URL}/img`,
		name: "上传付款凭证",
		post: async function (data = {}) {
			return await http.post(this.url, data);
		},
	},
	// detail: {
	// 	url: `${config.API_URL}/order.blindBoxOrder/detail`,
	// 	name: "获取中奖记录",
	// 	get: async function (data = {}) {
	// 		return await http.get(this.url, data);
	// 	},
	// },
	// export: {
	// 	url: `${config.API_URL}/order.blindBoxOrder/export`,
	// 	name: "导出",
	// 	get: async function (data = {}) {
	// 		return await http.get(this.url, data);
	// 	},
	// },
};
