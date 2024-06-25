import config from "@/config";
import http from "@/utils/request";

export default {
	add: {
		url: `${config.API_URL}/paidusdtAddpost`,
		name: "USDT提领申请",
		post: async function (data = {}) {
			return await http.post(this.url, data);
		},
	},
};
