import { Container } from "@/components/Layout/Container";
import { ProjectList } from "@/components/ProjectList";
import { ProjectNav } from "@/components/ProjectNav";
import { useProjects } from "@/contexts/projectContext";
import Head from "next/head";

const metadata = {
    title: 'Video Projects | Sarah Riazati Portfolio',
    description: 'Bridging the gap between creativity and technology with expertise in web development, UX design, video production, and animation',
};

export default function VideoIndex() {
    const allProjects = useProjects();

    const projects = allProjects.filter((project) => {
        console.log(project)
        if (!project.categories) {
            return false;
        }
        return project.categories.some((category) => category.slug.current === "video")
    });

    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
            </Head>
            <Container >
                <ProjectNav active="video" />
                <ProjectList projects={projects} />
            </Container>
        </>
    );
}

