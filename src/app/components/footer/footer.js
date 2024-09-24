import React from "react";
import "./footer.css";

const Footer = ({page, title}) => {
    return (
        <>
            <div className="footer-div">
                <p>© 2024 Marcel Zietek</p>
                <div className="footer-visitor-div">
                    <p>Visitor count:&nbsp;</p>
                    <img
                        src="https://profile-counter.glitch.me/marceldobehere/count.svg"></img>
                </div>
            </div>
        </>
    );
};

export default Footer;