import React from "react";
import style from "./singlePage.module.css";
import Menu from "@/component/menu/Menu";
import Image from "next/image";
import Comments from "@/component/comments/Comments";
export default function SinglePage() {
  return (
    <div className={style.container}>
      <div className={style.infoContainer}>
        <div className={style.textContainer}>
          <h1 className={style.title}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Praesentium, sint?
          </h1>
          <div className={style.user}>
            <div className={style.userImageContainer}>
              <Image
                src="/mainLogo.jpeg"
                alt=""
                fill
                className={style.avatar}
              ></Image>
            </div>
            <div className={style.userTextContainer}>
              <span className={style.userName}>Mostafiz Shifat</span>
              <span className={style.date}>07.01.2024</span>
            </div>
          </div>
        </div>
        <div className={style.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={style.image}></Image>
        </div>
      </div>
      <div className={style.content}>
        <div className={style.post}>
          <div className={style.postDescription}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis aspernatur corrupti beatae dolores ut repellat vero
              at perferendis accusamus, earum praesentium nulla, sapiente totam
              mollitia et necessitatibus voluptates dolorum nihil?
            </p>
            <h2>Lorem ipsum, dolor sit amet consectetur</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis aspernatur corrupti beatae dolores ut repellat vero
              at perferendis accusamus, earum praesentium nulla, sapiente totam
              mollitia et necessitatibus voluptates dolorum nihil?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis aspernatur corrupti beatae dolores ut repellat vero
              at perferendis accusamus, earum praesentium nulla, sapiente totam
              mollitia et necessitatibus voluptates dolorum nihil?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis aspernatur corrupti beatae dolores ut repellat vero
              at perferendis accusamus, earum praesentium nulla, sapiente totam
              mollitia et necessitatibus voluptates dolorum nihil?
            </p>
          </div>
          <div className={style.comment}>
            <Comments></Comments>

          </div>
        </div>
        <Menu></Menu>
      </div>
    </div>
  );
}
