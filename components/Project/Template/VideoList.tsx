
import { ProjectDetails, ProjectHeader, ProjectMedia } from "@/components/Project/Elements/ProjectElements";
import { ProjectBySlug } from "@/types/types";

interface VideoListProps {
    project: ProjectBySlug
}
export const VideoListTemplate = ({ project }: VideoListProps) => {
    return (
        <div>
            <div className="py-8 px-4 grid grid-cols-1 sm:grid-cols-[1fr_2fr] auto-rows-[min-content] gap-x-12 gap-y-4">
                <div className="col-start-1 col-end-3 row-start-1 row-end-2">
                    <ProjectHeader project={project} />
                </div>
                <div className="col-start-1 col-end-2 row-start-3 row-end 4 sm:row-start-2 sm:row-end-3">
                    <ProjectDetails project={project} />
                </div>
                <ProjectMedia project={project} />
            </div>

        </div>
    )
}