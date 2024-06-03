import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-10 px-5">
      <h2 className="md:text-2xl sm:text-md font-bold bg-fuchsia-200 w-full p-5 text-center shadow-black shadow-sm">B. Tech Student in Computer Science Engineering | AI and ML Enthusiast</h2>
      
      <section className="introduction">
        <h2 className="font-bold mt-5 bg-fuchsia-200 w-full p-3 shadow-black shadow-sm text-center">Introduction</h2>
        <p className="p-6 font-semibold">Hello! I'm Aditya, a passionate computer science student specializing in AI and ML. With a strong foundation in both frontend and backend development, I love solving real-world problems through technology. Explore my projects to see how I bring ideas to life with tools like Astro, SvelteKIT, Django, and more.</p>
      </section>

      <section className="projects">
        <h2 className="font-bold mt-5 bg-fuchsia-200 w-full p-3 shadow-black shadow-sm text-center">Featured Projects</h2>
        <div className="flex flex-wrap justify-around">
          <div className="bg-fuchsia-100 p-5 mt-3 shadow-md">
            <img src=""></img>
            <h3 className="font-semibold">Description : Developed a model to automate the generation of captions for images using Python and Machine Learning techniques.</h3>
            <button className="bg-fuchsia-300 p-2 font-semibold mt-2 shadow-sm shadow-black"><a href="./Portfolio">Learn More</a></button>
          </div>
          <div className="bg-fuchsia-100 p-5 mt-3 shadow-md">
            <img src=""></img>
            <h3 className="font-semibold">Description : Analyzed customer behavior on a web-based platform using JavaScript, SQL, and Django to provide actionable insights.</h3>
            <button className="bg-fuchsia-300 p-2 font-semibold mt-2 shadow-sm shadow-black"><a href="./Portfolio">Learn More</a></button>
          </div>
        </div>
      </section>
    </main>
  );
}
