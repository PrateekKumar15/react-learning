import { useState } from 'react'


function App() {
  let [counter,setcounter] = useState(15)
  // const counter = 15

  const addvalue = () => {
    if (counter === 20) {
      setcounter(counter)
    }
    else{ 
       //  return counter ++
  counter = counter + 1 
  setcounter(counter)
     }
  }
  const subtractvalue = () => {
    if (counter === 0) {
      setcounter(counter)}
      else{
        counter = counter - 1
        setcounter(counter)
        }
  }
  return (
    <>
     <h1>chai aur react</h1>
     <h2>Counter Value: {counter} </h2>
     <button
     onClick={addvalue}>Add Value</button><br />
     <button
     onClick={subtractvalue}>Subtract Value</button>
    </>
  )
}

export default App
