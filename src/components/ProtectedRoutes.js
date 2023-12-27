import React from 'react'
import { Storage } from './Storage';
import { Outlet } from 'react-router-dom';



const useAuth=()=>{
    var id=localStorage.getItem("id")
    if(id){
        return true;
    }
    else{
        return false;
    }
}


export const ProtectedRoutes = () => {
    var isAuth=useAuth();
    console.log(isAuth)
  return (
   <>
    {
        isAuth?<Outlet/>:<Storage/>
    }
   </>
  )
}
