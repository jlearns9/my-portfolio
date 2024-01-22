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
                <h2 className="projects__title">PROJECTS</h2>
                <Project>
                    <Project.Title
                        gitLink="https://github.com/jlearns9/component-library"
                        webLink="https://component-library-8yl.pages.dev/"
                    >
                        REACT COMPONENT LIBRARY
                    </Project.Title>
                    <Project.Image src="./component.png" />
                    <Project.Description>
                        A versatile React component library that helps
                        developers create and plan web applications with ease.
                        You can customize and use these components as you wish.
                    </Project.Description>
                </Project>
                <Project>
                    <Project.Title
                        gitLink="https://github.com/jlearns9/quizzical"
                        webLink="https://quizzical-mlg.pages.dev/"
                    >
                        QUIZZICAL
                    </Project.Title>
                    <Project.Image src="./quizzical.png" />
                    <Project.Description>
                        Web application designed for quiz enthusiasts.  It utilizes APIs to fetch quiz questions, allowing users to play a game of &ldquo;Quizzical&ldquo; 
                    </Project.Description>
                </Project>
                <Project>
                    <Project.Title
                        gitLink="https://github.com/jlearns9/tenzies"
                        webLink="https://tenzies-cmi.pages.dev/"
                    >
                        TENZIES
                    </Project.Title>
                    <Project.Image src="./tenzies.png" />
                    <Project.Description>
                        Web application designed for quiz enthusiasts.  It utilizes APIs to fetch quiz questions, allowing users to play a game of &ldquo;Quizzical&ldquo; 
                    </Project.Description>
                </Project>
            </div>
            <Footer />
        </div>
    );
}
