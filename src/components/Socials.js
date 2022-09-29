import React from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 
"react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

export default function Socials() {
    const links = [
        {
            id: 1,
            child: (<li>GitHub <FaGithub size={10} /></li>),
            href: "https://github.com/tarequem"
        },
        {
            id: 2,
            child: (<li>Linkedin <FaLinkedin size={10} /></li>),
            href: "https://www.linkedin.com/in/tareque-moatar-4286766a/"
        },
        {
            id: 3,
            child: (<li>Email <HiOutlineMail size={10} /></li>),
            href: "mailto:moatartareque@gmail.com"
        },
        {
            id: 4,
            child: (<li>Resume <BsFillPersonLinesFill size={10} /></li>),
            href: "https://drive.google.com/file/d/1NYMK97k4iSs0Sm1CVPJu3-vJblHloqtb/view?usp=sharing"
        },
    ];
    return(
        <section name="socials" className="flex justify-between items-center w-full h20 px-4 text-white bg-gradient-to-b from-cyan-500 to-indigo-500 fixed">
                    <div className="relative flex items-center justify-between sm:h-10 lg:justify-start">
                        <ul className="flex flex-row justify-center items-center absolute top-0 left-0 bg-gradient-to-b from-cyan-500 to-indigo-500 text-white">
                            {links.map(({ id, child, href }) => (
                                <li key={id}>
                                    <a href={href}>{child}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
        </section>
    )
}