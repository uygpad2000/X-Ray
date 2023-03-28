import { xDevice } from './lib/xDevice/xDevice.js'
var token =
[
{'tag':'title','parent':'head','pindex':0,'text':'index'},
{'tag':'h1','parent':'body','pindex':0,'text':'X-Ray Framework'}
]
var device = new xDevice()
token.push({'tag':'h2','parent':'body','pindex':0,'text':'xDevice.js:'+device.UA})
token.push({'tag':'h3','parent':'body','pindex':0,'text':'Lang:'+device.lang})
token.push({'tag':'h4','parent':'body','pindex':0,'text':'System:'+device.os})
Create(token)
