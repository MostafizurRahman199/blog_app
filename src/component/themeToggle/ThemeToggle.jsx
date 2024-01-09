'use client'
import React, { useContext } from 'react'
import style from './themeToggle.module.css'
import Image from 'next/image'
import { ThemeContext } from '@/context/ThemeContext';


export default function ThemeToggle() {

const {theme, toggle} = useContext(ThemeContext);
console.log(theme);

  return (
    <div className={style.container} 
    style={theme==="dark"?{backgroundColor:"white"}:{backgroundColor:"#1f273a"}}
    
    onClick={toggle}
    
    
    >
        <Image src='/moon.png' alt='moon' width={14} height={14}></Image>
        <div className={style.ball}
        style={theme==="dark"?{backgroundColor:"#1f273a"}:{right:1,backgroundColor:"white"}}></div>
        <Image src='/sun.png' alt='sun' width={14} height={14}></Image>
    </div>
  )
}
