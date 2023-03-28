import { xDevice } from './lib/xDevice/xDevice.js'
var token =
[
{'tag':'title','parent':'head','pindex':0,'text':'index'},
{'tag':'h1','parent':'body','pindex':0,'text':'X-Ray Framework'},
{'tag':'link','parent':'head','pindex':0}
]
var device = new xDevice()
token.push({'tag':'h2','parent':'body','pindex':0,'text':device.platform})
Create(token)