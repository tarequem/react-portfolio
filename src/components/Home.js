import React from "react";

export default function Home() {

    return(
        <section name="home" className="h-screen w-full bg-gradient-to-b from-cyan-500 to-indigo-500">
            <div className="max-w-screen-lg mx-auto flex flex-col items-left justify-center h-full px-4 md:flex-col ">
                <h1 className="italic font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-gray-400 to-white">
                Welcome to my Portfolio
                </h1>
                <p className="text-white">
                    I am a Full-stack developer in their first year of experience. Use the navigation bar to see my projects, skills, contact information, and socials.
                </p>
            </div>
        </section>
    )
}