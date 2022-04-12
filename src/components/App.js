import React, { useState, useEffect} from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/toys')
      .then(response => response.json())
      .then((toys) => setToys(toys))
  }, []);

  function onAddToys (newToy) {
    setToys([...toys, newToy])
  }

  function handleUpdateToy(updatedToy) {
    const updatedToys = toys.map((toy) => {
      if(toy.id === updatedToy.id) {
        return updatedToy;
      } else {
        return toy;
      }
      });
      setToys(updatedToys)
  }

  function onDeleteToy (deletedToy) {
    setToys(toys.filter(toy => toy !== deletedToy))
  }

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToys={onAddToys}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer onUpdateToy={handleUpdateToy} onDeleteToy={onDeleteToy} toys={toys}/>
    </>
  );
}

export default App;
