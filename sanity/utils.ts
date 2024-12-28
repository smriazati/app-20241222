import { Project } from "@/types/types";
import { client } from "./lib/client";
import { PROJECTS_QUERY } from "./lib/queries";

export async function fetchSanityProjects() {
    try {
        const projects: Project[] = await client.fetch(PROJECTS_QUERY);
        return projects;
    } catch (error) {
        console.error("Error fetching projects:", error);
        return [];
    }
}