import React from "react";
import TailwindCSS from "../assets/tailwind.png";
import JavaScript from "../assets/javascript.png";
import SQL from "../assets/sql.png";
import MySQL from "../assets/mysql.png";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import MongoDb from "../assets/mongodb.png";
import ExpressJs from "../assets/expressjs.png";
import ReactJs from "../assets/reactjs.png";
import NodeJs from "../assets/nodejs.png";

export default function Skills() {
    const skills = [
        {
            id: 1,
            src: TailwindCSS,
            alt: "Tailwind CSS",
            label: "TailwindCSS"
        },
        {
            id: 2,
            src: CSS,
            alt: "CSS",
            label: "CSS"
        },
        {
            id: 3,
            src: HTML,
            alt: "HTML",
            label: "HTML"
        },
        {
            id: 4,
            src: SQL,
            alt: "SQL",
            label: "SQL"
        },
        {
            id: 5,
            src: MySQL,
            alt: "MySQL",
        },
        {
            id: 6,
            src: JavaScript,
            alt: "JavaScript",
            label: "JavaScript"
        },
        {
            id: 7,
            src: MongoDb,
            alt: "MongoDb",
            label: "MongoDb"
        },
        {
            id: 8,
            src: ExpressJs,
            alt: "ExpressJS",
        },
        {
            id: 9,
            src: ReactJs,
            alt: "ReactJS",
            label: "ReactJS"
        },
        {
            id: 10,
            src: NodeJs,
            alt: "Node JS",
            label: "NodeJS"
        },
    ]
    return(
        <section name="skills" className="h-screen w-full bg-gradient-to-b from-cyan-500 to-indigo-500 items-center">
            <div className="max-w-screen-lg mx-auto items-center h-full grid md:grid-cols-3 gap-3">
                {skills.map(({ id, src, alt, label }) => (
                    <div key={id} className="w-[150px] h-[150px] font-bold text-white rounded-full bg-slate-800 flex items-center justify-center font-mono flex-col mx-10">
                        <img src={src} alt={alt} />
                        <h2>{label}</h2>
                    </div>
                ))}
            </div>
        </section>
    )
}