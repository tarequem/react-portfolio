import React from "react";
import Humble from "../assets/humble.png";
import ChargeItUp from "../assets/chargeitup.png";
import TechBlog from "../assets/techblog.png";
import NoteTaker from "../assets/notetaker.png";
import ECommerce from "../assets/ecommerce.gif";
import SocialNetworkAPI from "../assets/social-network-api.gif";
import TeamProfileGen from "../assets/teamprofilegen.png";
import WeatherDashboard from "../assets/weatherdashboard.png";

export default function Projects() {
    const projects = [
        {
            id: 1,
            title: "Humble",
            repository: "https://github.com/tarequem/humble",
            src: Humble,
            alt: "Humble",
            desc: "Feeling overconfident? Looking for constructive criticism or a good roasting? Humble yourself on Humble!"
        },
        {
            id: 2,
            title: "Charge It Up",
            repository: "https://github.com/tarequem/ev-mapper",
            src: ChargeItUp,
            alt: "Charge It Up",
            desc: "Charge it up is an application that helps electric vehicle owners find charging stations close to a postal code or zip code across North America."
        },
        {
            id: 3,
            title: "TechBlog",
            repository: "https://github.com/tarequem/tech-blog",
            src: TechBlog,
            alt: "Tech Blog",
            desc: "This program is to demonstrate the use of handlebars and sequelize to create a blog website where users can post and comment on each other's blogs."
        },
        {
            id: 4,
            title: "Note Taker",
            repository: "https://github.com/tarequem/note-taker",
            src: NoteTaker,
            alt: "Note Taker",
            desc: "This program is designed to allow users to post and delete detailed notes. Users can organize their tasks and quickly write down their thoughts. Outdated notes can be deleted."
        },
        {
            id: 5,
            title: "E-Commerce Backend",
            repository: "https://github.com/tarequem/e-commerce-backend",
            src: ECommerce,
            alt: "E Commerce Backend",
            desc: "This program works as the backend of an e-commerce website which maintains the database."
        },
        {
            id: 6,
            title: "Social Network API",
            repository: "https://github.com/tarequem/social-network-api",
            src: SocialNetworkAPI,
            alt: "Social Network API",
            desc: "This program uses MongoDB to handle and structure social network data."
        },
        // {
        //     id: 7,
        //     title: "Team Profile Generator",
        //     repository: "https://github.com/tarequem/team-profile-generator",
        //     src: TeamProfileGen,
        //     alt: "Team Profile Generator",
        //     desc: "The intended purpose for this project was to demonstrate the use of OOP and TDD with Jest. This application was designed to generate a team profile with each member's basic info using user input through the Inquirer module. This information will be displayed onto a generated HTML page."
        // },
        // {
        //     id: 8,
        //     title: "Weather Dashboard",
        //     repository: "https://github.com/tarequem/weather-dashboard",
        //     src: WeatherDashboard,
        //     alt: "Weather Dashboard",
        //     desc: "The purpose for this application is to have the user search for cities to find out the weather forecast. On the top left, the user will enter a city and will see its weather forecast after clicking search. Every city searched will be displayed below the search bar as a clickable button which will persist. When the previously searched cities are clicked, the application will return the weather data of that city."
        // },
    ]
    return(
        <section name="projects" className="h-screen w-full bg-black">
            <div className="mx-auto flex flex-col justify-center h-full px-4 md:flex-col ">
                <div className="text-center">
                    <h1 className="italic font-extrabold text-transparent text-5xl bg-clip-text bg-white">
                        My Previous Work
                    </h1>
                    <h2 className="text-white">Click on the image to view repository</h2>
                    <br />
                </div>
                <div className="grid md:grid-cols-3 gap-5 px-12">
                    {projects.map(({ id, title, src, desc, alt, repository }) => (
                        <div key={id} className="w-3/4 rounded-xl shadow-md shadow-gray-300 border-zinc-400">
                            <h4 className="italic font-extrabold text-transparent text-1xl bg-clip-text text-white text-center">{title}</h4>
                            <a href={repository}><img className="object-cover h-48 w-96 bg-contain hover:scale-110 duration-75" src={src} alt={alt} /></a>
                            <p className="text-m text-white">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}