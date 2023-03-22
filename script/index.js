var UISet = [
// Page Info
{'Tag':'title','Text':'Uygpad2000'},
{'Tag':'link','rel':'icon','href':'.\\res\\ico.ico','Parent':'head'},
// Load Stylesheet
{'Tag':'link','rel':'stylesheet','href':'.\\style\\index.css','Parent':'head'},
// DOM Element
{'Tag':'h1','Text':'Uygpad\'s Home'},
{'Tag':'div','Text':'Site Directory','id':'guide'},
{'Tag':'div','Text':'Sorry,but this site is under construction','id':'warn'},
{'Tag':'div','id':'top-bar'},
{'Tag':'div','Text':'Blog','id':'blog'},
{'Tag':'div','Text':'Language','id':'lang'},
{'Tag':'img','src':'https://img.moegirl.org.cn/common/d/d7/%E4%B8%9C%E9%9B%AA%E8%8E%B2.png',
'id':'kawaii'}
            ]
Generate(UISet)
var dir = document.getElementById('guide')
var timer = true
dir.onclick=()=>{
    if (timer){
        Generate([{'Tag':'div','Text':'Top Rated','id':'top'}])
        document.getElementById('top').onclick=()=>{
            location.href = './page/top.html'
        }
    }
    else{
        document.getElementById('top').remove()
    }
    timer = !timer
}