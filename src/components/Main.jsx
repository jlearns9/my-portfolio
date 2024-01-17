import About from "./About"
import Skills from "./Skills"
import Projects from "./Projects";

export default function Main() {
    return (
        <div className="flex">
            <About />
            <Skills />
            <Projects />
        </div>
    );
}
