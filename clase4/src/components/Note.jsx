import React from 'react'

const Note = ({content,date, categories = []}) => {
  return (
    <li>
        <p>{content}</p>
        <small><time>{date}</time></small>
        <p>{categories}</p>
    </li>
  )
}

export default Note