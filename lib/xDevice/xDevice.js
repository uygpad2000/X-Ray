'use-strict'

class xDevice {
    var Mobile = navigator.userAgent.toLowerCase().match(/iphone|ipod|ipad);
    constructor() {
        if (Mobile==null){
    
            this.platform = 'Mobile';
        }
        else{
            this.platform = 'Desktop';
        }
    }

}

export {xDevice}
