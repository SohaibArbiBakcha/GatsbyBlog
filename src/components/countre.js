import React, { useState } from "react"

const Countre = () => {
  const [counter, setCounter] = useState(0)
  return (
    <div className="counter">
      <h3>if you like this post press like button</h3>
      <h3>{counter} Likes</h3>
      <button
        onClick={() => {
          setCounter(counter + 1)
        }}
      >
        Like
      </button>
    </div>
  )
}

export default Countre
