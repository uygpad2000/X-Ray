/* 

    X-Ray Framework Version 2.0.1
    Support the following feature
        1.Virtual DOM

*/

'Use-Strict'

function Generate(ObjList) {
    for (let index = 0; index < ObjList.length; index++) {
        var UISet = ObjList[index];
        for (var key in UISet) {
            if (UISet['Tag']==undefined){
                ObjList.splice(index,1);
                index--;
                }
            switch (key) {
                case 'Tag':
                    var n = document.createElement(UISet[key]);
                    if (UISet['Parent']!=undefined){
                        var i = 0;
                        if (UISet['Index']!=undefined){
                            i = UISet['Index'];
                        }
                        var p = document.getElementsByTagName(UISet['Parent'])[i];
                        p.appendChild(n);
                    }
                    else{
                        document.body.appendChild(n);
                    }
                    break;
            
                case 'Text':
                    n.innerText = UISet[key];
                    break;

                default:
                    n.setAttribute(key,UISet[key]);
                    break;
            }
        }
    }
    return;
}