import React, { Fragment, useState } from 'react'
import MHeader from '../components/header.tsx'; 
import Lft_menu from '../components/lft_menu.tsx'; 
import axios from 'axios';
// post global modules
import PstGlb_Mod from '../components/m/pstGlb_mod.tsx';
 
export default function Aviyon_AI_App () {


      return (
        <Fragment>
            <MHeader/>
            <main>
                <Lft_menu/>
                <div className="cntr_wrp dI pA p10">
                    <div className="ai_ViewTxt_Wpr">
                        <h1>Aviyon AI</h1>
                        <div style={{ width: '100%' }}>
                            <p>The AI of the kodoverse is coming 2025. Check a list of things you'll be able to do just by saying, Hey Aviy!</p>
                            <ol>
                                <li>Hey Aviy, can you help me find kodotokens?</li>
                                <li>Hey Aviy, can you automate post for me every 4 hours, about my platform updates?</li>
                                <li>Hey Aviy, Can you bring me up a list of potential clients for my store services throughout the app?</li>
                                <li>Hey Aviy, can you write me a song about my love of tech and cats?</li>
                                <li>Hey Aviy, can you help me go anoymous?</li>
                                <li>Hey Aviy, how can i hide my post from my mom?</li>
                                <li>Hey Aviy, can you help me with my code?</li>
                                <li>Hey Aviy, can you help me write more engaging post to get more followers?</li>
                                <li>Hey Aviy, Can you play me a song about love and war?</li>
                            </ol>
                            <p>There is so much more coming, to make your social experience amaxing!</p>
                        </div>
                    </div>
                </div>
            </main>
            <PstGlb_Mod/>
        </Fragment>
    );
}