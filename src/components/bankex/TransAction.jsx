import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { deposit,withdraw } from '../../redux/BankSlice'
import { BankHeader } from './BankHeader'

export const TransAction = () => {
    const [amount, setamount] = useState(0)
    const [amt, setamt] = useState(0)
    const dispatch=useDispatch()
    const {register,handleSubmit,formState:{errors}}=useForm();


    const depositHandler = (data) => {
        console.log(data);
        //dispatch(deposit(data?.amount))
        const depositAmount = parseInt(data?.amount);
        //dispatch(deposit(Number(data?.amount)))
        dispatch(deposit(depositAmount))
      };
      const withdrawHandler=(data)=>{
        console.log("withraw", data );
        const withdrawAmount = parseInt(data?.amt);
        dispatch(withdraw(withdrawAmount))
      }
      
  return (
    <div>
        <BankHeader/>

        <form onSubmit={handleSubmit(depositHandler)}>
            <div>
                <input type="number" placeholder='Enter the amount' {...register("amount")} />
            </div>
            <div>
                <button type="submit" className='btn btn--primary'>Deposit</button>
            </div>
        </form>
        <br />
        <form onSubmit={handleSubmit(withdrawHandler)}>
        <div>
                <input type="number" placeholder='Enter the amount' {...register("amt")} />
            </div>
            <div>
                <button type="submit" className='btn btn--primary'>WithDraw</button>
            </div>
        </form>
    </div>
  )
}
