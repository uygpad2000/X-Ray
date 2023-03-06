/* 

    X-Ray Framework Version 2.00

*/

'use-strict'

function bindEvent(Tag,Function,Index=0){

    var t = document.getElementsByTagName(Tag)[Index];
    t.onclick = Function;
    return;
}


function Create(ObjList){

    for (var i = 0; i < ObjList.length; i++) {
        if (typeof(ObjList[i]['Tag']) == 'undefined'){
            console.error('No Tagname');
            return;
        }
        if (typeof(ObjList[i]['Parent']) == 'undefined'){
            var t = document.createElement(ObjList[i]['Tag']);
            document.body.appendChild(t);
        }
        else{
            var p = document.getElementsByTagName(ObjList[i]['Parent'])[0];
            var t = document.createElement(ObjList[i]['Tag']);
            p.appendChild(t);
        }

        // use a switch case to attach all
        // the attributes to DOM Element
        for (var key in ObjList[i]){
            switch (key) {
                case 'Text':
                    t.innerText = ObjList[i][key]
                    break;
                case 'Parent':
                    break;
                case 'Tag':
                    break;
                default:
                    t.setAttribute(key,ObjList[i][key]);
                    break;
            }
        }
    }
    return;
}