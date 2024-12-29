
interface Slug {
    _type: 'slug';
    current: string;
}

interface ImageAsset {
    asset: {
        _id: string;
        url: string
    }
}

interface Link {
    url: string;
    text: string;
}

interface Skill {
    _id: string;
    name: string;
    slug: Slug;
    image: ImageAsset;
    orderRank: string;
}

interface Type {
    _id: string;
    name: string;
    slug: Slug;
}

interface Client {
    _id: string;
    name: string;
    slug: Slug;
}

interface Category {
    _id: string;
    name: string;
    slug: Slug;
}

export interface Player {
    _key: string;
    type: string;
    name: string;
    videoId: string;
}
export interface ProjectBySlug {
    _id: string;
    name: string;
    tagline: string | null;
    slug: Slug;
    description: any[] | null;
    types: Array<Type> | null;
    tnails: Array<ImageAsset> | null;
    client: Array<Client> | null;
    gallery: Array<ImageAsset> | null;
    links: Array<Link> | null;
    skills: Array<Skill> | null;
    // players: Array<{
    //     _id: string;
    //     name: string;
    //     slug: Slug;
    // }> | null;
    categories: Array<Category> | null;
    vidTnail: ImageAsset | null;
    players: Array<Player> | null;
}



export interface ProjectListItemType {
    _id: string;
    name: string;
    slug: Slug;
    tnails: Array<ImageAsset> | null;
    tagline: string | null;
}


export interface ProjectMetadataBySlug {
    _id: string;
    name: string;
    ogImg: ImageAsset | null;

}