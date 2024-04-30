import { React, Fragment, useState, useEffect } from 'react';

function KodospaceApp({ Component, pageProps }) {

    return (
        <>
            <Component {...pageProps} />
        </>
    );
}

export default KodospaceApp;
