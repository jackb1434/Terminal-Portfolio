// Holds commands for terminal

const home =
"<br>"+
'<span style="color: #83a598;">who</span>' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +'I am me<br>'+
'<span style="color: #83a598;">projects</span>' + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +"View my projects<br>"+
'<span style="color: #83a598;">repo</span>' + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "View project source code (GitHub)<br>"+
'<span style="color: #83a598;">social</span>' + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "View my socials<br>"+
'<span style="color: #83a598;">clear</span>' + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "Clears the terminal";

const projects =
"<br>"+
"Currently I don't have many projects on my profile, however, I am working on a lot including a game engine";

const socials =
"<br>"+
'<a href="https://github.com/jackb1434" target="_blank" style="color: #83a598; text-decoration: underline;">GitHub</a><br>'+
'<a href="https://www.youtube.com/channel/UC6sF6mfM8-pVqkqwxJdcatg" target="_blank" style="color: #83a598; text-decoration: underline;">YouTube</a><br>'

const who =
"<br>"+
"I am me";

var test =
"<br>"+
'<span style="color: red;">Hello!</span>';

var repo =
"<br>"+
'<span style="color: #d3869b;">event</span> - sending you to the GitHub repository!'

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function openGithubRepository(){
    window.open("https://github.com/jackb1434/Terminal-Portfolio", "_blank");
}

function setTitleState(state){
    document.title = state;
}

export function callCommand(command){
    var paragraph = document.getElementById('dyn');

    switch(command){
        case "home":
            paragraph.innerHTML = home;
            setTitleState("Terminal | Home");
            break;
        case "who":
            paragraph.innerHTML = who;
            setTitleState("Terminal | Background");
            break;
        case "projects":
            paragraph.innerHTML = projects;
            setTitleState("Terminal | My Projects");
            break;
        case "socials":
            paragraph.innerHTML = socials;
            setTitleState("Terminal | My Socials");
            break;
        case "clear":
            paragraph.innerHTML = "";
            setTitleState("Terminal");
            break;
        case "repo":
            paragraph.innerHTML = repo;
            setTitleState("Terminal");
            openGithubRepository();
            break;
        case "test":
            paragraph.innerHTML = test;
            break;
    }
}