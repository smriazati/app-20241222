import { sanityFetch } from "@/sanity/lib/client";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import { ProjectListItemType, Slug } from "@/types/types";

const RELATED_PROJECTS_COUNT = 12;

export const fetchProjectsByRank = async () => {

    const projects = await sanityFetch({
        query: PROJECTS_QUERY,
        revalidate: 3600,
    })

    return projects;
};

export const getRelatedProjects = async (currentSlug: Slug['current']): Promise<ProjectListItemType[]> => {
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

