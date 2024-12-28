import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface Project {
    _id: string;
    _type: 'project';
    name: string;
    slug: {
        _type: 'slug';
        current: string;
    };
    hideFromGrid?: boolean;
    disableProjectPage?: boolean;
    client: Array<{
        _type: 'client';
        _id: string;
        name: string;
        slug: {
            _type: 'slug';
            current: string;
        };
    }>;
    tnails: Array<SanityImageSource>;
    vidTnail: {
        _type: 'file';
        asset: {
            _ref: string;
            _type: 'reference';
        };
    };
    categories: Array<{
        _type: 'category';
        _id: string;
        name: string;
        slug: {
            _type: 'slug';
            current: string;
        };
    }>;
    types: Array<{
        _type: 'projectType';
        _id: string;
        name: string;
        slug: {
            _type: 'slug';
            current: string;
        };
    }>;
    skills: Array<{
        _type: 'skill';
        _id: string;
        name: string;
        slug: {
            _type: 'slug';
            current: string;
        };
        image: SanityImageSource;
        orderRank: string;
    }>;
    players: Array<{
        _type: 'videoPlayer';
        _id: string;
        title: string;
    }> | null;
    gallery: Array<SanityImageSource>;
    links: Array<{
        _type: 'externalLink';
        _id: string | null;
        url: string;
    }>;
    tagline?: string;
    overview: {
        _type: 'rte';
        rte: Array<any>;
    };
    orderRank?: string;
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
};
