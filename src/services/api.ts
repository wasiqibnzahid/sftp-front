import axios from "axios";
export interface IProduct {
  product_id: string;
  company: string;
  available_quantity: number;
  available_next_date?: string;
  available_next_quantity?: number;
  description?: string;
  img_url?: string;
  price?: number;
}
const baseUrl =
  (import.meta as any).env.VITE_API_URL || "http://127.0.0.1:3000";
export async function fetchDashboardProducts(): Promise<IProduct[]> {
  return axios.get(baseUrl).then((res) => {
    return res.data;
  });
}
export async function fetchProductsById(id: string): Promise<IProduct[]> {
  return axios.get(`${baseUrl}/product/${id}`).then((res) => {
    return res.data;
  });
}
