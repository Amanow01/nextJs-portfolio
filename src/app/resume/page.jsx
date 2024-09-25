import Image from "next/image";
import "./resume.css";
import newAvatar from "../../Public/new-avatar.jpeg";

const resume = () => {
  return (
    <>
      <main>
        <h1 className="resumeTitle">Resume</h1>
        <div className="wrapper flex   center col-gap2rem resume_mob">
          <div className="border-image">
            <Image src={newAvatar} alt="avatar" />
            <div className=" column row-gap1rem">
              <div>
                <em>Опыт работы:</em>
                <p>Без опыта.</p>
              </div>
              <div>
                <em>Почта:</em>
                <p>hanmamedow05@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="text ">
            <em>Имя и фамилия:</em>
            <p>Бердимырат Аманов Ханмамедович.</p>
            <em>Год рождения:</em>
            <p>23 лет (родился 26 мая 2001г).</p>
            <em>Образование:</em>
            <p>Bысшее.</p>
            <em>Гражданство:</em>
            <p> Туркменистан.</p>
            <em>Профессия</em>
            <p>Фронтенд-разработчик.</p>
            <em>Знание:</em>{" "}
            <p>
              HTML, Css, Javascript, TailwindCss, GitHub, React js, Next js.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default resume;
