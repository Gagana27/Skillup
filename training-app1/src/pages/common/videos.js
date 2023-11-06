import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import React, { useRef } from "react";
import axios from "axios";
import Rating from "./AddReview";
import ReviewComp from "./Reviewcomp";
import StarRating from "./AddReview";
// import ReviewComp from "./AddReview";
import DropDown from "./DropDown";
import Comments from "./Comments";
import ListGroup from "react-bootstrap/ListGroup";
import { format } from "date-fns";

import { Avatar, List } from "antd";
import { CommentContextHook } from "../../hooks/CommentContextHook";
import img from '../../assets/profilepic.svg';
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import EditIcon from '../../assets/editicon.svg';
import DeleteIcon from '../../assets/deleteicon.svg';

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

  useEffect(() => {
    async function fetchComments() {
      try {
        const response = await axios.get(
          `http://localhost:5000/comments/${videoId}`
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
        <div className="flex justify-between p-8">
          <div className="w-96 pr-8">
            <div className="relative inline-block text-left">
              <DropDown name="ggggg" desc="reactjs" videos={videos} />
            </div>
            <br />
            <br />
            <br />
          </div>
          <div className="w-full">
            {/* Course image */}
            <div className="flex h-75v flex-col " ref={playerContainerRef}>
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
                              selectedRating={selectedRating}
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
            {CommentUseHook.Comments &&
              CommentUseHook.Comments.map((comment) => (
                <div key={comment._id} style={{ height: "200px", marginTop: "20px" }}>
                  <div style={{ display: "flex" }}>
                    <div style={{ height: "50px", width: "50px" }}><img src={img} alt="image" /></div>

                    <div>
                      <p style={{ marginLeft: "20px", marginTop: "-4px", }}> {comment.username}</p>
                      <p><Rating selectedRating={comment.reviewRating[0]}/></p>
                    </div>

                    <div style={{ marginLeft: "550px" }}>
                        <p>{formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}</p>
                    </div>

                    <div style={{ marginLeft: "100px" }}>
                      <img src={EditIcon}></img>
                    </div>

                    <div style={{ marginLeft: "20px" }}>
                      <img src={DeleteIcon}></img>
                    </div>
                  </div>
                  <p style={{ marginTop: "10px" }}>{comment.content} </p>
                </div>
              ))}
          </div>
        </div>
        <div className="flex border rounded-lg shadow-md"></div>
      </div>
    </>
  );
}

export default VideoList;
