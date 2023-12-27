import React, { useEffect } from 'react'
import { useFetchUserData } from '../query/getQuery'

export const FetchUserData = () => {
    const query=useFetchUserData();
    useEffect(() => {
     console.log("data..",query.data);
     console.log("isloading..",query.isLoading);
     console.log("error..",query.isError);

    }, [query.isLoading,query.data,query.error])
    
  return (
    <div>
        <h1>EXAMPLE OF REACT QUERY...</h1>
        {
            query.isLoading ? <h1>LOADING...</h1> : <h1>DATA IS LOADED...</h1>
        }
        <button onClick={() => query.refetch()}>REFETCH</button>
    </div>
  )
}
