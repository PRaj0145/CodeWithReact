import React from 'react'

function Card({youtube, btntext= "Click me "}) {
console.log(youtube)
  return (
    <div className="w-60 h-60 rounded-xl">
        <img
          src="https://media1.giphy.com/media/z8n8dWgQ0mgEIyzlmV/giphy.gif?cid=790b7611a5ba988db1bc7457636dd163c28af6f6dbc84a77&rid=giphy.gif&ct=g"
          alt="Giphy"
          className="rounded-t-xl"
        />
        <div className="glass py-4 px-5 relative -top-[3.4rem]  rounded-b-xl z-10">
          <h1 className="font-bold  font-mono text-white text-xl">{youtube}</h1>
          <button className='text-black bg-white rounded-xl'>{btntext}</button>
        </div>
      </div>

  )
}

export default Card
