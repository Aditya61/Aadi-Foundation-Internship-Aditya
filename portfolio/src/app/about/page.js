

export default function About() {
    return(
        <main className="flex min-h-screen flex-col py-10 px-5 bg-white">
            <img src=""></img>
            <div>
                <h3 className="font-bold text-xl w-full bg-fuchsia-200 text-center p-2 shadow-sm shadow-gray-800">Boigraphy</h3>
                <p className="p-6 font-semibold">I am Aditya Narayan Panda, currently pursuing my B. Tech in Computer Science Engineering with a specialization in AI and ML at Sri Sri University, Cuttack. I have a strong foundation in various programming languages and technologies, including frontend and backend development. I am eager to expand my skill set by tackling real-world problems.</p>
            </div>
            <div>
                <h3 className="font-bold text-xl w-full bg-fuchsia-200 text-center p-2 shadow-sm shadow-gray-800">Skills</h3>
                <ul className="list-disc list-inside p-6">
                    <li className="font-semibold">HTML, CSS, JavaScript, MySQL, Python, Java, C/C++</li>
                    <li className="font-semibold">Machine Learning</li>
                    <li className="font-semibold">Frontend: Astro, SvelteKIT</li>
                    <li className="font-semibold">Backend: Django</li>
                    <li className="font-semibold">DBMS: SQL</li>
                    <li className="font-semibold">Tools: GitHub, Figma</li>
                </ul>
            </div>
            <div>
                <h3 className="font-bold text-xl w-full bg-fuchsia-200 text-center p-2 shadow-sm shadow-gray-800">Soft Skills</h3>
                <ul className="list-disc list-inside p-6">
                    <li className="font-semibold">Adaptive</li>
                    <li className="font-semibold">Effective Communication</li>
                    <li className="font-semibold">Leadership</li>
                </ul>
            </div>
            <div>
                <h3 className="font-bold text-xl w-full bg-fuchsia-200 text-center p-2 shadow-sm shadow-gray-800">Resume</h3>
                <h4 className="font-bold mt-5 text-lg text-purple-950">Experience Summary</h4>
                <ul className="list-disc list-inside p-6">
                    <li className="font-semibold">Major Project: Web-Based Customer Behavior Analysis (2024)</li>
                    <li className="font-semibold">Minor Project: Image Caption Generation (2023)</li>
                </ul>
                <h4 className="font-bold mt-5 text-lg text-purple-950">Education</h4>
                <ul className="list-disc list-inside p-6">
                    <li className="font-semibold">B. Tech, Sri Sri University, Bidyadharpur, Cuttack (2021 - Continuing)</li>
                    <li className="font-semibold">Higher Secondary Education, Kendriya Vidyalaya, Barimul, Kendrapada (2019-2021)</li>
                    <li className="font-semibold">High School, Freedom International School, Salepur, Cuttack (2016-2018)</li>
                </ul>
                <h4 className="font-bold mt-5 text-lg text-purple-950">Certifications</h4>
                <ul className="list-disc list-inside p-6">
                    <li className="font-semibold">CLA - Programming Essentials in C</li>
                    <li className="font-semibold">Python Basics for Data Science</li>
                    <li className="font-semibold">Ethics in AI and Data Science</li>
                    <li className="font-semibold">Blue Prism® Foundation Training</li>
                    <li className="font-semibold">Learn JavaScript | Codeacademy</li>
                </ul>
            </div>
        </main>
    );
}