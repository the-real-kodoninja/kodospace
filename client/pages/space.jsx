import React, { Fragment, useState } from 'react'
import MHeader from '../components/header.tsx';
import Tooltip from "../components/tooltip.jsx";
import Lft_menu from '../components/lft_menu.tsx'; 
import axios from 'axios';
// post global modules
import PstGlb_Mod from '../components/m/pstGlb_mod.tsx';
import ChatMsg_Mod from '../components/media/chatMsg.tsx';

export default function ExploreApp () {

	const [showSecondParagraph, setShowSecondParagraph] = useState(false);

  const handleViewMorePgrh = () => {
    setShowSecondParagraph(true);
  };

  const handleViewLessPgrh = () => {
    setShowSecondParagraph(false);
  };
  
    const [visibleCount, setVisibleCount] = useState(50); // State to manage the number of visible playlists

    // Function to handle "View More" button click
    const handleViewMore = () => {
        setVisibleCount((prevVisibleCount) => prevVisibleCount + 50);
    };


      const [addedItems, setAddedItems] = useState([
		'biking',
		'#biking',
        'rock climbing',
		'#rock climbing',
        '#xv',
        'Earthroamer',
        '#earthroamer',
        '#nomad',
        '#pizza',
        '@anime',
        'Anime',
        'HunterxHunter',
        'Ghost in the shell',
        'AI',
        'Computer programmer',
        'Computer engineering',
        'code',
		'not:spiders',

	  ]); // State to manage the added items

    const handleSubmit = (event) => {
      event.preventDefault(); // Prevents the default form submission behavior
      const inputValue = event.target.elements.inputItem.value.trim(); // Extract input value
      if (inputValue !== '') {
        // Check if the input value already exists in the list
        if (!addedItems.some(item => {
          if (typeof item === 'string') {
            return item === inputValue;
          } else {
            return item.value === inputValue;
          }
        })) {
          const newAddedItems = [];
          if (inputValue.startsWith('not:')) {
            const notValue = inputValue.substring(4).trim(); // Extract the term after 'not:'
            // Add the 'not:' input value as an entry with class 'space_bv4'
            newAddedItems.push({
              value: inputValue,
              className: 'space_bv4'
            });
            // Filter out items related to 'notValue' including the "not:" entry itself
            const filteredItems = addedItems.filter(item => {
              if (typeof item === 'string') {
                return !item.includes(notValue) && item !== inputValue;
              } else {
                return !item.value.includes(notValue) && item.value !== inputValue;
              }
            });
            setAddedItems(filteredItems);
          } else {
            newAddedItems.push(inputValue);
            setAddedItems([...newAddedItems, ...addedItems]);
          }
        }
        event.target.reset(); // Reset the form after submission
      }
    };

      const handleRemoveItem = (index) => {
        const updatedItems = [...addedItems];
        updatedItems.splice(index, 1);
        setAddedItems(updatedItems);
      };
      
      const className = (value) => {
        if (!value.startsWith('#') && !value.startsWith('@') && !value.startsWith('not:')) {
          return 'space_bv1';
        } else {
          let classes = 'space_bv1'; // Base class
      
          if (value.startsWith('not:')) {
            classes += ' space_bv4'; // Add space_bv4 if condition met
          } else if (value.startsWith('#')) {
            classes += ' space_bv2'; // Add space_bv2 if condition met
          } else if (value.startsWith('@')) {
            classes += ' space_bv3'; // Add space_bv3 if condition met
          }
      
          return classes.trim(); // Remove leading/trailing spaces
        }
      };

    
      return (
        <Fragment>
            <MHeader/>
            <main>
                <Lft_menu/>
                <div className="cntr_wrp p10">
                    <div className="myspace_Wpr glbl-PULL">
                        <h1>Your space</h1>
                        <p>These are all the hashtags, phrases, user pages, user likes, channels that are in your kodospace. Remove anything add anything to tailor your kodospace experience specifically for you.</p>
						{!showSecondParagraph && (
							<button onClick={handleViewMorePgrh} className="viewMoreBtn">View More</button>
						)}
						{showSecondParagraph && (
							<Fragment>
								<p>If you don't want to see something specifically in your kodospace, type not: before your inputs. For example, not:spiders. So if there's a post that includes something you do like, for instance, outdoors, you won't see the post because it includes outdoors and spiders.</p>
								<button onClick={handleViewLessPgrh} className="viewMoreBtn">View Less</button>
							</Fragment>
						)}
                        <p style={{ margin: '20px 0px' }}>
                            <Tooltip text={'literal instance'}>
                                <span className="space_bv1">batman</span>
                            </Tooltip>
                            <Tooltip text={'hashtag'}>
                                <span className="space_bv2">#batman</span>
                            </Tooltip>
                            <Tooltip text={'user channel'}>
                                <span className="space_bv3">@kodoninja</span>
                            </Tooltip>
                            <Tooltip text={'not including'}>
                                <span className="space_bv4">
                                    <span className="sBv1">not:</span>
                                    <span className="sBv2">spiders</span>
                                </span>
                            </Tooltip>
                        </p>
                        <div className="myspace_SchWpr">
                        	<form onSubmit={handleSubmit}>
                            <input name="inputItem" className="space_AddItm" type="text" placeholder="Add to your space" 
                            // onChange={handleInputChange}
                            />
                            <button type="submit" className="space_AddBtn">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                              </svg>
                            </button>
                          </form>
                        </div>
                        <ul className="space_AddedItems">
                            {addedItems.map((value, index) => (
                                <li key={index} className={className(value)}>
                                    {value}
                                    <Tooltip text={`remove ${value}`}>
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 space_rmvItm" onClick={() => handleRemoveItem(index)}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                      </svg>
                                    </Tooltip>
                                    </li>
                            ))}
                        </ul>
                            {visibleCount < addedItems.length && (
                            <button onClick={handleViewMore} className="viewMoreBtn">View More</button>
                        )}
                        </div>	
                    </div>
                </main>
                <ChatMsg_Mod/>
            <PstGlb_Mod/>
        </Fragment>
    );
}
