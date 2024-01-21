/* eslint-disable react/prop-types */
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="footer">
            <hr className="border" />
            <div className="flex footer__details">
                <a
                    href="https://www.linkedin.com/in/jorge-gomez-8365779a/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaLinkedin className="logo color-primary" />
                </a>
            </div>
        </div>
    );
}
