import { Container } from "@/components/Layout/Container";
import { ProjectList } from "@/components/ProjectList";
import { ProjectNav } from "@/components/ProjectNav";
import { sanityFetch } from "@/sanity/lib/client";
import { PROJECTS_BY_CATEGORY_QUERY } from "@/sanity/lib/queries";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: 'Web Projects | Sarah Riazati Portfolio',
    description: 'Bridging the gap between creativity and technology with expertise in web development, UX design, video production, and animation',
}

export default async function WebIndex() {
    const projects = await sanityFetch({
        query: PROJECTS_BY_CATEGORY_QUERY,
        params: { category: 'web' },
        revalidate: 3600,
    })

    return (
        <>
            <Container >
                <ProjectNav active="web" />
                <ProjectList projects={projects} listType="list" />
            </Container>
        </>
    )
}

