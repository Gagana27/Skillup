import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";
import VideoControls from "./video_controls";

  let count = 0;
  
  export default function CourseVideoViewSection() {
    const [state, setState] = useState({
      pip: false,
      playing: true,
      VideoControls: true,
      muted: false,
      played: 0,
      duration: 0,
      playbackRate: 1.0,
      volume: 1,
    });
  
    const playerRef = useRef(null);
    const playerContainerRef = useRef(null);
    const VideoControlsRef = useRef(null);
    const {
      playing,
      muted,
      playbackRate,
      pip,
      volume,
    } = state;
  
    const handlePlayPause = () => {
      setState({ ...state, playing: !state.playing });
    };
  
    const handleRewind = () => {
      playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10);
    };
  
    const handleFastForward = () => {
      playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10);
    };
  
    const handleMouseMove = () => {
      console.log("mousemove");
      VideoControlsRef.current.style.visibility = "visible";
      count = 0;
    };
  
    const hanldeMouseLeave = () => {
      VideoControlsRef.current.style.visibility = "hidden";
      count = 0;
    };
  
    return (
      
        <div className="flex h-75v flex-col    "
            onMouseMove={handleMouseMove}
            onMouseLeave={hanldeMouseLeave}
            ref={playerContainerRef} >
            <div className="flex justify-end items-end h-70v "  >
            <ReactPlayer
            //   style={{margin:0, backgroundColor:'green'}}
              width="100%"
              height="100%"
              ref={playerRef}
              url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
              pip={pip}
              playing={playing}
              VideoControls={true}
              playbackRate={playbackRate}
              volume={volume}
              muted={muted}
            />
            </div>
            <div className="flex justify-center items-center  " >
            <VideoControls
              ref={VideoControlsRef}
              onRewind={handleRewind}
              onPlayPause={handlePlayPause}
              onFastForward={handleFastForward}
              playing={playing}
              />
            </div>
             
           
        </div>
    
    );
  }