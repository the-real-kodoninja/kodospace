import React, { Fragment } from 'react';
import timeAgo from "../../addons/timeAgo.tsx";

export default function KodoToken() {
  const transactions = [
    { amtAdjt: 1000, amtCrnt: 1000, reason: 'easter egg find', dateTime: '2024-04-06T10:00:00' },
    { amtAdjt: 500, amtCrnt: 1500, reason: 'bonus points', dateTime: '2024-04-07T10:00:00' },
    { amtAdjt: -200, amtCrnt: 1300, reason: 'small penalty', dateTime: '2024-04-08T10:00:00' },
    { amtAdjt: 1000, amtCrnt: 2300, reason: 'special event reward', dateTime: '2024-04-09T10:00:00' },
    { amtAdjt: -500, amtCrnt: 1800, reason: 'purchase', dateTime: '2024-04-10T10:00:00' },
    { amtAdjt: 200, amtCrnt: 2000, reason: 'daily login', dateTime: '2024-04-11T10:00:00' },
    { amtAdjt: -100, amtCrnt: 1900, reason: 'fee', dateTime: '2024-04-12T10:00:00' },
    { amtAdjt: 300, amtCrnt: 2200, reason: 'referral bonus', dateTime: '2024-04-13T10:00:00' },
    { amtAdjt: -400, amtCrnt: 1800, reason: 'item upgrade', dateTime: '2024-04-14T10:00:00' },
    { amtAdjt: 500, amtCrnt: 2300, reason: 'contest win', dateTime: '2024-04-15T10:00:00' },
    { amtAdjt: -300, amtCrnt: 2000, reason: 'maintenance fee', dateTime: '2024-04-16T10:00:00' }
  ];

  return (
    <Fragment>
      {transactions.map(({ amtAdjt, amtCrnt, reason, dateTime }) => (
        <div className="usrSet_ViewCrncy" key={dateTime}>
          <div className="dI">
            <div>
              <span style={{ color: amtAdjt >= 0 ? 'green' : 'red' }}>{amtAdjt >= 0 ? `+${amtAdjt}` : amtAdjt}</span>
              <span> = ({amtCrnt})</span>
            </div>
            <div>
              <span>by {reason}</span>
            </div>   
          </div>
          <div className="fR">
            <span>{timeAgo(new Date(dateTime))}</span>
          </div>
        </div>
      ))}
    </Fragment>
  );
};