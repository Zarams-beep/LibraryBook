"use client";
import {
  TiSocialFacebookCircular,
  TiSocialGooglePlus,
  TiSocialLinkedin,
} from "react-icons/ti";
import { SlSocialYoutube } from "react-icons/sl";
import { MdAlternateEmail } from "react-icons/md";
import { LuMenuSquare } from "react-icons/lu";
import { FaXmark } from "react-icons/fa6";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

export default function Header() {
  const [isClient, setIsClient] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures rendering happens only after hydration
  }, []);

  const is930 = useMediaQuery({ query: "(max-width:930px)" });
  const is630 = useMediaQuery({ query: "(max-width:630px)" });

  const handleOpen = () => setIsOpen((prev) => !prev);
  const handleOpen2 = () => setIsOpen2((prev) => !prev);

  if (!isClient) return null; // Avoid rendering until after hydration

  return (
    <header className="header1">
      <section className="firstHeader">
        <Link
          href="#"
          className={`linkStyle logoLink ${is630 ? "invisble" : ""}`}
        >
          <div className="forLogo">
            <div className="smallHeaderLogo">
              <p className="transformP">THE</p>
              <h2>LIBRARY</h2>
            </div>
            <div className="smallHeaderLogo2">
              <p>BIGGEST ONLINE LIBRARY</p>
            </div>
          </div>
        </Link>

        <div className="headerSide">
          <div className="part1">
            <h4 className="title">Welcome to BookVault Hub</h4>

            {is930 && (
              <div className="divMenu" onClick={handleOpen}>
                {isOpen ? <FaXmark /> : <LuMenuSquare />}
              </div>
            )}

            {/* Small screen nav menu */}
            {is930 && isOpen && (
              <div className="navSmall">
                <nav>
                  <ul>
                    <Link href="#" className="linkStyle2">
                      <li>HOME</li>
                    </Link>
                    <Link href="#" className="linkStyle2">
                      <li>ABOUT US</li>
                    </Link>
                    <Link href="#" className="linkStyle2">
                      <li>OUR BOOKS</li>
                    </Link>
                    <Link href="#" className="linkStyle2">
                      <li>BLOG</li>
                    </Link>
                    <Link href="#" className="linkStyle2">
                      <li>EVENTS</li>
                    </Link>
                    <Link href="#" className="linkStyle2">
                      <li>PAGES</li>
                    </Link>
                    <li
                      onClick={handleOpen2}
                      className={`linkStyle2 flex items-center hover:cursor-pointer ${is630 ? "invisble" : ""}`}
                    >
                      SOCIALS
                      {isOpen2 ? (
                        <RiArrowDropDownLine className="socialsIcon" />
                      ) : (
                        <RiArrowDropUpLine className="socialsIcon" />
                      )}
                    </li>
                    {!isOpen2 && (
                      <nav className="socialNav">
                        <ul>
                          <Link href="#" className="linkStyle">
                            <li>
                              <MdAlternateEmail />
                            </li>
                          </Link>
                          <Link href="#" className="linkStyle">
                            <li>
                              <SlSocialYoutube />
                            </li>
                          </Link>
                          <Link href="#" className="linkStyle">
                            <li>
                              <TiSocialFacebookCircular />
                            </li>
                          </Link>
                          <Link href="#" className="linkStyle">
                            <li>
                              <TiSocialGooglePlus />
                            </li>
                          </Link>
                          <Link href="#" className="linkStyle">
                            <li>
                              <TiSocialLinkedin />
                            </li>
                          </Link>
                        </ul>
                      </nav>
                    )}
                  </ul>
                </nav>
              </div>
            )}

            {/* Desktop nav menu */}
            <nav className={`${is930 ? "invisble" : ""}`}>
              <ul>
                <Link href="#" className="linkStyle">
                  <li>
                    <MdAlternateEmail />
                  </li>
                </Link>
                <Link href="#" className="linkStyle">
                  <li>
                    <SlSocialYoutube />
                  </li>
                </Link>
                <Link href="#" className="linkStyle">
                  <li>
                    <TiSocialFacebookCircular />
                  </li>
                </Link>
                <Link href="#" className="linkStyle">
                  <li>
                    <TiSocialGooglePlus />
                  </li>
                </Link>
                <Link href="#" className="linkStyle">
                  <li>
                    <TiSocialLinkedin />
                  </li>
                </Link>
              </ul>
            </nav>
          </div>

          <div className="part2">
            <nav className={`${is930 ? "invisble" : ""}`}>
              <ul>
                <Link href="#" className="linkStyle2">
                  <li>HOME</li>
                </Link>
                <Link href="#" className="linkStyle2">
                  <li>ABOUT US</li>
                </Link>
                <Link href="#" className="linkStyle2">
                  <li>OUR BOOKS</li>
                </Link>
                <Link href="#" className="linkStyle2">
                  <li>BLOG</li>
                </Link>
                <Link href="#" className="linkStyle2">
                  <li>EVENTS</li>
                </Link>
                <Link href="#" className="linkStyle2">
                  <li>PAGES</li>
                </Link>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </header>
  );
}
