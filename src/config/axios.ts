import { toast } from "react-toastify";

import axios, { AxiosError } from "axios";

import { getToken } from "@/utils/token";

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

api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error: AxiosError) => {
        // if (error.response?.status === 401) {
        //     toast.error("다시 로그인해주세요");
        //     location.href = "/";
        // }
        console.log(error.request);
        console.error("ERROR: " + error);
        return error;
    },
);
