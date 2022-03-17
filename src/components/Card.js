import React, { useState } from "react"
import "../styles/Card.css"
import data from "../data"
import Button from "./Button"

function Card() {
  let users = data.slice(0, data.length)
  let [index, setIndex] = useState(0)

  let user = users[index]

  function previous() {
    if (index === 0) {
      setIndex(0)
    } else {
      setIndex(index - 1)
    }
  }

  function next() {
    if (index === 24) {
      setIndex(24)
    } else {
      setIndex(index + 1)
    }
  }

  function deleteCard() {
    data.splice(index, 1)
    if (index <= data.length - 1) {
      setIndex(index + 1)
    } else {
      setIndex(index - 1)
    }
  }

  function editCard() {
    console.log(users)
  }

  const transparent = {
    opacity: 0,
    backgroundColor: "blue"
  }

  return (
    <div id="background">
      <div id="main-card">
        <h2>
          {user.id}/{users.length}
        </h2>
        <div id="name-area">
          <h1>
            {user.name.first} {user.name.last}
          </h1>
          <div id="line"></div>
        </div>
        <div id="information">
          <p>
            <b>From:</b> {user.city}, {user.country}
          </p>
          <p>
            <b>Job Title:</b> {user.title}
          </p>
          <p>
            <b>Employer:</b> {user.employer}
          </p>
        </div>
        <div id="movies">
          <h3>Favorite Movies</h3>
          <p>1. {user.favoriteMovies[0]}</p>
          <p>2. {user.favoriteMovies[1]}</p>
          <p>3. {user.favoriteMovies[2]}</p>
        </div>
      </div>
      <div id="buttons-row">
        <Button style={transparent} onClick={previous} value="< Previous" />
        <div id="edit-buttons">
          <Button value="Edit" onClick={editCard} />
          <Button value="Delete" onClick={deleteCard} />
          <Button value="New" />
        </div>
        <Button onClick={next} value="Next >" />
      </div>
    </div>
  )
}

export default Card
