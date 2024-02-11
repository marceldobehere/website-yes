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
                        src="https://camo.githubusercontent.com/6a0e00060ec5c178f67f7b183f08d9532380e99540f2c714873d2ea50df2c2a5/68747470733a2f2f70726f66696c652d636f756e7465722e676c697463682e6d652f6d617263656c646f6265686572652f636f756e742e737667"></img>
                </div>
            </div>
        </>
    );
};

export default Footer;