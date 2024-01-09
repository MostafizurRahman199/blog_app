import React from 'react'
import style from './blogPage.module.css'
import Menu from '@/component/menu/Menu'
import Cardlist from '@/component/cardlist/Cardlist'
export default function BlogPage() {
  return (
    <div className={style.container}>
        <h1 className={style.title}>Style Blog</h1>
        <div className={style.content}>
            <Cardlist></Cardlist>
            <Menu></Menu>
        </div>
    </div>
  )
}
