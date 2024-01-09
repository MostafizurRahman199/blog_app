import React from 'react'
import style from './menu.module.css'
import Link from 'next/link'
import MenuPost from '../menuPost/MenuPost'
import MenuCategory from '../menuCategory/MenuCategory'

export default function Menu() {
  return (
    <div className={style.container}>
      <h2 className={style.subtitle}>{"What's hot?"}</h2>
      <h1 className={style.title}>Most Popular</h1>

      <MenuPost withImage={false}></MenuPost>

      <h2 className={style.subtitle}>{"Discover by topic"}</h2>
      <h1 className={style.title}>Categories</h1>
      <MenuCategory></MenuCategory>

      <h2 className={style.subtitle}>{"Chosen by the editor"}</h2>
      <h1 className={style.title}>Editor Pick</h1>
      
      <MenuPost withImage={true}></MenuPost>
    </div>
  )
}
