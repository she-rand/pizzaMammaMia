import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './views/Home'
import Cart from './views/Cart'
import Pizza from './views/Pizza'

function App() {

  return (
    <>
    <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/pizza/:id" element={<Pizza/>}/>
        </Routes>
 
    </>
  )
}

export default App
