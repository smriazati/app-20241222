import { client } from "@/sanity/lib/client";
import { PROJECT_BY_SLUG_QUERY, RELATED_PROJECTS_QUERY } from "@/sanity/lib/queries";
import { NotFound } from "@/components/NotFound";
import { PortableText } from "next-sanity";
import { ProjectBySlug, ProjectListItemType } from "@/types/types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/images";
import Link from "next/link";
import { Player } from "@/components/Players";
import { PortableTextComponents } from "@/components/PortableTextComponents";
import { ProjectList } from "@/components/ProjectList";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  const project: ProjectBySlug = await client.fetch(PROJECT_BY_SLUG_QUERY, { slug });

  const relatedProjects: ProjectListItemType[] = await client.fetch(RELATED_PROJECTS_QUERY, { slug });
  if (!project) {
    return <NotFound />;
  }
  const {
    name, tagline, description, skills, links, gallery, tnails, players
  } = project
  return (
    <div className="mt-16 bg-white min-h-screen">
      <div className="py-8 px-4 grid grid-cols-[1fr_2fr]  auto-rows-[min-content] gap-x-12 gap-y-4">

        <div className="col-start-1 col-end-3 row-start-1 row-end-2">
          <div className="flex flex-col gap-4">
            {
              tnails && tnails.length > 0 && (
                <ul className=" flex gap-4" >
                  {tnails.map((item) => (
                    <li key={item.asset._id}>
                      <Image src={urlFor(item.asset).width(600).height(400).quality(75).url()} width="600" height="400" alt="" className="object-position-center object-cover w-full h-full min-w-full min-h-full" />
                    </li>
                  ))}
                </ul>
              )
            }
            <h1 className="text-4xl lg:text-8xl font-bold mb-4">{name}</h1>
            {
              tagline && (
                <p className="mb-4">{tagline}</p>
              )
            }
          </div>
        </div>
        <div className="col-start-1 col-end-2 row-start-2 row-end-3">
          <div className="flex flex-col gap-4">



            {
              links && links.length > 0 && (
                <ul className="flex flex-wrap gap-4">
                  {
                    links.map((link, index) => (
                      <li key={index}>
                        <Link href={link.url} target="_blank" rel="noreferrer" className="font-bold">{link.text}</Link>
                      </li>
                    ))
                  }
                </ul>
              )
            }

            {
              description && (
                <div className="flex flex-col gap-1">
                  <h3 className="uppercase">About</h3>
                  <PortableText value={description} components={PortableTextComponents} />

                </div>
              )
            }



            {
              skills && skills.length > 0 && (
                <div className="flex flex-col gap-1">
                  <h3 className="uppercase">Skills</h3>
                  <ul className="flex flex-col flex-wrap items-start gap-2">
                    {skills.map((item) => (
                      <li key={item._id} className="flex gap-2 justify-center items-center text-center">
                        <div className="w-8 h-8 mx-auto">
                          <Image src={urlFor(item.image.asset).width(48).quality(75).url()} width="48" height="48" alt={`${item.name} logo`} className="object-position-center object-contain w-full h-full min-w-full min-h-full" />
                        </div>
                        <div className="text-gray-700 text-sm font-bold">{item.name}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            }
          </div>
        </div>
        <div className="col-start-2 col-end-3 row-start-2 row-end-3">

          {
            players && players.length > 0 && (
              <ul className="flex flex-col gap-8">
                {players.map((player) => (
                  <li key={player._key} className="flex flex-col gap-2">
                    <h4 className="sr-only">{player.name}</h4>
                    <Player videoId={player.videoId} type={player.type} />


                  </li>
                ))}
              </ul>
            )
          }
          {
            gallery && gallery.length > 0 && (
              <ul className="flex gap-4">
                {gallery.map((item) => (
                  <li key={item.asset._id} className="">
                    <Image src={urlFor(item.asset).width(600).quality(75).url()} width="600" height="400" alt="" className="" />
                  </li>
                ))}
              </ul>
            )
          }


        </div>
      </div>


      <div className="mt-8 flex flex-col gap-4 py-12 px-4 bg-cream">
        <h2 className="text-2xl font-bold">Related Projects</h2>
        <ProjectList projects={relatedProjects} />
      </div>
    </div >
  );
}
