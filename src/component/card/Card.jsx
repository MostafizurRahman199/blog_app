import React from 'react'
import style from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'
export default function Card() {
  return (
    <div className={style.container}>
        <div className={style.imageContainer}>
            <Image src='/p1.jpeg' alt='' fill className={style.image}></Image>
        </div>
        <div className={style.textContainer}>
            <div className={style.detail}>
                <span className={style.date}>05.01.2024 - </span>
                <span className={style.category}>CULTURE</span>
            </div>
            <Link href='/'>
                <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
            </Link>
            <p className={style.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae laborum, sit alias quibusdam maiores dicta ea architecto est nulla! Eius quia accusantium blanditiis nam aut suscipit autem ab incidunt optio.</p>
            <Link href='/' className={style.link}>Read More</Link>
        </div>
    </div>
  )
}
