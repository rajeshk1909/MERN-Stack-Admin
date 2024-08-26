import React from 'react'
import navLogo from '../../assets/nav-logo.svg'
import navProfile from '../../assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='custom-box-shadow flex items-center justify-between py-4 md:px-16 px-8 mb-[1px] bg-white '>
      <img src={navLogo} alt='nav-logo' className='md:w-[200px] w-[150px] ' />
      <img src={navProfile} alt='nav-profile' className='md:w-[75px] w-16 ' />
    </div>
  )
}

export default Navbar