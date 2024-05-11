import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function UseProfile() {
  const [user, setuser] = useState({
    user: {
      _id: "663f64e773991d2d85211709",
      username: "ani1122",
      name: "Aniket Raut",
      password: "$2b$10$HtHidkijcohLoZ81aDdDdON2.5DFanbGQbhHjejyXyEzDWA1ERdFa",
      uploadedReviews: [
        "663f8ddfbcfea430c4a46759",
        "663f8df4bcfea430c4a4675e",
        "663f8dffbcfea430c4a46763",
        "663f8e0abcfea430c4a46768",
        "663f8e1ebcfea430c4a4676d",
        "663f930fbcfea430c4a46772",
        "663f9a1dbcfea430c4a4677d",
      ],
      __v: 0,
    },
    reviews: [
      {
        _id: "663f8ddfbcfea430c4a46759",
        uploader: "663f64e773991d2d85211709",
        title: "Dangal",
        content:
          "Dangal is an inspiring sports biopic based on the real-life story of wrestler Mahavir Singh Phogat and his daughters Geeta and Babita Phogat. The film showcases the struggles, triumphs, and dedication of the Phogat sisters as they break societal norms and achieve success in the male-dominated sport of wrestling. With stellar performances by Aamir Khan and the cast, Dangal delivers a powerful message of gender equality and determination.",
        __v: 0,
      },
      {
        _id: "663f8df4bcfea430c4a4675e",
        uploader: "663f64e773991d2d85211709",
        title: "Gully Boy",
        content:
          "Gully Boy is a captivating musical drama that explores the underground rap scene in Mumbai. Directed by Zoya Akhtar, the film follows the journey of Murad, a young aspiring rapper from the slums, as he navigates through life's challenges and pursues his passion for music. Featuring remarkable performances by Ranveer Singh and Alia Bhatt, Gully Boy delivers a poignant narrative about dreams, identity, and social barriers.",
        __v: 0,
      },
      {
        _id: "663f8dffbcfea430c4a46763",
        uploader: "663f64e773991d2d85211709",
        title: "Bahubali: The Beginning",
        content:
          "Bahubali: The Beginning is an epic fantasy film directed by S.S. Rajamouli. With its grand scale, breathtaking visuals, and compelling storyline, the film transports audiences to the fictional kingdom of Mahishmati. Fueled by themes of love, betrayal, and revenge, Bahubali captivates viewers with its immersive world-building and memorable characters. The film's groundbreaking visual effects and stunning action sequences set a new benchmark for Indian cinema.",
        __v: 0,
      },
      {
        _id: "663f8e0abcfea430c4a46768",
        uploader: "663f64e773991d2d85211709",
        title: "3 Idiots",
        content:
          "3 Idiots is a timeless comedy-drama that follows the journey of three engineering students at an elite Indian institute. Directed by Rajkumar Hirani, the film humorously critiques the education system while delivering profound messages about pursuing one's passion and embracing individuality. With standout performances by Aamir Khan, R. Madhavan, and Sharman Joshi, 3 Idiots remains a beloved favorite among audiences for its wit, heart, and social commentary.",
        __v: 0,
      },
      {
        _id: "663f8e1ebcfea430c4a4676d",
        uploader: "663f64e773991d2d85211709",
        title: "Lagaan",
        content:
          "Lagaan is a period sports drama set during the British colonial era in India. Directed by Ashutosh Gowariker, the film revolves around a group of villagers who challenge the oppressive British rulers to a cricket match to alleviate their burdensome taxes (lagaan). With its engaging storyline, memorable characters, and spectacular cricket sequences, Lagaan captures the spirit of unity, resilience, and triumph against all odds. The film's blend of entertainment and social commentary earned it widespread acclaim and multiple awards.",
        __v: 0,
      },
      {
        _id: "663f930fbcfea430c4a46772",
        uploader: "663f64e773991d2d85211709",
        title: "PK",
        content:
          "PK is a thought-provoking satire directed by Rajkumar Hirani. The film follows the journey of an innocent and curious alien, PK, who lands on Earth and becomes fascinated by human behavior and beliefs. Through PK's interactions with various individuals, the movie humorously critiques societal norms, religious dogma, and superstitions. With outstanding performances by Aamir Khan and Anushka Sharma, PK delivers its message with wit, humor, and heart. The film's compelling narrative and insightful commentary make it a must-watch for audiences seeking both entertainment and introspection.",
        __v: 0,
      },
      {
        _id: "663f9a1dbcfea430c4a4677d",
        uploader: "663f64e773991d2d85211709",
        title: "Queen",
        content:
          "Queen is a heartwarming and empowering film directed by Vikas Bahl. The story revolves around Rani, a young woman from Delhi, who embarks on a solo honeymoon trip to Europe after her wedding gets canceled. Through her journey of self-discovery and liberation, Rani learns to embrace her independence and redefine her identity. Kangana Ranaut delivers a stellar performance as Rani, portraying her transformation with depth and authenticity. Queen is a refreshing and uplifting film that celebrates the spirit of adventure, resilience, and female empowerment.",
        __v: 0,
      },
    ],
  });
  const history = useNavigate();
  const fetchUser = async () => {
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
      const response = await axios.get(
        "http://localhost:8080/fetchuser",
        config
      );

      console.log(response.data);
      setuser(response.data);
      // Log the response data
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to Fetch User Data. Please try again later.");
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const OnePost = () => {
    return user.reviews.map((review, index) => {
      return (
        <div className="card" key={index}>
          <div className="body">
            <h1>{review.title}</h1>
            <p className="text">{review.content}</p>
          </div>
        </div>
      );
    });
  };
  return (
    <div id="UseProfile">
      <div className="usercard">
        <h1>Name:{user.user.name}</h1>
        <h1>Username:{user.user.username}</h1>
        <h1>No of Review Uploaded:{user.user.uploadedReviews.length}</h1>
      </div>
      <h1>Uploaded Reviews</h1>
      <div id="HomePage">{OnePost()}</div>;
    </div>
  );
}

export default UseProfile;
