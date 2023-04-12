import React from "react";
import rigoImageUrl from "../../img/rigo-baby.jpg";

const Centre = (props) => {

return (
<div class="container">
<div class="jumbotron jumbotron-fluid">
<h1 class="display-4">{props.title}</h1>
<p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
<hr class="my-4"/>
<p>{props.description}</p>
<a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
</div> 
<br/>
<div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
<div class="card col" id="margin">
<img src={rigoImageUrl}/>
<div class="card-body">
  <h5 class="card-title">{props.money}</h5>
  <p class="card-text">{props.money1}</p>
  <p class="card-text">{props.babys}</p>
  <a href="https://es.wikipedia.org/wiki/Wikipedia:Portada" class="btn btn-primary">Go somewhere</a>
</div>
</div>
<div class="card col" id="margin">
<img src={rigoImageUrl}/>
<div class="card-body">
  <h5 class="card-title">{props.card1}</h5>
  <p class="card-text">{props.louis}</p>
  <p class="card-text">{props.babys}</p>
  <a href="https://www.youtube.com/" class="btn btn-primary">Go somewhere</a>
</div>
</div>
<div class="card col" id="margin">
<img src={rigoImageUrl}/>
<div class="card-body">
  <h5 class="card-title">{props.card2}</h5>
  <p class="card-text">{props.alberthos}</p>
  <p class="card-text">{props.babys}</p>
  <a href="https://www.nbamaniacs.com/" class="btn btn-primary">Go somewhere</a>
</div>
</div>
<div class="card col" id="margin">
<img src={rigoImageUrl}/>
<div class="card-body">
  <h5 class="card-title">{props.card3}</h5>
  <p class="card-text">{props.julius}</p>
  <p class="card-text">{props.babys}</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>
</div>
</div> 
);
};

export default Centre;