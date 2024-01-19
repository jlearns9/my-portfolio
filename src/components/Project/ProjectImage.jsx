/* eslint-disable react/prop-types */

export default function ProjectImage({ src }) {

    return (
        <>
            <img className="project__image" src={src} alt="project preview" />
        </>
    );
}
