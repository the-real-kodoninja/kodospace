import React, { Fragment, useState } from 'react';

const EmojiApp = () => {
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [newPost, setNewPost] = useState(""); // Assuming you want to manage a post's content

    const toggleEmojiPicker = () => {
        setShowEmojiPicker(!showEmojiPicker);
    };

    const addEmojiToPost = (emoji) => {
        setNewPost(newPost + emoji);
    };

    const emojiTgleBtn = () => {
        return ( // Added return statement
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" onClick={toggleEmojiPicker}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
            </svg>
        );
    };

    return (
        <Fragment>
            {showEmojiPicker && (
                <Fragment>
                    {emojiTgleBtn()}
                    <div className="emojiPicker">
                        <div key="smileys">
                            <span onClick={() => addEmojiToPost("😀")}>😀</span>
                            <span onClick={() => addEmojiToPost("😃")}>😃</span>
                            <span onClick={() => addEmojiToPost("😄")}>😄</span>
                            <span onClick={() => addEmojiToPost("😁")}>😁</span>
                            <span onClick={() => addEmojiToPost("😆")}>😆</span>
                            <span onClick={() => addEmojiToPost("😅")}>😅</span>
                            <span onClick={() => addEmojiToPost("😂")}>😂</span>
                            <span onClick={() => addEmojiToPost("🤣")}>🤣</span>
                            <span onClick={() => addEmojiToPost("🥲")}>🥲</span>
                            <span onClick={() => addEmojiToPost("🥹")}>🥹</span>
                            <span onClick={() => addEmojiToPost("☺️")}>☺️</span>
                            <span onClick={() => addEmojiToPost("😊")}>😊</span>
                            <span onClick={() => addEmojiToPost("😇")}>😇</span>
                            <span onClick={() => addEmojiToPost("🙂")}>🙂</span>
                            <span onClick={() => addEmojiToPost("🙃")}>🙃</span>
                            <span onClick={() => addEmojiToPost("😉")}>😉</span>
                            <span onClick={() => addEmojiToPost("😌")}>😌</span>
                            <span onClick={() => addEmojiToPost("😍")}>😍</span>
                            <span onClick={() => addEmojiToPost("🥰")}>🥰</span>
                            <span onClick={() => addEmojiToPost("😘")}>😘</span>
                            <span onClick={() => addEmojiToPost("")}></span>
                            <span onClick={() => addEmojiToPost("")}></span>
                            <span onClick={() => addEmojiToPost("")}></span>
                            <span onClick={() => addEmojiToPost("")}></span>
                        </div>
                        😘
😗
😙
😚
😋
😛
😝
😜
🤪
🤨
🧐
🤓
😎
🥸
🤩
🥳
🙂‍↕️
😏
😒
🙂‍↔️
😞
😔
😟
😕
🙁
☹️
😣
😖
😫
😩
🥺
😢
😭
😮‍💨
😤
😠
😡
🤬
🤯
😳
🥵
🥶
😱
😨
😰
😥
😓
🫣
🤗
🫡
🤔
🫢
🤭
🤫
🤥
😶
😶‍🌫️
😐
😑
😬
🫨
🫠
🙄
😯
😦
😧
😮
😲
🥱
😴
🤤
😪
😵
😵‍💫
🫥
🤐
🥴
🤢
🤮
🤧
😷
🤒
🤕
🤑
🤠
😈
👿
👹
👺
🤡
💩
                    </div>
                </Fragment>
            )}
        </Fragment>
    );
};

export default EmojiApp;