'use client'
import dynamic from 'next/dynamic';

const YouTubePlayer = dynamic(() => import('react-player/youtube'), { ssr: false });
const VimeoPlayer = dynamic(() => import('react-player/vimeo'), { ssr: false });


export const Player = ({ videoId, type }: { videoId: string, type: string }) => {

    if (type === 'YouTube') {
        return <YouTube url={`https://www.youtube.com/watch?v=${videoId}`} />;
    }
    if (type === 'Vimeo') {
        return <Vimeo url={`https://vimeo.com/${videoId}`} />;
    }
    return null;
}

const YouTube = ({ url }: { url: string }) => {
    return (
        <ResponsivePlayer>
            <YouTubePlayer url={url} width='100%' height='100%' />
        </ResponsivePlayer>
    );
}

const Vimeo = ({ url }: { url: string }) => {
    return (
        <ResponsivePlayer>
            <VimeoPlayer url={url} width='100%' height='100%' />
        </ResponsivePlayer>
    );
}

interface ResponsivePlayerProps {
    children: React.ReactNode;
}

const ResponsivePlayer = ({ children }: ResponsivePlayerProps) => {
    return (
        <div className="bg-gray-200 relative pt-[56.25%]">
            <div className="absolute top-0 left-0 w-full h-full">
                {children}
            </div>
        </div>
    )
}