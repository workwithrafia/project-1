"use client";
import React, { useEffect, useState } from "react";

export default function About() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a loading delay
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // 2 seconds

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="h-screen w-full flex items-center justify-center bg-gray-800 text-white">
                <div className="border-8 border-t-8 border-white border-opacity-30 rounded-full w-16 h-16 animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-800 text-white p-6">
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-lg text-center">
                Hi, I'm Rafia, and I am 24 years old. I am an IT student at GIAIC. Currently, I'm learning the essentials of HTML, CSS, JavaScript, TypeScript, and Tailwind CSS to create responsive and functional websites. Looking ahead, I'm also planning to dive deeper into frameworks like React and Next.js to enhance my ability to deliver high-quality modern web solutions. My goal is to combine my passion for learning with technical expertise to create efficient, user-friendly digital experiences. Let's collaborate and bring your ideas to life!
            </p>
        </div>
    );
}
