import React, { useState } from 'react'
import { AppContext } from '../context/Context'
import { Withdraw } from './Withdraw'
import { Deposit } from './Deposit'
import { UserAccDetail } from './UserAccDetail'
import { WITHDRAW } from '../constants/constant'
import { DEPOSIT } from '../constants/constant'

export const UserBank = () => {
    const [userAcc, setuserAcc] = useState([
        {
            accno: 123,
            name: "kpp",
            balance: 10000

        },
        {
            accno: 234,
            name: "jkk",
            balance: 20000
        },
        {
            accno: 897,
            name: "spp",
            balance: 1000
        },
        {
            accno: 465,
            name: "pjp",
            balance: 100
        }
    ])
    const userAccDispatch = (action, payload) => {
        switch (action) {
            case WITHDRAW:
                if (userAcc.map(acc => acc.accno === parseInt(payload.accno)).includes(true)) {
                    console.log(userAcc.map(acc => acc.accno));
                    console.log(payload.accno);
                    // console.log(userAcc.find(acc=>acc.accno===parseInt(payload.accno)).balance-=payload.amount)
                    var cond = userAcc.find(acc => acc.accno === parseInt(payload.accno) && acc.balance > payload.amount)
                    if (cond) {
                        cond.balance -= payload.amount
                        alert("enteredd..withdraww")
                    }
                    else {
                        alert("not enough balance")
                    }
                    // userAcc.find(acc=>acc.accno===parseInt(payload.accno) && acc.balance>payload.amount).balance-=payload.amount
                    setuserAcc(([...userAcc]), payload)
                }
                else {
                    alert("not enteredd..not found any account number..")
                }
                break
            case DEPOSIT:
                // if(userAcc.find(acc=>acc.accno===parseInt(payload.accno))){
                if (userAcc.map(acc => acc.accno === parseInt(payload.accno)).includes(true)) {
                    console.log(userAcc.map(acc => acc.accno));
                    console.log(payload.accno);
                    userAcc.find(acc => acc.accno === parseInt(payload.accno)).balance += parseInt(payload.amount)
                    setuserAcc(([...userAcc]), payload)
                    alert("enteredd..deposiedd")
                }
                else {
                    alert("not enteredd..not found any account number..")
                }
                break
            default:
                break;
        }
    }
    return (
        <div>
            <AppContext.Provider value={{ userAcc, userAccDispatch }}>
                <UserAccDetail />
                <Withdraw />
                <Deposit />
            </AppContext.Provider>
        </div>
    )
}
