import Image from "next/image";
import TopBar from "../components/nav/top.js";
import "./page.css";
import ProjectEntry from "@/app/components/project/projEntry";

export default () => {
    return (
        <main className="">
            <TopBar page="projects" title="Projects"></TopBar>

            <ProjectEntry title="MaslOS2" link="https://github.com/marceldobehere/MaslOS-2" picture="https://github.com/marceldobehere/MaslOS-2/raw/main/images/demo.png">
                My custom OS! The second version of <a href="https://github.com/marceldobehere/MaslOS">MaslOS</a>.<br/>
                From the outside it might look the same as the original MaslOS, but internally it is very different!<br/>
                The main differnce is it having ELF execution and a normal scheduler.<br/>
                I am actively working on this project (and on some others).
            </ProjectEntry>

            <ProjectEntry title="MaslOS" link="https://github.com/marceldobehere/MaslOS" picture="https://github.com/marceldobehere/MaslOS/raw/master/images/thumbnail.PNG">
                My first custom OS! <br/>
                It's 64 bit and mostly written in C++. There are a lot of things already made and it runs on real hardware!<br/>
                I am not actively working on this project, but I still think it is very cool.<br/>
                It has a custom GUI system, audio system, apps, an interpreter for a custom language and some cool apps!
            </ProjectEntry>

            <ProjectEntry title="Goofy Chat App" link="https://github.com/marceldobehere/goofy-chat-app" picture="https://github.com/marceldobehere/goofy-chat-app/raw/master/images/yes.png">
                It's a goofy secure chat app. I am working on version 2, which will be better!<br/>
                You can try it <a href="https://goofy.marceldobehere.com">here</a>!<br/>
                My user id is 2648350751 if you want to send me a message
            </ProjectEntry>

            <ProjectEntry title="Goofy Chat App v2" link="https://github.com/marceldobehere/goofy-chat-app-v2" picture="">
                This will be the 2nd version of <a href="https://github.com/marceldobehere/goofy-chat-app">goofy chat app</a>!<br/>
                I want this to have the features that goofy chat is missing, like group chats, cross device sync and maybe a command line interface.<br/>
                Still very very very WIP!
            </ProjectEntry>

            <ProjectEntry title="Marcel Engine" link="https://github.com/marceldobehere/Marcel-Engine" picture="https://github.com/marceldobehere/Marcel-Engine/raw/main/images/demo%201.PNG">
                This is my custom console based game engine I made in C#.<br/>
                In my opinion, it is pretty simple to use and allows for some cool little console games.<br/>
                Due to the rendering optimizations, it only works on Windows. (or using wine)<br/>
                Using this engine I made a game for a game jam, which you can play <a href="https://marceldobehere.itch.io/a-stony-rpg">here</a>!
            </ProjectEntry>

            <ProjectEntry title="Cooler Text Editor" link="https://github.com/marceldobehere/Cooler-Text-Editor" picture="https://github.com/marceldobehere/Cooler-Text-Editor/raw/master/images/tabs_with_syntax_highlighting.PNG">
                This is my custom console based Text Editor I made in C#.<br/>
                It has some cool features like syntax highlighting for most languages, themes and a TUI system.<br/>
                The TUI system supports multiple open components, splitters and tabs.<br/>
                Sadly it's missing features like good copy and paste and that's why I don't really use it.<br/>
                Also, if I remember correctly, it should be cross platform.
            </ProjectEntry>

            <ProjectEntry title="Custom Web-Browser/Server" link="https://github.com/marceldobehere/custom-web-browser-and-server" picture="https://github.com/marceldobehere/custom-web-browser-and-server/raw/main/images/browser.png">
                This is a custom web browser and server I made in Java.<br/>
                It doesn't use normal web requests, but rather a custom protocol.<br/>
                It also doesn't render HTML but a custom markdown language (ROML), with a custom scripting language (ROSL).<br/>
            </ProjectEntry>

            <ProjectEntry title="Goofy Calculator" link="https://github.com/marceldobehere/Calculator-go-brrrrrt" picture="https://github.com/marceldobehere/Calculator-go-brrrrrt/raw/master/calc.PNG">
                This is my goofy calculator I made in C#.<br/>
                It has support for functions and variables and I personally use it a lot.<br/>
                Some features are still missing and the parser is not perfect, but if you use enough brackets it works.<br/>
            </ProjectEntry>

            <ProjectEntry title="Basic 3D Renderer in JS" link="https://github.com/marceldobehere/basic-3d-js-renderer" picture="https://github.com/marceldobehere/basic-3d-js-renderer/raw/master/images/thumb.png">
                This is a simple 3D renderer I made in JS.<br/>
                It can render wireframes well and can kind of render filled triangles.<br/>
                I made it mostly for fun and to learn about 3D rendering.<br/>
            </ProjectEntry>

            <ProjectEntry title="BSSL" link="https://github.com/marceldobehere/BSSL" picture="">
                BSSL is a very cursed, interpreted programming language I made in C#.<br/>
                It consists of text, which can be escaped to execute code, which makes it kind of self modifying.<br/>
                You can view it as a bad mix of HTML and JS.<br/>
            </ProjectEntry>

        </main>);
}