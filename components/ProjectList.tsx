
import { ProjectListItem } from "./ProjectListItem";
import { ProjectListItemType } from "@/types/types";

export const ProjectList = ({ projects, priority = true }: { projects: ProjectListItemType[], priority?: boolean }) => {

    if (!projects) {
        return null
    }
    return (
        <ul className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">
            {projects.map((project, index) => (
                <li key={project._id}>
                    <ProjectListItem project={project} priority={priority} />
                </li>
            ))
            }
        </ul >
    );
};
