import React, { Fragment } from 'react';
import Link from 'next/link';

export default function DownloadYourData() {

    return (
      <Fragment>
        <p>Choose how’d you like to download your information, .csv, .xls, or .zip… If you do .zip it’ll include both a .csv and .exl with all your image we’ve stored… This will include all your user photos blog post etc. And if you have an account across the other kodoverse platforms, itll download that as well.</p>

        <p><Link href="/">download .csv</Link></p>

        <p><Link href="/">download .xls</Link></p>

        <p><Link href="/">download .zip</Link></p>
      </Fragment>
    );
};