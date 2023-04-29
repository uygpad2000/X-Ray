'use-strict'

export function generateElement(token){
    if (token instanceof Array){
        let handler = new Array;
        for(let i=0;i<token.length;i++){
            let f=document.createDocumentFragment();
            let e=document.createElement(token[i].tag);
            let p=document.getElementsByTagName(token[i].parent)[token[i].pindex];
            for (let key in token[i]) {
                switch (key.toLowerCase()) {
                    case 'parent':
                    case 'pindex':
                    case 'tag':
                        break;
                    case 'text':
                        e.innerText = token[i][key];
                        break;
                    default:
                        e.setAttribute(key,token[i][key]);
                        break;
                }
            }
            f.appendChild(e);
            handler.push(e);
        p.appendChild(f);
        }
        return handler;
    }
    else{
        let e=document.createElement(token.tag);
        let p=document.getElementsByTagName(token.parent)[token.pindex];
        for (let key in token) {
            switch (key.toLowerCase()) {
                case 'parent':
                case 'pindex':
                case 'tag':
                    break;
                case 'text':
                    e.innerText = token.key;
                    break;
                default:
                    e.setAttribute(key,token.key);
                    break;
            }
        }
        return e;
    }
}