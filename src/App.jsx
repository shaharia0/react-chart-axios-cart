import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Component/NavBar/NavBar';
import PriceList from './Component/PriceList/PriceList';
import Dashboard from './Component/Dashboard/Dashboard';
import PhoneBar from './Component/PhoneBar/PhoneBar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <NavBar></NavBar>
     <h1 className='text-2xl font-bold text-center text-red-500'>Welcome to Fitness Gym Center</h1>
     <PriceList></PriceList>
     <Dashboard></Dashboard>
     <PhoneBar></PhoneBar>
    </div>
  )
}

export default App
