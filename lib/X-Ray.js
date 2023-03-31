'use-strict'

import { xDevice } from './xDevice/xDevice.js'

export function getDeviceType(){
    var Device = new xDevice();
    return Device;
}

export function Create(token){
    for (let i = 0; i < token.length; i++) {
        var e = document.createElement(token[i]['tag']);
        var p = document.getElementsByTagName(token[i]['parent'])[token[i]['pindex']];
        p.appendChild(e);
        e.innerHTML=token[i]['text'];
        for (var key in token[i]){
            switch (key){
                case 'text':
                    break;
                case 'parent':
                    break;
                case 'tag':
                    break;
                case 'pindex':
                    break;
                default:
                    e.setAttribute(key,token[i][key]);
                    continue;
            }
        }
    }
    return;
}
