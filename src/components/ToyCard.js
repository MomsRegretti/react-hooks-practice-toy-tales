import React from "react";

function ToyCard({toy, id, name, likes, image, onDeleteToy, onUpdateToy}) {
function handleDeleteClick() {
  fetch(`http://localhost:3001/toys/${id}`, {
    method: 'DELETE',
  })
  .then((r) => r.json())
  .then(() => onDeleteToy(toy))
}
function handleLikeClick() {
  fetch(`http://localhost:3001/toys/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type':"application/json",
    },
    body: JSON.stringify({
      likes: (++likes)
    })
  })
  .then((r) => r.json())
  .then((updatedToy) => onUpdateToy(updatedToy))
}
  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button onClick= {handleLikeClick} className="like-btn">Like {"<3"}</button>
      <button onClick={handleDeleteClick} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
