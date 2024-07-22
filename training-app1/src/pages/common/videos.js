import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import React, { useRef } from "react";
import axios from "axios";
import ReviewComp from "./Reviewcomp";
import StarRating from "./AddReview";
// import ReviewComp from "./AddReview";
import DropDown from "./DropDown";
import Comments from "./Comments";
import ListGroup from "react-bootstrap/ListGroup";

import { Avatar, List } from "antd";
import { CommentContextHook } from "../../hooks/CommentContextHook";
import img from '../../assets/profilepic.svg';
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import EditIcon from '../../assets/editicon.svg';
import DeleteIcon from '../../assets/deleteicon.svg';
import DeleteButton from './commentTrash';
import StarRatings from 'react-star-ratings';

function VideoList(props) {
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
  const [selectedRating, setSelectedRating] = useState(0);
  const [reviewData, setReviewData] = useState([]);
  const [comment, setCommentLists] = useState();
  const CommentUseHook = CommentContextHook();

  const location = useLocation();

  const videoId = location.state["video"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  console.log("first", CommentUseHook.Comments);
  console.log("CheckStarRating", selectedRating);

  useEffect(() => {
    async function fetchComments() {
      try {
        const response = await axios.get(
          `http://localhost:5000/comments/${videoId}`,

        );

        console.log("objectjjjj", response);
        CommentUseHook.dispatch({
          type: "GET_ALL_COMMENTS",
          payload: response.data,
        });
        setCommentLists(response.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    }

    fetchComments();
  }, [videoId]);

  useEffect(() => {
    async function fetchVideos() {
      const response = await axios.get(
        `http://localhost:5000/subcategories/${subcategoryId}/videos`
      );

      setVideos(response.data);
    }
    fetchVideos();
  }, [categoryId, subcategoryId]);

  const updateComment = (newComment) => {
    setCommentLists(comment.concat(newComment));
  };

  const fetchReviewData = (rating) => {
    // fetching review data from an API later
    const data = [
      { rating: 1, text: "Poor" },
      { rating: 2, text: "Not great" },
      { rating: 3, text: "Average" },
      { rating: 4, text: "Good" },
      { rating: 5, text: "Excellent" },
    ];

    const selectedReview = data.find((review) => review.rating === rating);
    setReviewData(selectedReview ? [selectedReview] : []);
  };
  useEffect(() => {
    fetchReviewData(selectedRating);
  }, [selectedRating]);
  return (
    <>
      <div className="added">
      <div className="flex flex-col md:flex-row justify-between p-8 md:p-8 ">
          <div className= "w-full md:w-1/4 pr-0 md:pr-8 mb-4 md:mb-0">
            <div className=" inline-block text-left ">
              <DropDown name="ggggg" desc="reactjs" videos={videos} />
            </div>
            <br />
            <br />
            <br />
          </div>
          <div className="w-full md:w-3/4">
            {/* Course image */}
            <div className="  flex h-75v flex-col mt-5  " ref={playerContainerRef}>
              {videos &&
                videos.map((video) => (
                  <li key={video._id}>
                    <div className="flex-1 h-80v justify-end">
                      <ReactPlayer
                        width="100%"
                        height="100%"
                        ref={playerRef}
                        url={video.url}
                        controls={true}
                        pip={pip}
                        playing={playing}
                        playbackRate={playbackRate}
                        volume={volume}
                        muted={muted}
                      />
                    </div>
                    <div className="grid grid-cols-1">
                      <h1 className="text-l font-semibold">
                        <ListGroup.Item
                          style={{ padding: 10 }}
                          className="my-3"
                          variant="secondary"
                        >
                          Course : {video.title}
                          <br />
                          <br />
                          Author : {video.author}
                          <br />
                          <br />
                          Description : {video.description}
                          <br />
                          <br />
                          Ratings:{" "}
                          <StarRating
                            props={video.review}
                            selectedRating={selectedRating}
                            onStarClick={setSelectedRating}
                          />
                          <br />
                          <br />
                          <h1 className="text-l font-semibold">
                            <ReviewComp reviews={reviewData} />

                            <Comments
                              comment={comment}
                              refreshFunction={updateComment}
                              videoId={location.state.video}
                              selectedRating={reviewData}
                            />
                          </h1>
                          <br />
                          <br />
                        </ListGroup.Item>
                      </h1>
                    </div>
                  </li>
                ))}
            </div>{" "}
            {CommentUseHook?.Comments &&
  CommentUseHook?.Comments.map((comment) => {
    console.log('stars....', comment?.reviewRating[0]?.[0]?.['rating']);
    return (
      <div key={comment._id} className="mb-4 md:mb-8">
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-4">
          <div className="h-12 w-12 md:h-50 md:w-50">
            <img src={img} alt="image" className="w-full h-full object-cover" />
          </div>

          {comment?.reviewRating && (
            <div className="md:ml-4 flex flex-col items-center md:items-start">
              <p className="mt-2 md:mt-0 text-sm md:text-base">{comment.username}</p>
              <p>
                <StarRatings
                  rating={comment?.reviewRating[0]?.[0]?.['rating']}
                  starRatedColor="red"
                  colorEmptyStar="black"
                  starDimension="20px"
                />
              </p>
            </div>
          )}


                    <div className="md:flex items-center justify-between text-xs md:text-sm flex-grow">
  <p className="mb-2">{formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}</p>
  <div className="flex items-center space-x-2">
    <DeleteButton commentId={comment._id} />
  </div>
</div>
                    
                    {/* <div style={{ margin: "20px", marginRight: "10px" }}>
                      <DeleteButton commentId={comment._id} />
                    </div> */}


                  </div>
                  <p style={{ marginTop: "10px" }} >{comment.content} </p>

                </div>
              )})}
          </div>
        </div>
        <div className="flex border rounded-lg shadow-md"></div>
      </div>
    </>
  );
}

export default VideoList;
