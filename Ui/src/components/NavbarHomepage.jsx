import React from 'react'
import Logout from './Logout'
import { Link } from 'react-router-dom'

const NavbarHomepage = () => {
  return (
<>
<header className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <nav className="flex space-x-8">
        <Link to="/home" className="text-white text-lg">Home</Link>
        <Link to="/add-recipie" className="text-white text-lg">Add recipie</Link>
        {/* <Link to="/view-recipie" className="text-white text-lg">view recipis</Link> */}
        
      </nav>
      {/* <form action="/logout" method="get"> */}
      {/* <!-- <form action="/"> --> */}
        <Logout/> 
      {/* </form> */}
    </header>

</>
  )
}

export default NavbarHomepage
