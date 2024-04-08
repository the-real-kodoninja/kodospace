import React, { Fragment,useState } from 'react';

export default function Hdr_fltr ({ items, onFilterClick })  {

    const filterItems = [
        'All',
        'Javascript',
        'Gaming',
        'RVs',
        'Music',
        'C++',
        'Linux',
        'Fast chess',
        'Camping',
        'Live',
        'Mixes',
        'Lo-Fi',
        'AI',
        'Computer programmer',
        'Computer engineering',
        'code',
      ];

    return (
        <>
        <ul className="hdr-fltr">
        {Object.entries(filterItems).map(([key, value]) => (
            // will be replaced with logic based clicks
            <li key={key} style={key === '0' ? { backgroundColor: '#fff', color: '#111' } : {}}>
                {value}
            </li>
            ))}
        </ul>
        </>
    );
};