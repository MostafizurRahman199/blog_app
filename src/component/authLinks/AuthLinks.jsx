
'use client'
import React, { useState } from "react";
import style from "./authLinks.module.css";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export default function AuthLinks() {
  const [open, setOpen] = useState(false);

  //temporary
  const status = "authenticated";
  // const status = useSession();

  return (
    <>
      {status === "unauthenticated" ? (
        <>
          <Link href="/login" className={style.link}>Login</Link>
        </>
      ) : (
        <>
          <Link href="/write" className={style.link}>Write</Link>
          <span className={style.link}  onClick={signOut}>Logout</span>
        </>
      )}

      <div className={style.burger} onClick={()=>{setOpen(!open)}}>
        <div className={style.line}></div>
        <div className={style.line}></div>
        <div className={style.line}></div>
      </div>

      {open && (
        <div className={style.responsiveMenu}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>

          {status === "unauthenticated" ? (
            <>
              <Link href="/login">Login</Link>
            </>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className={style.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
}
