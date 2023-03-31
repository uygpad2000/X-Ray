'use-strict'

var Mobile = navigator.userAgent.toLowerCase().match(/iphone/|/ipod/|/ipad/);

export class xDevice {
    constructor() {
        if (Mobile!=null){
            this.platform = 'Mobile';
        }
        else{
            this.platform = 'Desktop';
        }
    }

}
