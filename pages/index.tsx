import { Container } from "@/components/Layout/Container";
import { ProjectList } from "@/components/ProjectList";
import { ProjectNav } from "@/components/ProjectNav";
import { useProjects } from "@/contexts/projectContext";

export default function Index() {
  const projects = useProjects();
  return (
    <Container>
      <ProjectNav active="all" />
      <ProjectList projects={projects} />
    </Container>
  );
}

