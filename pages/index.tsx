import { ProjectList } from "@/components/ProjectList";
import { Project } from "@/types/types";

interface IndexProps {
  projects: Project[];
}

export default function Index({ projects }: IndexProps) {
  return (
    <div className="bg-cream flex flex-col gap-4 p-4 container">
      <h1 className="uppercase">sarah riazati project</h1>
      <ProjectList projects={projects} />
    </div>
  );
}
