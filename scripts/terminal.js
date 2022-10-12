import {useEffect} from "react";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function createLineSequence(){
    const terminalDiv = document.createElement("div");
    terminalDiv.className = "terminal";

    const newLine = document.createTextNode("HELLO!");
    newLine.className = "event";

    document.body.appendChild(terminalDiv);

    terminalDiv.appendChild(newLine);
}

// wait to use document after server done rendering
function initilialize(){
    if (typeof window === "object"){
        document.addEventListener("DOMContentLoaded", function(){
            alert('Successfully initialized');
            document.body.onload = createLineSequence();
        });
    }
}

initilialize();