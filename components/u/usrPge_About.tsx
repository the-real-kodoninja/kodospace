import React, { Fragment, useState, useEffect } from  'react';
import Link from 'next/link';

export default function UsrPge_About () {

    return (
        <Fragment>
            <div className="usrAbout_View p10">
                <h2>About</h2>
                <div className="usrAbout_Desc">your humble developer</div>
                <div className="usrAbout_Url">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                    </svg>
                    <span>
                        <Link href="kodoninja.com">kodoninja</Link>
                    </span>
                </div>
                <div className="usrAbout_Url">
                    {/* <!-- Youtube --> */}
                    <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#ff0000]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. --> */}
                            <path
                            d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                        </svg>
                    </span>
                    <span>
                        <Link href="https://www.youtube.com/channel/kodoninja">kodoninja</Link>
                    </span>
                </div>
                <div className="usrAbout_Url">
                    {/* <!-- X --> */}
                    <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-black">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 512 512">
                            {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. --> */}
                            <path
                            d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                        </svg>
                    </span>
                    <span>
                        <Link href="https://x.com/kodoninja">kodoninja</Link>
                    </span>
                </div>
                <div className='usrAbout_Url'>
                    {/* <!-- Twitch --> */}
                    <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#9146ff]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 512 512">
                            {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. --> */}
                            <path
                            d="M391.2 103.5H352.5v109.7h38.6zM285 103H246.4V212.8H285zM120.8 0 24.3 91.4V420.6H140.1V512l96.5-91.4h77.3L487.7 256V0zM449.1 237.8l-77.2 73.1H294.6l-67.6 64v-64H140.1V36.6H449.1z" />
                        </svg>
                    </span>
                    <span>
                        <Link href="">kodoninja</Link>
                    </span>
                </div>
            </div>
        </Fragment>
    );
};