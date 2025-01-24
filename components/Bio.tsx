import Image from "next/image"

export
    const Bio = () => {
        return (
            <div className="flex flex-col gap-4">
                <div>
                    <div className="flex gap-4">
                        <div className="overflow-hidden w-[200px] h-auto bio-image">
                            <Image src="/bio.jpeg" alt="Sarah Riazati" width={200} height={100} className="object-cover w-full h-full" />
                        </div>
                        <div className="overflow-hidden w-[200px] h-auto bio-image">
                            <Image src="/bolex.jpg" alt="Sarah Riazati" width={200} height={100} className="object-cover w-full h-full" />
                        </div>
                        <div className="overflow-hidden w-[200px] h-auto bio-image">
                            <Image src="/film.jpg" alt="Sarah Riazati" width={200} height={100} className="object-cover w-full h-full" />
                        </div>
                        <div className="overflow-hidden w-[200px] h-auto bio-image">
                            <Image src="/collage.jpg" alt="Sarah Riazati" width={200} height={100} className="object-cover w-full h-full" />
                        </div>
                    </div>
                </div>
                <div>
                    <p>
                        I’m Sarah Riazati, a front-end engineer with a unique blend of skills in web development, UX design and storytelling.
                    </p>
                    <p>
                        For me, front-end development is so much more than writing code. I approach it as a collaborative craft, where design and code are two sides of the same coin. My philosophy is rooted in curiosity, creativity, and iteration. I love learning new tools, working in cross-disciplinary teams, and building scalable systems. I’m equally comfortable leading brainstorms to sketch UX journeys; coding reusable, well-documented components; or diving into troubleshooting tricky browser edge cases.
                    </p>
                    <p>
                        My nontraditional path—from documentary filmmaker to college lecturer to freelance developer—has made me a curious, adaptable problem solver who thrives in fast-paced environments. Years of freelancing makes me a collaborative problem solver and strategic thinker who brings clarity and structure to complex challenges.
                    </p>
                    <h3 className="mt-6 mb-2 font-bold">Core Expertise</h3>
                    <ul className="list-disc pl-4">
                        <li>Front-End Development (React, Next.js, Vue, TypeScript, Tailwind, Sass)</li>
                        <li>Scalable Design Systems & Workflow Optimization</li>
                        <li>Headless CMS & Migrations (Sanity)</li>
                        <li>UX/UI Design & Product Storytelling (Figma, Animation, Video Production)</li>
                        <li>Agile Development & Cross-Team Collaboration</li>
                        <li>Strategic Thinking & Creative Problem Solving</li>
                    </ul>
                </div>
                <Footer />
            </div>
        )
    }



import Link from "next/link";
import { GithubSvg, LinkedinSvg } from "./Icons";


const LINKS = [
    {
        url: 'https://www.linkedin.com/in/sarah-riazati/',
        type: 'LinkedIn',
        icon: LinkedinSvg
    },
    {
        url: 'https://www.github.com/smriazati/',
        type: 'GitHub',
        icon: GithubSvg
    }
];


const Footer = () => {
    return (
        <div className="py-4 ">

            <ul className="flex gap-4 items-center justify-start">
                {
                    LINKS.map((link, index) => (
                        <li key={index}>
                            <Link href={link.url} target="_blank" rel="noreferrer" className="group">
                                <link.icon className="w-9 h-9 fill-black transition-colors group-hover:fill-purple" />
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};


