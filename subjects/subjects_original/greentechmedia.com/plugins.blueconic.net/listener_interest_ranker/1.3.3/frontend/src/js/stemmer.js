window._bcp=window._bcp||{},window._bcp.engagementRanker=window._bcp.engagementRanker||{},window._bcp.engagementRanker.stemmer=function(){var e={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},i={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},t="[aeiouy]",a="[^aeiou][^aeiouy]*",n=t+"[aeiou]*",s="^("+a+")?"+n+a,l="^("+a+")?"+n+a+n+a,o="^("+a+")?"+t;return function(n){var c,u,w,p,r,g,x,$;return n.length<3?n:("y"===(w=n.substr(0,1))&&(n=w.toUpperCase()+n.substr(1)),r=/^(.+?)([^s])s$/,(p=/^(.+?)(ss|i)es$/).test(n)?n=n.replace(p,"$1$2"):r.test(n)&&(n=n.replace(r,"$1$2")),r=/^(.+?)(ed|ing)$/,(p=/^(.+?)eed$/).test(n)?($=p.exec(n),(p=new RegExp(s)).test($[1])&&(p=/.$/,n=n.replace(p,""))):r.test(n)&&(c=($=r.exec(n))[1],(r=new RegExp(o)).test(c)&&(n=c,r=/(at|bl|iz)$/,g=new RegExp("([^aeiouylsz])\\1$"),x=new RegExp("^"+a+t+"[^aeiouwxy]$"),r.test(n)?n+="e":g.test(n)?(p=/.$/,n=n.replace(p,"")):x.test(n)&&(n+="e"))),(p=/^(.+?)y$/).test(n)&&(c=($=p.exec(n))[1],(p=new RegExp(o)).test(c)&&(n=c+"i")),(p=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/).test(n)&&(c=($=p.exec(n))[1],u=$[2],(p=new RegExp(s)).test(c)&&(n=c+e[u])),(p=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/).test(n)&&(c=($=p.exec(n))[1],u=$[2],(p=new RegExp(s)).test(c)&&(n=c+i[u])),r=/^(.+?)(s|t)(ion)$/,(p=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/).test(n)?(c=($=p.exec(n))[1],(p=new RegExp(l)).test(c)&&(n=c)):r.test(n)&&(c=($=r.exec(n))[1]+$[2],(r=new RegExp(l)).test(c)&&(n=c)),(p=/^(.+?)e$/).test(n)&&(c=($=p.exec(n))[1],p=new RegExp(l),r=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*([aeiouy][aeiou]*)?$"),g=new RegExp("^"+a+t+"[^aeiouwxy]$"),(p.test(c)||r.test(c)&&!g.test(c))&&(n=c)),p=/ll$/,r=new RegExp(l),p.test(n)&&r.test(n)&&(p=/.$/,n=n.replace(p,"")),"y"===w&&(n=w.toLowerCase()+n.substr(1)),n)}}();