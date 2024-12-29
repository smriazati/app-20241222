import { Container } from "@/components/Layout/Container";
import { ProjectList } from "@/components/ProjectList";
import { ProjectNav } from "@/components/ProjectNav";
import { client } from "@/sanity/lib/client";
import { PROJECTS_BY_CATEGORY_QUERY } from "@/sanity/lib/queries";
const metadata = {
    title: 'Web Projects | Sarah Riazati Portfolio',
    description: 'Bridging the gap between creativity and technology with expertise in web development, UX design, video production, and animation',
};

export default async function WebIndex() {
    const projects = await client.fetch(PROJECTS_BY_CATEGORY_QUERY, { category: 'web' });
    return (
        <>
            <Container >
                <ProjectNav active="web" />
                <ProjectList projects={projects} />
            </Container>
        </>
    );
}

