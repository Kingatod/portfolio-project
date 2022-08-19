import React from 'react'
import blob from '../components/Images/blob.png'
import me from '../components/Images/Me.png'
import { Icon } from '@iconify/react';

const Home = () => {
  return (
    <div>
    <div className='info'>
      <h1>I'm <span>Taiwo</span> Atunrase</h1>
      <p>This is my official portfolio website to showcase all my works related to web<br/>development and UI design</p>
      <a href=''>Download CV</a>
    </div>

    <div className='img-box'>
      <img src={blob} className='back-img' alt='pattern'/>
      <img src={me} className='main-img' alt='Taiwo'/>
    </div>

    <div className='social-links'>
      <a href=''><Icon icon="fontisto:linkedin" /></a>
      <a href=''><Icon icon="akar-icons:github-fill" /></a>
      <a href=''><Icon icon="akar-icons:twitter-fill" /></a>
    </div>
    </div>
  )
}

export default Home 