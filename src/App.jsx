// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./Components/Navbar/Navbar";
// import Navbar1 from "./Components/Navbar1/Navbar1";
// import Home from "./Pages/Home/Home";
// import Marque from "./Pages/Marque/Marque";
// import Products1 from "./Pages/Products1/Products1";
// import "bootstrap/dist/css/bootstrap.css";
// import Reviews from "./Pages/Reviews/Reviews";
// import Products2 from "./Pages/Products2/Products2";
// import Best from "./Pages/Best/Best";
// import Story from "./Pages/Story/Story";
// import Spstory from "./Pages/Story/Spstory";
// import Videos from "./Pages/Videos/Videos";
// import Footer from "./Components/Footer/Footer";
// import SingleProduct from "./Components/SingleProduct/SingleProduct";
// import About from "./Components/About/About";
// import Login from "./Components/Login/Login";
// import PickNowPage from "./Pages/Picknow/PickNowPage";  

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               <Navbar />
//               <Navbar1 />
//               <Home />
//               <Marque />

//               <h1 className="text-center mt-4">
//                 Choose from our range of High Protein Breakfasts
//               </h1>
//               <h6 className="text-center mt-4">
//                 Overnight oats. Cereal. Granola.
//               </h6>

//               <Products1 />
//               <Reviews />  
//               <Products2 />
//               <Best />
//               <Story />
//               <Videos />
//               <Footer />
//             </>
//           }
//         />

//         <Route
//           path="/reviews"
//           element={
//             <>
//               <Navbar />
//               <Navbar1 />
//               <Reviews />
//               <Footer />
//             </>
//           }
//         />

//         <Route
//           path="/Spstory"
//           element={
//             <>
//               <Navbar />
//               <Navbar1 />
//               <Spstory />
//               <Footer />
//             </>
//           }
//         />

//         <Route
//           path="/product/:id"
//           element={
//             <>
//               <Navbar />
//               <Navbar1 />
//               <SingleProduct />
//               <Footer />
//             </>
//           }
//         />

//         <Route
//           path="/about"
//           element={
//             <>
//               <Navbar />
//               <Navbar1 />
//               <About />
//               <Footer />
//             </>
//           }
//         />

//         <Route
//           path="/login"
//           element={
//             <>
//               <Navbar />
//               <Navbar1 />
//               <Login />
//               <Footer />
//             </>
//           }
//         />
//         <Route
//           path="/pick-now"
//           element={
//             <>
//               <Navbar />
//               <Navbar1 />
//               <PickNowPage />
//               <Footer />
//             </>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// };

// export default App;



import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Navbar1 from "./Components/Navbar1/Navbar1";
import Home from "./Pages/Home/Home";
import Marque from "./Pages/Marque/Marque";
import Products1 from "./Pages/Products1/Products1";
import "bootstrap/dist/css/bootstrap.css";
import Reviews from "./Pages/Reviews/Reviews";
import Products2 from "./Pages/Products2/Products2";
import Best from "./Pages/Best/Best";
import Story from "./Pages/Story/Story";
import Spstory from "./Pages/Story/Spstory";
import Videos from "./Pages/Videos/Videos";
import Footer from "./Components/Footer/Footer";
import SingleProduct from "./Components/Singleproduct/Singleproduct";
import About from "./Components/About/About";
import Login from "./Components/Login/Login";
import Register from "./Components/Registration/Registration";
import PickNowPage from "./Pages/Picknow/PicknowPage";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Navbar1 />
              <Home />
              <Marque />
              <h1 className="text-center mt-4">
                Choose from our range of High Protein Breakfasts
              </h1>
              <h6 className="text-center mt-4">
                Overnight oats. Cereal. Granola.
              </h6>
              <Products1 />
              <Reviews />
              <Products2 />
              <Best />
              <Story />
              <Videos />
              <Footer />
            </>
          }
        />

        {/* Reviews */}
        <Route
          path="/reviews"
          element={
            <>
              <Navbar />
              <Navbar1 />
              <Reviews />
              <Footer />
            </>
          }
        />

        {/* Special Story */}
        <Route
          path="/Spstory"
          element={
            <>
              <Navbar />
              <Navbar1 />
              <Spstory />
              <Footer />
            </>
          }
        />

        {/* Single Product */}
        <Route
          path="/product/:id"
          element={
            <>
              <Navbar />
              <Navbar1 />
              <SingleProduct />
              <Footer />
            </>
          }
        />

        {/* About */}
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <Navbar1 />
              <About />
              <Footer />
            </>
          }
        />

        {/* Login */}
        <Route
          path="/login"
          element={
            <>
              <Navbar />
              <Navbar1 />
              <Login />
              <Footer />
            </>
          }
        />

        {/* Register */}
        <Route
          path="/register"
          element={
            <>
              <Navbar />
              <Navbar1 />
              <Register />
              <Footer />
            </>
          }
        />

        {/* Pick Now */}
        <Route
          path="/pick-now"
          element={
            <>
              <Navbar />
              <Navbar1 />
              <PickNowPage />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

