"use client";
import React from "react";
import style from "./login.module.css";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
  const { data, status } = useSession();
  const router = useRouter();

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
      <div className={style.wrapper}>
        <div
          className={style.socialButton}
      

          onClick={async() => await signIn('google')}
        >
          <Image
            src="/google.png"
            width={32}
            height={32}
            className={style.image}
          ></Image>
          <p className={style.signUp}>Sign in with Google</p>
        </div>
        <div className={style.socialButton}>
          <Image
            src="/github.png"
            width={32}
            height={32}
            className={style.image}
          ></Image>
          <p className={style.signUp}> Sign in with Github</p>
        </div>
        <div className={style.socialButton}>
          <Image
            src="/facebook.png"
            width={32}
            height={32}
            className={style.image}
          ></Image>
          <p className={style.signUp}> Sign in with Facebook</p>
        </div>
      </div>
    </div>
  );
}
