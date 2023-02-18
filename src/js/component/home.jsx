import React from "react";
import NavBar from "./barra.jsx";
import Centre from "./centre.jsx";
import Footer from "./footer.jsx";

const Home = () => {
  return (
    <>
      <NavBar />
      <Centre title="A Warm Welcome" 
      money={10} 
      description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
      card1="Louis" 
      card2="Alberthos" 
      card3="Julius" 
      money1="Money is a number, dah! is what i have in my bank account"
      louis="Louis it's a baby! a human baby"
      alberthos="Albethos It's not his name, I'm missing the r, it's the puppy, better than the human baby HA"
      julius="Julius It is the plant, the most defenseless of all, it is our duty to preserve it"
      babys="they're all babies, I'm too lazy to look for a photo for each one, so the one from the academy will have to be enough"
       />
      <Footer />
    </>
  );
};

export default Home;

