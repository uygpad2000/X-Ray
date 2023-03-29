'use-strict'
let Mobile = navigator.userAgent.toLowerCase().match('iphone'|'ipod'|'ipad');

class xDevice {
    alert(typeof(Mobile)+Mobile);
    constructor() {
//         if (Mobile==null){
    
//             this.platform = 'Mobile';
//         }
//         else{
//             this.platform = 'Desktop';
//         }
//     }

}

export {xDevice}
