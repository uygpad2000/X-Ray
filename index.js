import { generateElement } from './script/X-Ray/dom.js'

var token=[
	{'tag':'title','parent':'head','pindex':0,'text':'Sample'},
	{'tag':'meta','charset':'utf-8','parent':'head','pindex':0},
	{'tag':'link','rel':'stylesheet','parent':'head','pindex':0,'href':'./style/page.css'},
	{'tag':'div','parent':'body','pindex':0,'text':'This Site is built with X-Ray.js','id':'wqas'},
	{'tag':'input','parent':'body','pindex':0,'id':'ipt00'},
	{'tag':'button','parent':'body','pindex':0,'id':'cfm00','text':'Go'},
	{'tag':'span','parent':'body','pindex':0,'text':'Xavigator','id':'title'},
	{'tag':'span','parent':'body','pindex':0,'text':'Utils','id':'ach0'}
]
var handler = generateElement(token)
handler[5].onclick=search
handler[7].onclick=goToUtil
function search(){
	location.href='https://yandex.eu/search/?text='+encodeURIComponent(handler[4].value)
}
function goToUtil(){
	location.href='./kit.html'
}
