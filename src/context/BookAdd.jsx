import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { ADD_BOOK } from '../constants/constant'
import { AppContext } from './Context'

export const BookAdd = () => {
    const { bookDispatch } = useContext(AppContext)
    const { register, handleSubmit } = useForm()
    const submitBook = (data) => {
        bookDispatch(ADD_BOOK, data)
    }
    return (
        <div>BookAdd
            <form onSubmit={handleSubmit(submitBook)}>
                <div>
                    <label>id</label>
                    <input type="text" name='id' {...register("id")} />
                </div>
                <div>
                    <label>name</label>
                    <input type="text" name='name' {...register("name")} />
                </div>
                <div>
                    <label>price</label>
                    <input type="text" name='price' {...register("price")} />
                </div>
                <div>
                    <label>qty</label>
                    <input type="text" name='qty' {...register("qty")} />
                </div>
                <div>
                    <input type="submit" className="btn btn-success" value="ADD BOOK" />
                </div>
            </form>
        </div>
    )
}
