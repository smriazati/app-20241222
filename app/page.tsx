import { Container } from "@/components/Layout/Container";
import { ProjectList } from "@/components/ProjectList";
import { ProjectNav } from "@/components/ProjectNav";
import { client } from "@/sanity/lib/client";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Home | Sarah Riazati Portfolio',
  description: 'Bridging the gap between creativity and technology with expertise in web development, UX design, video production, and animation',
}

export default async function Index() {

  const projects = await client.fetch(PROJECTS_QUERY);
  console.log("project names", projects.map(p => p.name));
  return (
    <>

      <Container>
        <ProjectNav active="all" />
        <ProjectList projects={projects} />
      </Container>
    </>
  );
}

