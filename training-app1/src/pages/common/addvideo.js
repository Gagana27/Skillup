import React, { useEffect, useState } from 'react';
import axios from 'axios';
import  { useRef } from 'react';


import ReactPlayer  from 'react-player';
import { useParams } from 'react-router';
const VideoList = () => {
  const [videos, setVideos] = useState([]);
  const playerRef = useRef(null);


  useEffect(() => {
    // Fetch video data from your backend API
    axios.get('http://localhost:5000/subcategories/651962ec7a15b8ad495420d0/videos')
      .then(response => {
        setVideos(response.data);
      })
      .catch(error => {
        console.error('Error fetching videos:', error);
      });
  }, []);

  return (
    <div>
      <h1>Video List</h1>
      <div className="video-container">
      {videos.map(video => (
                  <ul>
                  {videos.map(video => (
                      <li key={video._id}>
                          <ReactPlayer ref={playerRef} url={video.url} controls={true} height={250} width={350} />
  
                          
                           {video.title} 
                           
                      </li>
                      
                  ))}
                   {/* <video width="320" height="240" controls>
                        
                        <source src={video.url} type="video/mp4" />
                        Your browser does not support the video tag.
    
                      </video> */}
              </ul>  
              
                   

                
                
                ))}
            
    
      </div>
      
    </div>
  );
};

export default VideoList;
