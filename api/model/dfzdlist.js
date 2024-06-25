import config from "@/config";
import http from "@/utils/request";

export default {
	list: {
		url: `${config.API_URL}/dfzdlist`,
		name: "代付区间",
		post: async function (data = {}) {
			return await http.post(this.url, data);
		},
	},
};
