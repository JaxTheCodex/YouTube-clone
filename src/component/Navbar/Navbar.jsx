import React from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import Search from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/jack.jpg'
import dark_icon from '../../assets/dark_mode.png'
import mic from '../../assets/mic.png'
import { Link } from 'react-router-dom'


const Navbar = ({setSidebar}) => {
  return (
    <nav className='flex-div'>
    <div className='flex-dev nav-left'>
        <img className='menu-icon' src={menu_icon} onClick={() => setSidebar(prev=>prev===false?true:false)} alt='menu-icon'></img>
        <Link to='/'><img className='logo' src={logo} alt='logo'></img></Link>
    </div>
    <div className='flex-div nav-middle'>
    <div className='search-box flex-div'>
    <input type='text' placeholder='Search'></input>
    <img src={Search} alt='search-icon'></img>
    <img src={mic} alt='mic-png'></img>
    </div>
    </div>

    <div className='nav-right flex-div'>
        <img src={dark_icon} alt=''/> 
        <img src={upload_icon} alt=''></img>
        <img src={more_icon} alt=''></img>
        <img src={notification_icon} alt=''></img>
        <img src={profile_icon} className='user-icon' alt=''></img>
    </div>
    </nav>
  )
}

export default Navbar
