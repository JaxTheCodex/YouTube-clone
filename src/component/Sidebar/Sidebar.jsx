import React from 'react'
import './Sidebar.css'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import enteirnment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import sports from '../../assets/sports.png'
import subscribed1 from '../../assets/subscribed1.jpeg'
import subscribed2 from '../../assets/subscribed2.jpeg'
import subscribed3 from '../../assets/subscribed3.jpeg'
import subscribed4 from '../../assets/subscribed4.jpeg'
import subscribed5 from '../../assets/subscribed5.jpeg'

const Sidebar = ({sidebar,category,setCategory}) => {
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
      <div className='sortcut-links'>
        <div className={`side-link ${category===0?"active":""}`}  onClick={()=>setCategory(0)}>
            <img src={home} alt='home-img'/><p>Home</p>
        </div>
        <div className={`side-link ${category===20?"active":""}`} onClick={()=>setCategory(20)}>
            <img src={game_icon} alt='home-img'/><p>Gaming</p>
        </div>
        <div className={`side-link ${category===2?"active":""}`} onClick={()=>setCategory(2)}>
            <img src={automobiles} alt='home-img'/><p>Automobiles</p>
        </div>
        <div className={`side-link ${category===17?"active":""}`} onClick={()=>setCategory(17)}>
            <img src={sports} alt='home-img'/><p>Sports</p>
        </div>
        <div className={`side-link ${category===24?"active":""}`} onClick={()=>setCategory(24)}>
            <img src={enteirnment} alt='home-img'/><p>Entertainment</p>
        </div>
        <div className={`side-link ${category===28?"active":""}`} onClick={()=>setCategory(28)}>
            <img src={tech} alt='home-img'/><p>Tech</p>
        </div>
        <div className={`side-link ${category===10?"active":""}`} onClick={()=>setCategory(10)}>
            <img src={music} alt='home-img'/><p>Music</p>
        </div>
        <div className={`side-link ${category===22?"active":""}`} onClick={()=>setCategory(22)}>
            <img src={blogs} alt='home-img'/><p>Blogs</p>
        </div>
        <div className={`side-link ${category===25?"active":""}`} onClick={()=>setCategory(25)}>
            <img src={news} alt='home-img'/><p>News</p>
        </div>
        <hr/>
      </div>
      <div className='subscribed-list'>
        <h3>Subscribed</h3>
        <div className='side-link'>
            <img src={subscribed1} alt='' /><p>Honey Singh</p>
        </div>
        <div className='side-link'>
            <img src={subscribed2} alt='' /><p>Andrew Tate</p>
        </div>
        <div className='side-link'>
            <img src={subscribed3} alt='' /><p>Narendra Modi</p>
        </div>
        <div className='side-link'>
            <img src={subscribed4} alt='' /><p>Mr. Beast</p>
        </div>
        <div className='side-link'>
            <img src={subscribed5} alt='' /><p>CodeWithHarry</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
