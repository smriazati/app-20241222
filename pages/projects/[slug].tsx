import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { PROJECT_BY_SLUG_QUERY } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';

interface Project {
  _id: string;
  name: string;
  slug: { current: string };
}

interface ProjectPageProps {
  project: Project;
}

const ProjectPage = ({ project }: ProjectPageProps) => {
  if (!project) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
        <Link href="/">
          <div className="text-blue-500 underline mb-4 inline-block">Back to Home</div>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <Link href="/">
        <div className="text-blue-500 underline mb-4 inline-block">Back to Home</div>
      </Link>
      <h1 className="text-2xl font-bold mb-4">{project.name}</h1>
      <p className="mb-4">This is a short description of the project.</p>
      <img src="/path/to/image.jpg" alt="Project Image" className="mb-4" />

      <div className="grid grid-cols-3 gap-4">
        <img src="https://picsum.photos/id/237/200/300" alt="Grid Image 1" />
        <img src="https://picsum.photos/id/237/200/300" alt="Grid Image 2" />
        <img src="https://picsum.photos/id/237/200/300" alt="Grid Image 3" />
        <img src="https://picsum.photos/id/237/200/300" alt="Grid Image 4" />
        <img src="https://picsum.photos/id/237/200/300" alt="Grid Image 5" />
        <img src="https://picsum.photos/id/237/200/300" alt="Grid Image 6" />
      </div>
    </div>
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

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params!;
  const project = await client.fetch(PROJECT_BY_SLUG_QUERY, { slug });

  if (!project) {
    return {
      notFound: true,
    };
  }

  return { props: { project } };
};

export default ProjectPage;
