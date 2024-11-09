
import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './home/Home'
import MyFooter from './components/MyFooter'
import "flowbite/dist/flowbite.min.css";
import AuthProvider from './contects/AuthProvider'





const App=()=> {
  
  return (
   
  
    <> 
     <Home/>
     <NavBar/>
    
     <div className='min-h-screen'>
     <Outlet/>

     </div>
    <MyFooter/>
    <AuthProvider/>
   </>   
  )
}

export default App
