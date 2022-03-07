// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

/* 
// Exercise
function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  const handleSubmit = e => {
    e.preventDefault()

    // If either id or name attribute exists,
    // e.target.elements.usernameInput can be used.
    onSubmitUsername(e.target.elements.usernameInput.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input type="text" id="usernameInput" name="usernameInput" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}
 */


/* 
// Extra 1
function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef(null)

  const handleSubmit = e => {
    e.preventDefault()

    onSubmitUsername(inputRef.current.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input type="text" id="usernameInput" ref={inputRef} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}
 */


/* 
// Extra 2
// Uncontrolled input
function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef(null)

  const [error, setError] = React.useState(null)

  const handleChange = e => {
    const currentValue = e.target.value
    const isValid = currentValue === currentValue.toLowerCase()

    setError(isValid ? null : 'Username must be lower case')
  }

  const handleSubmit = e => {
    e.preventDefault()
    onSubmitUsername(inputRef.current.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input 
          type="text" 
          id="usernameInput" 
          ref={inputRef} 
          onChange={handleChange} />
        <p role="alert">{error}</p>
      </div>
      <button type="submit" disabled={error !== null}>Submit</button>
    </form>
  )
}
 */


// Extra 3
// Controlled input
function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef(null)

  const [username, setUsername] = React.useState('')

  const handleChange = e => {
    setUsername(e.target.value.toLowerCase())
  }

  const handleSubmit = e => {
    e.preventDefault()
    onSubmitUsername(inputRef.current.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input 
          type="text" 
          id="usernameInput" 
          ref={inputRef} 
          onChange={handleChange} 
          value={username} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
