import config from "@/config";
import http from "@/utils/request";

export default {
	list: {
		url: `${config.API_URL}/AgentmoneychangeApi`,
		name: "商户流水列表",
		post: async function (data = {}) {
			return await http.post(this.url, data);
		},
	},
};
