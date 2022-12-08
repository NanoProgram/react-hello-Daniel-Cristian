import React from "react";
import NavBar from "./barra.jsx";
import Centre from "./centre.jsx";

//let titleJumbo = "A Warmn Welcome";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Footer from "./footer.jsx";

const Home = () => {
  return <>
  <NavBar/>
  <Centre title= "A Warmn Welcome" money ={10} />
  <Footer/>
  </>
};

export default Home;
