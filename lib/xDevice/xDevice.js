'use-strict'

var Mobile = navigator.userAgent.match(/android|iphone|ipod|ipad/i);

export class xDevice {
    constructor() {
        if (Mobile!=null){
            this.platform = 'Mobile';
        }
        else{
            this.platform = 'Desktop';
        }
        this.resolution = [window.screen.availWidth,window.screen.availHeight];
    }
    function adjustResolution(){
        alert('under construction');
    }
}
