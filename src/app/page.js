import Image from "next/image";
import TopBar from "./components/nav/top.js";
import "./page.css";

export default () =>{
    return (
        <main className="">
            <TopBar page={"home"} title={"Home"}></TopBar>
            <h2>Hello!</h2>
            <p>This will be the crazy website for me (<a href="https://github.com/marceldobehere">marceldobehere</a>)</p>
        </main>);
}