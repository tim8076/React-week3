// 此為 api.js 檔案 (統一管理 API)
import axios from 'axios';
const apiBase = import.meta.env.VITE_APP_API_URL;
const apiPath = import.meta.env.VITE_APP_API_PATH;

// 後台axios實體
const adminRequest = axios.create({
  baseURL: apiBase,
});

export const setAdminToken = (token) => {
  adminRequest.defaults.headers.common['Authorization'] = token;
} 

// 後台 API
export const adminLogin = (data) => adminRequest.post('/v2/admin/signin', data);
export const adminCheckLogin = () => adminRequest.post('/v2/api/user/check');
export const adminGetProducts = (page) => adminRequest.get(`/v2/api/${apiPath}/admin/products?page=${page}`);
export const adminAddProducts = (data) => adminRequest.post(`/v2/api/${apiPath}/admin/product`, data);
export const adminDeleteProduct = (id) => adminRequest.delete(`/v2/api/${apiPath}/admin/product/${id}`);
export const adminModifyProduct = (id, data) => adminRequest.put(`/v2/api/${apiPath}/admin/product/${id}`, data);
export const adminUploadImage = (data) => adminRequest.post(`/v2/api/${apiPath}/admin/upload`, data);