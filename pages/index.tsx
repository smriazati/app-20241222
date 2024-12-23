import { client } from "@/sanity/lib/client"
import { PROJECT_LIST_QUERY } from "@/sanity/lib/queries"
import Link from "next/link";

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
  return (
    <div className="bg-cream flex flex-col gap-4 p-4 container">
      <h1 className="text-4xl font-manrope">sarah riazati project</h1>
      {
        projects && (
          <ul className="flex flex-col gap-2">
            {projects.map((project) => (
              <li key={project._id}>
                <Link
                  href={`/projects/${project?.slug.current}`}
                  className="flex font-manrope text-[18px] text-black hover:text-purple hover:animate-move-right transition duration-500 ease-in-out translate-x-0 hover:translate-x-2"
                >
                  {project?.name}
                </Link>
              </li>


            ))}
          </ul>
        )
      }
    </div>
  )
}