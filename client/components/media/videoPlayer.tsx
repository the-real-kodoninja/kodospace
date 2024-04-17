import React, { useRef, useState, useEffect } from 'react';

interface VideoPlayerProps {
    src: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const togglePlayPause = () => {
        const video = videoRef.current;
        if (video) {
            if (video.paused) {
                video.play();
                setIsPlaying(true);
            } else {
                video.pause();
                setIsPlaying(false);
            }
        }
    };

    const handleTimeUpdate = () => {
        const video = videoRef.current;
        if (video) {
            setCurrentTime(video.currentTime);
            if (!duration) {
                setDuration(video.duration);
            }
        }
    };

    const handleSeek = (e) => {
        const video = videoRef.current;
        const seekTime = (e.target.value / 100) * duration;
        if (video) {
            video.currentTime = seekTime;
            setCurrentTime(video.currentTime);
        }
    };

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.addEventListener('timeupdate', handleTimeUpdate);
            return () => {
                video.removeEventListener('timeupdate', handleTimeUpdate);
            };
        }
    }, [duration]);

    return (
        <div className="video-player">
            <video ref={videoRef} onClick={togglePlayPause} src={src}></video>
            <div className="controls_Wpr">
            <button className="playPauseBtn" onClick={togglePlayPause}>
                {isPlaying ? '❚❚' : '►'} 
            </button>
                <input type="range" min="0" max="100" value={(currentTime / duration) * 100 || 0} onChange={handleSeek} />
                <div className="controls_Ftr">
                    {new Date(currentTime * 1000).toISOString().substr(11, 8)} / {new Date(duration * 1000).toISOString().substr(11, 8)}
                </div>
            </div>
        </div>
    );
};

export default VideoPlayer;