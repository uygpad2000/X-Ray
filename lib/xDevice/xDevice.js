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
        this.language = navigator.userLanguage;
        this.browser = navigator.appName;
    }
    adjustResolution(width,height){
        document.documentElement.style.width = width;
        document.documentElement.style.height = height;
    }
}
