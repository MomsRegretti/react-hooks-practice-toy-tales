import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({onUpdateToy,toys, onDeleteToy}) {

  return (
    <div id="toy-collection">
    {toys.map((toy) => {
    return <ToyCard onUpdateToy={onUpdateToy} onDeleteToy={onDeleteToy} toy = {toy} id = {toy.id} key={toy.id} name={toy.name} image={toy.image} likes = {toy.likes}/>
  })}
    </div>
  );
}

export default ToyContainer;
