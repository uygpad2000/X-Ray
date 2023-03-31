import * as xray from './lib/X-Ray.js'

var token =
[
{'tag':'title','parent':'head','pindex':0,'text':'index'},
{'tag':'h1','parent':'body','pindex':0,'text':'X-Ray Framework'},
{'tag':'link','parent':'head','pindex':0,'rel':'stylesheet','href':'./style/style.css'},
{'tag':'img','parent':'body','pindex':0,'src':'./res/Title.png','id':'x-ray'}
]
xray.Create(token)
var device = xray.getDeviceType()
var platform = device.platform
var token = [{'tag':'div','parent':'body','pindex':0,'text':'platform:'+device.platform,'id':'platform-info'}]
xray.Create(token)
alert(typeof(device.adjustResolution),typeof(device))
