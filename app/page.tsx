import { Bio } from "@/components/Bio";
import { Container } from "@/components/Layout/Container";
import { ProjectList } from "@/components/ProjectList";
import { ProjectNav } from "@/components/ProjectNav";
import { sanityFetch } from "@/sanity/lib/client";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Home | Sarah Riazati Portfolio',
  description: 'Bridging the gap between creativity and technology with expertise in web development, UX design, video production, and animation',
}

export default async function Index() {

  const projects = await sanityFetch({
    query: PROJECTS_QUERY,
    revalidate: 3600,
  })


  return (
    <>

      <div className="flex flex gap-4 flex-wrap pt-[46px]">
        <div className="max-w-[50ch] bg-white p-4">
          <Bio />
        </div>
        <div id="projects" className="max-w-[250px] p-4 w-full flex flex-col gap-8">
          <ProjectList projects={projects} listType="list" />
        </div>
      </div>
      {/* </Container> */}
    </>
  )
}
