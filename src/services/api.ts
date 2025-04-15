import axios from 'axios';

const tenantUrl = typeof window !== 'undefined'
    ? window.location.hostname === 'localhost' || window.location.hostname === 'localhost:3000'
        ? 'docs.pixonchain.com'
        : window.location.hostname
    : '';

export { tenantUrl };

export const baseApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*',
    },
});
