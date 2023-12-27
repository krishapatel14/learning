import React from 'react'

export default function HomeComponent() {
  var age=18
  var name="Krisha"
  var isEdu=true
  var person={
    "name":"kp",
    "age":18  
  }
  var users=[
    {
      id:1,
      "name":"kpp",
      age:13
    },
    {
      id:2,
      "name":"krishuuu",
      age:20
    }
  ]
  return (
    <div>HomeComponent
    <h1>age={age}</h1>
    <h2>{name}</h2>
      <h3>{isEdu==true?"educated":"not educated"}</h3>
      {person.name}
      <div style={{ color: "blue", background: "black" }}>
        <h2>{person.name}</h2>
      </div>
      <h2>users</h2>
      {/* {
        users.map(user=>{
          return(<div>
            <h1>{user.id}</h1>
            <h1>{user.name}</h1>
            <h1>{user.age}</h1>
          </div>)
        })
      } */}
        {
            users?.map((user)=>{
              return(
                <li>
                  <h1>{user.id}</h1>
                  
                    {
                      user. age >=18 ? <h1 style={{color:"green"}}>{user.name}</h1> : <h1 style={{color:"red"}}>{user.name}</h1>
                    }
                  
                  {/* <h1>{user.name}</h1> */}
                  <h1>{user.age}</h1>
                </li>
              )
            })
          }
    </div>
  )
}
