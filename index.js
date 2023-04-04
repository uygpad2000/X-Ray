import * as xray from './lib/X-Ray.js'

let flag = 1

var token =
[
{'tag':'meta','parent':'head','pindex':0,'name':'viewport','content':'width=device-width, initial-scale=1.0'},
{'tag':'title','parent':'head','pindex':0,'text':'X-Ray Framework'},
{'tag':'h1','parent':'body','pindex':0,'text':'X-Ray Framework'},
{'tag':'link','parent':'head','pindex':0,'rel':'stylesheet','href':'./style/style.css'},
{'tag':'img','parent':'body','pindex':0,'src':'./res/Title.png','id':'x-ray'},
{'tag':'div','parent':'body','pindex':0,'text':'Machine Configuration:'}
]
xray.Create(token)
var device = xray.getDeviceType()
var platform = device.platform
xray.createAttribute(document.getElementsByTagName('html')[0],['lang',device.language])
var token = [
             {'tag':'div','parent':'body','pindex':0,'text':'Platform:'+device.platform+'('+navigator.platform+')','id':'platform-info'},
             {'tag':'div','parent':'body','pindex':0,'text':'Screen Resolution:'+device.resolution[0]+'x'+device.resolution[1]},
             {'tag':'div','parent':'body','pindex':0,'text':'Language:'+device.language},
             {'tag':'div','parent':'body','pindex':0,'text':'Browser:'+device.browser},             
             {'tag':'link','parent':'head','pindex':0,'rel':'icon','href':'./res/icon.ico'},
             {'tag':'button','parent':'body','pindex':0,'text':'Play Music'},
             {'tag':'audio','parent':'body','pindex':0},
             {'tag':'source','parent':'audio','pindex':0,'src':'./res/notme.mp3','type':'audio/mp3','preload':'load'}
            ]
var handler = xray.Create(token)
handler[5].onclick=playBGM
function playBGM(){
  if (flag<<1&2){
    handler[6].load()
    handler[6].play()
    handler[5].innerText='pause'
    flag = flag << 1
  }
  else{
    handler[6].pause()
    handler[5].innerText='Play Music'
    flag = flag >> 1
  }
}
