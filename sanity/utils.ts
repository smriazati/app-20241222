import { sanityFetch } from "./lib/client";
import { PROJECTS_QUERY } from "./lib/queries";

export const fetchProjects = async () => {
    const projects = await sanityFetch({
        query: PROJECTS_QUERY,
        revalidate: 3600, // update cache at most once every hour
    })
    return projects;
}


