import { ProjectList } from "@/components/ProjectList";
import { Project } from "@/types/types";

interface IndexProps {
  projects: Project[];
}

export default function Index({ projects }: IndexProps) {
  return (
    <div className="flex flex-col gap-4 p-4 container">
      <ProjectList projects={projects} />
    </div>
  );
}
