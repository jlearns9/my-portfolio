// import { useState, useEffect } from "react";
import { FaHtml5 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { FaReact } from "react-icons/fa";

export default function Skills() {
    // const [stats, setStats] = useState(null);

    // useEffect(() => {
    //     fetch("https://www.codewars.com/api/v1/users/jlearns9")
    //         .then((res) => res.json())
    //         .then((data) => setStats(data));
    // }, []);

    return (
        <div className="skills">
            <h2 className="skills__title">SKILLS</h2>
            <ul className="skills__list flex">
                <li className="list__item flex">
                    <div className="color-primary logo">
                        <FaHtml5 />
                    </div>{" "}
                    <div>HTML</div>
                </li>
                <li className="list__item flex">
                    <div className="color-blue logo">
                        <SiCss3 />
                    </div>{" "}
                    <div>CSS</div>
                </li>
                <li className="list__item flex">
                    <div className="color-yellow logo">
                        <SiJavascript />
                    </div>{" "}
                    <div>JAVASCRIPT</div>
                </li>
                <li className="list__item flex">
                    <div className="color-light-blue logo">
                        <FaReact className="spin" />
                    </div>{" "}
                    <div>REACT</div>
                </li>
            </ul>
            {/* {stats && <h3>Username: {stats.username}</h3>} */}
        </div>
    );
}
