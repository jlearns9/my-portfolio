export default function About() {
    return (
        <div className="about">
            <h2 className="about__title">WELCOME</h2>
            <p className="about__details">
                MY NAME IS JORGE GOMEZ AND I&apos;M A{" "}
                <span className="color-primary">DESIGNER</span> /{" "}
                <span className="color-secondary">DEVELOPER</span> WITH A PASSION TO
                CREATE BEAUTIFUL AND EFFECTIVE WEB APPLICATIONS.
            </p>
            <p className="about__details">
                IF YOU&apos;RE INTERESTED IN HIRING ME FOR A PROJECT DON&apos;T HESITATE TO
                REACH OUT
            </p>
            <a href="mailto:jogo.isdev@gmail.com">
                <button className="about__button">CONTACT</button>
            </a>
        </div>
    );
}
