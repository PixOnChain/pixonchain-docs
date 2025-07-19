import axios from 'axios';

const tenantUrl =
    typeof window !== 'undefined'
        ? (window.location.hostname === 'localhost' ? 'uat.pixley.app' : window.location.hostname)
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

// Add request interceptor to include authentication headers
baseApi.interceptors.request.use(
    (config) => {
        // Add authentication headers if available
        const apiKey = process.env.NEXT_PUBLIC_API_KEY;
        const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY;
        
        if (apiKey) {
            config.headers['x-api-key'] = apiKey;
        }
        if (secretKey) {
            config.headers['x-secret-key'] = secretKey;
        }
        
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
