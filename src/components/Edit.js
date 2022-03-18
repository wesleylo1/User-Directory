import React from "react"
import "../styles/Edit.css"

function Edit({ trigger, setTrigger, user }) {
  const updatedUser = {
    id: user.id,
    name: {
      first: user.name.first,
      last: user.name.last
    },
    city: user.city,
    country: user.country,
    employer: user.employer,
    title: user.title,
    favoriteMovies: [
      user.favoriteMovies[0],
      user.favoriteMovies[1],
      user.favoriteMovies[2]
    ]
  }

  function handleNameChange(e) {
    let key = e.target.name
    updatedUser.name[key] = e.target.value
  }

  function handleChange(e) {
    let key = e.target.name // name in the input
    updatedUser[key] = e.target.value
  }

  function handleMovieChange(e) {
    let index = e.target.name
    updatedUser.favoriteMovies[index] = e.target.value
  }

  return trigger ? (
    <div className="edit-form">
      <div className="edit-button-box">
        <button onClick={() => setTrigger(false)} className="edit-button-exit">
          x
        </button>
      </div>
      <form>
        <p>
          First Name:
          <input
            name="first"
            defaultValue={user.name.first}
            onChange={handleNameChange}
            type="text"
          />
        </p>
        <p>
          Last Name:
          <input
            name="last"
            defaultValue={user.name.last}
            onChange={handleNameChange}
            type="text"
          />
        </p>
        <p>
          City:
          <input
            name="city"
            defaultValue={user.city}
            onChange={handleChange}
            type="text"
          />
        </p>
        <p>
          Country:
          <input
            name="country"
            defaultValue={user.country}
            onChange={handleChange}
            type="text"
          />
        </p>
        <p>
          Job Title:
          <input
            name="title"
            defaultValue={user.title}
            onChange={handleChange}
            type="text"
          />
        </p>
        <p>
          Employer:
          <input
            name="employer"
            defaultValue={user.employer}
            onChange={handleChange}
            type="text"
          />
        </p>
        <h3>Favorite Movies</h3>
        <p>
          1:
          <input
            name="0"
            defaultValue={user.favoriteMovies[0]}
            onChange={handleMovieChange}
            type="text"
          />
        </p>
        <p>
          2:
          <input
            name="1"
            defaultValue={user.favoriteMovies[1]}
            onChange={handleMovieChange}
            type="text"
          />
        </p>
        <p>
          3:
          <input
            name="2"
            defaultValue={user.favoriteMovies[2]}
            onChange={handleMovieChange}
            type="text"
          />
        </p>
        <button onClick={() => console.log("hi")}>Update User</button>
      </form>
    </div>
  ) : (
    ""
  )
}

export default Edit
