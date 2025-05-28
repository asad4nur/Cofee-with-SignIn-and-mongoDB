
import { Outlet } from 'react-router'
import './App.css'
import NavBar from './components/NavBar'
import Home from './Pages/Home'


function App() {


  return (
    <>
      <NavBar />
      <Home></Home>

      <Outlet />
    </>
  )
}

export default App
