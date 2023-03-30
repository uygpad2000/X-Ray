'use-strict'

var Mobile = navigator.userAgent.toLowerCase().match('iphone'|'ipod'|'ipad');

class xDevice {
    constructor() {
        if (Mobile!=null){
    
            this.platform = 'Mobile';
        }
        else{
            this.platform = 'Desktop';
        }
    }

}

export {xDevice}
