import React, { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  function getResult(){
    let str= "hello"
  }

  useEffect(() => {
    setCount((count) => count + 1)
  }, [])
  // we have specified a function in the dependency array

  return (
    <div>
      <p>value of count: {count}</p>
    </div>
  )
}

export default App