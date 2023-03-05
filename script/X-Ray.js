/* 

    X-Ray Framework Version 2.00

*/

'use-strict'
function Create(ObjList){

    var begin = performance.now()
    for (let i = 0; i < ObjList.length; i++) {
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
        t.innerText = ObjList[i]['Text'];
    }
    var end =performance.now()
    var time = end-begin
    console.log('it takes '+`${time}`+' second to generate all element')
    return;
}