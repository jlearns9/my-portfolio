/* eslint-disable react/prop-types */
import { CiLinkedin } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";

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
                    <CiLinkedin className="logo text-color" />
                </a>
                <a
                    href="https://www.linkedin.com/in/jorge-gomez-8365779a/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <CiTwitter className="logo text-color" />
                </a>
            </div>
        </div>
    );
}
