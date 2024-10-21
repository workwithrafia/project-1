import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-800">
      <h1 className="text-center text-3xl py-4 font-bold text-white">Welcome To My First Project</h1>
      <p className="text-center text-lg p-4 text-white">
        I am excited to present my first project, which represents a significant milestone in my journey of learning and creativity. 
        I have explored new ideas, tackled challenges, and developed skills. Thank you for joining me on this adventure!
      </p>
      <div className="flex justify-center mt-4">
        <Link href="/About">
          <button className="text-white py-2 px-4 rounded-xl hover:bg-gray-400 transition duration-200">
            Click For More
          </button>
        </Link>
      </div>
    </div>
  );
}
