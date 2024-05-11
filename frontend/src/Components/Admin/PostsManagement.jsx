import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function PostsManagement() {
  const [reviewList, setreviewList] = useState([]);
  useEffect(() => {
    fetchReviews();
  }, []);

  const history = useNavigate();

  const deleteReview = async (id) => {
    try {
      const token = localStorage.getItem("Admintoken");

      // Make sure token is present
      if (!token) {
        alert("Admin not authenticated. Please login.");
        history("/");
        return;
      }

      // Prompt the user for confirmation before deleting
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this user?"
      );
      if (!confirmDelete) {
        return; // If user cancels deletion, exit the function
      }

      // Include token in the headers of the DELETE request
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const res = await axios.delete(
        `http://localhost:8080/deleteReview/${id}`,
        config
      );
      alert("Review Deleted Successfully");
      fetchReviews();
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to delete Review. Please try again later.");
    }
  };

  const fetchReviews = async () => {
    try {
      const response = await axios.get("http://localhost:8080/getAllReviews");
      setreviewList(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };
  const OnePost = () => {
    return reviewList.map((review, index) => {
      return (
        <div className="card" key={index}>
          <div className="body">
            <h1>{review.title}</h1>
            <p className="text">{review.content}</p>
            <span class="username">from: @{review.uploader.username}</span>
            <div
              className="userdel"
              onClick={() => {
                deleteReview(review._id);
              }}
            >
              Delete
            </div>
          </div>
        </div>
      );
    });
  };

  if (!reviewList) {
    return <h1>No Reviews Posted Yet</h1>;
  }
  return (
    <>
      <div id="HomePage">{OnePost()}</div>;
    </>
  );
}

export default PostsManagement;
