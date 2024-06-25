import config from "@/config";
import http from "@/utils/request";

export default {
	saveTask: {
		url: `${config.API_URL}/addpaid`,
		name: "代付申请设置",
		post: async function (data = {}) {
			return await http.post(this.url, data);
		},
	},
	imgforms: {
		url: `${config.API_URL}/imgforms`,
		name: "商户代付二维码上传",
		post: async function (data = {}) {
			return await http.post(this.url, data);
		},
	},
};
