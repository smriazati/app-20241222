import { Container } from "@/components/Layout/Container";
import { ProjectList } from "@/components/ProjectList";
import { ProjectNav } from "@/components/ProjectNav";
import { client } from "@/sanity/lib/client";
import { PROJECTS_BY_CATEGORY_QUERY } from "@/sanity/lib/queries";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
    title: 'Video Projects | Sarah Riazati Portfolio',
    description: 'Bridging the gap between creativity and technology with expertise in web development, UX design, video production, and animation',
}


export default async function VideoIndex() {
    const projects = await client.fetch(PROJECTS_BY_CATEGORY_QUERY, { category: 'video' });


    return (
        <>
            <Container >
                <ProjectNav active="video" />
                <ProjectList projects={projects} />
            </Container>
        </>
    );
}

