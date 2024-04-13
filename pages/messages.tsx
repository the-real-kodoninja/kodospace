import React, { Fragment,useState, useEffect, useRef } from 'react';
import timeAgo from "../addons/timeAgo.tsx";
//
import MHeader from '../components/header.tsx'; 
import Lft_menu from '../components/lft_menu.tsx'; 
import Hdr_fltr from '../components/hdr_fltr.tsx';
import MFooter from '../components/footer.tsx'; 

import MessageList from '../components/m/messageList.tsx';
import MessageContent from '../components/m/messageContent.tsx';

const messages = [
    {
      id: 1,
      uid: 1,
      uname: '@kodoninja',
      usrImgThumb: 'no_imgLnk2.svg',
      subject: "Welcome!",
      body: "This is a welcome email.",
      sender: "noreply@example.com",
      date: "2024-04-12",
      isFlagged: false,
      isRead: true,
    },
    {
      id: 2,
      uid: 2,
      uname: '@CatCumcumber',
      usrImgThumb: 'no_imgLnk2.svg',
      subject: "Important Update",
      body: "There's an important update for your account.",
      sender: "security@example.com",
      date: "2024-04-11",
      isFlagged: true,
      isRead: false,
    },
    // ... other emails
  ];
  
  
  

const App = () => {
 
  let ttlMsg: number = 10;

    const [selectedMessage, setSelectedMessage] = useState(null);

    const handleMessageClick = (message) => setSelectedMessage(message);



  return (
    <Fragment>
        <MHeader/>
        <main>
            <Lft_menu/>
            <div className="cntr_wrp dI pA p10">
                <Hdr_fltr/>
                <div className="message-viewer">
                    <MessageList messages={messages} onClick={handleMessageClick} />
                    <MessageContent selectedMessage={selectedMessage} />
                    <div className="resizer" /> {/* Optional: Resizing element */}
                </div>
            </div>
        </main>
        <MFooter/>
    </Fragment>
  );
};

export default App;