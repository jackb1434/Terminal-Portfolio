import { CallCommand } from "./cmds";
import {useEffect, useState} from 'react';


export function RunService(){
    useEffect(() =>{
        document.getElementById("title").innerHTML = "Bruh";
    });
}

