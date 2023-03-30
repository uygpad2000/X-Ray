'use-strict'

import { xDevice } from './xDevice/xDevice.js'

function getDeviceType(){
    var xDevice = new xDevice();
    document.write(xDevice.platform)
    return;
}

function Create(token){
    for (let i = 0; i < token.length; i++) {
        let e = document.createElement(token[i]['tag']);
        var p = document.getElementsByTagName(token[i]['parent'])[token[i]['pindex']];
        p.appendChild(e);
        e.innerHTML=token[i]['text'];
    for (key in token[i]){
        switch (key){
            case 'text':
                break;
            case 'parent':
                break;
            case 'tag':
                break;
            default
                e.setAttribute(key,token[i][key]);
                continue;
        }
        }
    }

}
export { getDeviceType,Create }
