/* 
    javascript for index page
*/

var UISet = [
    {'Tag':'title','Parent':'head','Text':'My Blog'},
    {'Tag':'h1','Text':'Directory'},
    {'Tag':'div','Text':'about','id':'about'},
    {'Tag':'link','Parent':'head','rel':'stylesheet',
    'href':'.\\style\\page.css'}
]
Create(UISet)
bindEvent('div',showInfo,0)

function showInfo(){
    
    alert(
        'Made by Uygpad2000,for more information please visit:\n'+
        '               https//github.com/uygpad2000')

}