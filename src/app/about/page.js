import Image from "next/image";
import TopBar from "../components/nav/top.js";

export default () => {
    return (
        <main className="">
            <TopBar page={"about"} title={"About me"}></TopBar>
            A
        </main>);
}