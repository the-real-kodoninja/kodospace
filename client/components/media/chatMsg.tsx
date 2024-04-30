import React, { Fragment, useState, useEffect } from 'react';
import timeAgo from "../../addons/timeAgo.tsx";
import Picker from 'emoji-picker-react';
import GifPicker from 'gif-picker-react';
import dynamic from 'next/dynamic';

const ChatMsg_Mod = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);

    const toggleChat = () => setIsChatOpen(!isChatOpen);

    const [posts, setPosts] = useState([{ username: "@kodokitty", usernameStyle: { color: 'orange' }, message: "Welcome to the ChatArena, meow" }]);
    
    const logUserName = '@kodoninja';
    
    const handlePostSubmit = (e) => {
        e.preventDefault(); // Prevent the form from refreshing the page
        const newPostObj = { username: logUserName, usernameStyle: { color: 'purple' }, message: newPost }; // Use JSX style object
        setPosts([...posts, newPostObj]);
        setNewPost(''); // Clear the input after posting
    };

    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [newPost, setNewPost] = useState(""); // Assuming you want to manage a post's content

    const toggleEmojiPicker = () => {
        setShowEmojiPicker(!showEmojiPicker);
    };

    const addEmojiToPost = (emoji) => {
        setNewPost(newPost + emoji);
    };

    const onEmojiClick = (event, emojiObject) => {
        console.log(emojiObject); // Add this line to see the structure of emojiObject
        setNewPost(newPost + emojiObject.emoji);
    };
    
    const EmojiPicker = dynamic(
        () => {
            return import('emoji-picker-react');
        },
        { ssr: false }
    );
    

    const emojiTgleBtn = () => {
        return ( // Added return statement
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" onClick={toggleEmojiPicker}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
            </svg>
        );
    };

    // function GifApp() {
    // return (
    //     <div>
    //         <GifPicker tenorApiKey={"2ccc56fc5eb0d0e4ba2781c99e457c41cf7b60f8"} />
    //     </div>
    // );
    // }

    return (
        <Fragment>
            <div className="chatMsgIcn" onClick={toggleChat}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
            </div>
            {isChatOpen && (
                <div className="chatArenaArea">
                    <div className="chatArenaHdr">
                        <span className="dN">Chat Arena is closed for this video</span>
                        <span>Chat Arena is open for this video</span>
                        <span className="fR" onClick={() => setIsChatOpen(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 chatArenaCLX cP" onClick={toggleChat}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </span>
                    </div>
                    <div className="chatArenaBdy">
                        <div className="chatArenaPst">
                        {posts.map((post, index) => (
                            <div key={index} className="chatArenaPst_Itm">
                                <span style={post.usernameStyle}>{post.username}</span>:&nbsp;<span>{post.message}</span>
                            </div>
                        ))}
                        </div>
                        <div className="chatArenaPst_wpr">
                            <textarea placeholder="What would you like to post" value={newPost} onChange={(e) => setNewPost(e.target.value)}></textarea>
                            <div>
                                {emojiTgleBtn()}
                                {showEmojiPicker && (
                                    <EmojiPicker onEmojiClick={onEmojiClick} theme="dark"/>
                                )}
                                {/* {GifApp()} */}
                                <input type="submit" value="chat" onClick={handlePostSubmit} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Fragment>
    );
};

export default ChatMsg_Mod;