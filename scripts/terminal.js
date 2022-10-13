import { callCommand } from "../scripts/cmds";


// send whatever information is in the text area
export function update(){
    var textArea = document.getElementById('textAreaID');
    var getInfo = null;

    textArea.addEventListener('keypress', function(e) {
        if(textArea.value){
            if (e.key === 'Enter'){
                getInfo = textArea.value;
                callCommand(getInfo);
                textArea.value = '';
            }
            else{
                textArea.focus();
            }
        }
    })
}


// wait to use document after server done rendering
function initilialize(){
    if (typeof window === "object"){
        document.addEventListener("DOMContentLoaded", function(){
            alert('Successfully initialized');
            update(); // call function to listen to input
        });
    }
}

initilialize();