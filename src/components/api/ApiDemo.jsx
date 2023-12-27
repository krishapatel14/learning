import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ApiDemo = () => {
    const navigate = useNavigate()
    const addData = async () => {
        var userData = {
            name: "parth",
            email: "parth@gmail.com",
            age: 26,
            isActive: true,
        }
        const res = await axios.post("https://node5.onrender.com/user/user", userData)
        if (res.status === 201) {
            console.log("data added successfully..");
            toast.success("User added!", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            setTimeout(() => {
                navigate("/weather");
            }, 3200)
        }
    }
    return (
        <div>
            <ToastContainer
                position="top-center"
                autoClose={3200}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <button onClick={addData}>Add data</button>
        </div>
    )
}
