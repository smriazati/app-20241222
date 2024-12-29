import { defineQuery } from 'next-sanity'

const projectsListBaseProjection = ` 
    _id,
    _type,
    name,
    slug,
    hideFromGrid,
    disableProjectPage,
    client[]->{
      _id,
      name,
      slug
    },
    tnails[]{
      asset->{
        _id,
        url
      }
    },
    vidTnail{
      asset->{
        _id,
        url
      }
    },
    categories[]->{
      _id,
      name,
      slug
    },
    types[]->{
      _id,
      name,
      slug
    },
    skills[]->{
      _id,
      name,
      slug,
      image{
        asset->{
          _id,
          url
        }
      },
      orderRank
    },
    players[]{
      _id,
      title
    },
    gallery[]{
      asset->{
        _id,
        url
      }
    },
    links[]{
      _id,
      url
    },
    tagline,
    overview{
      _type,
      rte
    },
    orderRank,
    _createdAt,
    _updatedAt,
    _rev`

export const PROJECTS_QUERY = `*[_type == "project" && (hideFromGrid != true || !defined(hideFromGrid)) && (disableProjectPage != true || !defined(disableProjectPage))]{
   ${projectsListBaseProjection}
  }|order(orderRank)`;

export const PROJECT_BY_SLUG_QUERY = defineQuery(`
    *[_type == "project" && slug.current == $slug][0]{ 
        _id,
        name,
        "slug": slug.current,
        "description": overview.rte,
        types[]->,
        tnails[]{
            asset->{
                url
            }
        },
        client[]->{
            name,
            slug
        },
    }
`);


export const PROJECTS_BY_CATEGORY_QUERY = defineQuery(`
  *[_type == "project" && $category in categories[]->slug.current && (hideFromGrid != true || !defined(hideFromGrid)) && (disableProjectPage != true || !defined(disableProjectPage))]{ 
      ${projectsListBaseProjection}
  }
`);