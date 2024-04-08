import React, { Fragment, useState, useEffect } from 'react';
// temp user call modules
import UsrPge_Post from './usrPge_Post.tsx'; // post
import UsrPge_Live from './usrPge_Live.tsx'; // live
import UsrPge_Play from './usrPge_Play.tsx'; // play

export default function usrPge_fltr({ items, onFilterClick }) {
  
  const filterItems = [
    'post',
    'likes',
    'live',
    'playlist',
    'stories',
    'followers',
    'following',
    'Subscribers',
  ];

  const [selectedFilter, setSelectedFilter] = useState('post'); // Initial filter
  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Track loading state


  const handleClick = async (filter) => {
    setSelectedFilter(filter);
    setIsLoading(true); // Set loading state to true

    if (onFilterClick) {
      onFilterClick(filter); // Optional call to provided function
    }

    setSelectedFilter(filter);
    setIsLoading(true);
  
    // Call the appropriate user module based on filter
    let fetchedContent;
    switch (filter) {
      case 'post':
        fetchedContent = await UsrPge_Post(); // Call UsrPge_Post.tsx component
        break;
      case 'live':
        fetchedContent = await UsrPge_Live(); // Call UsrPge_Live.tsx component
        break;
      case 'playlist':
        fetchedContent = await UsrPge_Play(); // Call UsrPge_Play.tsx component
        break;
      default:
        fetchedContent = null; // Handle default case
    }
  
    setContent(fetchedContent);
    setIsLoading(false);
  };

  useEffect(() => {
    // Optional: Fetch initial data based on default filter
    handleClick(selectedFilter);
  }, []); // Empty dependency array to run only once on component mount

  return (
    <>
      <div>
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
				<p>Loading content...</p>
				) : content ? (
				<div className="cntr_wrp dI pA p10" style={{ margin: "290px 0px 0px" }}>
					{/* Render the fetched content here */}
					{content}
				</div>
				) : (
				<p>No content available for this filter.</p>
			)}	
    </>
  );
}