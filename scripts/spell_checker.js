const error1 = 
'<span style="color: #fb4934;">error </span>';

const error2 =
"&nbsp;" + "is an invalid command, please type 'home' or 'cmds' to see a list of available commands.";

var canAgree = false;

export function spellCheck(inputVal, div){
    var element = document.createElement("p");
    var text = document.createTextNode("error - " + "'" + inputVal + "'" + " is not a valid command.");
    var lineBreak = document.createElement("br");
    
    element.setAttribute("style", "color: #fb4934;");

    element.appendChild(text);
    div.appendChild(element);
    div.appendChild(lineBreak);
}