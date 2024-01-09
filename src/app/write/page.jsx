'use client'
import React, { useState } from 'react'
import style from './write.module.css'
import Image from 'next/image'
import 'react-quill/dist/quill.bubble.css';
import ReactQuill from 'react-quill';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function Write() {


  const { data, status } = useSession();
  const router = useRouter();
  const [open , setOpen] = useState(false);
  const [value, setValue] = useState("");
  
  if(status == "loading")
  {
    return <div className={style.loading}>Loading...</div>
  }

  if(status === "authenticated")
  {
    router.push('/');
  }
  return (
    <div className={style.container}>
        <input type='text' placeholder='Title' className={style.input}></input>
        <div className={style.editor}>

            <button className={style.button}  onClick={()=>{setOpen(!open)}}>
                <Image src='/plus.png' alt='' width={36} height={36} className={style.image}></Image>
            </button>

            {
              open && (
                <div className={style.add}>
                    <button className={style.addbutton}>
                        <Image src='/gallery.png' alt=''  width={40}  height={40} className={style.image}></Image>
                    </button>
                    <button className={style.addbutton}>
                        <Image src='/file.png' alt='' width={30}  height={30} className={style.image}></Image>
                    </button>
                    <button className={style.addbutton}>
                        <Image src='/video.jpg' alt=''  width={35}  height={35} className={style.image}></Image>
                    </button>
                </div>
              )
            }

            <ReactQuill  className={style.textArea} theme='bubble'  value={value} onChange={setValue} placeholder='............Tell your story............'></ReactQuill>
        </div>
        <button className={style.publish}>Publish</button>
    </div>
  )
}
