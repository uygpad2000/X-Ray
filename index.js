import * as xray from './lib/X-Ray.js'

var token =
[
{'tag':'title','parent':'head','pindex':0,'text':'index'},
{'tag':'h1','parent':'body','pindex':0,'text':'X-Ray Framework'},
{'tag':'link','parent':'head','pindex':0,'rel':'stylesheet','href':'./style/style.css'},
{'tag':'img','parent':'body','pindex':0,'src':'./res/Title.png','id':'x-ray'},
{'tag':'div','parent':'body','pindex':0,'text':'Machine Configuration:'}
]
xray.Create(token)
var device = xray.getDeviceType()
var platform = device.platform
var token = [{'tag':'div','parent':'body','pindex':0,'text':'Platform:'+device.platform+'('+navigator.platform+')','id':'platform-info'},
             {'tag':'div','parent':'body','pindex':0,'text':'Screen Resolution:'+device.resolution[0]+'x'+device.resolution[1]},
             {'tag':'link','parent':'head','pindex':0,'rel':'icon','href':'./res/icon.ico'},
             {'tag':'button','parent':'body','pindex':0,'text':'Language Setting'}]
var handler = xray.Create(token)
xray.createAttributes(handler[3],['onclick','javascript:window.alert("すみません，分かりません")'])
// device.adjustResolution('640px','480px')
