import "./projEntry.css";

const ProjectEntry = ({title, link, children, picture, pictureAlt}) => {
    return (
        <>
            <div className={"project-entry-main"}>
                <div className={"project-entry-text"}>
                    <h2><a href={link} target="_blank">{title}</a></h2>
                    <p>{children}</p>
                </div>
                {
                    (picture !== "") ?
                        <img className={"project-entry-image"} src={picture} alt={pictureAlt}></img> :
                        <></>
                }
            </div>
        </>
    );
};

export default ProjectEntry;