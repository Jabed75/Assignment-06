
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Banner1 from './components/Banner1'
import Card from './components/Card'
import Models from './components/Models'
import Navbar from './components/Navbar'
import Product from './components/Product'
import { ToastContainer } from 'react-toastify'
import Section from './components/Section'
import Sectoin1 from './components/Sectoin1'
import Section2 from './components/Section2'

const getModels = async()=>{
 const res = await fetch("/models.json")
 return res.json()
}

const modelPromise= getModels()

function App() {
  const [activeTab, setActiveTab] = useState("Product")
  const[cards, setCards]=useState([])
  console.log(cards);
  console.log("cards.length");
  return (
    <>

    <Navbar/>
     <Banner/>
     <Banner1/>
     <Product/>
    
     <div className="tabs tabs-box justify-center bg-transparent">
       <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label="Product" onClick={()=> setActiveTab("Product")} defaultChecked/>
       <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label={`card(${cards.length})`} onClick={()=> setActiveTab("card")} />
      
     </div>
     {activeTab==="Product" &&<Models modelPromise={modelPromise} cards={cards} setCards={setCards}/>}
      {activeTab ==="card" &&<Card cards={cards} setCards={setCards}/>}
        <ToastContainer/>
         <Section/>
         <Sectoin1/>
         <Section2/>
    </>
  )
}

export default App
