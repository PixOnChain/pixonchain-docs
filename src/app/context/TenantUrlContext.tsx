"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

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
    reloadTenantUrls: () => void;
}

const TenantUrlContext = createContext<TenantUrlContextData>({} as TenantUrlContextData);

export function TenantUrlProvider({ children }: { children: React.ReactNode }) {
    const [tenantUrls, setTenantUrls] = useState<TenantUrl[]>([]);
    const [apiUrl, setApiUrl] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const loadTenantUrls = () => {
        setIsLoading(true);
        
        // Always use Pixley API URL
        setApiUrl('uat.pixley.app');
        setTenantUrls([{
            id: 'pixley-api',
            url: 'uat.pixley.app',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()    
        }]);
        
        setIsLoading(false);
    };

    useEffect(() => {
        loadTenantUrls();
    }, []); // Load once on mount

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

export function useTenantUrl() {
    const context = useContext(TenantUrlContext);
    if (!context) {
        throw new Error('useTenantUrl deve ser usado dentro de um TenantUrlProvider');
    }
    return context;
} 