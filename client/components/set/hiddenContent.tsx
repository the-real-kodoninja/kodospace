import React, { Fragment } from 'react';
import timeAgo from "../../addons/timeAgo.tsx";

export default function HiddenContent() {

    let ttlHdn_Cnt: number = 10;

    return (
      <Fragment>
        {Array.from({ length: ttlHdn_Cnt }).map((_, index) => (
        <div className="usrSet_ViewBlck">
          <img src="img/no_imgLnk2.svg"/>
          <div className="dI" style={{ margin: '0px 0px 0px 10px' }}>
            <div>@tempUser: <span>post</span></div>
            <div><small>{timeAgo(new Date('2024-04-06T10:00:00'))}</small></div>
          </div>
          <div className="fR">
            <button>unhide</button>
          </div>
        </div>
        ))}
      </Fragment>
    );
};