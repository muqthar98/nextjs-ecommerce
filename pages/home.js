import { useRouter } from 'next/router';
import React, { useState,useEffect } from 'react'
import Header from '../components/header';
import Banner from '../components/banner';
import Footer from '../components/footer';

function Home() {
    const[username,setUserName] = useState('');
    const[email,setEmail] = useState('');
    const router = useRouter()
    const submit = (e) => {
        e.preventDefault();
        localStorage.clear();
        router.push('/login');
    }

    useEffect(() => {
        // Perform localStorage action
        setUserName(localStorage.getItem('username',localStorage.username))
        setEmail(localStorage.getItem('email',localStorage.email))
      },[]);

  return (
    <div>
        <Header/>
        <Banner/>
        <Footer/>
    </div>
  )
}

export default Home