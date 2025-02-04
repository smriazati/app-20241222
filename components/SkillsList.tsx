
export const Skills = () => {
    return (
        <div className="flex flex-col gap-4">

            <div className="flex flex-col gap-2">
                <h2 className="text-xl">🖥️ Development & Frontend Engineering</h2>
                <ul className="list-disc pl-6 text-base flex flex-col gap-1">
                    <li>Languages: JavaScript, TypeScript, Python</li>
                    <li>Frameworks: React, Next.js, Vue, Nuxt.js</li>
                    <li>Styling & Animation: Tailwind, SASS, GSAP</li>
                    <li>Content Architecture & Headless CMS (Mainly Sanity)</li>
                    <li>APIs & Integrations (Notably Google Maps API, Vimeo, YouTube)</li>
                    <li>Project Management & Automation: Airtable, Trello, Jira, Frame.io</li>
                    <li>Scalable Deployment & DevOps: Netlify, Vercel, GCP</li>
                </ul>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="text-xl">🎨 Storytelling & Interactive Media</h2>
                <ul className="list-disc pl-6 text-base flex flex-col gap-1">
                    <li>Design Tools: Figma, Adobe</li>
                    <li>UX/UI Methods: Prototyping in the Browser, Accessible Interfaces, User Journey Mapping</li>
                    <li>AI & Automation: ChatGPT, Cursor, Generative Design</li>
                </ul>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="text-xl">🎬 Storytelling & Interactive Media</h2>
                <ul className="list-disc pl-6 text-base flex flex-col gap-1">
                    <li>Creative Direction & Narrative Design</li>
                    <li>Production: Directing, Producing, Scripting, Camera Operation, Audio Recording</li>
                    <li>Post-production: Premiere, DaVinci Resolve, After Effects</li>
                </ul>
            </div>
        </div>
    );
};
