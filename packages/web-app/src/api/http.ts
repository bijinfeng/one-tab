import axios from "axios";

// 创建 axios 实例
const api = axios.create({
	baseURL: `${import.meta.env.PUBLIC_SERVER_URL}/api`, // 你的 API 基础链接
	timeout: 10000, // 请求超时时间
	headers: {
		"Content-Type": "application/json",
		// 可以添加更多默认头
	},
});

// 请求拦截器
api.interceptors.request.use(
	(config) => {
		// 在发送请求之前做些什么，例如加入 token
		// config.headers.Authorization = `Bearer ${token}`;
		return config;
	},
	(error) => {
		// 对请求错误做些什么
		return Promise.reject(error);
	},
);

// 响应拦截器
api.interceptors.response.use(
	(response) => {
		// 对响应数据做点什么
		return response;
	},
	(error) => {
		// 对响应错误做点什么
		if (error.response) {
			// 请求已发出，但服务器响应的状态码不在 2xx 范围内
			console.error("Error status", error.response.status);
		} else {
			console.error("Error", error.message);
		}
		return Promise.reject(error);
	},
);

export default api;
