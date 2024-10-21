"use client";
import React, { useEffect, useState } from "react";

const services = [
    {
        title: "Web Development",
        description: "Building responsive and functional websites using the latest technologies.",
    },
    {
        title: "UI/UX Design",
        description: "Creating user-friendly designs that enhance the user experience.",
    },
    {
        title: "SEO Optimization",
        description: "Improving website visibility and search engine rankings to attract more traffic.",
    },
    {
        title: "Content Creation",
        description: "Developing high-quality content that engages and informs your audience.",
    },
];

export default function Services() {
    const [error, setError] = useState(false);

    useEffect(() => {
        // Simulate an error condition
        const timer = setTimeout(() => {
            setError(true); // Set error to true after 2 seconds
        }, 2000); // 2 seconds

        return () => clearTimeout(timer);
    }, []);

    if (error) {
        return (
            <div className="h-screen w-full flex items-center justify-center bg-gray-800 text-white">
                <h1 className="text-2xl font-bold">Something went wrong!</h1>
            </div>
        );
    }

    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-800 text-white p-6">
            <h1 className="text-3xl font-bold mb-6">Our Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                {services.map((service, index) => (
                    <div key={index} className="border border-gray-600 bg-gray-700 p-4 rounded-lg shadow-md w-48">
                        <h2 className="text-lg font-semibold mb-2">{service.title}</h2>
                        <p className="text-sm">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
