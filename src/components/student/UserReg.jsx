import React from 'react'
import { useForm } from 'react-hook-form'

export const UserReg = () => {
 const{register,handleSubmit,formState:{errors}}=useForm({
    mode:"onTouched"
 });
 console.log("errors",errors);
 const submitHandler =(data)=>{
    console.log(data)
 }
 const validationSchema={
    name:{
        required:{
            value:true,
            message:"Please enter your Name!"
        }
    },
    email:{
        required:{
            value:true,
            message:"Please enter email"
        },
        maxLength:{
            value:20,
            message:"email should not exceed 20 characters..."
        }
    },
    contact:{
        required:{
            value:true,
            message:"please enter contact"
        },
        pattern:{
            value:/^[6-9]{1}[0-9]{9}$/,
            message:"contact is not valid..."
        }
    }
 }
  return (
    <div>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label htmlFor="firstName">Name</label>
                <input type="text" {...register("name",validationSchema.name)}/>
                {errors.name && <p style={{color:"red"}}>{errors.name.message}</p>}
            </div>
            <div>
                <label htmlFor="contact">Contact</label>
                <input type="text" {...register("Contact",validationSchema.contact)} />
                {errors.contact && <p style={{color:"red"}}>{errors.contact.message}</p>}

            </div>
            <div>
                <label htmlFor="email">email</label>
                <input type="text" {...register("Email",validationSchema.email)}/>
                {errors.email && <p style={{color:"red"}}>{errors.email.message}</p>}
            </div>
            <div>
                <label htmlFor="password">password</label>
                <input type="text" {...register("Password")} />
            </div>
            <div>
                <label htmlFor="gender">Gender</label>
                male: <input type="radio" value="male" name='gender' {...register("gender")}/>
                female: <input type="radio" value="female" name='gender' {...register("gender")}/>
            </div>
            <div>
                <label htmlFor="country">country</label>
                <select {...register("country")}>
                    <option >India</option>
                    <option>USA</option>
                    <option>UK</option>  
                </select>
            </div>
            <div>
                <label htmlFor="skills">skills</label>
                <select multiple {...register("skills")}>
                    <option value="react">REACT</option>
                    <option value="angular">ANGULAR</option>
                    <option value="vue">VUE</option>
                </select>

            </div>
            <div>
                <label>Hobbies</label>
                CRICKET : <input type="checkbox" value="cricket" {...register("hobbies")}></input>
                FootBall: <input type="checkbox" value="football" {...register("hobbies")}></input>
                Badminton : <input type="checkbox" value="badminton" {...register("hobbies")}></input>

            </div>
            <div>
                <input type="submit" value="SUBMIT"></input>
            </div>
        </form>
    </div>
  )
}
