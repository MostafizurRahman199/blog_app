import React from 'react'
import style from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
export default function Footer() {
  return (
    <div className={style.container}>
      <div className={style.info}>
       
        <div className={style.logo}>
          <Image src='/mainLogo.jpeg' className={style.image} alt='logo' width={50} height={50}></Image>
          <h1 className={style.logoText}>MosuBlog</h1>
        </div>

          <p className={style.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda porro modi aspernatur quae tenetur pariatur exercitationem repudiandae corrupti nemo maiores.</p>
          <div className={style.icons}>
            <Image src='/facebook.png' width={18} height={18}></Image>
            <Image src='/instagram.png' width={18} height={18}></Image>
            <Image src='/tiktok.png' width={18} height={18}></Image>
            <Image src='/youtube.png' width={18} height={18}></Image>
          </div>
        
      </div>

      <div className={style.links}>
        <div className={style.list}>
          <span className={style.listTitle}>Links</span>
          <Link href='/home'>Home</Link>
          <Link href='blog'>Blog</Link>
          <Link href='about'>About</Link>
          <Link href='contact'>Contact</Link>
        </div>
        <div className={style.list}>
          <span className={style.listTitle}>Tags</span>
          <Link href='/style'>Style</Link>
          <Link href='blog'>Fashion</Link>
          <Link href='about'>Travel</Link>
          <Link href='contact'>Coding</Link>
        </div>
        <div className={style.list}>
          <span className={style.listTitle}>Social</span>
          <Link href='/home'>Facebook</Link>
          <Link href='blog'>Instragram</Link>
          <Link href='about'>Tictok</Link>
          <Link href='contact'>Youtube</Link>
        </div>
      </div>
    </div>
  )
}
