import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Gallery from './component/Gallery'
import ICard from './component/ICard'
import Book from './component/Book'
import StateHandling from './component/StateHandling'
import ImageManipulation from './component/ImageManipulation'

function App() {
//   const student=
//   [{
// name:"Ansh",
// age:19,
// barnch:"CSE",
// college:"ABES Engineering College",
// location:"Ghazibad"
//   },
//   {
// name:"Ram",
// age:20,
// barnch:"CSE",
// college:"ABES Engineering College",
// location:"Ghazibad"
//   },
//   {
// name:"Vansh",
// age:20,
// barnch:"IT",
// college:"ABES Engineering College",
// location:"Ghazibad"
//   }
// ]
 

  return (
    <div>
    <h2>ABES Engineering College</h2>   
    {/* <Gallery />   */}
    {/* <ICard name="Rahul Singh" age="20" branch="CSE" college="ABES Engineering College" location="Ghaziabad" /> */}
    {/* <ICard data={student} /> */}

    {/* {student.map((ele,indes)=>(
      <ICard data={ele} />
    ))}
     */}
     {/* <Book /> */}

     {/* <StateHandling /> */}

     <ImageManipulation />
    </div>
  )
}

export default App