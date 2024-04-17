import React, { Fragment } from 'react';
import timeAgo from "../../addons/timeAgo.tsx";

export default function UsrPge_Live () {

    return (
        <Fragment>
            <ul className="usrLive_View">
            {Array.from({ length: 3 }).map((_, index) => (
                <li>
                    <img className="usrLive_Thmb" src="img/no_imgLnk.svg"/>
                    <div>
                        <div>untitled_12-22-23_30:23</div>
                        <div>{timeAgo(new Date('2024-04-06T10:00:00'))}</div>
                        <div className="dI">30:23</div>
                    </div>
                </li>
                ))}
            </ul>
        </Fragment>
    );
};