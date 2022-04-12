import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer() {
  fetch('http://localhost:3001/toys')
  .then(response => response.json())
  .then(toys => {
    console.log(toys)
    toys.map(toy => {
      <ToyCard name={toy.name} image={toy.image} likes = {toy.likes}/>
    })
  })
  return (
    <div id="toy-collection">
      {handleGet}
    </div>
  );
}

export default ToyContainer;
