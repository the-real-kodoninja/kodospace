import React, { Fragment,useState, useEffect } from 'react';

interface ImageProps {
  src: string;
  alt: string;
}

function AdaptiveImage({ src, alt }: ImageProps) {
  const [imageUrl, setImageUrl] = useState(src);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleImageLoad = (event: Event) => {
      setIsLoading(false);
    };

    const loadImage = async (url: string) => {
      setIsLoading(true);
      const response = await fetch(url);

      if (!response.ok) {
        console.error('Failed to load image:', url);
        setIsLoading(false);
        return;
      }

      const blob = await response.blob();
      const urlCreator = window.URL || window.webkitURL;
      const imageUrl = urlCreator.createObjectURL(blob);

      setImageUrl(imageUrl);
    };

    // Check internet connection speed initially
    checkConnectionSpeed().then((speed) => loadImage(getHigherQualityUrl(src, speed)));

    // Optionally, re-check speed periodically
    // const intervalId = setInterval(() => {
    //   checkConnectionSpeed().then((speed) => loadImage(getHigherQualityUrl(src, speed)));
    // }, 5000); // Check every 5 seconds

    // Cleanup function to clear interval on unmount
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [src]); // Re-run effect on src change

  const getHigherQualityUrl = (baseUrl: string, speed: number) => {
    // Define thresholds and corresponding URLs (adjust based on your setup)
    const thresholds = [1, 3]; // Mbps
    const urls = [baseUrl + '-low.jpg', baseUrl + '-high.jpg']; // Low and high quality URLs

    const matchingIndex = thresholds.findIndex((threshold) => speed >= threshold);
    return matchingIndex !== -1 ? urls[matchingIndex] : baseUrl;
  };

  const checkConnectionSpeed = async (): Promise<number> => {
    // Example using a speed test library (replace with your preferred method)
    const response = await fetch('https://www.speedtest.net/api/webapi/ping');
    const data = await response.json();
    return data.download; // Example: extract download speed from response
  };

  return (
    <>
    <img src={imageUrl} alt={alt} 
    // onLoad={handleImageLoad} 
    className={isLoading ? 'loading' : ''} />
    </>
  );
}

export default AdaptiveImage;
