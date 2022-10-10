// Holds all of the commands for the terminal


var home = [
    "who             Who am I?",
    "projects        View my projects!",
    "social          View my socials."
]

var who = [
    "My name is Jack and I have been developing for around 2 years now",
]

var projects = [
    "I dont have many projects out at the moment, but I am working on a few behind the scenes right now",
    "including: a game engine writtin in C#, a website that creates minecraft texture packs, and some games"
]

var social = [
    "You can find me on:",
    "GitHub: ",
    "YouTube: ",
    "Twitter: ",
    "Discord: "
]

// Sends command to the terminal when user calls it
export function CallCommand(command){
    switch(command){
        case "home":
            console.log("user called home");
            
            //return home;
        case "who":
            console.log("user calld who");
            return who;
        case "projects":
            console.log("user called projects");
            return projects;
        case "social":
            console.log("user called social");
            return social;
    }
}