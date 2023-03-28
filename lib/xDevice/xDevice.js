'use-strict'

class xDevice {
    constructor() {
        this.UA = navigator.userAgent;
        this.lang=navigator.language;
        this.os=navigator.platform;
    }
}

export {xDevice}