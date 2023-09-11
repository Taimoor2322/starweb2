import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__logo">
          <Image src={"/assets/logo.svg"} alt={"logo"} width={194} height={132} />
        </div>
        <div className="footer__links">
            <div className="footer__links__col">
            <h4>About</h4>
            <ul>
                <li>
                <Link href="#">About Us</Link>
                </li>
                <li>
                <Link href="#">contact us</Link>
                </li>
                <li>
                <Link href="#">term of use</Link>
                </li>
                <li>
                <Link href="#">refund policy</Link>
                </li>
                <li>
                <Link href="#">privacy policy</Link>
                </li>
            </ul>
            </div>
            <div className="footer__links__col">
            <h4>useful links</h4>
            <ul>
                <li>
                <Link href="#">instagram</Link>
                </li>
                <li>
                <Link href="#">facebook</Link>
                </li>
                <li>
                <Link href="#">linkdin</Link>
                </li>
                <li>
                <Link href="#">telegram</Link>
                </li>
                <li>
                <Link href="#">youtube</Link>
                </li>
            </ul>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
