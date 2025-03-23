import React from "react";
import "./top.css";

const TopBar = ({page, title, desc}) => {
    return (
        <>
            <title>{title}</title>
            <meta type="description" content={desc}></meta>
            <meta httpEquiv="Cache-Control" content="public, max-age=86400, must-revalidate"/>
            <div className="topbar-div">
                <ul className="topbar-list">
                    <li className={("home" === page ? "link-selected" : "link-normal")}>
                        <a href="/">Home</a>
                    </li>
                    <li className={("about" === page ? "link-selected" : "link-normal")}>
                        <a href="/about/">About me</a>
                    </li>
                    <li className={("projects" === page ? "link-selected" : "link-normal")}>
                        <a href="/projects/">Projects</a>
                    </li>
                    <li className={("contact" === page ? "link-selected" : "link-normal")}>
                        <a href="/contact/">Contact me</a>
                    </li>
                </ul>
            </div>
            <br/>
        </>
    );
};

export default TopBar;