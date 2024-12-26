import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [color, setColor] = useState("white")
  const changeColor=(clr)=>{
    setColor(clr)
    console.log(color);
    
  }

  return (
    <div style={{marginTop:'0',backgroundColor:color,height:'100vh',width:'100%'}} className='d-flex  justify-content-center align-items-center'>
       <div className='d-flex flex-column '>
        <h1 className='my-5'>Pick The color</h1>
        
     
   <div className='d-flex justify-content-center align-items-center'>
         <button onClick={()=>changeColor("red")}  className='btn btn-danger text-light mx-5'>Red</button>
         <button onClick={()=>changeColor("blue")} className='btn btn-primary text-light mx-5'>Blue</button>
         <button onClick={()=>changeColor("green")} className='btn btn-success text-light mx-5'>Green</button>
         <button onClick={()=>changeColor("yellow")}className='btn btn-warning text-light mx-5'>Yellow</button>
   </div>

    </div>
     
    </div>
  )
}

export default App
