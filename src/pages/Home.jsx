import HeroKrear from "../components/HeroKrear";
import Servicess from "../components/Services";
import Process from "../components/Process";
import Projects from "../components/Projects";
import About from "../components/AboutKrear";
import Contact from "../components/ContactCTA"

export default function Home() {
    return (
        <main className="w-full bg-[#050508] text-white">
            <HeroKrear />
            <Servicess />
            <Process />
            <Projects />
            < About />
            < Contact />

        </main>
    );
}