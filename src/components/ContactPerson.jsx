import React from 'react'
import { useParams } from 'react-router-dom'

export const ContactPerson = () => {
    var id=useParams().id
  return (
    <div>Person {id}</div>
  )
}
