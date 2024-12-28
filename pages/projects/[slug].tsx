// pages/project/[slug].tsx
import { GetServerSideProps, GetStaticPaths, GetStaticProps, Metadata, ResolvingMetadata } from "next";
import { client } from "@/sanity/lib/client";
import { Project } from "@/types/types";
import Page404 from "../404";
import { fetchSanityProjects } from "@/sanity/utils";
import Head from "next/head";
import { urlFor } from "@/sanity/lib/images";

interface ProjectPageProps {
  project: Project;
  metadata: {
    title: string;
    description: string;
  };
};

const ProjectPage = ({ project }: ProjectPageProps) => {
  if (!project) {
    return <Page404 />;
  }

  return (
    <>
      <Head>
        <title>{project.name} | Sarah Riazati Portfolio</title>
        <meta name="description" content={project.tagline || ''} />
        <meta name="og:image" content={urlFor(project.tnails[0]).width(600).height(400).quality(75).url()} />
      </Head>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">{project.name}</h1>
        <p className="mb-4">{project.tagline}</p>
        {/* Add more project details here */}
      </div>
    </>

  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const query = '*[_type == "project"]{ slug }';
  const projects = await client.fetch(query);

  const paths = projects.map((project: Project) => ({
    params: { slug: project.slug.current },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params, previewData }) => {
  const slug = params!.slug;

  const allProjects =
    (previewData as { projects: Project[] })?.projects || await fetchSanityProjects();

  const project = allProjects.find((p: Project) => p.slug.current === slug);

  if (!project) {
    return {
      notFound: true,  // Return 404 page if project is not found
    };
  }

  return {
    props: {
      project,
      projects: allProjects, // Pass the projects data to the page
    },
    revalidate: 60, // Optional: Revalidate every 60 seconds
  };
};




export default ProjectPage;
