import axios from "axios"
import { useMutation, useQuery } from "react-query"
import { useNavigate } from "react-router-dom"

const fetchUserData =()=>{
    axios.get("/user/user")
}

const addUserData=(newUser)=>{
    axios.post("/user/user",newUser)
}

export const useAddUserData=()=>{
    const navigate = useNavigate()
    return useMutation(addUserData,{
        onSuccess:data=>navigate("/apidemo")})
}

export const useFetchUserData=()=>{
    return useQuery('userData',fetchUserData,{
        refetchOnMount:false,
        enabled:true,
        // onSuccess:(data)=>{
        //     alert("data fetch successfully..")
        // }
    })
}