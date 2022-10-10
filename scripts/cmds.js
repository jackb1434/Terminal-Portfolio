// Holds all of the commands for the terminal


home = [
    "who             Who am I?",
    "projects        View my projects!",
    "social          View my socials."
]

who = [
    "My name is Jack and I have been developing for around 2 years now",
]

projects = [
    "I dont have many projects out at the moment, but I am working on a few behind the scenes right now",
    "including: a game engine writtin in C#, a website that creates minecraft texture packs, and some games"
]

social = [
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
            return home;
            break;
        case "who":
            return who;
            break;
        case "projects":
            return projects;
            break;
        case "social":
            return social;
            break;
    }
}