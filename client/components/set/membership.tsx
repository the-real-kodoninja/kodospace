import React, { Fragment } from 'react';
import Link from 'next/link';

export default function Membership() {

    return (
      <Fragment>
        <p>Your premium membership is payed by kodokitty, meow that's me.</p>

        <p><Link href="/" style={{ color: 'rgb(201, 116, 116)' }}>Suspend your membership</Link></p>

        <p><Link href="" style={{ color: 'rgb(201, 116, 116)' }}>Cancel to downgrade your membership</Link></p>
      </Fragment>
    );
};