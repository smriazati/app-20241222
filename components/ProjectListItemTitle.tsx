'use client'
import { ProjectListItemType } from "@/types/types";
import { useState } from "react";

export const ProjectListItemTitle = ({ project }: { project: ProjectListItemType }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="flex flex-col">
            {project.name && <h2>{project.name}</h2>}
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="self-start mt-2 text-sm text-blue-500"
                aria-expanded={isExpanded}
            >
                {isExpanded ? "-" : "+"}
            </button>
            {isExpanded && project?.tagline && (
                <p className="mt-2 text-sm">{project.tagline}</p>
            )}
        </div>
    );
};

