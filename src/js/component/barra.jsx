import React from "react";
const NavBar = () => {
	return (
<nav class="navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Star Boostrap</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link active" aria-current="page" href="#">About</a>
        <a class="nav-link active" aria-current="page" href="#">Serervices</a>
        <a class="nav-link active" aria-current="page" href="#">contact</a>        
      </div>
    </div>
  </div>
</nav>
);
};

export default NavBar;
