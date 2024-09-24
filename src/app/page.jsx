import "@/app/page.css";
import UniBtn from "@/components/uniBtn/UniBtn";
export default async function Home() {
  return (
    <>
      <main>
        <div className="home-page">
          <h1 className="title">
            My name is Berdimyrat I am a front-end developer
          </h1>
          <UniBtn url="/project" text="Projects" />
        </div>
      </main>
    </>
  );
}
