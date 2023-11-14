import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footerr from "./components/Footerr"
import Home from "./components/Home"
import Navbarr from "./components/Navbarr"
import Contact from "./components/Contact"
import Service from "./components/Service"
import Pic from "./components/Pic"
import { Flowbite } from "flowbite-react"



function App() {
  return (


    <BrowserRouter>

   
        <div className="w-[100%] h-[auto]">

          < Navbarr />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pic" element={<Pic />} />


          </Routes>

          <Footerr />
        </div>
     
    </BrowserRouter>
  )
}

export default App
