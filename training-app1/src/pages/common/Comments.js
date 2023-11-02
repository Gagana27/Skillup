import React, { useState,useEffect } from "react";
import axios from "axios";
import {useParams} from "react-router-dom"
import { useAuthContext } from "../../hooks/UserAuthContext";
import { format} from 'date-fns'
import { Card } from "antd";

<<<<<<< HEAD



function Comments({ CommentLists,videoId }) {
=======
function Comments({ CommentLists, refreshFunction,videoId , rating}) {
>>>>>>> 0c049b3efcc3344fe928f6ca1b47a16d8b2ec28e
  const [comment, setComment] = useState("");
  const[comments,setCommentLists]=useState("");

  const { user } = useAuthContext();
  const userId = localStorage.getItem('user');
  const firstname = user.loginUser.firstname;

  

// console.log("videoid",videoId)
  const handleChange = (e) => {
    setComment(e.currentTarget.value);
  };
<<<<<<< HEAD
  const onSubmit = async (e, userId,videoId,firstname) => {
    e.preventDefault();
    const currentDateTime = new Date(); // Get the current date and time
    const formattedDateTime = format(currentDateTime, "yyyy-MM-dd HH:mm:ss"); // Format it as per your requirement
    console.log("rrr",  userId,comment,videoId,firstname)
=======
  const onSubmit = async (e, userId,videoId,rating) => {
    e.preventDefault();
    console.log("rrr",  userId,comment,videoId,rating)
>>>>>>> 0c049b3efcc3344fe928f6ca1b47a16d8b2ec28e

    try {
      const response = await axios.post(
        `http://localhost:5000/comments`,
        {
          content: comment,
          userId: userId,
          videos: videoId,
<<<<<<< HEAD
          username:firstname,
          createdAt: formattedDateTime,
         

          
=======
          reviewRating: rating
>>>>>>> 0c049b3efcc3344fe928f6ca1b47a16d8b2ec28e
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
      <form style={{ display: "flex" }} onSubmit={onSubmit}>
        <textarea
          style={{ width: "100%", borderRadius: "5px" }}
          onChange={handleChange}
          value={comment}
          placeholder="Write a comment..."
        />
        <br />
<<<<<<< HEAD
        <button style={{ width: "10%", height: "52px" }} onClick={(e)=>{onSubmit(e,user.loginUser._id,videoId,user.loginUser.firstname)}}
=======
        <button style={{ width: "20%", height: "52px" }} onClick={(e)=>{onSubmit(e,user.loginUser._id,videoId,rating)}}
>>>>>>> 0c049b3efcc3344fe928f6ca1b47a16d8b2ec28e
>
          Submit
        </button>
      </form>
    </div>
    
  );
}
export default Comments;