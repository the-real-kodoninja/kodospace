import React, { Fragment, useState, useEffect } from  'react';
// temp user call modules
import UsrPge_Post from './usrPge_Post.tsx'; // post
import UsrPge_Live from './usrPge_Live.tsx'; // live
import UsrPge_Play from './usrPge_Play.tsx'; // play
import UsrPge_Story from './usrPge_Story.tsx'; // play
import UsrPge_Subscribe from './usrPge_Subscribe.tsx'; // subscribe
import { UsrPge_Followers,UsrPge_Following } from './usrPge_Fllw.tsx'; // followers/following
import UsrPge_About from './usrPge_About.tsx'; // about

export default function usrPge_fltr({ items, onFilterClick, selectedFilter: initialFilter }) {
  
  const filterItems = [
    'post',
    'likes',
    'live',
    'playlist',
    'stories',
    'followers',
    'following',
    'subscribe',
    'about'
  ];

  const [selectedFilter, setSelectedFilter] = useState(initialFilter || 'post'); // Use initialFilter or default to 'post'onst [selectedFilter, setSelectedFilter] = useState(initialFilter || 'post'); // Use initialFilter or default to 'post'
  useEffect(() => {
    // Fetch initial data based on initialFilter or default filter
    handleClick(selectedFilter);
  }, [selectedFilter]); // Depend on selectedFilter to re-run when it changes
  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Track loading state


  const handleClick = (filter) => {
    setSelectedFilter(filter);
    setIsLoading(true); // Set loading state to true
  
    if (onFilterClick) {
      onFilterClick(filter); // Optional call to provided function
    }
  
    // Set the appropriate user module component based on filter
    let ComponentToRender;
    switch (filter) {
      case 'post':
        ComponentToRender = UsrPge_Post;
        break;
      case 'live':
        ComponentToRender = UsrPge_Live;
        break;
      case 'playlist':
        ComponentToRender = UsrPge_Play;
        break;
      case 'stories':
        ComponentToRender = UsrPge_Story;
        break;
      case 'followers':
        ComponentToRender = UsrPge_Followers;
        break;
      case 'following':
        ComponentToRender = UsrPge_Following;
        break;
      case 'subscribe':
        ComponentToRender = UsrPge_Subscribe;
        break;
      case 'about':
        ComponentToRender = UsrPge_About;
        break;
      default:
        ComponentToRender = null; // Handle default case
    }
  
    setContent(() => ComponentToRender);
    setIsLoading(false);
  };

  useEffect(() => {
    // Optional: Fetch initial data based on default filter
    handleClick(selectedFilter);
  }, []); // Empty dependency array to run only once on component mount

  return (
    <>
      <div style={{ margin: '0px 0px 20px 0px' }}>
        <ul className="hdr-fltr" style={{ margin: '8px 0px 0px' }}>
          {Object.entries(filterItems).map(([key, value]) => (
            <li
              key={key}
              style={{
                backgroundColor: selectedFilter === value ? '#804949' : '',
                color: selectedFilter === value ? '#fff' : '',
              }}
              onClick={() => handleClick(value)}
            >
              {value}
            </li>
          ))}
        </ul>
      </div>
      {/* Div to display content */}
      {isLoading ? (
        <div className="cntr_wrp dI p10">Loading content...</div>
				) : content ? (
				<div className="cntr_wrp dI p10" style={{ width: '100%' }}>
					{/* Render the fetched content here */}
          {content ? React.createElement(content) : "No content available for this filter."}
          
				</div>
				) : (
        <div className="cntr_wrp dI p10">No content available for this filter.</div>
			)}
    </>
  );
}