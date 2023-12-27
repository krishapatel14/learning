import React from 'react'
import { Link } from 'react-router-dom'

export const ContactUs = () => {
    const users=[
        {
            id:1,
            name:'krisha',
        },
        {
            id:2,
            name:'reeva',
        }
    ]
  return (
    <div>ContactUs
        {
            users.map(user=>{
                return(
                    <div>
                        <Link className='btn btn-info' to={`/contactus/person/${user.id}`}>{user.name}</Link>
                    </div>
                )
            })
        }
    </div>
  )
}
