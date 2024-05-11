import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [reviewList, setreviewList] = useState([]);
  useEffect(() => {
    fetchReviews();
  }, []);

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
        <Link className="card" key={index}>
          <div className="body">
            <h1>{review.title}</h1>
            <p className="text">{review.content}</p>
            <span class="username">from: @{review.uploader.username}</span>
          </div>
        </Link>
      );
    });
  };

  if (!reviewList) {
    return <h1>No Reviews Posted Yet</h1>;
  }
  return (
    <>
      <nav>Movie Reviews</nav>
      <div id="HomePage">{OnePost()}</div>;
    </>
  );
}

export default HomePage;
