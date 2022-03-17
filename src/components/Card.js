import React, { useState } from "react"
import "../styles/Card.css"
import data from "../data"
import Button from "./Button"

let users = data.slice(0, data.length)
function Card() {
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

  return (
    <div id="background">
      <div id="main-card">
        <h2>
          {user.id}/{users.length}
        </h2>
        {/*top right*/}
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
        <Button onClick={previous} value="< Previous" />
        <div id="edit-buttons">
          <Button value="Edit" />
          <Button value="Delete" />
          <Button value="New" />
        </div>
        <Button onClick={next} value="Next >" />
      </div>
    </div>
  )
}

export default Card
