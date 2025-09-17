import React, { useState } from 'react'
import "./videos.css";

const Videos = () => {
  const [playingIndex, setPlayingIndex] = useState(null);

  const togglePlay = (video, idx) => {
    if (video.paused) {
     
      document.querySelectorAll("video").forEach((v) => v.pause());
      video.play();
      setPlayingIndex(idx);
    } else {
      video.pause();
      setPlayingIndex(null);
    }
  };

  const videoList = [
    "https://eleatcereal.com/cdn/shop/videos/c/vp/eb9274ac46c24fa38dc6158e8e682d6b/eb9274ac46c24fa38dc6158e8e682d6b.HD-1080p-7.2Mbps-44302902.mp4?v=0",
    "https://eleatcereal.com/cdn/shop/videos/c/vp/6cb066ae9a6e47c581e78538e90cc1fe/6cb066ae9a6e47c581e78538e90cc1fe.HD-1080p-7.2Mbps-44303258.mp4?v=0",
    "https://eleatcereal.com/cdn/shop/videos/c/vp/1d3b92ff9d6a478a926e7cd060d6d0e2/1d3b92ff9d6a478a926e7cd060d6d0e2.HD-1080p-7.2Mbps-44437025.mp4?v=0",
    "https://eleatcereal.com/cdn/shop/videos/c/vp/135bf64ca96f46b0b327cab44d2a91c4/135bf64ca96f46b0b327cab44d2a91c4.HD-1080p-7.2Mbps-44303045.mp4?v=0",
    "https://eleatcereal.com/cdn/shop/videos/c/vp/b7799d7011414b1caa975daa669a36b4/b7799d7011414b1caa975daa669a36b4.HD-1080p-7.2Mbps-44436443.mp4?v=0"
  ];

  return (
    <div>
      <h1>Our reviews speak for themselves</h1>
      <div className="videos">
        {videoList.map((src, idx) => (
          <div
            className="video-container"
            key={idx}
            onClick={(e) => togglePlay(e.currentTarget.querySelector("video"), idx)}
          >
            <video src={src} preload="metadata" />
            {playingIndex !== idx && <div className="play-button" />}
          </div>
        ))}
      </div>

       <div className="marquee-wrapper">
   <div className="marque1">
  <a href="https://www.instagram.com/eleatcereal/" target="_blank" rel="noopener noreferrer">
    <img src="https://eleatcereal.com/cdn/shop/files/DSC02130_600x600.jpg?v=1745942344" alt="" />
  </a>

  <a href="https://www.instagram.com/eleatcereal/" target="_blank" rel="noopener noreferrer">
    <img src="https://eleatcereal.com/cdn/shop/files/10-07510_05ad7835-4772-4373-a5c4-be1d30c7d046_600x600.jpg?v=1745942142" alt="" />
  </a>

  <a href="https://www.instagram.com/eleatcereal/" target="_blank" rel="noopener noreferrer">
    <img src="https://eleatcereal.com/cdn/shop/files/10-07180_600x600.jpg?v=1745942151" alt="" />
  </a>

  <a href="https://instagram.com/eleatcereal" target="_blank" rel="noopener noreferrer">
    <img src="https://eleatcereal.com/cdn/shop/files/instagram-min_600x600.png?v=1716024910" alt="" />
  </a>

  <a href="https://link5.com" target="_blank" rel="noopener noreferrer">
    <img src="https://eleatcereal.com/cdn/shop/files/DSC05272_600x600.jpg?v=1745942343" alt="" />
  </a>

  <a href="https://link6.com" target="_blank" rel="noopener noreferrer">
    <img src="https://eleatcereal.com/cdn/shop/files/10-07254_1_28117e75-c8c1-4117-a9f1-712398c7725f_600x600.jpg?v=1745942133" alt="" />
  </a>
</div>
 </div>
      
    </div>
  );
};

export default Videos;
