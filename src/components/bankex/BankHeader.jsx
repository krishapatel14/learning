import React from 'react'
import { useSelector } from 'react-redux'

export const BankHeader = () => {
    const state=useSelector(state=>state.bank)
    console.log(state)
  return (
    <div>
        <h1>your bank BALANCE = {state?.balance}</h1>
    </div>
  )
}
