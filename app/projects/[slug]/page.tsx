import { client, sanityFetch } from "@/sanity/lib/client";
import { PROJECT_BY_SLUG_QUERY, PROJECT_METADATA_BY_SLUG_QUERY, PROJECTS_QUERY } from "@/sanity/lib/queries";
import { NotFound } from "@/components/NotFound";
import { PortableText } from "next-sanity";
import { ProjectBySlug, ProjectListItemType, ProjectMetadataBySlug, Slug } from "@/types/types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/images";
import Link from "next/link";
import { Player } from "@/components/Players";
import { PortableTextComponents } from "@/components/PortableTextComponents";
import { ProjectList } from "@/components/ProjectList";
import type { Metadata } from 'next'
import { TnailRow } from "@/components/TnailRow";
import { LinkSvg } from "@/components/Icons";

const RELATED_PROJECTS_COUNT = 12;
type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata(
  { params }: Props): Promise<Metadata> {
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

const fetchProjectsByRank = async () => {

  const projects = await sanityFetch({
    query: PROJECTS_QUERY,
    revalidate: 3600,
  })

  return projects;
};

const getRelatedProjects = async (currentSlug: Slug['current']): Promise<ProjectListItemType[]> => {
  const projects: ProjectListItemType[] = await fetchProjectsByRank();
  const currentIndex = projects.findIndex(project => project.slug.current === currentSlug);

  if (currentIndex === -1) {
    console.log('No base project found, no related projects to fetch');
    return [];
  }

  const halfRelatedCount = Math.floor(RELATED_PROJECTS_COUNT / 2);
  const relatedProjects: ProjectListItemType[] = [];

  for (let i = 1; i <= halfRelatedCount; i++) {
    const beforeIndex = (currentIndex - i + projects.length) % projects.length;  // Wrap around using modulo
    relatedProjects.push(projects[beforeIndex]);
  }

  for (let i = 1; i <= halfRelatedCount; i++) {
    const afterIndex = (currentIndex + i) % projects.length;  // Wrap around using modulo
    relatedProjects.push(projects[afterIndex]);
  }

  return relatedProjects;
};




export default async function ProjectPage({ params }: Props) {
  const slug = (await params).slug
  const relatedProjects: ProjectListItemType[] = await getRelatedProjects(slug)

  const project = await sanityFetch({
    query: PROJECT_BY_SLUG_QUERY,
    params: { slug },
    revalidate: 3600,
  })


  if (!project) {
    return <NotFound />;
  }

  return (
    <div className="mt-16 bg-white min-h-screen">
      <div className="py-8 px-4 grid grid-cols-1 sm:grid-cols-[1fr_2fr] auto-rows-[min-content] gap-x-12 gap-y-4">
        <div className="col-start-1 col-end-3 row-start-1 row-end-2">
          <ProjectHeader project={project} />
        </div>
        <div className="col-start-1 col-end-2 row-start-3 row-end 4 sm:row-start-2 sm:row-end-3">
          <ProjectDetails project={project} />
        </div>
        <ProjectMedia project={project} />
      </div>
      <div className="sm:col-start-2 sm:col-end-3 row-start-2 row-end-3">
        <RelatedProjects relatedProjects={relatedProjects} />
      </div>
    </div>
  );
}

function ProjectHeader({ project }: { project: ProjectBySlug }) {
  const { name, tagline, tnails } = project;


  return (
    <div className="flex flex-col gap-4">
      {tnails && tnails.length > 0 && (
        <TnailRow tnails={tnails} />

      )}
      <h1 className="text-4xl lg:text-8xl font-bold mb-4">{name}</h1>
      {tagline && <h2 className="text-2xl mb-4">{tagline}</h2>}
    </div>
  );
}

function ProjectDetails({ project }: { project: ProjectBySlug }) {
  const { description, projectRoles, skills, links } = project;
  return (
    <div className="flex flex-col gap-4">

      {description && (
        <div className="flex flex-col gap-1">
          <h3 className="uppercase">About</h3>
          <PortableText value={description} components={PortableTextComponents} />
        </div>
      )}
      {projectRoles && (
        <div className="flex flex-col gap-1">
          <h3 className="uppercase">About</h3>
          <PortableText value={projectRoles} components={PortableTextComponents} />
        </div>
      )}
      {links && links.length > 0 && (
        <ul className="flex flex-wrap gap-4 mb-2">
          {links.map((link, index) => (
            <li key={index}>
              <Link href={link.url} target="_blank" rel="noreferrer" className="font-bold flex items-center gap-2 group ">
                <LinkSvg className="w-4 h-4 fill-black transition-colors group-hover:fill-[var(--color-purple)]" />
                <div className="text-gray-700 group-hover:text-[var(--color-purple)]">
                  {link.text}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
      {skills && skills.length > 0 && (
        <div className="flex flex-col gap-1">
          <h3 className="uppercase">Skills</h3>
          <ul className="flex flex-col flex-wrap items-start gap-2">
            {skills.map((item) => (
              <li key={item._id} className="flex gap-2 justify-center items-center text-center">
                <div className="w-8 h-8 mx-auto">
                  <Image src={urlFor(item.image.asset).width(48).quality(75).url()} width="48" height="48" alt={`${item?.name} logo`} className="object-position-center object-contain w-full h-full min-w-full min-h-full" />
                </div>
                <div className="text-gray-700 text-sm font-bold">{item?.name}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function ProjectMedia({ project }: { project: ProjectBySlug }) {
  const { players, gallery } = project;
  return (
    <div >
      {players && players.length > 0 && (
        <ul className="flex flex-col gap-8">
          {players.map((player) => (
            <li key={player._key} className="flex flex-col gap-2">
              <h4 className="sr-only">{player.name}</h4>
              <Player videoId={player.videoId} type={player.type} />
            </li>
          ))}
        </ul>
      )}
      {gallery && gallery.length > 0 && (
        <ul className="flex gap-4">
          {gallery.map((item) => (
            <li key={item.asset._id}>
              <Image src={urlFor(item.asset).width(600).quality(75).url()} width="600" height="400" alt="" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function RelatedProjects({ relatedProjects }: { relatedProjects: ProjectListItemType[] }) {
  return (
    <div className="mt-8 flex flex-col gap-4 py-12 px-4 bg-cream">
      <h2 className="text-2xl font-bold">Related Projects</h2>
      <ProjectList projects={relatedProjects} priority={false} />
    </div>
  )
}
