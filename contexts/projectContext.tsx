import { fetchSanityProjects } from '@/sanity/utils';
import { Project } from '@/types/types';
import React, { createContext, useContext, useState, useEffect } from 'react';

const ProjectContext = createContext<Project[]>([]);

import { ReactNode } from 'react';

interface ProjectProviderProps {
    children: ReactNode;
}

export const ProjectProvider = ({ children }: ProjectProviderProps) => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const getProjects = async () => {
            const data = await fetchSanityProjects();
            setProjects(data);
        };

        getProjects();
    }, []);

    return (
        <ProjectContext.Provider value={projects}>
            {children}
        </ProjectContext.Provider>
    );
};

export const useProjects = () => {
    return useContext(ProjectContext);
};
