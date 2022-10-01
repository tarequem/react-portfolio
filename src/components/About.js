import React from "react";

export default function About() {
    
    return(
        <section name="about" className="h-screen w-full bg-black">
            <div className="max-w-screen-lg mx-auto flex flex-col items-left justify-center h-full px-4 md:flex-col">
                <div>
                    <h1 className="italic font-extrabold text-transparent text-5xl bg-clip-text bg-white">
                        About Me
                    </h1>
                </div>
                <div>
                    <p className="text-white">
                        I am a full-stack developer as well as a teacher. I have completed the Full-stack Coding Bootcamp with the University of Toronto. I have 5 years experience as a teacher, which has provided mw with valuable skills and experiences when working with people and with teams. It has helped to mold me as a team oriented individual who takes leadership roles in order to help my colleauges and to reach my goals. Working with both my students and colleauges have taught me valuable lessons and experiences when collaborating as a team and taking a leadership role. While in the bootcamp I have completed several interesting projects that demonstrates each of my skills. Apart from that I have taken ventures in University such as working as a graduate assistant in which I was tasked to assist in research, as a cohort representative in which I would attend program cohort meetings to represent the interests of my cohort and to share with them what I learned from these meetings, and as a lead mentor where I helped develop a program for first year students to transition to university life in a way that was manageable and to help ease any overwhelming feelings they may have about their first year. With my wealth of experience, my acquired skillset in full-stack programming and teamwork, an my eargerness to learn from challenges, I believe I can be a strong asset in any team. I hope to apply my skills and further develop them as I work on a variety of projects and become a member of a team.
                        -Tareque Moatar
                    </p>
                </div>
            </div>
        </section>
    );
};