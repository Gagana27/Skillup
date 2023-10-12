import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import React, { useRef } from "react";
import axios from "axios";
import Rating from "./AddReview";
import ReviewComp from "./AddReview";

function VideoList() {
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
  // const VideoControlsRef = useRef(null);
  const { playing, muted, playbackRate, pip, volume } = state;
  const { categoryId, subcategoryId } = useParams();
  const [videos, setVideos] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    async function fetchVideos() {
      const response = await axios.get(
        `http://localhost:5000/subcategories/${subcategoryId}/videos`
      );
      setVideos(response.data);
      console.log("KKK", response.data); // videos data
    }
    fetchVideos();
  }, [categoryId, subcategoryId]);

  // const handleMouseMove = () => {
  //   // console.log("mousemove");
  //   VideoControlsRef.current.style.visibility = "visible";
  //   count = 0;
  // };

  // const hanldeMouseLeave = () => {
  //   VideoControlsRef.current.style.visibility = "hidden";
  //   count = 0;
  // };

  return (
    <>
      <div className="added">
        <div className="flex justify-between p-8">
          <div className="w-96 pr-8">
            {/* Course Content drop down */}
            <div className="relative inline-block text-left">
              <button
                onClick={toggleDropdown}
                className="px-8 py-2 w-64 text-sm font-medium text-gray-700 bg-gray-200 rounded focus:outline-none focus:ring grid-rows-4"
              >
                Web Development
              </button>
              {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  {/* Dropdown Content */}
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      HTML
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      CSS
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Javascript
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Node JS
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Mongo DB
                    </a>
                  </div>
                </div>
              )}
            </div>
            <br />
            <br />
            <br />

            {/* Author details */}
            {/* {videos.map((video) => (
              <li style={{ listStyleType: "none" }} key={video._id}>
                <h2 className="text-2xl font-semibold mb-2"> {video.author}</h2>
                <p className="text-gray-600">{video.title}</p>
                <p className="text-gray-600">{video.description}</p>
              </li>
            ))} */}
            {/* Author Details */}
            {/* {videos.map((video) => (
              <li style={{ listStyleType: "none" }} key={video._id}>
                <div className="w-1/2">
                  <h2 className="text-xl font-semibold">{video.title}</h2>
                  <p className="text-gray-600"> {video.author}</p>
                  <div className="flex items-center mt-2">
                   
                    <div className="flex">
                      <span className="text-yellow-500">&#9733;</span>
                      <span className="text-yellow-500">&#9733;</span>
                      <span className="text-yellow-500">&#9733;</span>
                      <span className="text-yellow-500">&#9733;</span>
                      <span className="text-yellow-500">&#9734;</span>
                    </div>
                    <span className="text-gray-600 ml-2">
                      ({video.reviews}Reviews)
                      <br />
                      <span className="text-gray-600 ml-2">
                        ({video.ratings}Ratings)
                      </span>
                    </span>
                  </div>
                </div>
              </li>
            ))} */}
          </div>
          <div className="w-full">
            {/* Course image */}
            <div
              className="flex h-75v flex-col    "
              // onMouseMove={handleMouseMove}
              // onMouseLeave={hanldeMouseLeave}
              ref={playerContainerRef}
            >
              {videos.map((video) => (
                <li style={{ listStyleType: "none" }} key={video._id}>
                  <div className="flex-1  h-80v justify-end    ">
                    {/* <ul> */}
                    <ReactPlayer
                      width="100%"
                      height="100%"
                      ref={playerRef}
                      url={video.url}
                      controls={true}
                      pip={pip}
                      playing={playing}
                      // VideoControls={true}
                      playbackRate={playbackRate}
                      volume={volume}
                      muted={muted}
                    />

                    {/* </ul> */}
                  </div>
                  <h2 className="text-xl font-semibold">{video.title}</h2>
                  <br />
                  {video.description}
                  <br />
                  <h1 className="text-xl font-semibold">
                    Author: {video.author}
                  </h1>
                  <br />
                  <h1 className="text-xl font-semibold">
                    Reviews: <ReviewComp/> 
                  </h1>
                  <br />
                  <h1 className="text-xl font-semibold">
                    Ratings: {video.ratings}
                  </h1>
                </li>
              ))}
            </div>{" "}
          </div>
        </div>

        <br />
        <br />

        <div className="flex p-4 border rounded-lg shadow-md">
          {/* Image */}
          <div className="w-1/2 pr-4">
            {/* <img alt={video.title} className="h-auto w-full" /> */}
          </div>
        </div>
      </div>
    </>
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
