import { Container } from "@/components/Layout/Container";
import { ProjectList } from "@/components/ProjectList";
import { ProjectNav } from "@/components/ProjectNav";
import { useProjects } from "@/contexts/projectContext";

export default function Index() {
    const allProjects = useProjects();


    const projects = allProjects.filter((project) => {
        console.log(project)
        if (!project.categories) {
            return false;
        }
        return project.categories.some((category) => category.slug.current === "video")
    }
    );

    return (
        <Container >
            <ProjectNav active="video" />
            <ProjectList projects={projects} />
        </Container>
    );
}

