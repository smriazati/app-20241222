import { defineQuery } from 'next-sanity'

export const PROJECT_LIST_QUERY = defineQuery(`*[_type == "project"]{ _id, name, slug, description, "description": overview.rte, types[]-> }`);

export const PROJECT_BY_SLUG_QUERY = defineQuery(`*[_type == "project" && slug.current == $slug][0]{ _id, name, slug, description, "description": overview.rte, types[]-> }`);
