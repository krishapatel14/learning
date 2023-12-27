import React, { useState } from 'react'
import { AppContext } from './Context'
import { BookList } from './BookList'
import { BookAdd } from './BookAdd'
import { ADD_BOOK } from '../constants/constant'
import { DELETE_BOOK } from '../constants/constant'

export const Books = () => {
  const [books, setbooks] = useState([
    {
        id: 1,
        name:"javaa",
        price:2000,
        qty:10
    },
    {
        id:2,
        name:"php",
        price:3000,
        qty:50
    },
    {
        id:3,
        name:"c++",
        price:400,
        qty:6
    }
  ])

  const bookDispatch =(action,payload)=>{
    switch (action) {
        case ADD_BOOK:
            setbooks([...books,payload])
            break;
        case DELETE_BOOK:
            setbooks(books.filter(book=>book.id!=payload))
            break
        default:
            break;
    }
  }
  return (
    <div>Books
        <AppContext.Provider value={{books,bookDispatch}}>
            <BookList/>
            <BookAdd/>
        </AppContext.Provider>
    </div>
  )
}
