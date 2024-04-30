import React, { Fragment,useState, useEffect, useRef } from 'react';
import timeAgo from "../addons/timeAgo.tsx";
//
import MHeader from '../components/header.tsx'; 
import Lft_menu from '../components/lft_menu.tsx'; 

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
  ];
  
  
  

const App = () => {
 
  let ttlMsg: number = 10;

  const [selectedMessage, setSelectedMessage] = useState(null);
  const [messageListWidth, setMessageListWidth] = useState(200); // Initial width of the MessageList
  const [isDragging, setIsDragging] = useState(false); // Declare isDragging state
  const [startX, setStartX] = useState(0); // Declare startX state

  const handleMessageClick = (message) => setSelectedMessage(message);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    // Add event listeners to the window
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const deltaX = currentX - startX;
    setMessageListWidth((prevWidth) => prevWidth + deltaX);
    setStartX(currentX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // Remove event listeners from the window
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  };
  

  return (
    <Fragment>
        <MHeader/>
        <main>
            <Lft_menu/>
            <div className="cntr_wrp p10">
				<div className="glbl-PULL">
              <div className="message-viewer" style={{ display: 'flex', flexDirection: 'row' }}>
                <MessageList messages={messages} onClick={handleMessageClick} style={{ width: `${messageListWidth}px` }} />
                <div
                  className="resizer"
                  style={{ cursor: 'ew-resize', width: '10px', userSelect: 'none' }}
                  onMouseDown={handleMouseDown}
                /> {/* Resizing element */}
                <MessageContent selectedMessage={selectedMessage} style={{ flex: 1 }} />
              </div>
            </div>
			</div>
        </main>
    </Fragment>
  );
};

export default App;
