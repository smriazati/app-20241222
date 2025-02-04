import { ProjectList } from "@/components/ProjectList";
import { ProjectListItemType } from "@/types/types";

export function RelatedProjects({ relatedProjects }: { relatedProjects: ProjectListItemType[] }) {
    return (
        <div className="mt-8 flex flex-col gap-4 py-12 px-4 bg-cream">
            <h2 className="text-2xl font-bold">Related Projects</h2>
            <ProjectList projects={relatedProjects} priority={false} />
        </div>
    )
}
