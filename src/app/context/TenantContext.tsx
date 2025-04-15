"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { baseApi, tenantUrl } from '@/services/api';

interface TenantConfig {
    primary_color: string;
    secondary_color: string;
    third_color: string;
    background_color: string;
    id: string;
    name: string;
    created_at: string;
    updated_at: string;
    stripe_customer_id: string | null;
    logo_url: string | null;
    icon_url: string | null;
    black_color: string | null;
    white_color: string | null;
    background_color_a: string | null;
    background_color_b: string | null;
    component_background_a: string | null;
    component_background_b: string | null;
    support_number: string | null;
    hover_background: string | null;
    app_url: string | null;
    tenant_telegram_bot: string | null;
    tenant_telegram_username: string | null;
    tenant_telegram_url: string | null;
    tenant_telegram_admin_token: string | null;
    docs_source: string | null;
}

interface TenantContextData {
    tenantConfig: TenantConfig | null;
    isLoading: boolean;
    error: string | null;
    reloadTenantConfig: () => Promise<void>;
}

const TenantContext = createContext<TenantContextData>({} as TenantContextData);

export function TenantProvider({ children }: { children: React.ReactNode }) {
    const [tenantConfig, setTenantConfig] = useState<TenantConfig | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const loadTenantConfig = async () => {
        try {
            setIsLoading(true);
            setError(null);

            const response = await baseApi.get(`/api/whitelabel-config/?tenantUrl=${tenantUrl}`);

            if (response.data && response.data.docs_source) {
                window.localStorage.setItem('docs_source', response.data.docs_source);
            }

            setTenantConfig(response.data);

        } catch (err: any) {
            console.error('Erro ao carregar configurações do tenant:', err);
            setError(err.message || 'Erro ao carregar configurações');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        loadTenantConfig();
    }, []);

    useEffect(() => {
        if (tenantConfig) {
            if (tenantConfig.name) {
                document.title = tenantConfig.name;
            }
            const faviconUrl = tenantConfig.icon_url || tenantConfig.logo_url;
            if (faviconUrl) {
                let link = document.querySelector("link[rel*='icon']");
                if (!link) {
                    link = document.createElement('link');
                    link.setAttribute('rel', 'shortcut icon');
                    document.head.appendChild(link);
                }
                link.setAttribute('href', faviconUrl);
            }
        }
    }, [tenantConfig]);

    return (
        <TenantContext.Provider
            value={{
                tenantConfig,
                isLoading,
                error,
                reloadTenantConfig: loadTenantConfig
            }}
        >
            {children}
        </TenantContext.Provider>
    );
}

export function useTenant() {
    const context = useContext(TenantContext);
    if (!context) {
        throw new Error('useTenant deve ser usado dentro de um TenantProvider');
    }
    return context;
}