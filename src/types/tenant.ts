export interface TenantSettings {
    id: string;
    name: string;
    primaryColor: string;
    secondaryColor: string;
    logoUrl?: string;
    faviconUrl?: string;
    tenant_id: string;
    // Adicione outras configurações específicas do seu caso
    customStyles?: {
        [key: string]: string;
    };
    features?: {
        [key: string]: boolean;
    };
}

export interface WhitelabelConfig {
    tenantSettings: TenantSettings | null;
    isLoading: boolean;
    error: Error | null;
} 