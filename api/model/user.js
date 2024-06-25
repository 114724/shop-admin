import config from "@/config";
import http from "@/utils/request";

export default {
	edit: {
		url: `${config.API_URL}/agentEditpost`,
		name: "获取首页统计数据",
		post: async function (data = {}) {
			return await http.post(this.url, data);
		},
	},
};
