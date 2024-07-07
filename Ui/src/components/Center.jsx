import React from 'react'
import logo from '../assets/Logo.jpeg'

const Center = () => {
  return (
<>
    <div className="bg-gray-100 flex flex-col min-h-screen">
        <div className="flex-grow flex flex-col justify-center items-center">
            <img src={logo} width="400" height="400"/>
            <h2 className="text-3xl font-bold mb-4">Search for Recipes</h2>
            <p className="text-xl mb-8">Discover and share amazing recipes with the community!</p>
            <form action="/search" method="GET" className="w-full max-w-md flex">
            {/* <!-- <form action="/" className="w-full max-w-md flex"> --> */}
                <input type="text" name="query" placeholder="Search recipes..." className="flex-grow rounded-l px-4 py-2 border border-gray-300"/>
                <button type="submit" className="bg-blue-500 text-white rounded-r px-4 py-2">Search</button>
            </form>
        </div>
    </div>

</>
  )
}

export default Center
