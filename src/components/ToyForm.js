import React,{ useState } from "react";

function ToyForm({onAddToys}) {
  const [formData, setFormData] =useState({
    name: "",
    image: "",
    likes: ""
    })
  function handleSubmit (e) {
    e.preventDefault()
    const configObj = {
      method:'POST',
      headers: {
        'Content-Type': "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(formData)
    }
    fetch('http://localhost:3001/toys', configObj)
    .then(resp => resp.json())
    .then(data => {
      onAddToys(data)
      setFormData({
        name: "",
        image: "",
        likes: 0
      })
    })
  }
  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData((formData) => ({...formData, [name]:value}))
  }
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default ToyForm;
