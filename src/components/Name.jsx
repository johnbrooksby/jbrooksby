import React, {useState} from 'react'

const Name = (props) => {
  return (
    <div>
      <h1>Hi, I'm {props.name}</h1>
      <section>
        <p>I'm a {props.title}</p>
      </section>
    </div>
  )
}

export default Name