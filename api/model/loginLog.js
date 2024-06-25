import config from "@/config";
import http from "@/utils/request";

export default {
	list: {
		url: `${config.API_URL}/agentlog`,
		name: "登录日志列表",
		post: async function (data = {}) {
			return await http.post(this.url, data);
		},
	},
};
