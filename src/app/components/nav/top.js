import React from "react";
import Link from "next/link";
import "./top.css";

const TopBar = ({page, title}) => {
    return (
        <>
            <title>{title}</title>
            <div className="topbar-div">
                <ul className="topbar-list">
                    <li>
                        <Link class={("home" === page ? "link-selected":"link-normal")} href="/"><p>Home</p></Link>
                    </li>
                    <li>
                        <Link class={("about" === page ? "link-selected":"link-normal")} href="/about"><p>About me</p></Link>
                    </li>
                    <li>
                        <Link class={("projects" === page ? "link-selected":"link-normal")} href="/projects"><p>Projects</p></Link>
                    </li>
                    <li>
                        <Link class={("contact" === page ? "link-selected":"link-normal")} href="/contact"><p>Contact me</p></Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default TopBar;