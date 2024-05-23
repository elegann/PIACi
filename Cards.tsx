import React from 'react'


let books = [
  {
    id: "name",
    name: "Abu Bakar",
    author: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, perspiciatis!   "
  },
  {
    name: "Hafsa",
    author: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, perspiciatis!"
  },
  {
    name: "Bushra",
    author: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, perspiciatis!"
  },
]

interface IBook {
  id: number;
  name: string;
  type: string;
  available: boolean;
}

const Cards = async () => {

  let res = await fetch("https://simple-books-api.glitch.me/books");

  let books: IBook[] = await res.json();

  console.log(books[0].name);

  return (
    <div>
      {
        books.map((book,i) => {

          return (
            <main>
       
       <center>
           <div 
           >
            <h2  className='font-extrabold  mt-4 text-black bg-blue-500 rounded-lg h-72 w-40 text-center jut' key={book.id}>
              <br />
              <br />
              {book.name}
              </h2>
            </div>
            </center>
            </main>
          )
        }
        )
      }
    </div>
  )
}

export default Cards