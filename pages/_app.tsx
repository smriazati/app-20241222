// pages/_app.tsx
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Manrope } from "next/font/google";
import { useEffect, useState } from "react";
import "../styles/tailwind.css";
import "../styles/globals.css";
import { SiteHeader } from "@/components/Site/Header";
import { ProjectProvider } from "@/contexts/projectContext";
import Head from "next/head";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-Manrope",
  weight: ["400", "700"],
  preload: true,
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleStart = () => setIsTransitioning(true);
    const handleComplete = () => setIsTransitioning(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <div
      className={`${manrope.variable} transition-container ${isTransitioning ? "transitioning" : ""
        }`}
    >
      <Head>
        <title>Sarah Riazati portfolio</title>
        <meta name="description" content="Bridging the gap between creativity and technology with expertise in web development, UX design, video production, and animation" />
      </Head>
      <SiteHeader />
      <ProjectProvider>
        <Component {...pageProps} />
      </ProjectProvider>
    </div>
  );
}


export default MyApp;
