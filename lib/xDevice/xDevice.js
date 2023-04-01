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
    adjustResolution(width,height){
        document.documentElement.style.width = width;
        document.documentElement.style.height = height;
        console.info('Page Width'+b.style.width);
    }
}
