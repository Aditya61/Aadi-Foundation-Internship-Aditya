

export default function Portfolio() {
    return(
        <main className="flex min-h-screen flex-col py-10 px-5 bg-white">
            <h2 className="bg-fuchsia-200 p-3 shadow-black shadow-sm">Here are some of the projects I've worked on during my studies.</h2>
            <h3>Project Details</h3>
            <div>
                <h4>Project Title : Image Caption Generation</h4>
                <p>Overview : Developed an image caption generation model as a minor project.</p>
                <p>Role : Team Leader / Developer</p>
                <p>Skills and Tools Used : Python, Machine Learning</p>
                <p>Problem Statement : Automate the generation of captions for images.</p>
            </div>
            <div>
                <h4>Project Title : Web-Based Customer Behavior Analysis</h4>
                <p>Overview : Analyzed customer behavior on a web-based platform as a major project.</p>
                <p>Role : Team Leader / Developer</p>
                <p>Skills and Tools Used : SvelteKIT, Django, SQL, Chart.js</p>
                <p>Problem Statement : Understand customer behavior to improve user experience.</p>
            </div>
        </main>
    );
}