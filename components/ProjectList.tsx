
import { urlFor } from "@/sanity/lib/images";
import { Project } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
export const ProjectList = ({ projects }: { projects: Project[] }) => {

    return (
        <ul className="flex flex-col gap-2">
            {projects.map((project) => (
                <li key={project._id}>
                    <Link
                        href={project?.slug.current ? `/projects/${project?.slug.current}` : ''}
                        className="flex font-manrope text-[18px] text-color-primary hover:text-color-secondary hover:animate-move-right transition duration-500 ease-in-out translate-x-0 hover:translate-x-2"
                    >
                        <div className="flex items-center gap-2">
                            {project.tnails &&
                                <div className="w-16 h-16 bg-purple relative rounded-full overflow-hidden">
                                    <Image
                                        src={urlFor(project.tnails[0]).width(100).height(100).url()}
                                        alt={project?.name}

                                        fill
                                        sizes="100px"
                                        className="rounded-lg object-cov er"
                                    />
                                </div>
                            }
                            <div className="flex flex-col">
                                <h2>{project.name}</h2>
                                {project?.tagline && <p>{project?.tagline}</p>}
                            </div>
                        </div>
                    </Link>
                </li>
            ))
            }
        </ul >
    );
};
