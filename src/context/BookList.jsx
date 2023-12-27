import React, { useContext } from 'react'
import { AppContext } from './Context'
import { DELETE_BOOK } from '../constants/constant'
import { BookDetail } from './BookDetail'

export const BookList = () => {
    const {books,bookDispatch}=useContext(AppContext)
  return (
    <div>BookList
        <table className="table table-bordered">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>price</th>
            <th>qty</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
            {
                books?.map((book)=>{
                    return(
                        <tr>
                        <td>{book.id}</td>
                        <td>{book.name}</td>
                        <td>{book.price}</td>
                        <td>{book.qty}</td>
                        <td><button className='btn btn-danger' onClick={()=>bookDispatch(DELETE_BOOK,book.id)}>DELETE</button>
                        </td>
                        </tr>
                    )
                })
            }
        </tbody>
        </table>
        <BookDetail/>
    </div>
  )
}
