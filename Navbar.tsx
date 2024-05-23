
import React from 'react'

function navbar() {
  return (
    <div className="flex justify-between p-4 text-2xl font-extrabold text-blue-700">
   Book Search
     <ul className='flex gap-4'>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
     </ul>
    </div>
  )
}

export default navbar