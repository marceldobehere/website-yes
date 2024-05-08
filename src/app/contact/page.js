import TopBar from "../components/nav/top.js";
import "./page.css";

export default () => {
    return (
        <main className="">
            <TopBar page={"contact"} title={"Contact me"}></TopBar>
            <div className="mainDiv">
                <div className="main-title">
                    <h1>Contact Me</h1>
                    <img className="pfp" src="/img/rocc.png" alt="Profile Picture (Is a Rocc)"></img>
                </div>

                <p className="contact-text">
                    Here are some ways to contact me!<br/>
                    For casual chats feel free to reach me via discord!<br/>
                    For business inquiries, email is the best way to reach me!<br/>
                    If you have any issues with my projects, feel free to open an issue on my github!<br/>
                </p>
                <br/>
                <hr/>

                <h2>Discord</h2>
                <p>
                    My discord is <a href={"https://discordapp.com/users/537636014693548052"}>@marceldarcel</a>.<br/>
                    I am very active on discord so don't be afraid to send me a friend request there!
                </p>

                <h2>Github</h2>
                <p>
                    My github is <a href={"https://github.com/marceldobehere"}>marceldobehere</a>.<br/>
                    Feel free to look at my projects and open issues if you encounter any!<br/>
                </p>

                <h2>Email</h2>
                <p>
                    You can send me an email <a href={"mailto:marcel.z2006@gmail.com"}>here</a>.<br/>
                    I check my mails at least once a day, so expect a response within that time.
                </p>

                <h2>Goofy Chat</h2>
                <p>
                    You can send me a message on <a href={"https://goofy.marceldobehere.com"}>goofy chat</a>!<br/>
                    My user id is: 2648350751.<br/>
                    Just note that I'm rarely online there, especially because I am working on v2!
                </p>
            </div>
        </main>
    );
}