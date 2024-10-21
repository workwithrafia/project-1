"use client";
import React from "react";

const skills = [
    {
        title: "HTML",
        description: "Structured web content.",
    },
    {
        title: "CSS",
        description: "Visual styling.",
    },
    {
        title: "JavaScript",
        description: "Interactivity.",
    },
    {
        title: "React",
        description: "Dynamic interfaces.",
    },
    {
        title: "Tailwind CSS",
        description: "Responsive design.",
    },
    {
        title: "TypeScript",
        description: "Type safety.",
    },
];

export default function Skills() {
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-800 text-white p-6">
            <h1 className="text-3xl font-bold mb-4">My Skills</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                    <div key={index} className="border border-gray-600 bg-gray-700 p-2 rounded-md shadow-md w-40">
                        <h2 className="text-lg font-semibold">{skill.title}</h2>
                        <p className="text-sm">{skill.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
