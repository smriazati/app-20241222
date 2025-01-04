'use client'
import { PortableText } from 'next-sanity';
import React, { useState } from 'react';
import { PortableTextComponents } from './PortableTextComponents';
import { ProjectBySlug } from '@/types/types';

const ReadMoreText = ({ description }: { description: ProjectBySlug['description'] }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="flex flex-col gap-1">
            {description && (
                <>
                    <h3 className="uppercase">About</h3>
                    <div
                        className={`relative overflow-hidden transition-all ${isExpanded ? "max-h-full" : "max-h-[22rem]"
                            }`}
                        style={{
                            WebkitMaskImage: !isExpanded
                                ? "linear-gradient(to bottom, black 20%, transparent)"
                                : "none",
                            maskImage: !isExpanded
                                ? "linear-gradient(to bottom, black 20%, transparent)"
                                : "none",
                        }}
                    >
                        <PortableText value={description} components={PortableTextComponents} />
                    </div>
                    {!isExpanded && (
                        <div
                            className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white to-transparent pointer-events-none"
                            aria-hidden="true"
                        ></div>
                    )}
                    <button
                        className="mt-2 focus:outline-none"
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        {isExpanded ? "Read Less" : "Read More"}
                    </button>
                </>
            )}
        </div>
    );
};

export default ReadMoreText;
