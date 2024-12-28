// pages/project/[slug].tsx
import { useContext } from "react"; // Import useContext to access your context
import { Project } from "@/types/types";
import Page404 from "../404";
import Head from "next/head";
import { urlFor } from "@/sanity/lib/images";
import { useProjects } from "@/contexts/projectContext"; // Assuming useProjects is your context hook

interface ProjectPageProps {
  slug: string; // Pass the slug here to get the correct project
}

const ProjectPage = ({ slug }: ProjectPageProps) => {
  // Access your project context
  const allProjects = useProjects();

  // Find the project in context based on the slug
  const project = allProjects.find((p: Project) => p.slug.current === slug);

  // If no project is found, return the 404 page
  if (!project) {
    return <Page404 />;
  }

  return (
    <>
      {/* Dynamic Title in the Head */}
      <Head>
        <title>{project.name} | Sarah Riazati Portfolio</title>
        <meta name="description" content={project.tagline || ""} />
        <meta
          name="og:image"
          content={urlFor(project.tnails[0]).width(600).height(400).quality(75).url()}
        />
      </Head>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">{project.name}</h1>
        <p className="mb-4">{project.tagline}</p>
        {/* Add more project details here */}
      </div>
    </>
  );
};

// Next.js will automatically pass `params` into `getStaticProps` or `getServerSideProps`
export const getStaticProps = async ({ params }: any) => {
  // The slug is extracted from params (it comes from the URL, like "/project/some-slug")
  const slug = params?.slug;

  // Return the slug as part of the props so it can be used in the component
  return {
    props: {
      slug,  // Pass the slug to the component
    },
    revalidate: 60, // Optional: Revalidate every 60 seconds
  };
};

export const getStaticPaths = async () => {
  // Assume you already have access to all projects in your context
  const allProjects = useProjects();  // This might not work directly here in `getStaticPaths`

  const paths = allProjects.map((project: Project) => ({
    params: { slug: project.slug.current },
  }));

  return { paths, fallback: false };
};

export default ProjectPage;
