// src/context/WhitelabelConfigContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { baseApi } from "@/services/api";
import { TenantSettings, WhitelabelConfig } from "@/types/tenant";

interface WhitelabelContextType {
    config: WhitelabelConfig;
    updateTenantSettings: (settings: Partial<TenantSettings>) => void;
    reloadTenantSettings: () => Promise<void>;
}

const defaultConfig: WhitelabelConfig = {
    tenantSettings: null,
    isLoading: true,
    error: null,
};

const WhitelabelContext = createContext<WhitelabelContextType>({
    config: defaultConfig,
    updateTenantSettings: () => { },
    reloadTenantSettings: async () => { },
});

export const WhitelabelProvider = ({ children }: { children: React.ReactNode }) => {
    const [config, setConfig] = useState<WhitelabelConfig>(defaultConfig);

    const loadTenantSettings = async () => {
        try {
            setConfig(prev => ({ ...prev, isLoading: true, error: null }));

            const [responseWhitelabelConfig, responseFavicon] = await Promise.all([
                baseApi.get(`/api/whitelabel-config?tenantUrl=${window.location.hostname}`),
                baseApi.get(`/api/whitelabel-config/image/favicon?tenantUrl=${window.location.hostname}`, {
                    responseType: 'arraybuffer'
                })
            ]);

            const faviconBlob = new Blob([responseFavicon.data], { type: 'image/png' });
            const favUrl = URL.createObjectURL(faviconBlob);

            const { id, name, primaryColor, secondaryColor, logoUrl } = responseWhitelabelConfig.data;

            const settings: TenantSettings = {
                id: id || '',
                name: name,
                primaryColor: primaryColor || '#7E69AB',
                secondaryColor: secondaryColor || '#2A3142',
                tenant_id: id || '',
                faviconUrl: favUrl,
                logoUrl: logoUrl,
            };

            setConfig(prev => ({ ...prev, tenantSettings: settings }));
            applyTenantSettings(settings);
        } catch (error) {
            console.error("Error loading tenant settings:", error);
            setConfig(prev => ({ ...prev, error: error as Error }));
        } finally {
            setConfig(prev => ({ ...prev, isLoading: false }));
        }
    };

    const applyTenantSettings = (settings: TenantSettings) => {
        // Aplica o título
        document.title = settings.name;

        // Aplica o favicon
        if (settings.faviconUrl) {
            const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
            link.setAttribute('rel', 'shortcut icon');
            link.setAttribute('href', settings.faviconUrl);
            document.head.appendChild(link);
        }

        // Aplica as cores
        if (settings.primaryColor) {
            document.documentElement.style.setProperty('--primary', settings.primaryColor);
        }
        if (settings.secondaryColor) {
            document.documentElement.style.setProperty('--secondary', settings.secondaryColor);
        }

        // Aplica estilos customizados
        if (settings.customStyles) {
            Object.entries(settings.customStyles).forEach(([key, value]) => {
                document.documentElement.style.setProperty(`--${key}`, value);
            });
        }
    };

    const updateTenantSettings = (newSettings: Partial<TenantSettings>) => {
        setConfig(prev => {
            if (!prev.tenantSettings) return prev;
            const updatedSettings = { ...prev.tenantSettings, ...newSettings };
            applyTenantSettings(updatedSettings);
            return { ...prev, tenantSettings: updatedSettings };
        });
    };

    useEffect(() => {
        loadTenantSettings();
    }, []);

    return (
        <WhitelabelContext.Provider
            value={{
                config,
                updateTenantSettings,
                reloadTenantSettings: loadTenantSettings,
            }}
        >
            {children}
        </WhitelabelContext.Provider>
    );
};

export const useWhitelabel = () => {
    const context = useContext(WhitelabelContext);
    if (!context) {
        throw new Error('useWhitelabel must be used within a WhitelabelProvider');
    }
    return context;
};