import React from "react"
import data from "../data"
import "../styles/Form.css"

function Form({ trigger, setTrigger, users }) {
  const newUser = {
    id: users.length + 1,
    name: {
      first: "",
      last: ""
    },
    city: "",
    country: "",
    employer: "",
    title: "",
    favoriteMovies: ["", "", ""]
  }

  function handleNameChange(e) {
    let key = e.target.name
    newUser.name[key] = e.target.value
  }

  function handleChange(e) {
    let key = e.target.name // name in the input
    newUser[key] = e.target.value
  }

  function handleMovieChange(e) {
    let index = e.target.name
    newUser.favoriteMovies[index] = e.target.value
  }

  function addNewUser(e) {
    e.preventDefault()
    users.push(newUser)
    data.push(newUser)
    alert("user added!")
  }

  return trigger ? (
    <div className="form">
      <div className="button-box">
        <button onClick={() => setTrigger(false)} className="form-button">
          x
        </button>
      </div>
      <form action="">
        <p>
          First Name:
          <input name="first" onChange={handleNameChange} type="text" />
        </p>
        <p>
          Last Name:{" "}
          <input name="last" onChange={handleNameChange} type="text" />
        </p>
        <p>
          City: <input name="city" onChange={handleChange} type="text" />
        </p>
        <p>
          Country: <input name="country" onChange={handleChange} type="text" />
        </p>
        <p>
          Job Title: <input name="title" onChange={handleChange} type="text" />
        </p>
        <p>
          Employer:{" "}
          <input name="employer" onChange={handleChange} type="text" />
        </p>
        <h3>Favorite Movies</h3>
        <p>
          1: <input name="0" onChange={handleMovieChange} type="text" />
        </p>
        <p>
          2: <input name="1" onChange={handleMovieChange} type="text" />
        </p>
        <p>
          3: <input name="2" onChange={handleMovieChange} type="text" />
        </p>
        <button onClick={addNewUser}>Add User</button>
      </form>
    </div>
  ) : (
    ""
  )
}

export default Form
