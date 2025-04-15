"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { baseApi } from '@/services/api';
import { useTenant } from './TenantContext';

interface TenantUrl {
    id: string;
    url: string;
    created_at: string;
    updated_at: string;
}

interface TenantUrlContextData {
    tenantUrls: TenantUrl[];
    apiUrl: string | null; // URL da API filtrada
    isLoading: boolean;
    error: string | null;
    reloadTenantUrls: () => Promise<void>;
}

const TenantUrlContext = createContext<TenantUrlContextData>({} as TenantUrlContextData);

export function TenantUrlProvider({ children }: { children: React.ReactNode }) {
    const { tenantConfig } = useTenant();
    const [tenantUrls, setTenantUrls] = useState<TenantUrl[]>([]);
    const [apiUrl, setApiUrl] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const loadTenantUrls = async () => {
        if (!tenantConfig?.id) return;

        try {
            setIsLoading(true);
            setError(null);

            const response = await baseApi.get(`/api/whitelabel-config/tenant-urls?tenantId=${tenantConfig.id}`);

            // Salva todas as URLs
            setTenantUrls(response.data);

            // Filtra e salva a URL da API (que começa com 'api')
            const apiUrl = response.data.find((url: TenantUrl) => url.url.startsWith('api.'));
            setApiUrl(apiUrl ? apiUrl.url : null);

        } catch (err: any) {
            console.error('Erro ao carregar URLs do tenant:', err);
            setError(err.message || 'Erro ao carregar URLs');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (tenantConfig?.id) {
            loadTenantUrls();
        }
    }, [tenantConfig?.id]); // Recarrega quando o ID do tenant mudar

    return (
        <TenantUrlContext.Provider
            value={{
                tenantUrls,
                apiUrl,
                isLoading,
                error,
                reloadTenantUrls: loadTenantUrls
            }}
        >
            {children}
        </TenantUrlContext.Provider>
    );
}

export function useTenantApiUrl() {
    const context = useContext(TenantUrlContext);
    if (!context) {
        throw new Error('useTenantApiUrl deve ser usado dentro de um TenantUrlProvider');
    }
    return context.apiUrl;
} 