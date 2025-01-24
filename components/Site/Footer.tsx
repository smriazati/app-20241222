import Link from "next/link";
import { GithubSvg, LinkedinSvg } from "../Icons";


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


export const SiteFooter = () => {
    return (
        <div className="pt-2 pb-8 px-4 shadow-sm bg-cream">
            <div className="flex flex-col-reverse items-end gap-4 justify-end">

                <p className="text-[10px] text-right">All Rights Reserved. {new Date().getFullYear()}</p>
                <ul className="flex gap-4 items-center justify-end">
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
        </div>
    );
};


