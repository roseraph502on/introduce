import React from 'react'
import './NavBar.css'

import { useNavigate } from 'react-router-dom';


const AppLayout:React.FC = () => {
    const navigate = useNavigate();
    const pages = ['PROFILE', 'SKILL','HISTORY','PROJECT'];


  const clkmenu = (page: string, event: React.MouseEvent) =>{
    event.preventDefault();
    navigate(`/${page}`);
  }
  return (
    <div id='nav' className='w-screen flex'>
      <a onClick={(event) => clkmenu('', event)}>MAIN</a>
       {pages.map((page) => (
      <a key={page}  onClick={(event) => clkmenu(page, event)} >{page}</a>
       ))}
    </div>
  )
}

export default AppLayout

