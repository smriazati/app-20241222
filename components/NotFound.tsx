import Link from "next/link"

export const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <div className="flex flex-col gap-2">
                <h1>Page Not Found</h1>
                <p>There&apos;s nothing here!</p>

                <Link href="/" className="button">Go Home</Link>

            </div>
        </div>
    )
}