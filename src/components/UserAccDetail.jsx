import React, { useContext } from 'react'
import { AppContext } from '../context/Context'

export const UserAccDetail = () => {
    const {userAcc} =useContext(AppContext)
  return (
    <div>*******UserAccDetail********
        
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>accno</th>
                    <th>name</th>
                    <th>balance</th>
                </tr>
            </thead>
            <tbody>
                {
                    userAcc?.map(acc=>{
                        return(
                            <tr>
                                <td>{acc.accno}</td>
                                <td>{acc.name}</td>
                                <td>{acc.balance}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
