import React, { useContext } from 'react'
import { AppContext } from '../context/Context'
import { useForm } from 'react-hook-form'
import { WITHDRAW } from '../constants/constant'

export const Withdraw = () => {
    const {userAccDispatch} = useContext(AppContext)
    const {register,handleSubmit}=useForm()
    const withdrawMoney=(data)=>{
        userAccDispatch(WITHDRAW,data)
    }
  return (
    <div>*******withdraw********
        <form onSubmit={handleSubmit(withdrawMoney)}>
            <div>
                <label>acc no</label>
                <input type="text" name='accno' {...register("accno")} />
            </div>
            <div>
                <label>amount</label>
                <input type="text" name='amount' {...register("amount")} />
            </div>
            <div>
                <input type="submit" value="withdraw" />
            </div>
        </form>
     </div>

  )
}
