import React, { Fragment, useState } from 'react'
import MHeader from '../components/header.tsx'; 
import Lft_menu from '../components/lft_menu.tsx'; 
import axios from 'axios';
// post global modules
import PstGlb_Mod from '../components/m/pstGlb_mod.tsx';
import ChatMsg_Mod from '../components/media/chatMsg.tsx';
// explore moduals
import ExpView_Video from '../components/exp/expView_Video.tsx';
import ExpView_Short from '../components/exp/expView_Short.tsx';
import ExpView_User from '../components/exp/expView_User.tsx';
 
export default function ExploreApp () {

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
        <Fragment>
            <MHeader/>
            <main>
                <Lft_menu/>
                <div className="cntr_wrp dI pA p10">
                    <div className="mnVwbdy expView_Wpr">
                        <div className="expView_Hdr dB">
                            <h1>Find content & creators</h1>
                            <div className='expView_Sch'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                                <input type="search" placeholder="Filter content"/>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: '648px', margin: '20px 0px 0px 0px' }}>
                        <ul className="hdr-fltr">
                            {Object.entries(filterItems).map(([key, value]) => (
                                <li key={key} style={key === '0' ? { backgroundColor: '#fff', color: '#111' } : {}}>
                                    {value}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <ExpView_Video />
                    <ExpView_Short />
                    <ExpView_User />
                </div>
            </main>
			<ChatMsg_Mod/>
            <PstGlb_Mod/>
        </Fragment>
    );
}
