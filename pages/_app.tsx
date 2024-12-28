// pages/_app.tsx
import App from "next/app";
import type { AppContext, AppProps } from "next/app";
import { useRouter } from 'next/router';
import { Manrope } from 'next/font/google';
import { useEffect, useState } from 'react';
import '../styles/tailwind.css';
import '../styles/globals.css';
import { Project } from "@/types/types";
import { client } from "@/sanity/lib/client";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-Manrope',
  weight: ['400', '700'],
});


function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const { projects } = pageProps;

  useEffect(() => {
    const handleStart = () => setIsTransitioning(true);
    const handleComplete = () => setIsTransitioning(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    <div className={`${manrope.variable} transition-container ${isTransitioning ? 'transitioning' : ''}`}>
      <Component {...pageProps} projects={projects} />
    </div>
  );
}


// Custom App to fetch server-side props
MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);

  // Fetch Sanity data here (use your client setup)
  const projects = await fetchSanityProjects(); // Replace with your fetch logic
  console.log('projects', projects);
  return {
    ...appProps,
    pageProps: {
      ...appProps.pageProps,
      projects, // Attach projects data to all pages
    },
  };
};

async function fetchSanityProjects() {

  try {
    const projects: Project[] = await client.fetch(PROJECTS_QUERY);
    return projects
  } catch (error) {
    console.error("Error fetching projects:", error);
    return []
  }
}


export default MyApp;


