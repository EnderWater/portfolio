import ListItems from "./ListItems";
import ReactPlayer from "react-player";
import React from "react";
import { useState, useEffect } from "react";

function ProjectDescription({text, projectName, technologies, media}) {

    const styles = {
        project_section: {
            paddingInlineStart:"20vw",
            paddingInline:"20vw",
        },
        list_items: {
            textAlign:"left",
            paddingInlineStart:15,
        },
        section_media: {
            paddingBottom:"20vh",
        }
    }

    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
    ]);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight])
        };

        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [])

    let image = null;
    let video = null;

    if (!Object.is(media.video, null)) {
        video = <ReactPlayer url={media.video}
                             playing={true}
                             loop={true}
                             width={windowSize[0] * .58}
                             height="calc(100% + 2vmin)"
        />
    }
    if (!Object.is(media.picture, null)) {
        image = <img className={projectName.replace(" ", "-") + "-picture"} src={media.picture} alt={""} />
    }

    return(
        // DO NOT UNDER ANY CIRCUMSTANCE CHANGE ID TO CLASSNAME IT WILL BREAK AND I WILL BE PISSED
        <div id={projectName.replace(" ", "-") + "-section"} style={styles.project_section}>
            <div className="section-title">
                <h1 className="section-title">{projectName}</h1>
            </div>
            <div className="section-description">
                <h3>{text}</h3>
            </div>
            <div className="technology-list">
                <div className="technology-list-title">
                    <h3>Technologies used</h3>
                </div>
                <div className="technology-list-items">
                    <ul style={styles.list_items}>
                        <ListItems href={false} listOfItems={technologies} classname={projectName + "-technologies"} />
                    </ul>
                </div>
            </div>
            <div className="section-media" style={styles.section_media}>
                {Object.is(image, null) ? null : image}
                {Object.is(video, null) ? null : video}
            </div>
        </div>
    );
}

export default ProjectDescription;
