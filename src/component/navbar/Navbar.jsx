import React from 'react'
import style from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from '../themeToggle/ThemeToggle'
import AuthLinks from '../authLinks/AuthLinks'
export default function Navbar() {
  return (
    <div className={style.container}>
        <div className={style.social}>
        <Image src='/facebook.png' alt='facebook' width={24} height={24}></Image>
        <Image src='/instagram.png' alt='instragram' width={24} height={24}></Image>
        <Image src='/tiktok.png' alt='tictok' width={24} height={24}></Image>
        <Image src='/youtube.png' alt='youtube' width={24} height={24}></Image>
        </div>
        <div className={style.logo}>
            _Mosu__Blog_
        </div>

        <div className={style.links}>
            <ThemeToggle></ThemeToggle>
            <Link className={style.link}href='/' >Homepage</Link>
            <Link className={style.link}href='/contact'>Contact</Link>
            <Link className={style.link}href='/about'>About</Link>
            <AuthLinks></AuthLinks>

        </div>

    </div>
  )
}
