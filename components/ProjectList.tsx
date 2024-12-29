
import { ProjectListItem } from "./ProjectListItem";
import { ProjectListItemType } from "@/types/types";

export const ProjectList = ({ projects }: { projects: ProjectListItemType[] }) => {

    if (!projects) {
        return null
    }
    return (
        <ul className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">
            {projects.map((project, index) => (
                <li key={project._id}>
                    <ProjectListItem project={project} />
                </li>
            ))
            }
        </ul >
    );
};
