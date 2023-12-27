import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

export const UserUpdate = () => {
    const id=useParams().id
    // const navigate=useNavigate();
  
    const updateData = async(data)=>{
        const updateObj={
            name:data.name,
            email:data.email,
            age:data.age,
            isActive:data.isActive==="true"?true:false
        }
        try {
            const res=await axios.put("https://node5.onrender.com/user/user/"+id,updateObj)
            console.log(res.status);
            console.log(res.data.data)
        } catch (error) {
            
        }
    }
    const { register, handleSubmit } = useForm({
        defaultValues:async()=>{
            const res=await axios.get("https://node5.onrender.com/user/user/"+id)
            return res.data.data
        }
    })

  return (
    <div>
        <h1>
            update user
        </h1>
        <form onSubmit={handleSubmit(updateData)}>
            <div>
                <label htmlFor="">Name</label>
                <input type="text" name="name" id="" {...register("name")} />
            </div>
            <div>
                <label htmlFor="">email</label>
                <input type="text" name="email" id="" {...register("email")} />
            </div>
            <div>
                <label htmlFor="">Age</label>
                <input type="text" name="age" id="" {...register("age")} />
            </div>
            <div>
                <label htmlFor="">isActive</label>
                <input type="text" name="isActive" id="" {...register("isActive")} />
            </div>
            <div>
                <input type="submit" value="UPDATE" />
            </div>
        </form>
    </div>
  )
}
