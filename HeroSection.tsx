'use client';
import React, { useEffect, useState } from 'react'
function HeroSection() {
    const [show, setshow] = useState(true);
    useEffect(( ) => {
       let fetchData = async ( ) => {
       let res =  await fetch("https://simple-books-api.glitch.me/books")

       let data = await res.json()

       console.log(data)
       }
       fetchData()
    })
    function toggleImage() {
       
    }
  return (
  
    <section>
        
        <div className=' px-5 items-center flex justify-between flex-col md:flex-row gap-7  bg-green-300 lg:bg-blue-500 sm:bg-purple-500le-500 min-h-[300px]'>
            <div className="">
                <h1 className='text-center font-extrabold text-blue-100 mt-5 text-5xl gap-4'>Welcome To Our Website</h1>
                <p className='text-center font-extrabold text-blue-300  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, quae ad ratione <br />
                cumque ipsam consectetur ut reprehenderit libero praesentium, velit magnam,<br /> repellat 
                 voluptas. Eius necessitatibus dolores consectetur similique saepe sapiente.</p>
                 <br />
                 <center>
                <button className='text-white cursor-alias bg-blue-900 rounded-lg p-5  font-extrabold'
                onClick={()=> setshow(!show)}
                >
                  Toggle
                </button>
                </center>
            </div>
            <div className=''>
                <img src="/book.jpeg" className={`{}`} height={600} width={600} alt="" />
            </div>
      </div>
        </section>
       
  )
}

export default HeroSection