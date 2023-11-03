import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"
import { useAuthContext } from "../../hooks/UserAuthContext";
import { format} from 'date-fns'
import { CommentContextHook } from "../../hooks/CommentContextHook";





function Comments({ CommentLists, videoId, reviewData }) {
  const [comment, setComment] = useState("");

  const { user } = useAuthContext();
const {dispatch,Comments}=CommentContextHook();
  const userId = localStorage.getItem('user');
  const firstname = user.loginUser.firstname;



  const handleChange = (e) => {
    setComment(e.currentTarget.value);
  };

  console.log("Second",Comments)
  const onSubmit = async (e, userId,videoId,firstname,rating) => {
    e.preventDefault();
    const currentDateTime = new Date(); // Get the current date and time
    const formattedDateTime = format(currentDateTime, "yyyy-MM-dd HH:mm:ss"); // Format it as per your requirement
    console.log("rrr", userId, comment, videoId, firstname, rating)


    try {
      const response = await axios.post(
        `http://localhost:5000/comments`,
        {
          content: comment,
          userId: userId,
          videos: videoId,
          username: firstname,
          createdAt: formattedDateTime,
          reviewRating: rating,
        }

      );

      if (response) {
        // Assuming Comment is the property you want to access
        // setComment([response.data.comment, ...comment]);
        dispatch({type:'ADD_COMMENT',payload:response.data})
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
      <form onSubmit={handleonSubmit}>
        <div className="form-outline">
          <textarea placeholder="Write a Comment....." className="form-control" id="textAreaExample" rows="4" onChange={handleChange}
            value={comment}></textarea>

        </div>
        <div className="d-flex justify-content-between mt-3">

          <button type="button" className="btn bg-yellow-500 hover:bg-green-700 " onClick={(e) => { onSubmit(e, user.loginUser._id, videoId, firstname, reviewData) }}>
            Submit
          </button>
        </div>
      </form>

    
    </div>

  );
}
export default Comments;