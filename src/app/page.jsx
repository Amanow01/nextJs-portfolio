import "@/app/page.css";
import img from "../Public/new-avatar.jpeg";
import UniBtn from "@/components/uniBtn/UniBtn";
import Image from "next/image";
import Link from "next/link";
export default async function Home() {
  return (
    <>
      <main>
        <div
          style={{
            padding: "2rem 0",
          }}
          className="flex item-center col-gap_2"
        >
          <div className="home-page">
            <h1 className="title">
              My name is Berdimyrat I am a front-end developer
            </h1>
            <UniBtn url="/project" text="Projects" />
          </div>
          <div className="">
            <Link href="/resume">
              <Image
                src={img}
                alt="Image"
                width={350}
                className="img"
                title="resume"
              />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
