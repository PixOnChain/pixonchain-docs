import axios from 'axios';

const tenantUrl =
    typeof window !== 'undefined'
        ? (window.location.hostname === 'localhost' ? 'docs.pixonchain.com' : window.location.hostname)
        // ? (window.location.hostname === 'localhost' ? 'docs.p27pay.com.br' : window.location.hostname)
        : '';

export { tenantUrl };

const apiUrl =
    process.env.NODE_ENV === 'development'
        ? 'http://localhost:3001/'
        : process.env.NEXT_PUBLIC_API_URL;

if (!apiUrl) {
    throw new Error('A variável de ambiente NEXT_PUBLIC_API_URL não está definida!');
}

export const baseApi = axios.create({
    baseURL: apiUrl,
    headers: {
        'Content-Type': 'application/json',
        Accept: '*/*',
    },
});
