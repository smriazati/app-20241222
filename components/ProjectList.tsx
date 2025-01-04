
import { ProjectListItem } from "./ProjectListItem";
import { ProjectListItemType } from "@/types/types";

type ListTypes = 'grid' | 'list'

export const ProjectList = ({ projects, priority = true, listType = 'grid' }: { projects: ProjectListItemType[], priority?: boolean, listType?: ListTypes }) => {

    if (!projects) {
        return null
    }

    return (
        <ul className={`${listType === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' : 'flex flex-col gap-4'}`}>
            {projects.map((project, index) => (
                <li key={project._id}>
                    <ProjectListItem project={project} priority={priority} />
                </li>
            ))
            }
        </ul >
    );
};
