"use client"

import axios from "axios";
import { useState } from "react"

export default function Signup(){
    const [user,setUser]=useState("");
    const [password,setPassword]=useState("");

    return<div className="h-screen w-full flex justify-center items-center">
            <div className="border bg-gray-700 h-100 w-100 flex justify-center items-center">
                <div >
                    <div className="text-xl flex justify-center items-center">SignUp</div>

                    <div className="py-4 ">
                         <input
                            className="border-amber-300 border p-2 h-10 rounded-xl w-80" 
                            type="text" 
                            placeholder="username"
                            onChange={(e)=>setUser(e.target.value)}>

                            </input>
                    </div>

                    <div className="py-4 ">
                        <input 
                            className="border-amber-300 border p-2 h-10 rounded-xl w-80"  
                            type="password" 
                            placeholder="Password"
                            onChange={(e)=>setPassword(e.target.value)}>
                            </input>
                    </div>
                    <div className="py-4 ">
                        <button 
                            className="border-amber-300 border p-1 h-10 rounded-xl w-full cursor-pointer"
                            onClick={()=>{
                                axios.post("https://localhost:3000/api/v1/signup",{
                                    user,
                                    password
                                })
                            }}>
                                Sign in
                        </button>
                    </div>
                </div>
            </div>
        </div>  
}