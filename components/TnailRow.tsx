'use client'
import { urlFor } from "@/sanity/lib/images";
import { ProjectBySlug } from "@/types/types";
import Image from "next/image";
import { useState } from "react";

export const TnailRow = ({ tnails }: { tnails: ProjectBySlug['tnails'] }) => {
    if (!tnails) {
        return null;
    }

    return (
        <ul className="flex flex-wrap gap-4">
            {tnails.map((item) => (
                <li key={item.asset._id} className="bg-cream w-1/3 md:w-1/6">
                    <ThumbnailImage
                        src={urlFor(item.asset).width(300).height(200).quality(75).url()}
                        alt=""
                        width={300}
                        height={200}
                        blurDataURL={urlFor(item.asset).width(600).height(400).quality(10).url()}
                    />
                </li>
            ))}
        </ul>
    );
};

const ThumbnailImage = ({ src, alt, width, height, blurDataURL }: { src: string, alt: string, width: number, height: number, blurDataURL: string }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    const handleOnLoad = () => {
        setIsLoaded(true);
    };

    return (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            placeholder="blur"
            blurDataURL={blurDataURL}
            className={`object-position-center object-contain w-full h-full min-w-full min-h-full transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={handleOnLoad} // Set the state to trigger fade-in when the image loads
        />
    );
};
