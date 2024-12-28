import Link from "next/link";

// Define the category type
interface Category {
    slug: string;
    label: string;
}

export const ProjectNav = ({ active }: { active: string }) => {
    // Define categories with both slug and label properties
    const categories: Category[] = [
        { slug: 'all', label: 'All' },
        { slug: 'web', label: 'Web' },
        { slug: 'video', label: 'Video' },
        { slug: 'animation', label: 'Animation' },
    ];

    return (
        <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
                <Link
                    key={category.slug}
                    href={category.slug === 'all' ? '/' : `/${category.slug}`}
                    className={active === category.slug ? 'underline' : ''}
                >
                    {category.label}
                </Link>
            ))}
        </div>
    );
};
