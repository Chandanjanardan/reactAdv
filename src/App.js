import React, { useRef, useState } from 'react';

function App() {
  const [name, setName] = useState("");
  const nameRef = useRef();

  function handleName() {
    setName(nameRef.current.value);
    nameRef.current.focus()
    // let newP = document.createElement("p")
    // newP.innerText=name
    console.log(newP)
  }

  return (
    <div>
      <h1>This is {name? name:"unknown"}</h1>
      <input ref={nameRef} type='text' />
      <button onClick={handleName}>Change</button>
      
    </div>
  );
}

export default App;
