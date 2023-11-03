import React, { useState,useEffect } from "react";
import axios from "axios";
import {useParams} from "react-router-dom"
import { useAuthContext } from "../../hooks/UserAuthContext";
import { format} from 'date-fns'




function Comments({ CommentLists,videoId,reviewData }) {
  const [comment, setComment] = useState("");

  const { user } = useAuthContext();
  const userId = localStorage.getItem('user');
  const firstname = user.loginUser.firstname;

  

// console.log("videoid",videoId)
  const handleChange = (e) => {
    setComment(e.currentTarget.value);
  };
  const onSubmit = async (e, userId,videoId,firstname,rating) => {
    e.preventDefault();
    const currentDateTime = new Date(); // Get the current date and time
    const formattedDateTime = format(currentDateTime, "yyyy-MM-dd HH:mm:ss"); // Format it as per your requirement
    console.log("rrr",  userId,comment,videoId,firstname,rating)
  

    try {
      const response = await axios.post(
        `http://localhost:5000/comments`,
        {
          content: comment,
          userId: userId,
          videos: videoId,
          username:firstname,
          createdAt: formattedDateTime,
          reviewRating: rating,
        }
        
      );

      if (response) {
        // Assuming Comment is the property you want to access
        // setComment([response.data.comment, ...comment]);
        console.log("resssss",response)
      } else {
        console.error('Invalid response data:', response.data);
        // Handle the error appropriately
      }
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };
  


  return (
    <div>
      {CommentLists &&
        CommentLists.map((comment) => (
          <div key={comment._id}>
              <p>{content} </p>
             <p> {username}</p>
             <p>{format(new Date(comment.createdAt), "yyyy-MM-dd HH:mm:ss")}</p>

          </div>
        ))}
<form  onSubmit={onSubmit}>
<div className="form-outline">
                  <textarea placeholder="Write a Comment....." className="form-control" id="textAreaExample"  rows="4"  onChange={handleChange}
          value={comment}></textarea>
                 
                </div>
                <div className="d-flex justify-content-between mt-3">
                 
                  <button type="button" className="btn bg-yellow-500 hover:bg-green-700 " onClick={(e)=>{onSubmit(e,user.loginUser._id,videoId,firstname,reviewData)}}>
                    Submit 
                  </button>
                </div>
                </form>

      {/* <form style={{ display: "flex" }} onSubmit={onSubmit}>
        <textarea
          style={{ width: "100%", borderRadius: "5px" }}
          onChange={handleChange}
          value={comment}
          placeholder="Write a comment..."
        />
        <br />
        <button style={{ width: "10%", height: "52px" }} onClick={(e)=>{onSubmit(e,user.loginUser._id,videoId,user.loginUser.firstname,rating)}}
>
          Submit
        </button>
      </form> */}
    </div>
    
  );
}
export default Comments;