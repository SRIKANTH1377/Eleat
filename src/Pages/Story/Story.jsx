import React from "react";
import { Link } from "react-router-dom";
import "./story.css";

const Story = () => {
  return (
    <div className="story">
      <div className="left">
        <img
          src="https://eleatcereal.com/cdn/shop/files/6_a9cec703-6ffa-4b08-9c05-045dad036ec6_1024x1024.png?v=1745847442"
          alt="Story"
        />
      </div>
      <div className="right">
        <button>Our Story</button>
        <h1>The journey to reinvent breakfast</h1>
        <p>
          We’re Hywel and Hugh, friends united by a passion for health, nutrition and sport. 
          Over the past 3 years, we’ve been on a mission to reinvent breakfast, creating a 
          functional high protein range designed to fuel active and busy lifestyles.
        </p>
        <p>
          Today, we’re proud to offer three powerful options: overnight oats, cereal, and granola. 
          Each crafted to deliver the perfect balance of protein, energy and nutrition.
        </p>
        <Link to="/Spstory">
          <button>Our Story</button>
        </Link>
      </div>
    </div>
  );
};

export default Story;
