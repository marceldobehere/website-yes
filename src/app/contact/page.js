import Image from "next/image";
import TopBar from "../components/nav/top.js";

export default () => {
    return (
        <main className="">
            <TopBar page={"contact"} title={"Contact me"}></TopBar>
            <h2>Discord</h2>
            <p>My discord is <a href={"https://discordapp.com/users/537636014693548052"}>@marceldarcel</a>.<br/>
            Feel free to send me a message there!</p>

            <h2>Github</h2>
            <p>My github is <a href={"https://github.com/marceldobehere"}>@marceldobehere</a>.</p>

            <h2>Email</h2>
            <p>You can send me an email <a href={"mailto:marcel.z2006@gmail.com"}>here</a>.</p>


                <h2>Goofy Chat</h2>
            <p>You can send me a message on <a href={"https://goofy.marceldobehere.com"}>goofy chat</a>!<br/>
            My user id is: 2648350751.</p>

        </main>);
}