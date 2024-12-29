import { Container } from "@/components/Layout/Container";
import { ProjectList } from "@/components/ProjectList";
import { ProjectNav } from "@/components/ProjectNav";
import { client } from "@/sanity/lib/client";
import { PROJECTS_BY_CATEGORY_QUERY } from "@/sanity/lib/queries";
import Head from "next/head";

const metadata = {
    title: 'Animation Projects | Sarah Riazati Portfolio',
    description: 'Bridging the gap between creativity and technology with expertise in web development, UX design, video production, and animation',
};


export default async function AnimationIndex() {
    const projects = await client.fetch(PROJECTS_BY_CATEGORY_QUERY, { category: 'animation' });


    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
            </Head>
            <Container >
                <ProjectNav active="animation" />
                <ProjectList projects={projects} />
            </Container>
        </>
    );
}

