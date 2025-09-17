import React, { useState } from "react";
import "./best.css";

const Carousel = () => {
  const items = [
     {
      id:1,
      image:"https://eleatcereal.com/cdn/shop/files/3_b64abcf6-6d2a-468e-b05a-b957871ffedd-min_1024x1024.png?v=1716024533",
      name:"Holly Archer",
      profession:"Professional Runner",
      message:"As a high performer and 1% seeker, ELEAT is an important addition to my daily fuel that helps me reach my protein goals."
    },
    {
      id:2,
      image:"https://eleatcereal.com/cdn/shop/files/9_da906f4e-0564-4166-9299-e931084a6c5c-min_1024x1024.png?v=1716024534",
      name:"Dr James Morehen",
      profession:"Dr James Morehen",
      message:"ELEAT’s products provide a brilliant option for a gym goer or professional athlete to get a great protein hit. A great option for breakfast, afternoon refuel or post dinner snack."
    },
    {
      id:3,
      image:"https://eleatcereal.com/cdn/shop/files/1_1_-min_1024x1024.png?v=1716024533",
      name:"Mary McCarthy",
      profession:"Runner",
      message:"ELEAT is a tasty way to hit my protein goals for the day…for breakfast, lunch, a snack or dessert."
    },
    {
      id:4,
      image:"https://eleatcereal.com/cdn/shop/files/Ambassador_Pics-min_1024x1024.png?v=1716024534",
      name:"Ben West",
      profession:"Entrepreneur & PT",
      message:"ELEAT is the product curbing my sweet cravings whilst hitting my protein targets."
    },
    {
      id:5,
      image:"https://eleatcereal.com/cdn/shop/files/5_1_-min_1024x1024.png?v=1716024534",
      name:"Imo Boddy",
      profession:"Ultra Runner",
      message:"ELEAT is a convenient, delicious, nutritious, anytime snack."
    },
    {
      id:6,
      image:"https://eleatcereal.com/cdn/shop/files/6_1_-min_1024x1024.png?v=1716024534",
      name:"Justin Knussi",
      profession:"PT & CrossFit Athlete",
      message:"ELEAT gives all the textures of cereal but with the protein I need."
    },
    {
      id:7,
      image:"https://eleatcereal.com/cdn/shop/files/2_b19a4961-1976-4120-86be-d2b882fd6a1c-min_1024x1024.png?v=1716024533",
      name:"Jenny Mannion",
      profession:"Running Creator",
      message:"ELEAT’s the brekkie for the celiacs who like to run."
    },
    {
      id:8,
      image:"https://eleatcereal.com/cdn/shop/files/8_1_-min_1024x1024.png?v=1716024534",
      name:"Izzy Hill",
      profession:"Fitness Creator",
      message:"ELEAT is the saving grace I never knew I needed. I love cereal but becoming more health conscious, I was hesitant to eat it. Now, I have the best of both worlds!"
    },
    {
      id:9,
      image:"https://eleatcereal.com/cdn/shop/files/7_1_-min_1024x1024.png?v=1716024533",
      name:"Becca Salmon",
      profession:"Expedition Doctor",
      message:"ELEAT is the perfect way to get quick and easy protein into my diet when working and training. Plus, it’s delicious."
    }
 
  ];

  const [current, setCurrent] = useState(0);

  const handlePrev = () =>
    setCurrent((prev) => (prev === 0 ? items.length - 1 : prev - 1));

  const handleNext = () =>
    setCurrent((prev) => (prev === items.length - 1 ? 0 : prev + 1));

  const currentItem = items[current];

  return (
    <div className="carousel-container">
      <div className="arrow-row">
        <button className="arrow" onClick={handlePrev}>←</button>
        <button className="arrow" onClick={handleNext}>→</button>
      </div>

      <div className="card">
        <img src={currentItem.image} alt={currentItem.name} />
        <h3>{currentItem.name}</h3>
        <p className="profession">{currentItem.profession}</p>
        <p className="review">{currentItem.message}</p>
      </div>
    </div>
  );
};

export default Carousel;


