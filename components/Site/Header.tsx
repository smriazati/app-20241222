import Link from "next/link";
import { Logo } from "./Logo";


export const SiteHeader = () => {
    return (
        <div className="px-4 py-2 fixed z-[999] w-full top-0 bg-white mix-blend-difference">
            <div className="flex items-end justify-center pb-1">
                <Link href="/">
                    <h1 className="sr-only">Sarah Riazati portfolio</h1>
                    <Logo />
                </Link>


            </div>
        </div>
    );
}
