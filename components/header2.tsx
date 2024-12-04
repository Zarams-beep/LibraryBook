"use client";
import { IoSearch } from "react-icons/io5";
import PropTypes from "prop-types";
import { RxCross2 } from "react-icons/rx";
import { IoMdMenu } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { useState, useEffect} from "react";
import Link from "next/link";
import { MdCategory,MdLogout} from "react-icons/md";
import { GiBookmarklet } from "react-icons/gi";
import {FaRegHeart} from "react-icons/fa";
import { IoSettingsOutline,IoGameController } from "react-icons/io5";
import { PiCatFill } from "react-icons/pi";
import {IoIosStar } from "react-icons/io";
import { GoBellFill } from "react-icons/go";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
const Header2 = ({name='User',count= 0, notificationNumber=0})=>{
    const [isOpen,setOpen] = useState(false)
    const handleOpen = ()=>{
        setOpen(prev=>!prev)
    }
    const is500 = useMediaQuery({query:'(max-width:500px)'})

    return(
        <>
            <header className="header2">
                {is500?<section className="headerPart"><Link href='/' className="linkClick">
                    <p className="vault">BOOKVAULT</p>
                    <p className="hub">HUB</p>
                    </Link></section>:''}
                <section className="searchHeader">
                    <button>
                        <IoSearch/>
                        <input type="text" placeholder="Search for your favorite books"/>
                    </button>
                </section>

                <section className="sectionNotes">
                    <div className="profileContainer">
                    <Image src="/png/profile.jpg" alt={name} width={1000} height={1000} loading="lazy" />
                        <p className="name">{name}</p>
                    </div>

                    {is500?(
          <div className="divContain">
            <div onClick={handleOpen}>
              {isOpen ? <RxCross2 /> : <IoMdMenu />}
              
          </div>
          <section className={`list1 ${isOpen?'opacityMenu':''}`}>
                    <ul>
                        <li><Link href ="/category" className="linkClick"><MdCategory className="iconsSide"/>Category</Link></li>

                        <li>
                            <Link href="/" className="linkClick">
                            <GiBookmarklet className="iconsSide"/>My Library</Link></li>

                        <li><FaRegHeart className="iconsSide"/>Donated Books</li>
                        
                        <li><Link href="/games" className="linkClick"> 
                            <IoGameController className="iconsSide"/>Games</Link></li>

                        <div className="notificationValue">
                        <li className="relativeLi2"><GoBellFill className="iconsSide"/><p>{notificationNumber}</p> Notification</li>
                        </div>
                        <li><IoIosStar className="iconsSide"/>Rated</li>
                    </ul>

                    <ul>
                        <li><IoSettingsOutline className="iconsSide"/>Settings</li>
                        <li><PiCatFill className="iconsSide"/>Buy me a Cat</li>
                        <li><MdLogout className="iconsSide"/>Logout</li>
                    </ul>
                </section>
                        <div className="shopCart">
                        <Link href ="/check-out" className="linkClick"><FaShoppingCart className="iconsSide"/><p>{count}</p></Link>
                        </div>

          </div>
        ) : (
          ""
        )}
                </section>

               
       
            </header>
        </>
    )
}

Header2.propTypes = {
    name: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    notificationNumber: PropTypes.number.isRequired,
}
export default Header2