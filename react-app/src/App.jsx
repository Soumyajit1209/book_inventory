
import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './home/Home'
import MyFooter from './components/MyFooter'
import "flowbite/dist/flowbite.min.css";





const App=()=> {
  
  return (
   
  
    <> 
     <Home/>
     <NavBar/>
    
     <div className='min-h-screen'>
     <Outlet/>

     </div>
    <MyFooter/>
   </>   
  )
}

export default App
