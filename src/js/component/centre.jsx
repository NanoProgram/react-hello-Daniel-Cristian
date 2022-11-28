import React from "react";

const Centre = (props) => {

return (
<div class="container">
<div class="jumbotron jumbotron-fluid">
<h1 class="display-4">{props.titleJumbo}</h1>
<p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
<hr class="my-4"/>
<p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
<a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
</div> 
<br/>
<div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
<div class="card col">
<img src="..." class="card-img-top" alt="..."/>
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>
<div class="card col">
<img src="..." class="card-img-top" alt="..."/>
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>
<div class="card col">
<img src="..." class="card-img-top" alt="..."/>
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>
<div class="card col">
<img src="..." class="card-img-top" alt="..."/>
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>
</div>
</div> 
);
};

export default Centre;