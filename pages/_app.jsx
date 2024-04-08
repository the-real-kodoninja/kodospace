import { React,Fragment,useState, useEffect } from 'react';
import Head from 'next/head';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserPage from './user.jsx'; // Import the UserPage component

function KodospaceApp({ Component, pageProps }) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
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
                {/*  */}
                <link rel="stylesheet" href="https://pyscript.net/releases/2024.1.1/core.css" />
                <script type="module" src="https://pyscript.net/releases/2024.1.1/core.js"></script>
            </Head>
            <Component {...pageProps} />
            {/* {isMounted && (
            <Router>
                <Routes>
                    <Route path="/@:username" element={<UserPage />} />
                    <Route path="/" element={<Component {...pageProps} />} />
                </Routes>
            </Router>
            )} */}
        </>
    );
}

export default KodospaceApp;