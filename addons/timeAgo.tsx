import React from 'react';

// Interface for Time Interval
interface TimeInterval {
  key: string;
  seconds: number;
}

function timeAgo(date: Date): string {
  const seconds = Math.floor((new Date() - date) / 1000);

  const intervals: TimeInterval[] = [
    { key: 'year', seconds: 31536000 },
    { key: 'month', seconds: 2592000 },
    { key: 'week', seconds: 604800 },
    { key: 'day', seconds: 86400 },
    { key: 'hour', seconds: 3600 },
    { key: 'minute', seconds: 60 },
  ];

  let interval = intervals.find((interval) => seconds >= interval.seconds);
  if (!interval) {
    return 'just now';
  }

  const count = Math.floor(seconds / interval.seconds);
  const suffix = count === 1 ? ' ago' : 's ago';

  return `${count} ${interval.key}${suffix}`;
}

export default timeAgo;
