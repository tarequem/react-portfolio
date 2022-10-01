import React from "react";
import Profile from "../assets/profile.png"

export default function Home() {

    return(
        <section name="home" className="h-screen w-full bg-black">
            <div className="max-w-screen-lg mx-auto flex flex-col items-left justify-center h-full px-4 md:flex-col ">
                <img
                src={Profile}
                alt="Profile"
                className="rounded-2xl mx-auto w-2/3 md:w-1/4"
                />
                <br />
                <h1 className="italic font-extrabold text-transparent text-center text-5xl bg-clip-text text-white">
                Welcome to my Portfolio
                </h1>
                <p className="text-white">
                    I am a Full-stack developer in their first year of experience. Use the navigation bar to see my projects, skills, contact information, and socials.
                </p>
            </div>
        </section>
    )
}