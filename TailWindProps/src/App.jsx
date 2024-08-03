import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    name:"gaurav",
    age:21
  }
  let newArr=[1,2,3,4]

  return (
    <>
    <div className='bg-red-950'>
      

      <h1 className='bg-green-400 text-red-400 rounded-xl mb-4 p-4'>TailWind content</h1>
      <Card channel="ChaiAurcod" someobj={newArr}/>
      <Card userName={"Saurav"} btnTxt={"Visit me"}/>
      <Card userName={"Gaurav"} btnTxt={"Click me"}/>
      <Card userName={"Saurav"} btnTxt={"Visit me"}/>
      <Card userName={"Gaurav"} btnTxt={"Click me"}/>
      <Card userName={"Saurav"} btnTxt={"Visit me"}/>
      <Card userName={"Gaurav"} />
      <Card userName={"Saurav"} btnTxt={"Visit me"}/>
     
    </div>

    </>
  )
}

export default App
