'use-strict'

import { xDevice } from './xDevice/xDevice.js'

export function getDeviceType(){
    var Device = new xDevice();
    return Device;
}

export function Create(token){
    
    /*
    *   Function Create(token):
    *     Require:
    *       token:provide a set of DOM Object
    *     Return:
    *       Handler of each created DOM
    */
    
    let DOMHandler = [];
    for (let i = 0; i < token.length; i++) {
        var e = document.createElement(token[i]['tag']);
        var p = document.getElementsByTagName(token[i]['parent'])[token[i]['pindex']];
        p.appendChild(e);
        for (var key in token[i]){
            switch (key){
                case 'parent':
                    break;
                case 'pindex':
                    break;
                case 'text':
                    e.innerHTML=token[i]['text'];
                    continue;
                case 'tag':
                    break;
                default:
                    e.setAttribute(key,token[i][key]);
                    continue;
            }
        }
        DOMHandler.push(e);
    }
    return DOMHandler;
}

export function createAttribute(handler,attributes){
    
    /*
    *   Function createAttribute(handler):
    *     Require:
    *       handler:the handler of the target DOM element
    *       attributes:the attributes attach to handler
    *     Return:
    *       Nothing
    */
    
    window.confirm('Not Finished yet');
    handler.setAttribute(attributes);
    return;
}
