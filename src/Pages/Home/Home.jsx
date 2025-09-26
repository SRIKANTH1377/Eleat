import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="video-wrapper">
      <video
        className="fullscreen-video"
        src="https://eleatcereal.com/cdn/shop/videos/c/vp/cb48ab2fe72d48099aa0a267685b4034/cb48ab2fe72d48099aa0a267685b4034.HD-1080p-7.2Mbps-45737993.mp4?v=0"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="content-overlay">
        <h5>
          Excellent 4.6 out of 5
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="green"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginLeft: "8px" }}
          >
            <path d="M12 2L14.94 8.65L22 9.24L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.24L9.06 8.65L12 2Z" />
          </svg>
          <p>Trustpilot</p>
        </h5>

        <h1>Breakfast built to go the distance</h1>
        <h3>High Protein. High Fibre. Low Sugar.</h3>
        <button onClick={() => navigate("/products")}>Get Started</button> <br /> 
        <h6>Join 100,000+ who made the switch</h6>
      </div>
    </div>
  );
};

export default Home;
