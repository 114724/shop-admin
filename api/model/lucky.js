import config from "@/config";
import http from "@/utils/request";

export default {
	add: {
		url: `${config.API_URL}/addorder`,
		name: "订单列表",
		post: async function (data = {}) {
			return await http.post(this.url, data);
		},
	},
};
