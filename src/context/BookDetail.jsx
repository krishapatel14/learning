import React, { useContext } from 'react'
import { AppContext } from './Context'

export const BookDetail = () => {
    const {books} =useContext(AppContext)
  return (
    <div>BookDetail
        <ul>
            {
                books?.map(book=>{
                    return(
                        <li>
                            {book.id} {book.name} {book.price} {book.qty}
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}
