import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function PostReview() {
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");
  const history = useNavigate();

  const postReview = async (e) => {
    e.preventDefault();
    if (title.trim() === "" || content.trim() === "") {
      alert("Please enter both title and content.");
      return;
    }

    try {
      // Get token from localStorage
      const token = localStorage.getItem("token");

      // Make sure token is present
      if (!token) {
        alert("User not authenticated. Please login.");
        history("/");
        return;
      }

      // Include token in the headers of the POST request
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      // Make a POST request to add the post
      const response = await axios.post(
        "http://localhost:8080/addReview",
        {
          title,
          content,
        },
        config
      );

      console.log(response.data); // Log the response data

      // Clear the form after successful submission
      settitle("");
      setcontent("");
      alert("Post added successfully!");
      history("/");
    } catch (error) {
      console.error("Error adding post:", error);
      alert("Failed to add post. Please try again later.");
    }
  };

  return (
    <div id="PostReview">
      <h1>Add review of a Movie</h1>
      <form onSubmit={postReview}>
        <input
          type="text"
          value={title}
          placeholder="Add title to your review"
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <input
          id="contentdiv"
          type="text"
          placeholder="Write you experience"
          value={content}
          onChange={(e) => {
            setcontent(e.target.value);
          }}
        />
        <button className="postreview">Post Review</button>
      </form>
    </div>
  );
}

export default PostReview;
