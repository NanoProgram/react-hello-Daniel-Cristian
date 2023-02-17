import React from "react";
import NavBar from "./barra.jsx";
import Centre from "./centre.jsx";
import Footer from "./footer.jsx";

const Home = () => {
  return (
    <>
      <NavBar />
      <Centre title="A Warm Welcome" money={10} description="cristian el maximo" />
      <Footer />
    </>
  );
};

export default Home;

