/* eslint-disable react/prop-types */

export default function ProjectImage({ src }) {

    return (
        <div className="image__container">
            <img className="project__image" src={src} alt="project preview" />
        </div>
    );
}
