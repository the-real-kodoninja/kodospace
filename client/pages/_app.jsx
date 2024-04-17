import { React, Fragment, useState, useEffect } from 'react';
import Head from 'next/head';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function KodospaceApp({ Component, pageProps }) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);

        // Setup the warning before page refresh
        const handleBeforeUnload = (e) => {
            e.preventDefault();
            e.returnValue = ''; // Chrome requires returnValue to be set
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        // Cleanup the event listener when the component unmounts
        return () => window.removeEventListener('beforeunload', handleBeforeUnload);
    }, []);

    return (
        <>
            <Head>
                <link rel="stylesheet" href="/css/main.css" />
                <link rel="stylesheet" href="/css/output.css" /> 
                <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
                <script src="https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.js"></script>
                {/*  */}
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet"/>
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default KodospaceApp;