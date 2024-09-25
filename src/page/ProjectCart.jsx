import Image from "next/image";
import "./Project-cart.css";
import React from "react";
import image from "../Public/no-image.jpg";
import UniBtn from "@/components/uniBtn/UniBtn";

const ProjectCart = ({ title, img, url, gitHub }) => {
  return (
    <>
      <section>
        <Image src={image} alt="no_image" width={200} />
        <h1 className="text">{title}</h1>
        <UniBtn url={url} text="GitHub" />
      </section>
    </>
  );
};

export default ProjectCart;
