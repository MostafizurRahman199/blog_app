import React from 'react'
import style from './card.module.css';
import Pagination from '../pagination/Pagination';
import Card from '../card/Card';

export default function Cardlist() {
  return (
    <div className={style.container}>
    <h1 className={style.title}>Recent Posts</h1>
    <div className={style.posts}>
      <Card></Card>  
      <Card></Card>  
      <Card></Card>  
      <Card></Card>  
    </div>
    <Pagination></Pagination>
    
    </div>
  )
}
