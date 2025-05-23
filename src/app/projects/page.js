import Image from "next/image";
import TopBar from "../components/nav/top.js";
import "./page.css";
import ProjectEntry from "@/app/components/project/projEntry";

export default () => {
    return (
        <main className="">
            <TopBar page="projects" title="Projects" desc="This is a list of projects from marceldobehere."></TopBar>

            <ProjectEntry title="Goofy Media" link="https://github.com/marceldobehere/goofy-media-front" pictureAlt="A screenshot of goofy media"
                          picture="https://raw.githubusercontent.com/marceldobehere/goofy-media-front/master/imgs/home_screen.png?raw=true">
                This is a text based Social Media Website I am working on. It is based on the decentralized authentication system from Goofy Chat v2.<br/>
                It has lots of cool features to it, the idea behind making it is me
                wanting to make something that I could use instead of <a href="https://en.wikipedia.org/wiki/Cohost">cohost</a>!<br/>
                It is still WIP but in a good state with an &quot;early-access&quot; instance deployed.<br/>
            </ProjectEntry>

            <ProjectEntry title="Goofy Chat App v2" link="https://github.com/marceldobehere/goofy-chat-app-v2" pictureAlt="A screenshot of goofy chat 2"
                          picture="https://github.com/marceldobehere/goofy-chat-app-v2-client/raw/master/imgs/img.png">
                This is the 2nd version of my <a href="https://github.com/marceldobehere/goofy-chat-app">goofy chat app</a>!<br/>
                It has features that goofy chat is missing, like group chats, cross device sync and better media support.<br/>
                Sync is not ideal currently, and maybe I will make a v3 where messages can be stored encrypted on the server.
            </ProjectEntry>

            <ProjectEntry title="MaslOS2" link="https://github.com/marceldobehere/MaslOS-2" pictureAlt="A screenshot of MaslOS2"
                          picture="https://github.com/marceldobehere/MaslOS-2/raw/main/images/demo.png">
                My custom OS! The second version of <a href="https://github.com/marceldobehere/MaslOS">MaslOS</a>.<br/>
                From the outside it might look the same as the original MaslOS, but internally it is very different!<br/>
                The main differnce is it having ELF execution and a normal scheduler.<br/>
            </ProjectEntry>

            <ProjectEntry title="RB-Taktik" link="https://github.com/marceldobehere/rb-taktik" pictureAlt="A screenshot of RB-Taktik ingame"
                          picture="https://github.com/marceldobehere/rb-taktik/raw/master/images/ingame.PNG">
                A goofy web game me and a few others created as our school project.<br/>
                Its like tic tac toe but more crazy because you can overbid pieces.<br/>
                As this is only a school project it won't really be updated anymore.<br/>
                You can still play it <a href="https://rb-taktik.marceldobehere.com">here</a> though!<br/>
            </ProjectEntry>

            <ProjectEntry title="Goofy CPU" link="https://github.com/marceldobehere/goofy-cpu" pictureAlt="A gif showing the cpu in action"
                          picture="https://github.com/marceldobehere/goofy-cpu/raw/main/imgs/cpu%20test%201.gif">
                My custom CPU! It's an 8 bit CPU with my custom instruction set.<br/>
                It is made in logism evolution and will have a (maybe custom) assembler soon.<br/>
                Still very WIP but currently the CPU is aliveee!<br/>
                This is btw my first real attempt at making an actual cpu in logism and I think it is pretty cool.
            </ProjectEntry>

            <ProjectEntry title="MaslOS" link="https://github.com/marceldobehere/MaslOS" pictureAlt="A screenshot of MaslOS"
                          picture="https://github.com/marceldobehere/MaslOS/raw/master/images/thumbnail.PNG">
                My first custom OS! <br/>
                It's 64 bit and mostly written in C++. There are a lot of things already made and it runs on real hardware!<br/>
                I am not actively working on this project, but I still think it is very cool.<br/>
                It has a custom GUI system, audio system, apps, an interpreter for a custom language and some cool apps!
            </ProjectEntry>

            <ProjectEntry title="Goofy Chat App" link="https://github.com/marceldobehere/goofy-chat-app" pictureAlt="A screenshot of goofy chat"
                          picture="https://github.com/marceldobehere/goofy-chat-app/raw/master/images/yes.png">
                It's a goofy secure chat app. I am working on version 2, which will be better!<br/>
                You can try it <a href="https://goofy.marceldobehere.com">here</a>!<br/>
                My user id is 2648350751 if you want to send me a message
            </ProjectEntry>


            <ProjectEntry title="Marcel Engine" link="https://github.com/marceldobehere/Marcel-Engine" pictureAlt="A screenshot of Marcel Engine running a demo game"
                          picture="https://github.com/marceldobehere/Marcel-Engine/raw/main/images/demo%201.PNG">
                This is my custom console based game engine I made in C#.<br/>
                In my opinion, it is pretty simple to use and allows for some cool little console games.<br/>
                Due to the rendering optimizations, it only works on Windows. (or using wine)<br/>
                Using this engine I made a game for a game jam, which you can play <a href="https://marceldobehere.itch.io/a-stony-rpg">here</a>!
            </ProjectEntry>

            <ProjectEntry title="Cooler Text Editor" link="https://github.com/marceldobehere/Cooler-Text-Editor" pictureAlt="A screenshot of Cooler Text Editor with 2 tabs open"
                          picture="https://github.com/marceldobehere/Cooler-Text-Editor/raw/master/images/tabs_with_syntax_highlighting.PNG">
                This is my custom console based Text Editor I made in C#.<br/>
                It has some cool features like syntax highlighting for most languages, themes and a TUI system.<br/>
                The TUI system supports multiple open components, splitters and tabs.<br/>
                Sadly it's missing features like good copy and paste and that's why I don't really use it.<br/>
                Also, if I remember correctly, it should be cross platform.
            </ProjectEntry>

            <ProjectEntry title="Custom Web-Browser/Server" link="https://github.com/marceldobehere/custom-web-browser-and-server" pictureAlt="A screenshot of the main page of the broswer"
                          picture="https://github.com/marceldobehere/custom-web-browser-and-server/raw/main/images/browser.png">
                This is a custom web browser and server I made in Java.<br/>
                It doesn't use normal web requests, but rather a custom protocol.<br/>
                It also doesn't render HTML but a custom markdown language (ROML), with a custom scripting language (ROSL).<br/>
            </ProjectEntry>

            <ProjectEntry title="Goofy Calculator" link="https://github.com/marceldobehere/Calculator-go-brrrrrt" pictureAlt="A screenshot of the calculator"
                          picture="https://github.com/marceldobehere/Calculator-go-brrrrrt/raw/master/calc.PNG">
                This is my goofy calculator I made in C#.<br/>
                It has support for functions and variables and I personally use it a lot.<br/>
                Some features are still missing and the parser is not perfect, but if you use enough brackets it works.<br/>
            </ProjectEntry>

            <ProjectEntry title="Basic 3D Renderer in JS" link="https://github.com/marceldobehere/basic-3d-js-renderer" pictureAlt="A screenshot of the 3d renderer showing a 3d teapot"
                          picture="https://github.com/marceldobehere/basic-3d-js-renderer/raw/master/images/thumb.png">
                This is a simple 3D renderer I made in JS.<br/>
                It can render wireframes well and can kind of render filled triangles.<br/>
                I made it mostly for fun and to learn about 3D rendering.<br/>
            </ProjectEntry>

            <ProjectEntry title="BSSL" link="https://github.com/marceldobehere/BSSL" pictureAlt=""
                          picture="">
                BSSL is a very cursed, interpreted programming language I made in C#.<br/>
                It consists of text, which can be escaped to execute code, which makes it kind of self modifying.<br/>
                You can view it as a bad mix of HTML and JS.<br/>
            </ProjectEntry>

            <ProjectEntry title="Other Projects" link="https://github.com/marceldobehere" pictureAlt="Profile Picture (Is a Rocc)"
                          picture="/img/rocc.png">
                Those were just some of the projects on my <a href="https://github.com/marceldobehere">Github</a>!<br/>
                I have a bunch of other projects and small tools on there, so feel free to take a look at it.<br/>
                This website is also open source, so you can take a look at it <a href="https://github.com/marceldobehere/website-yes">here</a>.
            </ProjectEntry>

        </main>);
}