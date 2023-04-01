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
    adjustResolution(){
        alert(this.resolution[0]+','+this.resolution[1]);
        var b = document.getElementsByTagName('body')[0];
        console.info('Page Width'+b.style.width);
    }
}
