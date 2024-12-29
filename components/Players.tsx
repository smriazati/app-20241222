'use client'
import Script from 'next/script';
import { useEffect, useState } from 'react';

export const Player = ({ videoId, type }: { videoId: string, type: string }) => {
    console.log('Player', videoId, type);
    const [isPlayerLoaded, setIsPlayerLoaded] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsPlayerLoaded(true);
        }, 100); // delay load to avoid blocking the main thread

        return () => clearTimeout(timer);
    }, []);

    if (!isPlayerLoaded) {
        // create a cream rectangle with 16x9 aspect ratio 

        const placeholder = (
            <div className="bg-cream relative pt-[56.25%]">
                <div className="absolute top-0 left-0 w-full h-full"></div>
            </div>
        );
        return placeholder;
    }

    if (type === 'YouTube') {
        return <YouTube videoId={videoId} />;
    }
    if (type === 'vimeo') {
        return <Vimeo videoId={videoId} />;
    }
    return null;
}

const YouTube = ({ videoId }: { videoId: string }) => {
    const url = `https://www.youtube.com/embed/${videoId}`
    return (
        <ResponsivePlayer>
            <iframe className="w-full h-full" src={url} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" loading="lazy" allowFullScreen></iframe>
        </ResponsivePlayer>
    );
}

const Vimeo = ({ videoId }: { videoId: string }) => {
    const url = `https://player.vimeo.com/video/${videoId}`
    return (
        <ResponsivePlayer>
            <iframe className="w-full h-full" src={url} allow="autoplay; fullscreen; picture-in-picture; clipboard-write" ></iframe>

            <Script
                src="https://player.vimeo.com/api/player.js"
                strategy="afterInteractive" // Load script after page is interactive
            />
        </ResponsivePlayer >
    );
}

interface ResponsivePlayerProps {
    children: React.ReactNode;
}

const ResponsivePlayer = ({ children }: ResponsivePlayerProps) => {
    return (
        <div className="overflow-hidden relative">
            <div className="bg-cream relative pt-[56.25%]">
                <div className="absolute top-0 left-0 w-full h-full">
                    {children}
                </div>
            </div>
        </div>
    )
}