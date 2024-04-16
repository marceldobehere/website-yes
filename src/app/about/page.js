"use client";
import TopBar from "../components/nav/top.js";
import "./page.css";
import React, { useState, useEffect } from 'react'

function getAge() {
    const dayOfBirth = new Date();
    dayOfBirth.setFullYear(2006);
    dayOfBirth.setMonth(3); // Months are 0 indexed???
    dayOfBirth.setDate(17);
    dayOfBirth.setHours(0);
    dayOfBirth.setMinutes(0);
    dayOfBirth.setSeconds(0);

    const today = new Date();

    let age = today.getFullYear() - dayOfBirth.getFullYear();

    const m = today.getMonth() - dayOfBirth.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < dayOfBirth.getDate())) {
        age--;
    }

    let bday = (today.getMonth() === dayOfBirth.getMonth() && today.getDate() === dayOfBirth.getDate());

    return {age:age, bday: bday};
}

export default () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        let bDayRes = getAge();
        let bruhus = <span> <b>(Birthday today)</b> </span>;

        setData(<span>{`${bDayRes.age}`} year old{((bDayRes.bday)? bruhus : " ")}</span>)
    }, []);

    return (
    <main>
        <TopBar page={"about"} title={"About me"}></TopBar>
        <div className="mainDiv">
            <h2>An Introduction</h2>
            <p>
                My name is Marcel Zietek and I am a {data ? data : "?? year old"} goofy guy from Austria!<br/>
                As you might be able to tell, I love programming and I like making all sorts of goofy things!<br/>
                Most of my stuff is public on github, because why not? Also I am known for my black magic code, which
                you should not question.<br/>
                I am also a big fan of the cold and snow!<br/>
            </p>
            <br/>

            <h2>Hobbies</h2>
            <div>
                <ul className="goofy-list">
                    <li>Sleep</li>
                    <li>Relax/Chill/Laze around</li>
                    <li>Program</li>
                    <li>Watch Anime/Youtube/Shows/Movies/etc.</li>
                    <li>Bathe</li>
                </ul>
            </div>
            <br/>

            <h2>Games</h2>
            <div>
                I am not currently playing a lot of games.<br/>
                Currently it's mostly just <a href="https://www.nekoatsume.com/en/">Neko Atsume</a> and <a href="https://tetr.io">Tetrio</a>.<br/>
                <br/>
                Games I recommend/like:<br/>
                <ul className="goofy-list">
                    <li><a href="https://undertale.com">Undertale</a> / <a href="https://deltarune.com">Deltarune</a></li>
                    <li><a href="https://www.omori-game.com">Omori</a></li>
                    <li><a href="https://store.steampowered.com/app/420530/OneShot/">Oneshot</a></li>
                    <li><a href="https://en.unreal-life.net">Unreal Life</a></li>
                    <li><a href="https://www.laytonseries.com/naen/">Professor Layton Games</a></li>
                    <li><a href="https://www.minecraft.net/de-de">Minecraft</a></li>
                    <li><a href="https://www.trombonechamp.com">Trombone Champ</a></li>
                    <li><a href="https://store.steampowered.com/app/367450/Poly_Bridge/">Poly Bridge</a></li>
                    <li><a href="https://en.wikipedia.org/wiki/Animal_Crossing">Animal Crossing (3DS)</a></li>
                    <li><a href="https://en.wikipedia.org/wiki/LittleBigPlanet_(2008_video_game)">Little Big Planet</a></li>
                    <li><a href="https://en.wikipedia.org/wiki/Super_Mario_Maker">Super Mario Maker (1 and 2)</a></li>
                </ul>
            </div>
            <br/>

            <h2>Programming languages I know</h2>
            <div>
                <ul className="goofy-list">
                <li>C#, C++, Java, Python</li>
                    <li>HTML, CSS, JS</li>
                    <li>NodeJS, NextJS</li>
                    <li>SQL, T-SQL, MySQL, PL/SQL</li>
                    <li>Batch, Bash</li>
                </ul>
            </div>
            <br/>

            <h2>Programming languages I made</h2>
            <div>
                <ul className="goofy-list">
                    <li><a href="https://github.com/marceldobehere/MAAL-Marcels-Amazing-Assembly-Language">MAAL</a> -
                        The compiled language for <a href="https://github.com/marceldobehere/MaslOS-2">MaslOS(1/2)</a>.
                    </li>
                    <li><a href="https://github.com/marceldobehere/S-CODE-TO-BF">S-CODE</a> - A goofy programming
                        language that compiles to Brainfuck
                    </li>
                    <li><a href="https://github.com/marceldobehere/custom-web-browser-and-server">ROSL/ROML</a> - The
                        markup/scripting langs for my <a
                            href="https://github.com/marceldobehere/custom-web-browser-and-server">custom java web
                            browser/server</a>.
                    </li>
                    <li><a href="https://github.com/marceldobehere/M-CODE">M-CODE</a> - A goofy interpreted language
                        with a full IDE made in <a href="https://scratch.mit.edu">Scratch</a>.
                    </li>
                    <li><a href="https://github.com/marceldobehere/BSSL">BSSL</a> - A cursed self modifying programming
                        language.
                    </li>
                </ul>
            </div>
            <br/>

            <h2>Technologies I know</h2>
            <div>
                <ul className="goofy-list">
                    <li>Source-Control</li>
                    <ul className="goofy-list">
                        <li>Github, Github Desktop</li>
                        <li>Git</li>
                    </ul>
                    <li>Web-Dev</li>
                    <ul className="goofy-list">
                        <li>Node</li>
                        <li>Deno</li>
                        <li>Postman</li>
                    </ul>
                    <li>Game-Dev</li>
                    <ul className="goofy-list">
                        <li>Unity</li>
                    </ul>
                    <li>Project Management / Collaboration</li>
                    <ul className="goofy-list">
                        <li>Jira</li>
                        <li>Trello</li>
                        <li>Figma</li>
                    </ul>
                    <li>IDEs</li>
                    <ul className="goofy-list">
                        <li>Visual Studio</li>
                        <li>VS Code</li>
                        <li>JetBrains-IDEs</li>
                    </ul>
                    <li>Other Tools</li>
                    <ul className="goofy-list">
                        <li>Docker</li>
                    </ul>
                </ul>
            </div>
            <br/>
        </div>
    </main>);
}