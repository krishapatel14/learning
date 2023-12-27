import React from 'react'
import { useForm } from 'react-hook-form'

export const FormComponent = (props) => {
    const {register,handleSubmit}=useForm([])
  return (
    <div>
        <form>
            <div>
            <label>{props}</label>
            <input type="text" name="name" {...register(props)}></input>
            </div>
            <div>
                <input type="submit" value={props} />
            </div>
        </form>
    </div>
  )
}
