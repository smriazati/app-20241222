import { NotFound } from "@/components/NotFound";
import Head from "next/head";

const metadata = {
    title: '404 | Sarah Riazati Portfolio',
    description: 'Bridging the gap between creativity and technology with expertise in web development, UX design, video production, and animation',
};
const Page404 = () => {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
            </Head>
            <NotFound />
        </>
    );
};

export default Page404;
