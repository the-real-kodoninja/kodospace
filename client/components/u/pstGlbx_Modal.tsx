import React, { useState } from 'react';

const FileUploadButton = ({ onChange }) => {
  return (
    <button type="button">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
      </svg>
      <input
        type="file"
        onChange={onChange}
        style={{ display: 'none' }} 
      />
    </button>
  );
};


const PstGlbx_Modal = ({ isOpen, onClose, userImage, selectedValue, onSelectChange }) => {
  // const [postContent, setPostContent] = useState('');
  // const [isPublic, setIsPublic] = useState(true);
  // const [canReply, setCanReply] = useState(true);
  // const [media, setMedia] = useState(null);


  const options = [
    { value: 'everyone', label: 'Everyone can reply' },
    { value: 'followers', label: 'Followers' },
    { value: 'subscribers', label: 'Subscribers' },
    { value: 'both', label: 'Followers & Subscribers' },
  ];
  
  const [value, setValue] = useState(selectedValue || 'everyone'); // Default to 'everyone'

  const handleChange = (event) => {
    setValue(event.target.value);
    onSelectChange(event.target.value);
  };

  // const handleOnChange = (e) => setMedia(e.target.files[0]);
  // 

  if (!isOpen) return null;


  // new post logic
  // const [posts, setPosts] = useState('');

  const addNewPost = (newPost) => {
      // Assuming newPost is an object with the same structure as your existing posts
      // and you're using numeric IDs for posts
      // const newPostId = Object.keys(posts).length + 1; // Simple way to generate a new ID
      // const updatedPosts = { [newPostId]: newPost, ...posts }; // Add new post at the beginning
      // setPosts(updatedPosts);
    };


    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   // Assuming you construct your newPost object here
    //   const newPost = {
    //     type: "post:text",
    //     data: postContent,
    //     date: new Date().toISOString(),
    //     isPublic,
    //     canReply,
    //     media,
    //   };
    //   // Assuming addNewPost is a prop passed to this component for adding a new post
    //   addNewPost(newPost);
    //   onClose(); // Close the modal after submission
    // };

    
  return (
    <div className="modalBackdrop">
      <div className="modalContent">
        <div className="modalCntHdr">
          <div className="dI">
            <img src={userImage} alt="User" className="userImage"/>
            <span>@kodoninja</span>
          </div>
          <button className="closePopup fR dI" onClick={onClose}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
          </button>
        </div>
        <form 
        // onSubmit={handleSubmit}
        >
          <textarea
            // value={postContent}
            // onChange={(e) => setPostContent(e.target.value)}
            placeholder="What would you like to post?"
          />
          <div className="option-select">
            <select value={value} onChange={handleChange}>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="modalCntFtr fR">
            {/* <FileUploadButton onChange={handleOnChange} /> */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
          </div>
          <input type="submit" value="post"/>
        </form>
      </div>
      {/* {Object.entries(posts).map(([id, post]) => (
        <div key={id}>{post}</div>
      ))} */}
    </div>
  );
};

export default PstGlbx_Modal;