import Link from "next/link";


export const SiteHeader = () => {
    return (
        <div className="p-4">
            <Link href="/">
                <h1 className="uppercase">sarah riazati project</h1>
            </Link>
        </div>
    );
}
