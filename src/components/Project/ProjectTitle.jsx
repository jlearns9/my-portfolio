/* eslint-disable react/prop-types */
import { FaLinkedin } from "react-icons/fa";

export default function ProjectTitle({ link, children }) {
    return (
        <div className="flex project__header">
            <h3 className="project__title">{children}</h3>
            <a
                href={link}
                target="_blank"
                rel="noreferrer"
            >
                <FaLinkedin className="color-primary logo" />
            </a>
        </div>
    );
}
