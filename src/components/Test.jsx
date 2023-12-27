import React, { useState } from 'react'
import { FormComponent } from './FormComponent'

export const Test = () => {
    const [name, setname] = useState("kp")
  return (
    <div>
        <FormComponent name={name}/>
    </div>
  )
}
