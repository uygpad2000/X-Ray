'use-strict'

class xDevice {
    var Mobile = navigator.userAgent.toLowerCase().match(/iphone|ipod|ipad);
    window.alert(typeof(Mobile)+Mobile)
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
