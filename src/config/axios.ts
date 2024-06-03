import { getToken } from "@/utils/token";
import axios from "axios";

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    timeout: 1000 * 10,
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use((config) => {
    const token = getToken();
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});
