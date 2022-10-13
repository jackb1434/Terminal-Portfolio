import {useEffect} from "react";


const home = 
"who"+ "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +"who am I?<br>"+
"who"+ "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +"who am I?<br>";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function createLineSequence(){
    const terminalDiv = document.getElementById('terminalDiv');

    const newLine = document.createTextNode("HELLO!");
    newLine.className = "event";

    document.body.appendChild(terminalDiv);

    terminalDiv.appendChild(newLine);
}


// send whatever information is in the text area
export function update(event){
    var textArea = document.getElementById('textAreaID');
    var getInfo = null;

    if(textArea.value){
        getInfo = textArea.value;
        callCommand(getInfo);
    }
    else{
        textArea.focus();
    }
}

function callCommand(command){
    var paragraph = document.getElementById('dyn');

    switch(command){
        case "home":
            paragraph.innerHTML = home;
            break;
        case "who":
            paragraph.innerHTML = "user typed who";
            break;
        case "projects":
            paragraph.innerHTML = "user typed projects";
            break;
        case "social":
            paragraph.innerHTML = "user typed social";
            break;
    }
}

// wait to use document after server done rendering
function initilialize(){
    if (typeof window === "object"){
        document.addEventListener("DOMContentLoaded", function(){
            alert('Successfully initialized');
            //document.body.onload = createLineSequence();
        });
    }
}



// reads command
function enterKey(){
    
}

initilialize();