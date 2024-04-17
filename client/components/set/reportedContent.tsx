import React, { Fragment } from 'react';
import timeAgo from "../../addons/timeAgo.tsx";

export default function ReportedContent() {

    let ttlRpt_Cnt: number = 10;

    return (
      <Fragment>
        {Array.from({ length: ttlRpt_Cnt }).map((_, index) => (
        <div className="usrSet_ViewBlck usrSet_ViewRprt">
          <img src="img/no_imgLnk2.svg"/>
          <div className="dI" style={{ margin: '0px 0px 0px 10px' }}>
            <div>@tempUser: <span>post</span></div>
          </div>
          <ol>
            <li>
              <div className="usrSet_ViewLi">You reported that this content is not under fair use and may've been copyrighted, meow</div>
              <div className="fR">
                <small>
                {timeAgo(new Date('2024-04-06T10:00:00'))}
                </small>
              </div>
            </li>
            <li>
              <div className="usrSet_ViewLi">This is now under review, meow</div>
              <div className="fR">
                <small>
                {timeAgo(new Date('2024-04-06T10:00:00'))}
                </small>
              </div>
            </li>
          </ol>
        </div>
        ))}
      </Fragment>
    );
};