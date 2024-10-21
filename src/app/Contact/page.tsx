"use client";

import React from "react";

export default function Contact() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget; // Get the current form
        const name = (form.elements.namedItem("name") as HTMLInputElement).value;
        const email = (form.elements.namedItem("email") as HTMLInputElement).value;
        const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

        alert(`Message sent!\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
        
        // Reset the form fields
        form.reset();
    };

    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-800 text-white p-6">
            <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
            <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-md space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="p-2 rounded-md bg-gray-700 border border-gray-600 text-white"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="p-2 rounded-md bg-gray-700 border border-gray-600 text-white"
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    className="p-2 rounded-md bg-gray-700 border border-gray-600 text-white"
                    rows={4}
                    required
                />
                <button type="submit" className="bg-slate-500 py-2 rounded-md hover:bg-black">
                    Send Message
                </button>
            </form>
        </div>
    );
}
