import { client, sanityFetch } from "@/sanity/lib/client";
import { PROJECT_BY_SLUG_QUERY, PROJECT_METADATA_BY_SLUG_QUERY } from "@/sanity/lib/queries";
import { NotFound } from "@/components/NotFound";
import { ProjectListItemType, ProjectMetadataBySlug } from "@/types/types";
import { urlFor } from "@/sanity/lib/images";
import type { Metadata } from 'next'
import { VideoListTemplate } from "@/components/Project/Template/VideoList";
import { RelatedProjects } from "@/components/Project/Elements/RelatedProjects";
import { getRelatedProjects } from "@/sanity/helper";
import { WebsiteTemplate } from "@/components/Project/Template/Website";

type ProjectPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata(
  { params }: ProjectPageProps): Promise<Metadata> {
  const slug = (await params).slug
  const project: ProjectMetadataBySlug = await client.fetch(PROJECT_METADATA_BY_SLUG_QUERY, { slug });

  let imgUrl = ""
  if (project?.ogImg) {
    imgUrl = urlFor(project.ogImg).width(1200).height(630).fit('clip').quality(75).url()
  }
  return {
    title: `${project?.name} | Sarah Riazati Portfolio`,
    openGraph: {
      images: [imgUrl],
    },
  }
}




export default async function ProjectPage({ params }: ProjectPageProps) {
  const slug = (await params).slug
  const relatedProjects: ProjectListItemType[] = await getRelatedProjects(slug)

  const project = await sanityFetch({
    query: PROJECT_BY_SLUG_QUERY,
    params: { slug },
    revalidate: 3600,
  })
  return (NotFound())
  if (!project) {
    return <NotFound />;
  }

  let renderProject;
  switch (project.template) {
    case 'videoList':
      renderProject = <VideoListTemplate project={project} />;
      break;
    case 'website':
      renderProject = <WebsiteTemplate project={project} />
      break
    default:
      renderProject = <VideoListTemplate project={project} />;
      break;
  }

  return (
    <div className="mt-16 bg-white min-h-screen">
      {renderProject}
      <div>
        <RelatedProjects relatedProjects={relatedProjects} />
      </div>
    </div>
  );
}


