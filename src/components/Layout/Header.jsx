import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [istoggle, setIstoggle] = useState(false);

  useEffect(() => {
    document.getElementsByTagName("html")[0].style.overflow = !istoggle ? "auto" : "hidden"
  }, [istoggle]);

  const NavLinks = [
    {
      title: "Solutions",
      expand: true,
      subLinks: [
        {
          title: "Website Development",
          link: "/website-development",
        },
        {
          title: "Web Application",
          link: "/website-development",
        },
        {
          title: "Android Application",
          link: "/website-development",
        },
      ],
    },
    {
      title: "Features",
      link: "/features",
    },
    {
      title: "Pricing",
      link: "/pricing",
    },
    {
      title: "Our Team",
      link: "/our-team",
    },
    {
      title: "Customer",
      link: "/customer",
    },
    {
      title: "FAQ",
      link: "/faq",
    },
    {
      title: "About Us",
      link: "/about-us",
    },
  ];

  return (
    <header>
      <div className="container navbar-top">
        {/* Logo */}
        <div className="navbar-top__brand">
          <Link href={"/"}>
            <Image
              src={"/assets/logo.svg"}
              alt={"logo"}
              width={53}
              height={36}
            />
          </Link>
          <div
            className={`navbar-top__brand__toggle ${istoggle && "active"}`}
            onClick={() => setIstoggle(!istoggle)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Navbar */}
        <nav className={`navbar-top__navList ${istoggle && "active-toggle"}`}>
          <ul className="navbar-top__navList__lftMenu">
            {NavLinks.map((link, idx) => (
              <li key={idx}>
                {link?.expand ? (
                  <div className="navbar-dropdown">
                    <div className="hover-cta">On hovering</div>
                    <div className="navbar-dropdown__btn">
                      <span>{link?.title}</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 6L8 10L12 6"
                          stroke="#595959"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <ul className="navbar-dropdown__submenu">
                      {link?.subLinks?.map((subLink, idxx) => (
                        <li key={idxx}>
                          <Link href={subLink?.link}>{subLink?.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <Link href={link?.link}>{link?.title}</Link>
                )}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="navbar-top__navList__CTA">
            <div className="navbar-top__navList__CTA__searchBtn">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 20.9999L16.65 16.6499"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <Link href="/signIn" className="navbar-top__navList__CTA__Btn">
              Sign In
            </Link>
            <Link href="/signIn" className="navbar-top__navList__CTA__Btn">
              Contact Us
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
