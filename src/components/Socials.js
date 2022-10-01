import React from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 
"react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

export default function Socials() {
    const links = [
        {
            id: 1,
            child: (<li>GitHub <FaGithub size={20} /></li>),
            href: "https://github.com/tarequem"
        },
        {
            id: 2,
            child: (<li>Linkedin <FaLinkedin size={20} /></li>),
            href: "https://www.linkedin.com/in/tareque-moatar-4286766a/"
        },
        {
            id: 3,
            child: (<li>Email <HiOutlineMail size={20} /></li>),
            href: "mailto:moatartareque@gmail.com"
        },
        {
            id: 4,
            child: (<li>Resume <BsFillPersonLinesFill size={20} /></li>),
            href: "https://drive.google.com/file/d/1NYMK97k4iSs0Sm1CVPJu3-vJblHloqtb/view?usp=sharing"
        },
    ];
    return(
        <section name="socials" className="relative flex justify-center sm:h-15 h20 px-4 text-white bg-black">
                        <ul className="flex flex-row">
                            {links.map(({ id, child, href }) => (
                                <li className="m-1" key={id}>
                                    <a href={href}>{child}</a>
                                </li>
                            ))}
                        </ul>
        </section>
    )
}