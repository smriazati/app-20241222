import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface Project {
    _id?: string;
    _type: 'project';
    name: string;
    slug: {
        _type: 'slug';
        current: string;
    };
    hideFromGrid?: boolean;
    disableProjectPage?: boolean;
    client?: Array<{
        _type: 'reference';
        _ref: string;
    }>;
    tnails?: Array<SanityImageSource>;
    vidTnail?: {
        _type: 'file';
        asset: {
            _ref: string;
            _type: 'reference';
        };
    };
    categories?: Array<{
        _type: 'reference';
        _ref: string;
    }>;
    types?: Array<{
        _type: 'reference';
        _ref: string;
    }>;
    skills?: Array<{
        _type: 'reference';
        _ref: string;
    }>;
    players?: Array<{
        _type: 'videoPlayer';
        // Extend this type based on your videoPlayer schema definition
    }>;
    gallery?: Array<SanityImageSource>;
    links?: Array<{
        _type: 'externalLink';
        // Extend this type based on your externalLink schema definition
    }>;
    tagline?: string;
    overview?: string;
    orderRank?: string;
}
