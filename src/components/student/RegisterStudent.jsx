import React, { useState } from 'react'

export const RegisterStudent = () => {
    const[name,setname]=useState("");
    const[email,setemail]=useState("");
    const[gender,setgender]=useState("");
    const[country,setcountry]=useState("");
    const[hobbies,sethobbies]=useState([]);

    const nameHandler=(e)=>{
        console.log(e.target.value);
        setname(e.target.value);
    }

    const submit = (e)=>{
        e.preventDefault();
        console.log("name",name);
        console.log("email",email);
        console.log("gender",gender);
        console.log("country",country);
        console.log("Hobbies",hobbies);
    }
  return (
    <div>
        <form onSubmit={(e)=>{submit(e)}}>
            <div>
                <label>Student name</label>
                <input type="text" onChange={(e)=>{nameHandler(e)}}/>
                {name}
            </div>
            <div>
                <label>Student email</label>
                <input type="email" onChange={(e)=>{setemail(e.target.value)}} />
                {email}
            </div>
            <div>
                <label>Gender</label>
                MALE:<input type="radio" onChange={(e)=>setgender(e.target.value)} name='gender' value='male'/>
                FEMALE:<input type="radio" onChange={(e)=>setgender(e.target.value)}  name='gender' value='female'/>
                {gender}
            </div>
            <div>
                <label>
                    country
                </label>
                <select onChange={(e)=>{setcountry(e.target.value)}}>
                    <option value="india">INDIA</option>
                    <option value="usa">USA</option>
                    <option value="canada">CANADA</option>
                    <option value="australia">AUSTRALIA</option>
                    <option value="uk">UK</option>
                </select>
                {country}
            </div>
            <div>
            <label>Hobbies</label>
            <br></br>
            <input type="checkbox" onChange={(e)=>{sethobbies([...hobbies,e.target.value])}} value="cricket"></input>CRICKET
            <input type="checkbox" onChange={(e)=>{sethobbies([...hobbies,e.target.value])}} value="football"></input>Football
            <input type="checkbox" onChange={(e)=>{sethobbies([...hobbies,e.target.value])}} value="reading"></input>Reading    
            </div>
            {
                hobbies?.map((hob)=>{
                    return(
                        <div>
                            {hob}
                        </div>
                    )
                })
            }
            <div>
                <input type="submit" value="SUBMIT" />
            </div>
        </form>

    </div>
    )
}
