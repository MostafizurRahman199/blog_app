import React from 'react'
import style from './category.module.css'
import Link from 'next/link'
import Image from 'next/image'
export default function CategoryList() {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Popular Categories</h1>

      <div className={style.categories}>

      <Link href="/blog?cat=style" className={`${style.category} ${style.style}`}>
        <Image src='/style.png' alt="" width={45}height={45} className={style.image}></Image>
        style
      </Link>
      <Link href="/blog?cat=style" className={`${style.category} ${style.food}`}>
        <Image src='/food.png' alt="" width={45}height={45} className={style.image}></Image>
        Food
      </Link>
      <Link href="/blog?cat=style" className={`${style.category} ${style.travel}`}>
        <Image src='/travel.png' alt="" width={45}height={45} className={style.image}></Image>
          Travel
      </Link>
      <Link href="/blog?cat=style" className={`${style.category} ${style.fashion}`}>
        <Image src='/fashion.png' alt="" width={45}height={45} className={style.image}></Image>
        Fashion
      </Link>
      <Link href="/blog?cat=style" className={`${style.category} ${style.culture}`}>
        <Image src='/culture.png' alt="" width={45}height={45} className={style.image}></Image>
        Culture
      </Link>
      <Link href="/blog?cat=style" className={`${style.category} ${style.coding}`}>
        <Image src='/coding.png' alt="" width={45}height={45} className={style.image}></Image>
        Coding
      </Link>
      </div>
    </div>
  )
}
