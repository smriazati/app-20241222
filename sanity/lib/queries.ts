import { defineQuery } from 'next-sanity'

export const PROJECTS_QUERY = defineQuery(`
    *[_type == "project"]
`);

export const PROJECT_BY_SLUG_QUERY = defineQuery(`
    *[_type == "project" && slug.current == $slug][0]{ 
        _id,
        name,
        "slug": slug.current,
        "description": overview.rte,
        types[]->
    }
`);
