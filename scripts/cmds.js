// Holds commands for terminal

import { spellCheck } from '../scripts/spell_checker';

/*const home =
"who -" + "Learn about who I am"+
"projects -" + "View my projects"+
"repo -" + "View project source"+
"socials -" + "View my socials"+
"skills -" + "View my current skills"+
"system -" + "View project information"+
"clear" + "Clear the terminal";
*/
const home = [
    'who - who am I?',
    'projects - view my projects',
    'repo - View project source',
    'socials - View my socials',
    'skills - View my current skills',
    'clear - Clear the terminal',
]

const projects = [
"Currently I don't have many projects on my profile, however, I am working on a lot including a game engine"
]
const socials = [
    'Github',
    'YouTube',
    'Stackoverflow'
]

const socialLinks = [
    "https://github.com/jackb1434",
    "https://www.youtube.com/",
    "https://stackoverflow.com/users/15148659/gramgram"
]


const who = [
    "I am me"
]


const test =
'<span style="color: red;">Hello!</span>';

const repo = [
    "event - sending you to the GitHub repository!"
]

const skills = [
"Python | C# | Java | Rust | Web development (Next.js with javascript) | Unity 2D + 3D | Blender"
]

const system = [
    "Author - jackb1434",
    "Framework - Next.js",
    "Version - 0.9.0",
    "Last Updated - 10/25/2022",
    "GitHub Commits - 19"
]


const commands = {
    home: "home",
    who: "who",
    projects : "projects",
    socials: "socials",
    clear : "clear",
    repo : "repo",
    skills : "skills",
    cmds: "cmds",
    system: "system",
    new: "new"
}

function delay(time){
    return new Promise(resolve => setTimeout(resolve, time));
}

async function openGithubRepository(text, div){
    var element = document.createElement("p");
    var textNode = document.createTextNode(text);
    var newLine = document.createElement("br");

    element.appendChild(textNode);
    element.setAttribute("style", "color: #d3869b;");
    div.appendChild(element);
    div.appendChild(newLine);
    
    await delay(1000);
    window.open("https://github.com/jackb1434/Terminal-Portfolio", "_blank");
}

function setTitleState(state){
    document.title = state;
}

async function insertNewElement(text, div,){
    var newLine = document.createElement("br");

    for (var i = 0; i < text.length; i++) {
        var element = document.createElement("p");
        var textNode = document.createTextNode(text[i])

        div.appendChild(element);
        element.appendChild(textNode);
        element.setAttribute("id", "dyn");
        
        await delay(25);
    }

    div.appendChild(newLine);
}

async function insertNewButton(text, div, links){
    var newLine = document.createElement("br");

    for (var i = 0; i < text.length; i++){
        var element = document.createElement("a");
        var textNode = document.createTextNode(text[i]);
        
        // this adds a new line because for some reason javascript likes to just not work and 
        // remove the br element when creating it, so I just created a new <p> element and just
        // add a null value to it and it acts as a <br> element. Nice!
        var line = document.createElement("p");
        var lineNode = document.createTextNode("");

        element.setAttribute("id", "dyn"); // give id
        element.setAttribute("href", links[i]); // give links
        element.setAttribute("target", "_blank"); // set targets
        element.setAttribute("style", "color: #83a59a; text-decoration: underline;") //set styles

        element.appendChild(textNode);
        line.appendChild(lineNode);

        div.appendChild(element);
        div.appendChild(line);

        await delay(25);
    }
    div.appendChild(newLine);
}

export function callCommand(command){
    var paragraph = document.getElementById('dyn');
    const div = document.getElementById('iterm');

    // turn enum into an array
    var all = []
    for (var key in commands){
        all.push(commands[key]);
    }
    commands.all = all;
    // end

    if (all.includes(command)){
        switch(command){
            case commands.home:
                insertNewElement(home, div);
                setTitleState("Terminal | Home");
                break
            case commands.cmds:
                insertNewElement(home, div);
                setTitleState("Terminal | Home");
                break;
            case commands.who:
                insertNewElement(who, div);
                setTitleState("Terminal | Background");
                break;
            case commands.projects:
                insertNewElement(projects, div);
                setTitleState("Terminal | My Projects");
                break;
            case commands.socials:
                insertNewButton(socials, div, socialLinks);
                setTitleState("Terminal | My Socials");
                break;
            case commands.clear:
                div.innerHTML = "";
                setTitleState("Terminal");
                break;
            case commands.repo:
                openGithubRepository(repo, div);
                break;
            case commands.skills:
                insertNewElement(skills, div);
                setTitleState("Terminal | My Skills");
                break;
            case commands.system:
                insertNewElement(system, div);
                setTitleState("Terminal | My Skills");
                break;
            case commands.new:
                insertNewElement(document, div);
                break;
            case "test":
                paragraph.innerHTML = test;
                break;
        }
    }
    else{
        spellCheck(command, div);
    }
}