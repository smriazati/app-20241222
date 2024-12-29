import { client } from "@/sanity/lib/client";
import { PROJECT_BY_SLUG_QUERY } from "@/sanity/lib/queries";
import { NotFound } from "@/components/NotFound";
import { PortableText } from "next-sanity";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  const project = await client.fetch(PROJECT_BY_SLUG_QUERY, { slug });

  if (!project) {
    return <NotFound />;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{project.name}</h1>
      <p className="mb-4">{project.tagline}</p>
      {/* Add more project details here */}
      {/* <PortableText value={project.description} /> */}
    </div>
  );
}
