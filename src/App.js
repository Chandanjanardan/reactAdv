import React, { useEffect, useState } from 'react'

function App() {
  const [userInput,setUserInput]=useState("")
  const [num1]=useState(4)
  const [num2]=useState(5)
  const sum = ()=>num1+num2
  useEffect(()=>{
    console.log(sum())
  })
  return (
    <div>App
      <input onChange={(e)=>setUserInput(e.target.value)}/>
    </div>
  )
}

export default App