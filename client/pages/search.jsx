import React, { Fragment, useState, useEffect } from 'react';
import timeAgo from "../addons/timeAgo.tsx";
import { useRouter } from 'next/router';
import Link from 'next/link';
import MHeader from '../components/header.tsx'; 
import Lft_menu from '../components/lft_menu.tsx'; 
import axios from 'axios';
import ChatMsg_Mod from '../components/media/chatMsg.tsx';
import PstGlb_Mod from '../components/m/pstGlb_mod.tsx';

const Search = () => {
  const router = useRouter();
  const { s } = router.query; // Access the 's' query parameter

  useEffect(() => {
    // You can use the 's' parameter here to fetch data or perform other actions
    console.log(s); // This will log the value of 's' to the console
  }, [s]); // This effect will re-run whenever the 's' parameter changes


    const filterItems = [
        'post',
        'videos',
        'users',
        'reels',
        'live',      
	];
  
  return (
    <Fragment>
      <MHeader />
      <main>
        <Lft_menu />
        <div className="cntr_wrp dI pA p10">
			<ul className="hdr-fltr">
			{Object.entries(filterItems).map(([key, value]) => (
            // will be replaced with logic based clicks
				<li key={key} style={key === '0' ? { backgroundColor: '#fff', color: '#111' } : {}}>
					{value}
				</li>
            ))}
			</ul>
			<div>Showing searches for: {s}</div>
        </div>
      </main>
      <ChatMsg_Mod />
      <PstGlb_Mod />
    </Fragment>
    );
  };

export default Search;  
