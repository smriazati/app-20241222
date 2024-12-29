import Link from "next/link";


export const SiteHeader = () => {
    return (
        <div className="p-4 fixed z-[999] w-full top-0 bg-cream">
            <div className="flex justify-between">
                <Link href="/">
                    <h1 className="uppercase">sarah riazati</h1>
                </Link>

                <nav>
                    <ul className="flex gap-4">
                        <li><Link href="/">Projects</Link></li>
                        <li><Link href="/about">About</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
