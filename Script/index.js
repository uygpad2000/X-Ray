var title = Create('head','title')
title.textContent = "My Blog"
var meta = Create('head','meta')
Set_Element_Attributes(meta,'charset','utf-8')
var link0 = Create('head','link')
Set_Element_Attributes(link0,'rel','stylesheet')
Set_Element_Attributes(link0,'type','text/css')
Set_Element_Attributes(link0,'href','Style/Page.css')
var node0 = Create('body','h1')
node0.textContent = "Welcome!"
