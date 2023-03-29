'use-strict'

class xDevice {
    let Mobile = navigator.userAgent.toLowerCase().match(/iphone|ipod|ipad);
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
