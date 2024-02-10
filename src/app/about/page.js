import Image from "next/image";
import TopBar from "../components/nav/top.js";

export default () => {
    return (
        <main className="">
            <TopBar page={"about"} title={"About me"}></TopBar>
            <h2>Hello!</h2>
            <p>I shall add more info here soon!
            </p>
        </main>);
}