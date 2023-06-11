 import { useState } from "react"

const Home = () => {
  const[inputValue, setInputValue]= useState(" ");

  console.log(inputValue);
  const onInputChange = (ev) =>{
setInputValue(ev.target.value);
console.log(setInputValue)
  };
  return (
    <div>

      <div>{inputValue}</div>
      <button onClick={()=>{
        setInputValue("Saksham");
      }}> Change Value
      </button>
      

      <input type="text" value={inputValue} onChange={onInputChange} placeholder="Search for something"/>
    </div>
  )
}

export default Home
