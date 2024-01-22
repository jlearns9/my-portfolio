import About from "./About";
import Skills from "./Skills";
import Project from "./Project/index.js";
import Footer from "./Footer";

export default function Main() {
    return (
        <div className="main">
            <About />
            <hr className="border" />
            <Skills />
            <hr className="border" />
            <div>
                <h2>PROJECTS</h2>
                <Project>
                    <Project.Title link="https://github.com/jlearns9/component-library">
                        REACT COMPONENT LIBRARY
                    </Project.Title>
                    <Project.Image src="./component.png" />
                    <Project.Description>
                        A versatile React component library that helps
                        developers create and plan web applications with ease.
                        You can customize and use these components as you wish.
                    </Project.Description>
                </Project>
            </div>
            <Footer />
        </div>
    );
}
