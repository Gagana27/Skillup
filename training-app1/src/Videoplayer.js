import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";
import Controls from "./components/Controls";

  let count = 0;
  
  function Videoplayer() {
    const [state, setState] = useState({
      pip: false,
      playing: true,
      controls: true,
      muted: false,
      played: 0,
      duration: 0,
      playbackRate: 1.0,
      volume: 1,
    });
  
    const playerRef = useRef(null);
    const playerContainerRef = useRef(null);
    const controlsRef = useRef(null);
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
      controlsRef.current.style.visibility = "visible";
      count = 0;
    };
  
    const hanldeMouseLeave = () => {
      controlsRef.current.style.visibility = "hidden";
      count = 0;
    };
  
    return (
      
          <div className="h-2/4 w-2/4 container mx-auto my-4 px-4 relative "
            onMouseMove={handleMouseMove}
            onMouseLeave={hanldeMouseLeave}
            ref={playerContainerRef}>
              <div className="relative justify-between">
            <ReactPlayer
              width="100%"
              height="100%"
              ref={playerRef}
              url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
              pip={pip}
              playing={playing}
              controls={true}
              playbackRate={playbackRate}
              volume={volume}
              muted={muted}
            />
            </div>
             <div className="absolute md:top-40 left-44 right-44 sm:top-4  ">
            <Controls
              ref={controlsRef}
              onRewind={handleRewind}
              onPlayPause={handlePlayPause}
              onFastForward={handleFastForward}
              playing={playing}
              />
          </div>
          </div>
    
    );
  }
  
  export default Videoplayer;