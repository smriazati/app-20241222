import { client } from "@/sanity/lib/client"
import { PROJECT_LIST_QUERY } from "@/sanity/lib/queries"

interface Project {
  _id: string;
  slug: {
    current: string;
  };
  name: string;
}

export async function getServerSideProps() {
  const projects: Project[] = await client.fetch(PROJECT_LIST_QUERY)
  return {
    props: {
      projects,
    },
  }
}

export default function Index({ projects }: { projects: Project[] }) {
  console.log('projects', projects)
  return (
    <>
      <h1>hello world</h1>
      {
        projects && (
          <ul>
            {projects.map((project) => (
              <li key={project._id}>
                <a href={`/projects/${project?.slug.current}`}>{project?.name}</a>
              </li>
            ))}
          </ul>
        )
      }
    </>
  )
}