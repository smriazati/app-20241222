import Link from "next/link";


export const SiteHeader = () => {
    return (
        <div className="p-4 fixed w-full top-0 shadow-sm bg-cream">
            <Link href="/">
                <h1 className="uppercase">sarah riazati</h1>
            </Link>
        </div>
    );
}
