import { Container } from "@/components/Layout/Container"
import Image from "next/image";
import Link from "next/link";


export default function AboutPage() {
    return (
        <div className="bg-white">
            <Container>
                <h1 className="sr-only">About Sarah Riazati</h1>
                <div className="flex flex-col gap-8 mb-8">
                    <div className="flex gap-4">
                        <div className="overflow-hidden w-[200px] h-[200px] bio-image">
                            <Image src="/bio.jpeg" alt="Sarah Riazati" width={200} height={200} className="object-cover w-full h-full" />
                        </div>
                        <div className="overflow-hidden w-[200px] h-[200px] bio-image">
                            <Image src="/bolex.jpg" alt="Sarah Riazati" width={200} height={200} className="object-cover w-full h-full" />
                        </div>
                        <div className="overflow-hidden w-[200px] h-[200px] bio-image">
                            <Image src="/film.jpg" alt="Sarah Riazati" width={200} height={200} className="object-cover w-full h-full" />
                        </div>
                        <div className="overflow-hidden w-[200px] h-[200px] bio-image">
                            <Image src="/collage.jpg" alt="Sarah Riazati" width={200} height={200} className="object-cover w-full h-full" />
                        </div>
                    </div>
                    <div className="max-w-[80ch] mr-auto">
                        <p>Sarah Riazati is a versatile front-end developer and UX/UI design expert with a strong background in creative arts and narrative production. Sarah specializes in creating polished, high-quality user experiences that seamlessly blend functionality with exceptional design. </p>

                        <p>Sarah has spent her career at the crossroads of creativity and technology, consistently finding innovative ways to bridge the two. She is a self-taught developer with a passion for visual design, user experience and storytelling.</p>

                        <p>She started her career as a video producer, animator and editor in New York City at agencies, magazines and production companies. She has worked on a variety of projects including <Link href="/projects/fadertv">filming YouTube series for the FADER magazine</Link>, directing tour documentaries following <Link href="/projects/matt-and-kim">bands like Matt & Kim</Link>, and working on documentary feature films <Link href="/projects/citizen-ashe">like Citizen Ashe</Link>. She has also worked as a lecturer at UNC-Chapel Hill and Duke University, where she developed creative production courses in subjects like creative coding, filmmaking and motion graphic animation. </p>

                        <p>Sarah studied visual communication at the University of North Carolina at Chapel Hil Hussman School of Journalism, where she worked on award-winning documentary projects. She holds an MFA in Experimental Documentary Film from Duke University, where she won the prestigious Princess Grace Award for Film.</p>

                    </div>
                </div>
            </Container >
        </div >
    );
}