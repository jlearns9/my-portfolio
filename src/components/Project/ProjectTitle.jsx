/* eslint-disable react/prop-types */
import { FaGithub } from "react-icons/fa";

export default function ProjectTitle({ link, children }) {
    return (
        <div className="flex project__header">
            <h3 className="project__title">{children}</h3>
            <a
                className="project__link"
                href={link}
                target="_blank"
                rel="noreferrer"
            >
                <FaGithub className="color-secondary logo"/>
            </a>
        </div>
    );
}
