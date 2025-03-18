import React, { useState, useEffect } from 'react';
import MnPst_View from '../../components/mnPst_View.tsx';
import UsrPge_Live from './usrPge_Live.tsx'; 
import UsrPge_Play from './usrPge_Play.tsx'; 
import UsrPge_Story from './usrPge_Story.tsx'; 
import UsrPge_Subscribe from './usrPge_Subscribe.tsx'; 
import { UsrPge_Followers, UsrPge_Following } from './usrPge_Fllw.tsx'; 
import UsrPge_About from './usrPge_About.tsx'; 

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
    'about',
  ];

  const [selectedFilter, setSelectedFilter] = useState(initialFilter || 'post');
  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Track loading state

  useEffect(() => {
    // Fetch initial data based on initialFilter or default filter
    handleClick(selectedFilter);
  }, [selectedFilter]); // Depend on selectedFilter to re-run when it changes

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
        ComponentToRender = MnPst_View;
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

  return (
    <>
      <div style={{ margin: '0px 0px 20px 0px' }}>
        <ul className="hdr-fltr" style={{ margin: '8px 0px 0px' }}>
          {filterItems.map((value, index) => (
            <li
              key={index}
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
          {React.createElement(content)}
				</div>
				) : (
        <div className="cntr_wrp dI p10">No content available for this filter.</div>
			)}
    </>
  );
}