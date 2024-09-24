import Link from "next/link";
import "./UniBtn.css";

const UniBtn = ({ text, url }) => {
  return (
    <>
      <Link href={url}>
        <button className="btn">{text}</button>
      </Link>
    </>
  );
};

export default UniBtn;
