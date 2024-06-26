import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home - My Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} class="bg-white">
        <header class="bg-purple-500 shadow-black shadow-sm p-3">
          <h1 className="text-3xl text-fuchsia-200 drop-shadow-[2px_3px_1px_rgba(0,0,0,1)]">Aditya Narayan Panda</h1>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-7 text-fuchsia-200 shadow-fuchsia-100 drop-shadow-[2px_3px_1px_rgba(0,0,0,1)] absolute top-4 right-4 hover:text-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </header>
        {children}
        <footer className="bg-fuchsia-200 flex flex-wrap justify-around">
            <div className="p-5 ">
              <h3 className="font-bold text-lg">Quick Links</h3>
              <a className="px-4" href="./">Home</a><br></br>
              <a className="px-4" href="./about">About</a><br></br>
              <a className="px-4" href="./Portfolio">Portfolio</a>
            </div>
            <div className="p-5">
              <h3 className="font-bold text-lg">Contact</h3>
              <a className="px-4" href="https://gmail.com">Email : aditya68153@gmail.com</a><br></br>
              <a className="px-4" href="https://www.linkedin.com/in/aditya-narayan-panda">Linkedin : Aditya Narayan Panda</a><br></br>
              <a className="px-4" href="https://github.com/Aditya61">Github : Aditya61</a>
            </div>
        </footer>
      </body>
    </html>
  );
}
