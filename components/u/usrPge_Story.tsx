import React, { Fragment, useState } from 'react';

export default function UsrPge_Story() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [currentImageSrc, setCurrentImageSrc] = useState('');

    const totalImages = 12; // Assuming 12 images for simplicity

    const openPopup = (src) => {
        setCurrentImageSrc(src);
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToNextImage = () => {
        const newIndex = (currentImageIndex + 1) % totalImages;
        setCurrentImageIndex(newIndex);
        // Update the currentImageSrc based on the newIndex
        setCurrentImageSrc(`img/image${newIndex}.svg`); // Adjust this line to use the correct image source based on newIndex
    };

    const goToPreviousImage = () => {
        const newIndex = (currentImageIndex - 1 + totalImages) % totalImages;
        setCurrentImageIndex(newIndex);
        // Update the currentImageSrc based on the newIndex
        setCurrentImageSrc(`img/image${newIndex}.svg`); // Adjust this line to use the correct image source based on newIndex
    };

    return (
        <Fragment>
            <div className="usrStory_View">
                {Array.from({ length: totalImages }).map((_, index) => (
                    <div className="usrStory_ViewInr" key={index} onClick={() => openPopup(`img/image${index}.svg`)}>
                        <img src={`img/image${index}.svg`} alt="" />
                    </div>
                ))}
            </div>
            {isPopupOpen && (
                <div className="popup">
                    <button onClick={closePopup}>Close</button>
                    <img src={currentImageSrc} alt="" />
                    <button onClick={goToPreviousImage}>Previous</button>
                    <button onClick={goToNextImage}>Next</button>
                    {/* User image, comments, like count, and like button would go here */}
                    <div className="userImage">
                        <img src={`img/userImage${currentImageIndex}.svg`} alt="User" />
                    </div>
                    <div className="comments">Comments Here</div>
                    <input type="text" placeholder="Write a comment..." />
                    <div className="likes">Like Count Here</div>
                    <button>Like</button>
                </div>
            )}
        </Fragment>
    );
}