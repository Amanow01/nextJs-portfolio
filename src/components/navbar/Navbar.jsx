import Link from "next/link";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <Link href="/" className="left-nav">
        <h1>Portfolio</h1>
      </Link>
      <div className="right-nav">
        <Link href="/">Home</Link>
        <Link href="/project">Project</Link>
        <Link href="/resume">Resume</Link>
      </div>
    </nav>
  );
};

export default Navbar;
