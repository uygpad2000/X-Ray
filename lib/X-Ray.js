'use-strict'

function Create(token){
    for (let i = 0; i < token.length; i++) {
        var e = document.createElement(token[i]['tag']);
        var p = document.getElementsByTagName(token[i]['parent'])[token[i]['pindex']];
        p.appendChild(e);
        e.innerHTML=token[i]['text'];
    }
}