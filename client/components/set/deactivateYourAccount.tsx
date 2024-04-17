import React, { Fragment } from 'react';
import Link from 'next/link';

export default function DeactivateYourAccount() {

    return (
      <Fragment>
        <p>Your account is spread across the kodoverse. If you were to delete your account it will delete there as well. Regardless of the reason your welcome to do so at anytime. If you are a premium member it will stop all transactions. If you’d just like to stop your transactions or discontinue your premium membership you may do so at any time.</p>

        <p>Below are a list of options that are available to you at anytime, if you suspend your account you may log in at anytime and your account will be reactivated. If you’d like to suspend your membership you can continue at anytime. A note to remember its only $3.99 a month; cheaper than a cup of coffee at your favorite Starbucks :) Regardless if you were to delete your account, your account will be deleted for 60 days until it becomes permanently deleted.</p>

        <p>suspend your account</p>

        <p>go invisible (Anonymous) - coming soon</p>

 
        <p><Link href="" style={{ color: 'rgb(201, 116, 116)' }}>delete your account</Link></p>
      </Fragment>
    );
};