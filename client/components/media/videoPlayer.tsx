import React, { useRef, useState, useEffect, Fragment } from 'react';

interface VideoPlayerProps {
    src: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [playbackRate, setPlaybackRate] = useState(1);
    const [volume, setVolume] = useState(1); // Default volume is 100%
    const [isMiniPlayerVisible, setIsMiniPlayerVisible] = useState(false);
    const [isVolumeMode, setIsVolumeMode] = useState(false);
    const [captionsVisible, setCaptionsVisible] = useState(false);
    const [isTheaterMode, setIsTheaterMode] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);

    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        // Set the isClient state to true once the component has mounted
        setIsClient(true);
    }, []);

    const icons = {
      playlistMusic: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2s2.5.895 2.5 2z"/><path fill-rule="evenodd" d="M12 3v10h-1V3h1z"/><path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1V2.82z"/><path fill-rule="evenodd" d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"/></svg>',
      play: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" /></svg>',
      pause: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M14,19H18V5H14M6,19H10V5H6V19Z" /></svg>',
      close: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>',
      closePanel: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="m12.5 5-1.4-1.4-3.1 3-3.1-3L3.5 5l3.1 3.1-3 2.9 1.5 1.4L8 9.5l2.9 2.9 1.5-1.4-3-2.9"></path></svg>',
      pictureInPicture: {
        off: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M19,11H11V17H19V11M17,15H13V13H17V15M21,3H3A2,2 0 0,0 1,5V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V5C23,3.88 22.1,3 21,3M21,19H3V4.97H21V19Z" /></svg>',
        on: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M19,11H11V17H19V11M23,19V5C23,3.88 22.1,3 21,3H3A2,2 0 0,0 1,5V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19M21,19H3V4.97H21V19Z" /></svg>'
      },
      tab: {
        on: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M21,3H3A2,2 0 0,0 1,5V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V5A2,2 0 0,0 21,3M21,19H3V5H13V9H21V19Z" /></svg>',
        off: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M1,9H3V7H1V9M1,13H3V11H1V13M1,5H3V3A2,2 0 0,0 1,5M9,21H11V19H9V21M1,17H3V15H1V17M3,21V19H1A2,2 0 0,0 3,21M21,3H13V9H23V5A2,2 0 0,0 21,3M21,17H23V15H21V17M9,5H11V3H9V5M5,21H7V19H5V21M5,5H7V3H5V5M21,21A2,2 0 0,0 23,19H21V21M21,13H23V11H21V13M13,21H15V19H13V21M17,21H19V19H17V21Z" /></svg>'
      },
      volume: {
        high: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z" /></svg>',
        medium: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M5,9V15H9L14,20V4L9,9M18.5,12C18.5,10.23 17.5,8.71 16,7.97V16C17.5,15.29 18.5,13.76 18.5,12Z" /></svg>',
        off: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46,14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z" /></svg>'
      },
      caption: {
        on: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M18,11H16.5V10.5H14.5V13.5H16.5V13H18V14A1,1 0 0,1 17,15H14A1,1 0 0,1 13,14V10A1,1 0 0,1 14,9H17A1,1 0 0,1 18,10M11,11H9.5V10.5H7.5V13.5H9.5V13H11V14A1,1 0 0,1 10,15H7A1,1 0 0,1 6,14V10A1,1 0 0,1 7,9H10A1,1 0 0,1 11,10M19,4H5C3.89,4 3,4.89 3,6V18A2,2 0 0,0 5,20H19A2,2 0 0,0 21,18V6C21,4.89 20.1,4 19,4Z" />',
        off: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#fff" d="M512 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H512zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM200 208c14.2 0 27 6.1 35.8 16c8.8 9.9 24 10.7 33.9 1.9s10.7-24 1.9-33.9c-17.5-19.6-43.1-32-71.5-32c-53 0-96 43-96 96s43 96 96 96c28.4 0 54-12.4 71.5-32c8.8-9.9 8-25-1.9-33.9s-25-8-33.9 1.9c-8.8 9.9-21.6 16-35.8 16c-26.5 0-48-21.5-48-48s21.5-48 48-48zm144 48c0-26.5 21.5-48 48-48c14.2 0 27 6.1 35.8 16c8.8 9.9 24 10.7 33.9 1.9s10.7-24 1.9-33.9c-17.5-19.6-43.1-32-71.5-32c-53 0-96 43-96 96s43 96 96 96c28.4 0 54-12.4 71.5-32c8.8-9.9 8-25-1.9-33.9s-25-8-33.9 1.9c-8.8 9.9-21.6 16-35.8 16c-26.5 0-48-21.5-48-48z"/></svg>',
      },
      theaterMode: {
        on: '<svg className="tall" viewBox="0 0 24 24"><path fill="currentColor" d="M19 6H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H5V8h14v8z"/></svg>',
        off: '<svg className="wide" viewBox="0 0 24 24"><path fill="currentColor" d="M19 7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 8H5V9h14v6z"/></svg>',
      },
      fullScreen: {
        on: '<svg className="open" viewBox="0 0 24 24"><path fill="currentColor" d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><path fill="currentColor" d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/></svg>',
        off: '<svg className="close" viewBox="0 0 24 24"><path fill="currentColor" d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/></svg>',
      },
      lucidModeVideo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,1L17.74,3.75L15,5L17.74,6.26L19,9L20.25,6.26L23,5L20.25,3.75M9,4L6.5,9.5L1,12L6.5,14.5L9,20L11.5,14.5L17,12L11.5,9.5M19,15L17.74,17.74L15,19L17.74,20.25L19,23L20.25,20.25L23,19L20.25,17.74" style="fill:currentColor"></path></svg>'
    };
    

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            const handlePlay = () => setIsPlaying(true);
            const handlePause = () => setIsPlaying(false);
            const handleVolumeChange = () => {
                setIsMuted(video.muted);
                setVolume(video.volume);
            };

            video.addEventListener('play', handlePlay);
            video.addEventListener('pause', handlePause);
            video.addEventListener('volumechange', handleVolumeChange);

            return () => {
                video.removeEventListener('play', handlePlay);
                video.removeEventListener('pause', handlePause);
                video.removeEventListener('volumechange', handleVolumeChange);
            };
        }
    }, []);

    const togglePlay = () => {
        const video = videoRef.current;
        if (video) {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        }
    };

    const toggleMute = () => {
      setIsMuted(!isMuted);
        const video = videoRef.current;
        if (video) {
            video.muted = !video.muted;
        }
    };

    const changePlaybackSpeed = () => {
        const video = videoRef.current;
        if (video) {
            let newPlaybackRate = video.playbackRate + 0.25;
            if (newPlaybackRate > 2) newPlaybackRate = 0.25;
            video.playbackRate = newPlaybackRate;
            setPlaybackRate(newPlaybackRate);
        }
    };

    const toggleCaptions = () => {
      setCaptionsVisible(!captionsVisible);
        const video = videoRef.current;
        if (video && video.textTracks[0]) {
            const captions = video.textTracks[0];
            // captions.mode = captions.mode === "showing" ? "hidden" : "showing";
            // setCaptionsVisible(captions.mode === "showing");
        }
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const video = videoRef.current;
        if (video) {
            video.volume = parseFloat(e.target.value);
            setVolume(parseFloat(e.target.value));
        }
    };

    // volume set high // volume set low
    const toggleVolumeMode = () => {
        setIsVolumeMode(!isVolumeMode);
        const video = videoRef.current;
        if (video) {
            video.muted =!video.muted;
        }
    };

    const toggleTheaterMode = () => {
        setIsTheaterMode(!isTheaterMode);
        const video = videoRef.current;
        if (video) {
            video.muted =!video.muted;
        }
    };

    const toggleFullScreen = () => {
        setIsFullScreen(!isFullScreen);
        const video = videoRef.current;
        if (video) {
            video.requestFullscreen();
        }
    };


    const toggleMiniPlayerMode = () => {
      setIsMiniPlayerVisible(!isMiniPlayerVisible);
      console.log('Toggling mini player mode');
      const video = videoRef.current;
      if (video !== null) {
          if (!document.pictureInPictureElement) {
              video.requestPictureInPicture()
                  .catch(error => {
                      // Failed to enter Picture-in-Picture mode.
                      console.error(error);
                  });
          } else {
              document.exitPictureInPicture()
                  .catch(error => {
                      // Failed to leave Picture-in-Picture mode.
                      console.error(error);
                  });
                }
            }
        };

        const timelineContainerRef = useRef<HTMLDivElement>(null);
        const [isScrubbing, setIsScrubbing] = useState(false);
        const [wasPaused, setWasPaused] = useState<boolean | null>(null);
      
        const handleTimelineUpdate = (e: React.MouseEvent<HTMLDivElement>) => {
          if (!videoRef.current || !timelineContainerRef.current) return;
      
          const rect = timelineContainerRef.current.getBoundingClientRect();
          const percent = Math.min(Math.max(0, e.clientX - rect.x), rect.width) / rect.width;
          const previewImgNumber = Math.max(1, Math.floor((percent * videoRef.current.duration) / 10));
          const previewImgSrc = `assets/previewImgs/preview${previewImgNumber}.jpg`;
      
          // Assuming you have state or refs for previewImg and thumbnailImg
          // previewImg.src = previewImgSrc;
          // thumbnailImg.src = previewImgSrc;
      
          timelineContainerRef.current.style.setProperty("--preview-position", `${percent * 100}%`);
      
          if (isScrubbing) {
            e.preventDefault();
            videoRef.current.currentTime = percent * videoRef.current.duration;
            // Update thumbnailImg src here if needed
          }
        };
      
        const toggleScrubbing = (e: MouseEvent) => {
          if (!videoRef.current) return;
      
          const isMouseDown = e.buttons === 1;
          setIsScrubbing(isMouseDown);
      
          if (isMouseDown) {
            setWasPaused(videoRef.current.paused);
            videoRef.current.pause();
          } else {
            if (wasPaused === false) {
              videoRef.current.play();
            }
          }
        };
      
        useEffect(() => {
          const handleMouseUp = (e: MouseEvent) => {
            if (isScrubbing) toggleScrubbing(e);
          };
      
          const handleMouseMove = (e: MouseEvent) => {
            if (isScrubbing) handleTimelineUpdate(e as unknown as React.MouseEvent<HTMLDivElement>);
          };
      
          document.addEventListener('mouseup', handleMouseUp);
          document.addEventListener('mousemove', handleMouseMove);
      
          return () => {
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mousemove', handleMouseMove);
          };
        }, [isScrubbing, wasPaused]);

    return (
        <Fragment>
            <div className={`video-container ${isPlaying ? '' : 'paused'}`}>
                <video ref={videoRef} src={src} onClick={togglePlay}>
                    <track kind="captions" src="assets/subtitles.vtt" default />
                </video>
                <div className="video-container" data-volume-level="high">
                <img className="thumbnail-img"/>
                <div className="video-controls-container">
                <div
                  ref={timelineContainerRef}
                  className="timeline-container"
                  onMouseMove={handleTimelineUpdate}
                  onMouseDown={(e) => toggleScrubbing(e as unknown as MouseEvent)}
                >
                    <div className="timeline">
                      <img className="preview-img"/>
                      <div className="thumb-indicator"></div>
                    </div>
                  </div>
                  <div className="controls">
                  <button className="play-pause-btn" onClick={togglePlay}>{isPlaying ? (
                      <span dangerouslySetInnerHTML={{ __html: icons.pause }}></span>
                  ) : (
                      <span dangerouslySetInnerHTML={{ __html: icons.play }}></span>
                  )}  
                  </button>
                  <div className="volume-container">
                  <button className="mute-btn" onClick={toggleVolumeMode}>
                    {isVolumeMode ? (
                      <span dangerouslySetInnerHTML={{ __html: icons.volume.high }}></span>
                    ) : (
                      <span dangerouslySetInnerHTML={{ __html: icons.volume.medium }}></span>
                    )}
                  </button>
                    <button className="mute-btn" onClick={toggleMute}>
                    {isMuted ? (
                      <span dangerouslySetInnerHTML={{ __html: icons.volume.off }}></span>
                    ) : (
                      <span dangerouslySetInnerHTML={{ __html: icons.volume.high }}></span>
                    )}
                  </button>
                  <input className="volume-slider" type="range" min="0" max="1" step="0.1" value={volume} onChange={handleVolumeChange} />
                </div>
                <div className="duration-container">
                <div className="current-time">{
                  videoRef.current?.currentTime
                    ? new Date(videoRef.current.currentTime * 1000).toISOString().substr(11, 8)
                    : "00:00:00"}
                </div>
                  /
                  <div className="total-time">{
                    videoRef.current?.duration
                      ? new Date(videoRef.current.duration * 1000).toISOString().substr(11, 8)
                      : "00:00:00"}
                  </div>
                </div>
                <button className="captions-btn" onClick={toggleCaptions}>
                  {captionsVisible ? (
                  <span dangerouslySetInnerHTML={{ __html: icons.caption.off}}></span>  
                ) : (
                  <span dangerouslySetInnerHTML={{ __html: icons.caption.on}}></span>
                )}
                </button>
                <button className="speed-btn wide-btn" onClick={changePlaybackSpeed}>{`${playbackRate}x`}
                  1x
                </button>
                <button className="mini-player-btn" onClick={toggleMiniPlayerMode}>
                  {isMiniPlayerVisible ? (
                <span dangerouslySetInnerHTML={{ __html: icons.pictureInPicture.off}}></span>
                ) : (
                <span dangerouslySetInnerHTML={{ __html: icons.pictureInPicture.on}}></span>
                )}
                </button>
                <button className="theater-btn" onClick={toggleTheaterMode}>
                  {isTheaterMode ? (
                      <span dangerouslySetInnerHTML={{ __html: icons.theaterMode.off}}></span>
                  ) : (
                    <span dangerouslySetInnerHTML={{ __html: icons.theaterMode.on}}></span>  
                  )}
              </button>
                <button className="full-screen-btn" onClick={toggleFullScreen}>
                    {isFullScreen ? (
                        <span dangerouslySetInnerHTML={{ __html: icons.fullScreen.off}}></span>  
                    ) : (
                      <span dangerouslySetInnerHTML={{ __html: icons.fullScreen.on}}></span>  
                    )}
                </button>
                    </div>
                </div>
                </div>
            </div>
        </Fragment>
    );
};

export default VideoPlayer;