import React from 'react'
import style from './pagination.module.css'
export default function Pagination() {
  return (
    <div className={style.container}>
      <button className={style.button}>Previous</button>
      <button className={style.button}>Next</button>
    </div>
  )
}
