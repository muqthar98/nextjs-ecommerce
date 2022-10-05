import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function login() {
    const[username,setUserName] = useState();
    const[password,setPassword] = useState();
    const router = useRouter();

    const handleLogin = async (e) => {
        const loginUrl = "http://localhost:1337/api/auth/local"
        e.preventDefault();
            const loginInfo = {
                identifier: username,
                password : password
            }
    
            const register = await fetch(loginUrl,{
                method : "POST",
                headers : {
                    'Accept' : 'application/json',
                    'Content-Type':'application/json'
                },
                body : JSON.stringify(loginInfo)
            })
    
            const loginResponse = await register.json();

            console.log(loginResponse.length)

            if(loginResponse != undefined){
                console.log(loginResponse);
                router.push('/home');
                localStorage.setItem('id',loginResponse.user.id);
                localStorage.setItem('email',loginResponse.user.email);
                localStorage.setItem('username',loginResponse.user.username);
            } else {
                router.push('/login')
                console.log("Error")
            }
           
    }



  return (
    <div className="flex justify-center items-center h-screen bg-slate-200">
        <div id="form" className="block bg-slate-50 p-6 rounded-xl shodow-md shadow-slate-300 w-90">
            <form method='POST' onSubmit={handleLogin}>
                <h2 className="text-blue-700 text-3xl font-semibold my-4">Login Form</h2>
                {/* <!-- full name --> */}
                {/* <div id="fullName" className="flex flex-row"> */}
                {/* <!-- username --> */}
                <label htmlFor="username" className="text-sm">Username</label><br/>
                <input type="username" name="" id="username" value={username} onChange={event=> setUserName(event.target.value)}
                    className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"/>
                {/* <!-- password --> */}
                <label htmlFor="password" className="text-sm">Password</label><br/>
                <input type="password" name="" id="password" value={password} onChange={event=> setPassword(event.target.value)}
                    className="h-8 w-full mb-3 rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"/>
                {/* <!-- Sign up / submit button --> */}
                <button type="submit" name="" id="login" 
                    className="bg-blue-700 w-full h-10 cursor-pointer text-white rounded-md hover:bg-blue-600 hover:outline outline-2 outline-blue-600 outline-offset-2 text-sm">Login</button><br/>
                {/* <p className="text-xs my-2">Already have a account? <a href="#" className="text-blue-600">Login</a></p> */}
            </form>
        </div>
        </div>
  )
}
