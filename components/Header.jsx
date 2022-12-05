import React from 'react'
import Link from "next/link"

const Header = () => {
  return (
    <div className='text-gray-700 border-b border-gray-300'>
        <div className='container flex mx-auto p-5 flex-col md-'>
            <span className='font-medium ml-3 text-xl'>Nishiki Blog</span>
            <div className='flex md:ml-auto items-center justify-center text-base'>
                <Link className="mr-5 hover:text-blue-400 duration-300" href="/">HOME</Link>
                <Link className="mr-5 hover:text-blue-400 duration-300" href="/about">about</Link>
                <Link className="mr-5 hover:text-blue-400 duration-300" href="/">skill</Link>
            </div>
        </div>
    </div> 
  )
}

export default Header