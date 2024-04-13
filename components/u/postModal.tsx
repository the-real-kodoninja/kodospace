import React, { useState } from 'react';

const PostModal = ({ isOpen, onClose, userImage }) => {
  const [postContent, setPostContent] = useState('');
  const [isPublic, setIsPublic] = useState(true);
  const [canReply, setCanReply] = useState(true);
  const [media, setMedia] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission logic here
    console.log({ postContent, isPublic, canReply, media });
    onClose(); // Close the modal after submission
  };

  if (!isOpen) return null;

  return (
    <div className="modalBackdrop">
      <div className="modalContent">
        <img src={userImage} alt="User" className="userImage"/>
        <form onSubmit={handleSubmit}>
          <textarea
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            placeholder="What would you like to post?"
          />
          <label>
            <input
              type="checkbox"
              checked={isPublic}
              onChange={() => setIsPublic(!isPublic)}
            /> Make it public
          </label>
          <label>
            <input
              type="checkbox"
              checked={canReply}
              onChange={() => setCanReply(!canReply)}
            /> Who can reply
          </label>
          <input
            type="file"
            onChange={(e) => setMedia(e.target.files[0])}
          />
          <button type="submit">Post</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default PostModal;