import type { AppProps } from 'next/app';
import { WhitelabelProvider } from '@/app/context/WhitelabelConfigContext';
import { useWhitelabel } from '@/app/context/WhitelabelConfigContext';

function LoadingScreen() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
    );
}

function ErrorScreen({ error }: { error: Error }) {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
                <h1 className="text-2xl font-bold text-red-500">Erro ao carregar configurações</h1>
                <p className="mt-2 text-gray-600">{error.message}</p>
            </div>
        </div>
    );
}

function AppContent({ Component, pageProps }: AppProps) {
    const { config } = useWhitelabel();

    if (config.isLoading) {
        return <LoadingScreen />;
    }

    if (config.error) {
        return <ErrorScreen error={config.error} />;
    }

    return <Component {...pageProps} />;
}

function MyApp(props: AppProps) {
    return (
        <WhitelabelProvider>
            <AppContent {...props} />
        </WhitelabelProvider>
    );
}

export default MyApp; 