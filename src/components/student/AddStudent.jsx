import React, { useState } from 'react'
import { RegisterStudent } from './RegisterStudent'

export const AddStudent = (props) => {
    const add = () => {
        // // <RegisterStudent student={RegisterStudent}/>
        // const[student,setstudents]=useState([]);

        // const handleForm=(data)=>{
        //     setstudents([...student,data])
        // }
        // props.add(student)
        console.log("hello")
    }
        return (
        // <div>AddStudent
        //     <div>
        //         <button className='btn btn-info' onClick={() => { add() }}>ADD STUDENT</button>
        //     </div>
        // </div>
        <div>
        <form onSubmit={(e)=>{AddStudent(e)}}>
            <div>
                <label>Student name</label>
                <input type="text" onChange={(e)=>{props.setname(e.target.value)}}/>
                {props.name}
            </div>
            <div>
                <label>Student email</label>
                <input type="email" onChange={(e)=>{props.setemail(e.target.value)}} />
                {props.email}
            </div>
            <div>
                <label>Gender</label>
                MALE:<input type="radio" onChange={(e)=>props.setgender(e.target.value)} name='gender' value='male'/>
                FEMALE:<input type="radio" onChange={(e)=>props.setgender(e.target.value)}  name='gender' value='female'/>
                {props.gender}
            </div>
            <div>
                <label>
                    country
                </label>
                <select onChange={(e)=>{props.setcountry(e.target.value)}}>
                    <option value="india">INDIA</option>
                    <option value="usa">USA</option>
                    <option value="canada">CANADA</option>
                    <option value="australia">AUSTRALIA</option>
                    <option value="uk">UK</option>
                </select>
                {props.country}
            </div>
            <div>
            <label>Hobbies</label>
            <br></br>
            <input type="checkbox" onChange={(e)=>{props.sethobbies([...props.hobbies,e.target.value])}} value="cricket"></input>CRICKET
            <input type="checkbox" onChange={(e)=>{props.sethobbies([...props.hobbies,e.target.value])}} value="football"></input>Football
            <input type="checkbox" onChange={(e)=>{props.sethobbies([...props.hobbies,e.target.value])}} value="reading"></input>Reading    
            </div>
            {
                props.hobbies?.map((hob)=>{
                    return(
                        <div>
                            {hob}
                        </div>
                    )
                })
            }
            <div>
                     <button className='btn btn-info' onClick={() => { add() }}>SUBMIT</button>
            </div>
        </form>

    </div>
    )
}
