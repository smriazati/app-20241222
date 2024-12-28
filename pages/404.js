import Link from 'next/link';
import React from 'react';

const Custom404 = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <div className="flex flex-col gap-2">
                <h1>Page Not Found</h1>
                <p>There&apos;s nothing here!</p>

                <Link href="/" className="button">Go Home</Link>

            </div>
        </div>
    );
};

export default Custom404;
