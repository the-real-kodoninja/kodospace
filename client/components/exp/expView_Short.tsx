import React, { Fragment, useState, useEffect } from 'react';
import timeAgo from "../../addons/timeAgo.tsx";

const MessageContent = ({ selectedMessage }) => {
    const [view, setView] = useState(selectedMessage ? 'message' : 'default');

    // Effect to update view when selectedMessage changes
    useEffect(() => {
        if (selectedMessage) {
            setView('message');
        }
    }, [selectedMessage]);
    
    const handleSettingsClick = () => {
        setView('settings'); // Update view to show settings
    };

    const [messagePrivacy, setMessagePrivacy] = useState('no one'); // Default privacy setting

    const handlePrivacyChange = (event) => {
        setMessagePrivacy(event.target.value);
    };


  return (
        <div className="message-content">
        {view === 'default' && (
            <div className="msgContent_defaultVw">
                <h3>Select a message</h3> 
                <div onClick={() => setView('settings')}>Choose from the list to the left.</div>
            </div>
        )}
        {view === 'message' && selectedMessage && (
            <div className="msgContent_View">
                <div className="msgContent_VwHdr">
                    <div className="dI" style={{ width: '100%' }}>
                    <img src={'img/'+selectedMessage.usrImgThumb} alt={selectedMessage.uname} />
                        <div className="dI">
                            <span>{selectedMessage.uname}</span>
                        </div>
                        <div className="fR">
                            <small>{timeAgo(new Date(selectedMessage.date))}</small>
                        </div>
                        <h2>{selectedMessage.subject}</h2>
                    </div>
                </div>
                <div className="msgContent_VwBdy msgContentScroll">
                    <div className="msgCnt_Usr1">{selectedMessage.body}</div>
                    <div className="msgCnt_Usr1">This is me meow a test post</div>
                    <div className="msgCnt_Usr2">Hold on kitty your not a cumcumber</div>
                    <div className="msgCnt_Usr1">This is me meow a test post</div>
                    <div className="msgCnt_Usr2">Hold on kitty your not a cumcumber</div>
                    <div className="msgCnt_Usr1">{selectedMessage.body}</div>
                    <div className="msgCnt_Usr1">This is me meow a test post</div>
                    <div className="msgCnt_Usr2">Hold on kitty your not a cumcumber</div>
                    <div className="msgCnt_Usr1">This is me meow a test post</div>
                    <div className="msgCnt_Usr2">Hold on kitty your not a cumcumber</div>
                </div>
                <div className="msgContent_txtFtr">
                    <textarea placeholder="What would you like to post"></textarea>
                    <div className="attachments">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                        </svg>
                    </div>
                </div>
            </div>
        )}
        {view === 'settings' && (
                <div className="msgContent_defaultVw">
                    <h3>Settings</h3>
                    <div>Who would you like to receive messages from?</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '5px 0px 0px' }}>
                        <span>Message Privacy:</span>
                        <select value={messagePrivacy} onChange={handlePrivacyChange} style={{ background: 'transparent' }}>
                            <option value="no one">No one</option>
                            <option value="verified users">Verified users</option>
                            <option value="following">Following</option>
                            <option value="everyone">Everyone</option>
                        </select>
                    </div>
                </div>
            )}
        </div>
  );
};

export default MessageContent;
