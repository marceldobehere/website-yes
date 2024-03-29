import React from "react";
import "./top.css";

const TopBar = ({page, title}) => {
    return (
        <>
            <title>{title}</title>
            <div className="topbar-div">
                <ul className="topbar-list">
                    <li className={("home" === page ? "link-selected":"link-normal")}>
                        <a href="/">Home</a>
                    </li>
                    <li className={("about" === page ? "link-selected":"link-normal")}>
                        <a href="/about/">About me</a>
                    </li>
                    <li className={("projects" === page ? "link-selected":"link-normal")}>
                        <a href="/projects/">Projects</a>
                    </li>
                    <li className={("contact" === page ? "link-selected":"link-normal")} >
                        <a href="/contact/">Contact me</a>
                    </li>
                </ul>
            </div>
            <br/>
        </>
    );
};

export default TopBar;