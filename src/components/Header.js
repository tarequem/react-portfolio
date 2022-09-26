import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Header() {
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: "home",
        },
        {
            id: 2,
            link: "about",
        },
        {
            id: 3,
            link: "contact",
        },
        {
            id: 4,
            link: "skills",
        },
        {
            id: 5,
            link: "projects",
        },
        {
            id: 6,
            link: "socials",
        },
    ];
    
    return(
        <section name="navigation" className="flex justify-between items-center w-full h20 px-4 text-white bg-gradient-to-b from-cyan-500 to-indigo-500 fixed">
            <div>
                <h1 className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-gray-400 to-white">Tareque Moatar's Portfolio</h1>
            </div>
        <ul className="hidden md:flex">
            {links.map(({ id, link }) => (
                <li key={id} className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-150 duration-200">
                    <Link to={link} smooth duration={500}>
                        {link}
                    </Link>
                </li>
            ))}
        </ul>
        <div onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-white md:hidden">
            {nav ? <FaTimes size={40} /> : <FaBars size={40} />}
        </div>
        {nav && (
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-cyan-500 to-indigo-500 text-white">
            {links.map(({ id, link }) => (
                <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl" >
                    <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                        {link}
                    </Link>
                </li>
            ))}
            </ul>
        )}
        </section>
    )
}