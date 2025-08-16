import type { AppProps } from 'next/app';


function AppContent({ Component, pageProps }: AppProps) {

    return <Component {...pageProps} />;
}

function MyApp(props: AppProps) {
    return (
            <AppContent {...props} />
    );
}

export default MyApp; 