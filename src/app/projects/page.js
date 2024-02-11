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
            </ProjectEntry>

            <ProjectEntry title="MaslOS" link="https://github.com/marceldobehere/MaslOS" picture="https://github.com/marceldobehere/MaslOS/raw/master/images/thumbnail.PNG">
                My first custom OS! <br/>
                It's 64 bit and mostly written in C++. There are a lot of things already made and it runs on real hardware!
            </ProjectEntry>

            <ProjectEntry title="Goofy Chat App" link="https://github.com/marceldobehere/goofy-chat-app" picture="https://github.com/marceldobehere/goofy-chat-app/raw/master/images/yes.png">
                It's a goofy secure chat app. I am working on version 2, which will be better!<br/>
                You can try it <a href="https://goofy.marceldobehere.com">here</a>!<br/>
                My user id is 2648350751 if you want to send me a message
            </ProjectEntry>

            <ProjectEntry title="Goofy Chat App v2" link="https://github.com/marceldobehere/goofy-chat-app-v2" picture="">
                This will be the 2nd version of <a href="https://github.com/marceldobehere/goofy-chat-app">goofy chat app</a>!<br/>
                Still very very very WIP!
            </ProjectEntry>

            <ProjectEntry title="Marcel Engine" link="https://github.com/marceldobehere/Marcel-Engine" picture="https://github.com/marceldobehere/Marcel-Engine/raw/main/images/demo%201.PNG">
                Description
            </ProjectEntry>

            <ProjectEntry title="Cooler Text Editor" link="https://github.com/marceldobehere/Cooler-Text-Editor" picture="https://github.com/marceldobehere/Cooler-Text-Editor/raw/master/images/tabs_with_syntax_highlighting.PNG">
                Description
            </ProjectEntry>

            <ProjectEntry title="Custom Web-Browser/Server" link="https://github.com/marceldobehere/custom-web-browser-and-server" picture="https://github.com/marceldobehere/custom-web-browser-and-server/raw/main/images/browser.png">
                Description
            </ProjectEntry>

            <ProjectEntry title="Goofy Calculator" link="https://github.com/marceldobehere/Calculator-go-brrrrrt" picture="https://github.com/marceldobehere/Calculator-go-brrrrrt/raw/master/calc.PNG">
                Description
            </ProjectEntry>

            <ProjectEntry title="BSSL" link="https://github.com/marceldobehere/BSSL" picture="">
                Description
            </ProjectEntry>

        </main>);
}