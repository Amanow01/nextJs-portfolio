"use client";

import "./Hamburg.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import Link from "next/link";
const Hamburg = () => {
  const [link, setLink] = useState(false);
  return (
    <>
      <div className={link ? ["right-nav", "active"].join(" ") : ["right-nav"]}>
        <Link href="/">Home</Link>
        <Link href="/project">Project</Link>
        <Link href="/resume">Resume</Link>
      </div>
      <div onClick={() => setLink(!link)} className="menu">
        {link ? (
          <AiOutlineClose size={"1.5rem"} />
        ) : (
          <AiOutlineMenu size={"1.5rem"} />
        )}
      </div>
    </>
  );
};

export default Hamburg;
