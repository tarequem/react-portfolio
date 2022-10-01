import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_jvnuuyw', 'service_jvnuuyw', form.current, 'wYLU7T-IvwdYQ1Ioj')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <section name="contact" className="h-screen w-full bg-gradient-to-b from-cyan-500 to-indigo-500 items-center">
            <form ref={form} onSubmit={sendEmail} className="rounded-xl shadow-xl max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-col">
                <div className="formWord">
                    <h1 className="italic font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-gray-400 to-white">Contact</h1>
                    <span>Full Name</span>
                    <br />
                    <input className="input100" type="text" name="user_name" required />
                    <br />
                    <span>Email</span>
                    <br />
                    <input className="input100" type="text" name="user_email" required />
                    <br />
                </div>
                <div className="formWord">
                    <span>Message</span>
                    <br />
                    <textarea name="message" />
                    <br />
                    <input type="submit" value="Send" />
                </div>
            </form>
        </section>
    )
}