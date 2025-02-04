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

  // const projects = await sanityFetch({
  //   query: PROJECTS_QUERY,
  //   revalidate: 3600,
  // })

  return (
    <>

      <div className="flex flex flex-wrap pt-[46px]">
        <div className="w-1/2 bg-white">
          <div className="min-w-[300px] max-w-[50ch] bg-white p-8 mx-auto">
            <Bio />
          </div>
        </div>
        <div id="projects" className="w-1/2 flex flex-col items-center gap-8">
          <h2 className="text-lg whitespace-nowrap p-8 flex items-center gap-1">✨✨✨ <span className="text-xs">Projects coming soon</span> ✨✨✨</h2>
          {/* <ProjectList projects={projects} listType="list" /> */}
        </div>
      </div>
      {/* </Container> */}
    </>
  )
}

