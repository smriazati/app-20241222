import { defineQuery } from 'next-sanity'

const slugProjection = `"slug": slug.current`;
const imageAssetProjection = `asset-> {_id, url }`

const clientProjection = `client[]->{ _id, name, ${slugProjection}}`;

const tnailsProjection = `tnails[]{${imageAssetProjection}}`;

const categoriesProjection = `categories[]->{ _id, name, ${slugProjection} }`;

const typesProjection = `types[]->{ _id, name, ${slugProjection} }`;

const skillsProjection = `skills[]->{ _id, name, ${slugProjection}, image{${imageAssetProjection}}, orderRank }`;

const galleryProjection = `gallery[]{${imageAssetProjection}}`;

const linksProjection = `links[]{ url, text }`;

const descriptionProjection = `"description": overview.rte `;

const vidTnailProjection = `vidTnail{ ${imageAssetProjection} }`;

const playersProjection = `players[]{ _key, type, name, videoId }`;

const projectsListBaseProjection = ` 
    _id,
    name,
    slug,
    tagline,
    ${tnailsProjection}
`

export const PROJECTS_QUERY = `*[_type == "project" && (hideFromGrid != true || !defined(hideFromGrid)) && (disableProjectPage != true || !defined(disableProjectPage))]|order(rankOrder asc){
   ${projectsListBaseProjection}
  }|order(orderRank)`;



export const PROJECTS_BY_CATEGORY_QUERY = defineQuery(`
  *[_type == "project" && $category in categories[]->slug.current && (hideFromGrid != true || !defined(hideFromGrid)) && (disableProjectPage != true || !defined(disableProjectPage))]|order(rankOrder asc){ 
      ${projectsListBaseProjection}
  }
`);

export const PROJECT_BY_SLUG_QUERY = defineQuery(`
    *[_type == "project" && slug.current == $slug][0]{ 
        _id,
        name,
        tagline,
        ${slugProjection},
        ${descriptionProjection},
        ${typesProjection},
        ${tnailsProjection},
        ${clientProjection},
        ${galleryProjection},
        ${linksProjection},
        ${skillsProjection},
        ${categoriesProjection},
        ${vidTnailProjection},
        ${playersProjection}
    }
`);


export const RELATED_PROJECTS_QUERY = defineQuery(`
*[_type == "project" && slug.current != $slug]|order(rankOrder asc) [0...10]{
   ${projectsListBaseProjection}
}
`)


export const PROJECT_METADATA_BY_SLUG_QUERY = defineQuery(`
    *[_type == "project" && slug.current == $slug][0]{ 
        _id,
        name,
        "ogImg": tnails[0]{
            asset-> {_id, url }
        }
    }
`);