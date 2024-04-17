import React, { Fragment } from 'react';
import timeAgo from "../../addons/timeAgo.tsx";

export default function BlockedUsers() {

    let ttlUsr_blck: number = 5;

    return (
      <Fragment>
        {Array.from({ length: ttlUsr_blck }).map((_, index) => (
        <div className="usrSet_ViewBlck">
          <img src="img/no_imgLnk2.svg"/>
          <div className="dI" style={{ margin: '0px 0px 0px 10px' }}>
            <div>@tempUser</div>
            <div><small>{timeAgo(new Date('2024-04-06T10:00:00'))}</small></div>
          </div>
          <div className="fR">
            <button>unblock</button>
          </div>
        </div>
        ))}
      </Fragment>
    );
};