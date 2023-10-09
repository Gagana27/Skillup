import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import React, { useRef } from "react";
import axios from "axios";


function VideoList() {
  const playerRef = useRef(null);

  const { categoryId, subcategoryId } = useParams();
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    async function fetchVideos() {
      const response = await axios.get(
        `http://localhost:5000/subcategories/${subcategoryId}/videos`
      );
      setVideos(response.data);
      console.log("KKK",response.data);  // videos data
    }
    fetchVideos();
  }, [categoryId, subcategoryId]);
  return (
    <div className="added">
      {/* <h1>DigitalMarketing</h1>
            <ul>
                {videos.map(video => (
                    <li key={video._id}>
                        <ReactPlayer ref={playerRef} url={video.url} controls={true} height={250} width={350} />

                        
                         {video.title} 
                    </li>
                ))}
            </ul>  */}
      <div className="flex items-center justify-between p-8">
        <div className="w-1/2 pr-8">
          {/* Author details */}
          {videos.map((video) => (
            <li key={video._id}>
          <h2 className="text-2xl font-semibold mb-2"> {video.author}</h2>
          <p className="text-gray-600">{video.author}</p>
          <p className="text-gray-600">{video.description}</p>
          </li>
          ))}
          {/* <time dateTime="2023-03-16">Mar 16, 2023</time> */}
          <span aria-hidden="true">&middot;</span>
          {/* <span>10 hours</span> */}
        </div>
        <div className="w-1/2">
          {/* Course image */}
          <ul>
            {videos.map((video) => (
              <li key={video._id}>
                <ReactPlayer
                  ref={playerRef}
                  url={video.url}
                  controls={true}
                  height={250}
                  width={350}
                />

                {video.title}
                <br/>
                {video.description}
                <br/>
                {video.author}
               
              </li>
            ))}
          </ul>{" "}
        </div>
      </div>
      <div className="flex p-4 border rounded-lg shadow-md">
        {/* Image */}
        <div className="w-1/2 pr-4">
          {/* <img alt={video.title} className="h-auto w-full" /> */}
        </div>
        {/* Author Details */}
        {videos.map((video) => (
              <li key={video._id}>
        <div className="w-1/2">
          <h2 className="text-xl font-semibold">{video.title}</h2>
          <p className="text-gray-600"> {video.author}</p>
          <div className="flex items-center mt-2">
            {/* Star Rating */}
            <div className="flex">
              <span className="text-yellow-500">&#9733;</span>
              <span className="text-yellow-500">&#9733;</span>
              <span className="text-yellow-500">&#9733;</span>
              <span className="text-yellow-500">&#9733;</span>
              <span className="text-yellow-500">&#9734;</span>
            </div>
            <span className="text-gray-600 ml-2">({video.reviews} Reviews)</span>
          </div>
        </div>
        </li>
        ))}
      </div>
    </div>
  );
}
export default VideoList;

/* import React, { useState, useEffect } from 'react';

function VideoList() {
  const [videos, setVideos] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/subcategories/${subcategoryId}/videos')
      .then(response => response.json())
      .then(data => {
        setVideos(data);
        setCategories([...new Set(categories.map(video => video.category))]);
      })
      .catch(error => console.error(error));
  });

  const handleCategoryChange = event => {
    setSelectedCategory(event.target.value);
    setSelectedSubcategory('');
  };

  const handleSubcategoryChange = event => {
    setSelectedSubcategory(event.target.value);
    const filteredVideos = videos.filteredVideos(video => 
      video.category === selectedCategory && video.subcategory === selectedSubcategory
    );
    const selectedVideo = filteredVideos[0];
    // update video player with selectedVideo URL
setVideos(selectedVideo);
  };

  const subcategories = [...new Set(videos.filteredVideos(video => video.category === selectedCategory).map(video => video.subcategory))];

  return (
    <div>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">Select a category</option>
        {categories.map(category => <option key={category.name} value={category}>{category.name}</option>)}
      </select>
      <select value={selectedSubcategory} onChange={handleSubcategoryChange}>
        <option value="">Select a subcategory</option>
        {subcategories.map(subcategory => <option key={subcategory.name} value={subcategory}>{subcategory.name}</option>)}
      </select>
  /*   </div>
  );
}

export default VideoList; */
