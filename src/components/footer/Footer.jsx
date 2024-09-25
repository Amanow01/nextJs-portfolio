import Image from "next/image";
import "./Footer.css";
import GitHub from "./footer-image/github_git_icon_145985.svg";
import Telegram from "./footer-image/telegram_logo_icon_147228 (2).svg";
import Whatsapp from "./footer-image/Whatsapp_icon-icons.com_66931.svg";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer_background">
          <div className="wrapper flex item-center speak-between">
            <div className=" left_footer ">
              <h1>Hard work makes a person and his ego beautiful.</h1>
            </div>
            <div className="right_footer">
              <Link href="/">
                <Image
                  src={GitHub}
                  alt="GitHub"
                  width={50}
                  className="footer_icon"
                />
              </Link>
              <Link href="/">
                <Image
                  src={Telegram}
                  alt="Telegram"
                  width={40}
                  className="footer_icon"
                />
              </Link>
              <Link href="/">
                <Image
                  src={Whatsapp}
                  alt="Whatsapp"
                  width={50}
                  className="footer_icon"
                />
              </Link>
            </div>
          </div>
        </div>
      </footer>
      ;
    </>
  );
};

export default Footer;
