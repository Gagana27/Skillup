import React, { useState } from "react";
import axios from "axios";
import { useAuthContext } from "../../hooks/UserAuthContext";



function Comments({ CommentLists, refreshFunction }) {
  const [comment, setComment] = useState("");
  const { user } = useAuthContext();
  const userId = localStorage.getItem('user');


  const handleChange = (e) => {
    setComment(e.currentTarget.value);
  };
  const onSubmit = async (e, userId) => {
    e.preventDefault();
    console.log("rrr",  userId,comment)

    try {
      const response = await axios.post(
        `http://localhost:5000/comments/add`,
        {
          content: comment,
          userId: userId,
          // videos:_id,
          // rating: selectedRating,

          
        }
        
      );

      if (response.data && response.data.comment) {
        // Assuming Comment is the property you want to access
        setComment([response.data.comment, ...comment]);
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
          <div key={index}>
            <p>{comment.content}</p>
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
        <button style={{ width: "20%", height: "52px" }} onClick={(e)=>{onSubmit(e,user.loginUser._id)}}
>
          Submit
        </button>
      </form>
    </div>
  );
}
export default Comments;