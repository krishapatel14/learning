import React, { useContext } from 'react'
import { AppContext } from '../context/Context'
import { useForm } from 'react-hook-form'
import { DEPOSIT } from '../constants/constant'

export const Deposit = () => {
    const {userAccDispatch}=useContext(AppContext)
    const {register,handleSubmit} = useForm()
    const depositMoney =(data)=>{
        userAccDispatch(DEPOSIT,data)
    }
  return (
        <div>*****deposit******
            <form onSubmit={handleSubmit(depositMoney)}>
            <div>
                <label>acc no</label>
                <input type="text" name='accno' {...register("accno")} />
            </div>
            <div>
                <label>amount</label>
                <input type="text" name='amount' {...register("amount")} />
            </div>
            <div>
                <input type="submit" value="deposit" />
            </div>
        </form>
    </div>
  )
}
