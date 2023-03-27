import { xDevice } from './lib/xDevice/XDevice.js'
var token =
[
{'tag':'title','parent':'head','pindex':0,'text':'index'},
{'tag':'h1','parent':'body','pindex':0,'text':'X-Ray Framework'}
]
var device = new xDevice()
token.push({'tag':'h1','parent':'body','pindex':0,'text':'xDevice.js:'+device.UA})
Create(token)
