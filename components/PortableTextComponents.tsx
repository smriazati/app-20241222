import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { PortableTextComponentProps, PortableTextMarkComponentProps, PortableTextReactComponents } from "next-sanity";

interface PortableTextImage {
    value: {
        asset: {
            _ref: string;
            url: string;
        };
        alt?: string;
    };
}

interface PortableTextLink {
    children: ReactNode;
    value?: {
        slug?: { current: string };
        href?: string;
    };
}

export const PortableTextComponents: Partial<PortableTextReactComponents> = {
    types: {
        image: ({ value }: PortableTextImage) => {
            if (!value?.asset?._ref) {
                return null;
            }
            return (
                <div className="my-4">
                    <Image
                        src={value.asset.url}
                        alt={value.alt || "Image"}
                        width={800}
                        height={600}
                        className="rounded-lg"
                    />
                </div>
            );
        },
    },

    marks: {
        strong: ({ children }: PortableTextMarkComponentProps<any>) => <strong className="font-bold">{children}</strong>,
        em: ({ children }: PortableTextMarkComponentProps<any>) => <em className="not-italic font-bold">{children}</em>,
        internalLink: ({ children, value }: PortableTextLink) => {
            const href = value?.slug?.current ? `/${value.slug.current}` : "#";
            return (
                <Link href={href} className="text-[var(--link-color)] hover:text-[var(--link-hover-color)] underline">
                    {children}
                </Link>
            );
        },
        externalLink: ({ children, value }: PortableTextLink) => {
            return (
                <a
                    href={value?.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--link-color)] hover:text-[var(--link-hover-color)] underline"
                >
                    {children}
                </a>
            );
        },
    },
    block: {
        h1: ({ children }: PortableTextComponentProps<any>) => <h1 className="text-4xl font-bold my-4">{children}</h1>,
        h2: ({ children }: PortableTextComponentProps<any>) => <h2 className="text-3xl font-semibold my-3">{children}</h2>,
        h3: ({ children }: PortableTextComponentProps<any>) => <h3 className="text-2xl font-medium my-2">{children}</h3>,
        normal: ({ children }: PortableTextComponentProps<any>) => <p className="text-[18px] leading-8 my-2 text-justify hyphens-auto" style={{ hyphenateLimitChars: '6 3 2' }}>{children}</p>,
    },
    list: {
        bullet: ({ children }: PortableTextComponentProps<any>) => <ul className="list-disc ml-6 text-[18px] leading-8">{children}</ul>,
        number: ({ children }: PortableTextComponentProps<any>) => <ol className="list-decimal ml-6 text-[18px] leading-8">{children}</ol>,
    },
    listItem: {
        bullet: ({ children }: PortableTextComponentProps<any>) => <li className="mb-1">{children}</li>,
        number: ({ children }: PortableTextComponentProps<any>) => <li className="mb-1">{children}</li>,
    },
};
