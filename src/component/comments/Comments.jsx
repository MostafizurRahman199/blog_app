import React from 'react'
import style from './comments.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Comments() {
    const status = "authenticated"
  return (
    <div className={style.container}>
        <h1 className={style.title}>Comments</h1>
        {
            status === 'authenticated' ? (<div className={style.write}>
                <textarea name="" id="" placeholder='Write a comment...' className={style.input}></textarea>
                <button className={style.button}>Send</button>
            </div>):(<Link href='/login' className={style.link}>Login to  write a comment</Link>)
        }
        <div className={style.comments}>
            <div className={style.comment}>
                <div className={style.user}>
                    <Image src='/p1.jpeg' alt=''  className={style.image} width={50} height={50}></Image>
                    <div className={style.userInfo}>
                        <span className={style.userName}>mostafiz</span>
                        <span className={style.date}>07.01.2024</span>
                    </div>
                </div>
                <p className={style.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium aliquid necessitatibus laudantium exercitationem, eaque distinctio! Sequi autem deleniti ullam rerum.</p>
                
            </div>
            <div className={style.comment}>
                <div className={style.user}>
                    <Image src='/p1.jpeg' alt=''  className={style.image} width={50} height={50}></Image>
                    <div className={style.userInfo}>
                        <span className={style.userName}>mostafiz</span>
                        <span className={style.date}>07.01.2024</span>
                    </div>
                </div>
                <p className={style.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium aliquid necessitatibus laudantium exercitationem, eaque distinctio! Sequi autem deleniti ullam rerum.</p>
                
            </div>
            <div className={style.comment}>
                <div className={style.user}>
                    <Image src='/p1.jpeg' alt=''  className={style.image} width={50} height={50}></Image>
                    <div className={style.userInfo}>
                        <span className={style.userName}>mostafiz</span>
                        <span className={style.date}>07.01.2024</span>
                    </div>
                </div>
                <p className={style.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium aliquid necessitatibus laudantium exercitationem, eaque distinctio! Sequi autem deleniti ullam rerum.</p>
                
            </div>
            <div className={style.comment}>
                <div className={style.user}>
                    <Image src='/p1.jpeg' alt=''  className={style.image} width={50} height={50}></Image>
                    <div className={style.userInfo}>
                        <span className={style.userName}>mostafiz</span>
                        <span className={style.date}>07.01.2024</span>
                    </div>
                </div>
                <p className={style.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium aliquid necessitatibus laudantium exercitationem, eaque distinctio! Sequi autem deleniti ullam rerum.</p>
                
            </div>
            <div className={style.comment}>
                <div className={style.user}>
                    <Image src='/p1.jpeg' alt=''  className={style.image} width={50} height={50}></Image>
                    <div className={style.userInfo}>
                        <span className={style.userName}>mostafiz</span>
                        <span className={style.date}>07.01.2024</span>
                    </div>
                </div>
                <p className={style.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium aliquid necessitatibus laudantium exercitationem, eaque distinctio! Sequi autem deleniti ullam rerum.</p>
                
            </div>
        </div>
    </div>
  )
}
