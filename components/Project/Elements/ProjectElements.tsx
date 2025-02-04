
import { PortableText } from "next-sanity";
import { ProjectBySlug } from "@/types/types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/images";
import Link from "next/link";
import { Player } from "@/components/Players";
import { PortableTextComponents } from "@/components/PortableTextComponents";
import { LinkSvg } from "@/components/Icons";
import { TnailRow } from "@/components/TnailRow";

export function ProjectHeaderTnail({ project }: { project: ProjectBySlug }) {
    const { tnails } = project;

    return (
        <div className="flex flex-col gap-4">
            {tnails && tnails.length > 0 && (
                <TnailRow tnails={tnails} />

            )}
            <ProjectHeader project={project} />
        </div>
    );
}


export function ProjectHeader({ project }: { project: ProjectBySlug }) {
    const { name, tagline } = project;
    return (
        <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">{name}</h1>
            {tagline && <h2 className="text-2xl mb-4">{tagline}</h2>}
        </div>
    );
}


export function ProjectDetails({ project }: { project: ProjectBySlug }) {
    const { description, projectRoles, skills, links } = project;
    return (
        <div className="flex flex-col gap-4">

            {description && (
                <div className="flex flex-col gap-1">
                    <PortableText value={description} components={PortableTextComponents} />
                </div>
            )}
            {projectRoles && (
                <div className="flex flex-col gap-1 border-t border-black pt-4">
                    <PortableText value={projectRoles} components={PortableTextComponents} />
                </div>
            )}
            {links && links.length > 0 && (
                <ul className="flex flex-wrap gap-4 mb-2">
                    {links.map((link, index) => (
                        <li key={index}>
                            <Link href={link.url} target="_blank" rel="noreferrer" className="font-bold flex items-center gap-2 group ">
                                <LinkSvg className="w-4 h-4 fill-black transition-colors group-hover:fill-[var(--color-purple)]" />
                                <div className="text-gray-700 group-hover:text-[var(--color-purple)]">
                                    {link.text}
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
            {/* {skills && skills.length > 0 && (
                <div className="flex flex-col gap-1">
                    <h3 className="uppercase">Skills</h3>
                    <ul className="flex flex-col flex-wrap items-start gap-2">
                        {skills.map((item) => (
                            <li key={item._id} className="flex gap-2 justify-center items-center text-center">
                                <div className="w-8 h-8 mx-auto">
                                    <Image src={urlFor(item.image.asset).width(48).quality(75).url()} width="48" height="48" alt={`${item?.name} logo`} className="object-position-center object-contain w-full h-full min-w-full min-h-full" />
                                </div>
                                <div className="text-gray-700 text-sm font-bold">{item?.name}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            )} */}
        </div>
    );
}

export function ProjectMedia({ project }: { project: ProjectBySlug }) {
    const { players, gallery } = project;
    return (
        <div >
            {players && players.length > 0 && (
                <ul className="flex flex-col gap-8">
                    {players.map((player) => (
                        <li key={player._key} className="flex flex-col gap-2">
                            <h4 className="sr-only">{player.name}</h4>
                            <Player videoId={player.videoId} type={player.type} />
                        </li>
                    ))}
                </ul>
            )}
            {gallery && gallery.length > 0 && (
                <ul className="flex gap-4">
                    {gallery.map((item) => (
                        <li key={item.asset._id}>
                            <Image src={urlFor(item.asset).width(600).quality(75).url()} width="600" height="400" alt="" />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

