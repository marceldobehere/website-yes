import Image from "next/image";
import TopBar from "./components/nav/top.js";
import "./page.css";

export default () =>{
    return (
        <main className="">
            <TopBar page={"home"} title={"Home"} desc="This is the website of marceldobehere."></TopBar>
            <div className="mainDiv">
                <img className="pfp" src="/img/rocc.png" alt="Profile Picture (Is a Rocc)"></img>
                <h2>Hello!</h2>
                <p>
                    My name is Marcel (aka masl, marceldobehere, marceldarcel or the black magic rocc programmer)<br/>
                    I am a goofy programmer from Austria!<br/>
                    <br/>

                    My passion is programming random stuff I like. (Mostly C#, C++, Java, JS/HTML/CSS)<br/>
                    I have dabbled in a few areas and like experimenting. (Made a few small <a href="https://marceldobehere.itch.io/">games</a> too)<br/>
                    Though I think I currently enjoy making local client apps the most and security/encryption stuff!<br/>
                    I am currently absorbed in the development of my own text based social media, called <a href="https://github.com/marceldobehere/goofy-media-front">Goofy Media</a>.<br/>
                    <br/>

                    Feel free to check out my <a href="https://github.com/marceldobehere">Github</a> or look at the <a href="/projects">projects</a> I have made!<br/>
                    <br/>

                    Feel free to <a href="/contact">contact me</a> if you want to chat or have any questions!<br/>
                    <br/>
                    <br/>

                    Have a nice day!
                </p>
            </div>
        </main>);
}