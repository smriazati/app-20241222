import Link from "next/link";


export const SiteHeader = () => {
    return (
        <div className="p-4 fixed z-[999] w-full top-0 bg-cream">
            <Link href="/">
                <h1 className="uppercase">sarah riazati</h1>
            </Link>
        </div>
    );
}
