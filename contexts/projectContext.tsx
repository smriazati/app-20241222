import { Project } from '@/types/types';
import React, { createContext, useContext } from 'react';

const ProjectContext = createContext<Project[]>([]);

import { ReactNode } from 'react';

interface ProjectProviderProps {
    children: ReactNode;
    projects: Project[];
}

export const ProjectProvider = ({ children, projects }: ProjectProviderProps) => {
    return (
        <ProjectContext.Provider value={projects}>
            {children}
        </ProjectContext.Provider>
    );
};

export const useProjects = () => {
    return useContext(ProjectContext);
};
