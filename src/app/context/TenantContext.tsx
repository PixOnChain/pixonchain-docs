"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

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
    email_suporte: string | null;
}

interface TenantContextData {
    tenantConfig: TenantConfig | null;
    isLoading: boolean;
    error: string | null;
    reloadTenantConfig: () => void;
}

const TenantContext = createContext<TenantContextData>({} as TenantContextData);

export function TenantProvider({ children }: { children: React.ReactNode }) {
    const [tenantConfig, setTenantConfig] = useState<TenantConfig | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const loadTenantConfig = () => {
        setIsLoading(true);
        
        // Always use Pixley configuration
        const pixleyConfig: TenantConfig = {
            primary_color: '#6F38F5',
            secondary_color: '#A855F7',
            third_color: '#F8F8F8',
            background_color: '#FAF5FF',
            id: 'pixley',
            name: 'Pixley',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            stripe_customer_id: null,
            logo_url: null,
            icon_url: null,
            black_color: '#000000',
            white_color: '#ffffff',
            background_color_a: '#FAF5FF',
            background_color_b: '#F3E8FF',
            component_background_a: '#ffffff',
            component_background_b: '#f8fafc',
            support_number: null,
            hover_background: '#F3E8FF',
            app_url: 'https://uat.pixley.app',
            tenant_telegram_bot: null,
            tenant_telegram_username: null,
            tenant_telegram_url: null,
            tenant_telegram_admin_token: null,
            docs_source: 'pixley',
            email_suporte: 'support@pixley.app'
        };
        
        setTenantConfig(pixleyConfig);
        setIsLoading(false);
    };

    useEffect(() => {
        loadTenantConfig();
    }, []);

    useEffect(() => {
        if (tenantConfig) {
            document.title = tenantConfig.name;
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