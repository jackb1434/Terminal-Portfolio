const error1 = 
'<span style="color: #fb4934;">error </span>';

const error2 =
"&nbsp;" + "is an invalid command, please type 'home' or 'cmds' to see a list of available commands.";

var canAgree = false;

export function spellCheck(inputVal){
    return error1 + " - '" + inputVal + "'" + error2;
}