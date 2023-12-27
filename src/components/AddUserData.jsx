import React, { useEffect } from 'react'
import { useAddUserData } from '../query/getQuery'

export const AddUserData = () => {
    const mutation=useAddUserData()
    useEffect(()=>{
        console.log("mutation.isLoading",mutation.isLoading)
        console.log("mutation.isIdle",mutation.isIdle)
        console.log("mutation.isSuccess",mutation.isSuccess)
        console.log("mutation.isError",mutation.isError)
        console.log("mutation.error",mutation.error)
        console.log("mutation.data",mutation.data)
    },[mutation.isLoading,mutation.isIdle])

    const addUserData=()=>{
        var userObj={
            name:"rajeshh",
            email: "rajesh@gmail.com",
            age:30,
            isActive:true
        }
        mutation.mutate(userObj)
    }
  return (
    <div>AddUserData
        <button onClick={()=>addUserData()} >Submit</button>
    </div>
  )
}

