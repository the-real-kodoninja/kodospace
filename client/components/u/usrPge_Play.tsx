import React, { Fragment } from 'react';
import timeAgo from "../../addons/timeAgo.tsx";

export default function UsrPge_Play () {

    const calculateMargin = (index) => index * 30; // Function to calculate margin

    let playLstCnt: number = 4;
    let vidCnt: number = 4;
    let vidExt: number = 4;

    return (
        <Fragment>
            {Array.from({ length: playLstCnt }).map((_, index) => (
            <div className="usrPlay_View dB">
                <ul>
                    <li>
                        <div className="usrPlay_VidVw">
                            {Array.from({ length: vidCnt }).map((_, i) => (
                                <div
                                key={`${index}-${i}`}
                                className="usrPlay_VidThmb"
                                style={{ margin: `0px 0px 0px ${calculateMargin(i)}px` }}
                                >
                                    <img src="img/no_imgLnk.svg"/>
                                    {i === vidExt - 1 && <div className="usrPlay_CntMre"><span>{'+ '+vidExt}</span></div>}
                                </div>
                            ))}
                        </div>
                        <div style={{ margin: '20px 0px 0px 318px', width: '350px' }}>
                            <div>
                                <span>{timeAgo(new Date('2024-04-06T10:00:00'))}</span>
                                <span className="fR">4:04:00</span>
                            </div>
                            <div>How to be an airbender</div>
                        </div>
                    </li>
                </ul>
            </div>
            ))}
        </Fragment>
    );
};