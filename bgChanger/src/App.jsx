import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("wheat")

  return (
    <>
     <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>


      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className=" fixed flex flex-wrap justify-center gap-2 shadow-lg bg-white px-3 py-2 rounded-2xl" >

          <button
          onClick={()=>{
            setColor("red")
          }}
          className='outline-none px-4 py-1 rounded-full text-white' style={{background:"red"}}>
            Red
          </button>

          <button 
           onClick={()=>{
            setColor("green")
          }}
          className='outline-none px-4 py-1 rounded-full text-white' style={{background:"Green"}}>
            Green
          </button>


          <button
           onClick={()=>{
            setColor("navy")
          }}
          className='outline-none px-4 py-1 rounded-full text-white' style={{background:"navy"}}>
            Navy
          </button>
          <button 
          
          onClick={()=>{


            setColor("yellow")
          }}
          
          
          className='outline-none px-4 py-1 rounded-full text-black' style={{background:" Yellow"}}>
            Yellow
          </button>


        </div>

    
      </div>
     </div>
    </>
  )
}

export default App
