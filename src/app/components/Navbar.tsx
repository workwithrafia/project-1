import Link from "next/link"
import React from "react"

export default function Navbar (){
  return (
    
      <nav className="bg-zinc-900 p-2">
        <div className="container mx-auto flex justify-between items-center">
            <div className="text-white font-bold"> Rafia </div>
        
        <ul className="flex space-x-8 ">
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/About">About</Link>
          </li>


          <li>
            <Link href="/Services">Services</Link>
          </li>

          <li>
            <Link href="/Skills">Skills</Link>
          </li>

          <li>
            <Link href="/Contact">Contact</Link>
          </li>
        </ul>
        
        </div>
      </nav>
    
      

  )
};
