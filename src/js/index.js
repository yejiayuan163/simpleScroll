import listenPositon from './simpleScroll'
let topParm = 1
let bottomParm =2
let dom = document.getElementsByClassName('father')[0]
let object = {
    dom,
    listenIsTop:true,
    listenIsBottom:true,
    topCallback:topCallback.bind(this,topParm),
    bottomCallback:bottomCallback.bind(this,bottomParm)
}
let pos = listenPositon(object) // 异步获取
function topCallback(parm) {
    console.log(parm,'top')
}
function bottomCallback(parm) {
    console.log(parm,'bottom')
}
