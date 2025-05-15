import React from 'react'
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar'
import './AppLayout.css'


const AppLayout:React.FC = () => {
  return (
    <div className='min-h-screen flex flex-col'>
     <NavBar />
      <main className='flex-grow flex flex-col'>
        <Outlet />
      </main>

    </div>
  )
}

export default AppLayout

