// Holds commands for terminal

const home =
'<span style="color: #83a598;">who</span>' + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +'Learn about who I am<br>'+
'<span style="color: #83a598;">projects</span>' + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +"View my projects<br>"+
'<span style="color: #83a598;">repo</span>' + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "View project source code (GitHub)<br>"+
'<span style="color: #83a598;">socials</span>' + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "View my socials<br>"+
'<span style="color: #83a598;">skills</span>' + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "View my current skills<br>"+
'<span style="color: #83a598;">clear</span>' + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "Clears the terminal";

const projects =
"Currently I don't have many projects on my profile, however, I am working on a lot including a game engine";

const socials =
'<a href="https://github.com/jackb1434" target="_blank" style="color: #83a598; text-decoration: underline;">GitHub</a><br>'+
'<a href="https://www.youtube.com/channel/UC6sF6mfM8-pVqkqwxJdcatg" target="_blank" style="color: #83a598; text-decoration: underline;">YouTube</a><br>'

const who =
"I am me";

const test =
'<span style="color: red;">Hello!</span>';

const repo =
'<span style="color: #d3869b;">event</span> - sending you to the GitHub repository!'

const skills =
"Python | C# | Java | Rust | Web development (Next.js with javascript) | Unity 2D + 3D | Blender";

const error =
'<span style="color: #fb4934;">error</span>' + "&nbsp;" + "- invalid command, please type 'home' or 'cmds' to see a list of available commands.";

const commands = {
    home: "home",
    who: "who",
    projects : "projects",
    socials: "socials",
    clear : "clear",
    repo : "repo",
    skills : "skills",
    cmds: "cmds"
}

function delay(time){
    return new Promise(resolve => setTimeout(resolve, time));
}

async function openGithubRepository(text){
    text.innerHTML = repo;
    await delay(1000);
    window.open("https://github.com/jackb1434/Terminal-Portfolio", "_blank");
}

function setTitleState(state){
    document.title = state;
}

export function callCommand(command){
    var paragraph = document.getElementById('dyn');

    var all = []
    for (var key in commands){
        all.push(commands[key]);
    }
    commands.all = all;

    if (all.includes(command)){
        switch(command){
            case commands.home:
                paragraph.innerHTML = home;
                setTitleState("Terminal | Home");
                break
            case commands.cmds:
                paragraph.innerHTML = home;
                setTitleState("Terminal | Home");
                break;
            case commands.who:
                paragraph.innerHTML = who;
                setTitleState("Terminal | Background");
                break;
            case commands.projects:
                paragraph.innerHTML = projects;
                setTitleState("Terminal | My Projects");
                break;
            case commands.socials:
                paragraph.innerHTML = socials;
                setTitleState("Terminal | My Socials");
                break;
            case commands.clear:
                paragraph.innerHTML = "";
                setTitleState("Terminal");
                break;
            case commands.repo:
                //paragraph.innerHTML = repo;
                openGithubRepository(paragraph);
                break;
            case commands.skills:
                setTitleState("Terminal | My Skills");
                paragraph.innerHTML = skills;
                break;
            case "test":
                paragraph.innerHTML = test;
                break;
        }
    }
    else{
        paragraph.innerHTML = error;
    }
}