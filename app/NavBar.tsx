import Link from 'next/link'
import React from 'react'
import { AiFillPlayCircle } from "react-icons/ai";

const NavBar = () => {
  return (
    <nav className='flex space-x-6 my-5 mx-4 border-b-2 h-14 items-center'>
        <Link className='flex text-xl mb-2' href="/">YT-TimeStampGen<AiFillPlayCircle/></Link>
        <ul className='flex space-x-6'>
            <li><Link className='text-zinc-500 hover:text-zinc-300 transition-colors' href="/dashboard">Dashboard</Link></li>
            <li><Link className='text-zinc-500 hover:text-zinc-300 transition-colors' href="/Login">Login</Link></li>
            
        </ul>
    </nav>
  )
}

export default NavBar