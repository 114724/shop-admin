import config from "@/config";
import http from "@/utils/request";

export default {
	list: {
		url: `${config.API_URL}/consoleApi`,
		name: "获取首页统计数据",
		post: async function (data = {}) {
			return await http.post(this.url, data);
		},
	},
};
