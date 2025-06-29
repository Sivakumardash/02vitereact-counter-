import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [a,b]=useState(0);
function addno()
{
  if (a<10)
      b(a+2)
    console.log("current value is:" ,a)
}
const subno=()=>
{
  if (a>0)
  {
  b(a-1)
      console.log("current value is:" ,a)

  }
}


  return(
    <>
    <h2>lets perform some operation </h2>
    <button onClick={addno}>add no:{a}</button> 
    <button onClick={subno}> subbno:{a}</button> 

    </>

  )

}
export default App;