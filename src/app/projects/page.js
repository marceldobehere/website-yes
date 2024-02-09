import Image from "next/image";
import TopBar from "../components/nav/top.js";
import "./page.css";

export default () => {
    return (
        <main className="">
            <TopBar page={"projects"} title={"Projects"}></TopBar>
            <h2><a href="https://github.com/marceldobehere/MaslOS-2">MaslOS2</a></h2>
            <p>My custom OS! The second version of <a href="https://github.com/marceldobehere/MaslOS">MaslOS</a>.</p>

            <h2><a href="https://github.com/marceldobehere/goofy-chat-app">Goofy Chat</a></h2>
            <p>It's a goofy secure chat app. I am working on version 2, which will be better!</p>
            <p>You can try it <a href="https://goofy.marceldobehere.com">here</a>!</p>
            <p>My user id is 2648350751 if you want to send me a message</p>
        </main>);
}