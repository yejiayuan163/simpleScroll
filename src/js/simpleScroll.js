import $ from 'jquery'
require('../css/index.css')
let timer = ''
const INTERVAL = 100

export default function listenPosition(object) {
    let pos={}
    let obj = object || {}
    // 动态载入提示词
    let parent = obj.dom.parentNode
    let topImfo = document.createElement('div')
    topImfo.className='hide common'
    let tImfo = document.createTextNode('到顶了')
    topImfo.appendChild(tImfo)
    parent.insertBefore(topImfo,obj.dom)
    // 动态载入提示词
    let bottomImfo = document.createElement('div')
    bottomImfo.className='hide common bInfo'
    let bImfo = document.createTextNode('到底了')
    bottomImfo.appendChild(bImfo)
    parent.appendChild(bottomImfo)
    // 监听滚轮事件
    obj.dom.addEventListener('wheel', () => {
        debounce(()=> {
            if(obj.listenIsTop){
                isTop(obj.dom).then(()=> {
                    topImfo.className='show common'
                    setTimeout(()=> {
                        topImfo.className='hide common'
                    },1000)
                    obj.topCallback()
                }).catch(()=>{

                })
            }
            if(object.listenIsBottom){
                isBottom(obj.dom).then(() => {
                    bottomImfo.className='show common bInfo'
                    setTimeout(()=> {
                        bottomImfo.className='hide common bInfo'
                    },1000)
                    object.bottomCallback()
                }).catch(()=> {

                })
            }
        },INTERVAL)
    })
}
// 获取dom位置
function position(dom) {
    let pos = {}
    pos.scrollTop = dom.scrollTop //元素在视窗之上的高度
    pos.scrollHeight = dom.scrollHeight//元素的总高度
    pos.clientHeight = dom.clientHeight //元素窗口高度
    return pos
}
// 判断滚动到顶部
function isTop(dom) {
    let pos = {}
    pos = position(dom)
    return new Promise((resolve,reject) => {
        if (pos.scrollTop === 0) {
            resolve(true)
        } else {
            reject(false)
        }
    })
}
// 判断滚动到底部
function isBottom(dom) {
    let pos = {}
    pos = position(dom)
    return new Promise((resolve,reject) => {
        if (pos.scrollHeight <= pos.scrollTop + pos.clientHeight + 30) {
            resolve(true)
        } else {
            reject(false)
        }
    })

}
// 防抖函数
function debounce(fn,interval) {
    if(timer){
        clearTimeout(timer)
        timer=setTimeout(fn,interval)
    } else {
        timer=setTimeout(fn,interval)
    }
}