import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {

  //const {nav, setNav}

  const links =[
    {
      id: 1,
      link: "Home"
    },

     {
      id: 2,
      link: "About"
    },

     {
      id: 3,
      link: "Portfolio"
    },

     {
      id: 4,
      link: "Experience"
    },

     {
      id: 1,
      link: "Contact"
    }
  ]
  return (
    <div className='flex justify-between items-center w-full h-20 text-white bg-black px-4 fixed'>
      <div>
        <h1 className='text-4xl font-signature ml-4'>ALEX</h1>
      </div>

      <ul className='hidden md:flex'>
        {links.map(({ id, link }) => (
          <li 
              key={id}
              className="px-4 cursor-pointer font-medium text-gray-100 hover:scale-105 duration-200"
              >
            {link}
            
          </li>
        ))}
      </ul>
      <div>

      </div>
    </div>
  )
}

export default Navbar