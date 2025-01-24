import React from 'react'
import Logo from '../movie.png'

function Navbar() {
  return (
    <div className='flex space-x-8 pl-3 py-4 item-center' >
    <img className='w-[60px]' src={Logo}></img>

    <a className='text-3xl text-blue-500 font-bold'>Movies</a>
    <a className='text-3xl text-blue-500 font-bold' >Watchlist</a>
    <a className='text-3xl text-blue-500 font-bold'>Movie Recommendation</a>
    </div>

  )
}

export default Navbar