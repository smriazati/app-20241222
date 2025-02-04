
import { ProjectDetails, ProjectHeader, ProjectMedia } from "@/components/Project/Elements/ProjectElements";
import { ProjectBySlug } from "@/types/types";
import Link from "next/link";

interface WebsiteProps {
    project: ProjectBySlug
}
export const WebsiteTemplate = ({ project }: WebsiteProps) => {
    return (
        <div>
            <div className="py-8 px-4 grid grid-cols-1 sm:grid-cols-[400px_1fr] md:grid-cols-[48ch_1fr] auto-rows-[min-content] gap-x-12 gap-y-4" >
                <div className="col-start-1 col-end-3 row-start-1 row-end-2" >
                    <ProjectHeader project={project} />
                </div>
                <div className="col-start-1 col-end-2 row-start-3 row-end 4 sm:row-start-2 sm:row-end-3" >
                    <div className="w-full flex flex-col gap-4">
                        <MainWebLink project={project} />
                        <ProjectDetails project={project} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export const MainWebLink = ({ project }: { project: ProjectBySlug }) => {
    const { mainWebLink } = project
    console.log('mainweblink', mainWebLink)
    if (!mainWebLink || mainWebLink == '') {
        return
    }
    return (
        <Link href={mainWebLink} className="button text-white">View Project</Link>
    )
}