import React from 'react'

export const StudentList = (props) => {
    console.log("student list...",props)

  return (
    <div>StudentList
        <div>
            <button className='bt btn-info' onClick={()=>props.test(12)}>Test</button>
            <table className='table table-dark'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Country</th>
                        <th>Hobbies</th>
                    </tr>
                </thead>
                {
                    props.studentlist?.length>0 ?
                <tbody>{
                props.studentlist?.map((stu)=>{
                                return(<tr>
                                    <td>{stu.name}</td>
                                    <td>{stu.email}</td>
                                    <td>{stu.gender}</td>
                                    <td>{stu.country}</td>
                                    <td>{stu.hobbies}</td>
                                    <td>
                                        <button onClick={()=>{props.delete(stu.id)}} className='btn btn-danger'>DELETE</button>    
                                    </td>
                                </tr>)
                     })  
                }

                </tbody>
                :<h1>No Data Found</h1>}
            </table>
        </div>
    </div>
  )
}
