/* eslint-disable react/prop-types */
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

export default function ProjectTitle({ gitLink, webLink, children }) {
    return (
        <div className="flex project__header">
            <h3 className="project__title">{children}</h3>
            <a
                className="project__link"
                href={gitLink}
                target="_blank"
                rel="noreferrer"
            >
                <FaGithub className="color-secondary logo__small"/>
            </a>
            <a
                className="project__link"
                href={webLink}
                target="_blank"
                rel="noreferrer"
            >
                <CgWebsite className="color-secondary logo__small"/>
            </a>
        </div>
    );
}
