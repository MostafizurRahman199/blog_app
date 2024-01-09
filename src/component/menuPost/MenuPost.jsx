import React from 'react'
import style from './menuPost.module.css'
import Link from 'next/link'
import Image from 'next/image'
export default function MenuPost({withImage}) {
  return (
    <div className={style.items}>
          <Link href='/' className={style.item}>
           {withImage && <div className={style.imageContainer}>
                <Image src='/p1.jpeg' alt='' fill className={style.image}></Image>
            </div>}
            <div className={style.textContainer}>
              <span className={`${style.category} ${style.travel}`}>Travel</span>
              <h3 className={style.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate</h3>
              <div className={style.detail}>
              <span className={style.username}>Mostafiz Shifat - </span>
              <span className={style.date}>05.01.2024</span>
              </div>
            </div>
          </Link>
          <Link href='/' className={style.item}>
           { withImage && <div className={style.imageContainer}>
                <Image src='/p1.jpeg' alt='' fill className={style.image}></Image>
            </div>}
            <div className={style.textContainer}>
              <span className={`${style.category} ${style.fashion}`}>Fashion</span>
              <h3 className={style.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate</h3>
              <div className={style.detail}>
              <span className={style.username}>Mostafiz Shifat - </span>
              <span className={style.date}>05.01.2024</span>
              </div>
            </div>
          </Link>
          <Link href='/' className={style.item}>
           {withImage && <div className={style.imageContainer}>
                <Image src='/p1.jpeg' alt='' fill className={style.image}></Image>
            </div>}
            <div className={style.textContainer}>
              <span className={`${style.category} ${style.food}`}>Food</span>
              <h3 className={style.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate</h3>
              <div className={style.detail}>
              <span className={style.username}>Mostafiz Shifat - </span>
              <span className={style.date}>05.01.2024</span>
              </div>
            </div>
          </Link>
          <Link href='/' className={style.item}>
           { withImage && <div className={style.imageContainer}>
                <Image src='/p1.jpeg' alt='' fill className={style.image}></Image>
            </div>}
            <div className={style.textContainer}>
              <span className={`${style.category} ${style.coding}`}>Coding</span>
              <h3 className={style.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate</h3>
              <div className={style.detail}>
              <span className={style.username}>Mostafiz Shifat - </span>
              <span className={style.date}>05.01.2024</span>
              </div>
            </div>
          </Link>
      </div>
  )
}
