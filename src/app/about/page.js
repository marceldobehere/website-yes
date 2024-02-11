import Image from "next/image";
import TopBar from "../components/nav/top.js";
import "./page.css";

export default () => {
    return (
        <main className="">
            <TopBar page={"about"} title={"About me"}></TopBar>
            <div className="mainDiv">
                <h2>Hello!</h2>
                <p>
                    I shall add more info here soon!
                </p>
            </div>
        </main>);
}