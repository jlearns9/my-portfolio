import About from "./About"
import Skills from "./Skills"
import Project from "./Project/index.js"

export default function Main() {
    return (
        <div className="main">
            <About />
            <Skills />
            <div>
                <h2>PROJECTS</h2>
                <Project>
                    <Project.Title>MY COMPONENT LIBRARY</Project.Title>
                    <Project.Image src="./component.png" />
                    <Project.Description>This is a test</Project.Description>
                </Project>
            </div>
        </div>
    );
}
