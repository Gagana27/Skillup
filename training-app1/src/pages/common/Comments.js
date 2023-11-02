import React, { useState } from "react";
import axios from "axios";
import {useParams} from "react-router-dom"
import { useAuthContext } from "../../hooks/UserAuthContext";



function Comments({ CommentLists, refreshFunction,videoId }) {
  const [comment, setComment] = useState("");
  const { user } = useAuthContext();
 

  const userId = localStorage.getItem('user');

console.log("videoid",videoId)
  const handleChange = (e) => {
    setComment(e.currentTarget.value);
  };
  const onSubmit = async (e, userId,videoId) => {
    e.preventDefault();
    console.log("rrr",  userId,comment,videoId)

    try {
      const response = await axios.post(
        `http://localhost:5000/comments`,
        {
          content: comment,
          userId: userId,
          videos: videoId,
         

          
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
        CommentLists.map((comment, index) => (
          <div key={comment._id}>
          <p>{comment.content}</p>
          </div>
        ))}
<form  onSubmit={onSubmit}>
<div className="form-outline">
                  <textarea placeholder="Write a Comment....." className="form-control" id="textAreaExample"  rows="4"  onChange={handleChange}
          value={comment}></textarea>
                 
                </div>
                <div className="d-flex justify-content-between mt-3">
                 
                  <button type="button" className="btn bg-yellow-500 hover:bg-green-700 " onClick={(e)=>{onSubmit(e,user.loginUser._id,videoId)}}>
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
        <button style={{ width: "20%", height: "52px" }} onClick={(e)=>{onSubmit(e,user.loginUser._id,videoId)}}
>
          Submit
        </button>
      </form> */}
    </div>
  );
}
export default Comments;