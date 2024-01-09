import React from 'react'
import style from './featured.module.css'
import Image from 'next/image'
export default function Featured() {
  return (
    <div className={style.container}>
      <h1 className={style.title}><b>Hey, Blogers!</b> Discover my stories and creative ideas.</h1>
      <div className={style.post}>
        <div className={style.imgContainer}>
          <Image src='/p1.jpeg' alt='' fill className={style.image}></Image>
        </div>

        <div className={style.textContainer}>
            <h1 className={style.posTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, delectus?</h1>
            <p className={style.postDescription}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quaerat laboriosam recusandae accusantium magnam sint modi totam nisi aut ratione?</p>
            <button className={style.button}>Read More</button>
        </div>
      </div>
    </div>

  )
}
