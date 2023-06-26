import { getBounding } from "@komi-ui/utils"

interface PopStyle {
    position: string,
    inset: string,
    minWidth?: string
}

// popover与triggerElm之间的间隔
const gap = {normal:4, large: 8}

// 计算组件在浏览器窗口中的位置
export function getPopStyle(
    triggerElm:HTMLElement, 
    popWidth: number,
    popHeight: number,
    placement:string, 
    showArrow:boolean,
    minWidthOnTrigger:boolean
): PopStyle {
    // 需要保证根据整体文档的偏移，而不是某个父级
    const { scrollLeft ,scrollTop} = document.documentElement
    const {x, y, width} = triggerElm.getBoundingClientRect()

    // 相对于body的x轴，y轴
    const offsetLeft = x + scrollLeft
    const offsetTop = y + scrollTop 

    // 触发元素宽高
    let {offsetWidth, offsetHeight} = triggerElm
    // 如果 minWidthOnTrigger 为true，minWidth 采用的是triggerElm 的宽
    if(minWidthOnTrigger) offsetWidth = width
    
    // bottom-start, bottom-end
    const [pos, subPos] = placement.split('-')
    const popGap = showArrow? gap.large : gap.normal
    let top:number = 0,left:number = 0

    switch(pos) {
        case 'bottom': 
        case 'top':
            top = pos === 'bottom'? offsetTop + offsetHeight + popGap : offsetTop - popGap - popHeight
            left = offsetLeft + offsetWidth/2 - popWidth/2
            if(subPos === 'start')
                left += -offsetWidth/2 + popWidth/2
            else if(subPos === 'end')
                left += offsetWidth/2 - popWidth/2  
            break
        case 'right':
        case 'left':
            left = pos === 'right'? offsetLeft + offsetWidth + popGap : offsetLeft - popGap - popWidth
            top = offsetTop + offsetHeight/2 - popHeight/2
            if(subPos === 'start')
                top += -offsetHeight/2 + popHeight/2
            else if(subPos === 'end')
                top += offsetHeight/2 - popHeight/2
            break
    }
    
    return {
        position: 'absolute',
        inset: `${top}px auto auto ${left}px`,
        minWidth: `${triggerElm.offsetWidth}px`
    }
}

export function calcPopWidth(elm:HTMLElement):string {
    const {offsetWidth} = elm
    return `${offsetWidth*(4/3)}px`
}


export function popIsOverflow(triggerElm:Element,popWidth:number, popHeight:number,placement:string,showArrow:boolean):boolean {
    const pos = placement.split('-')[0]
    const bounding = getBounding(triggerElm)
    const popGap = showArrow?gap.large:gap.normal

    switch(pos) {
        case 'top':
        case 'bottom':
            if(bounding[pos] < popHeight + popGap) return true
            break
        case 'left':
        case 'right':
            if(bounding[pos] < popWidth + popGap) return true
            break
        default:
            return false
    }
}

export function togglePlacement(placement:string):string {
    const toggleMap = new Map<string,string>([
        ['top', 'bottom'],
        ['bottom', 'top'],
        ['left', 'right'],
        ['right', 'left'],
    ]);
    const [pos, subPos] = placement.split('-')
    if(toggleMap.has(pos)) return subPos?`${toggleMap.get(pos)}-${subPos}`:toggleMap.get(placement)
    return placement
}


export function arrowTransform(popWidth:number,popHeight:number, placement:string):string {
    let transform = ''
    switch(placement) {
        case 'bottom': 
        case 'bottom-start':
        case 'bottom-end':
            transform = `translateY(${-popHeight/2}px)`
            break
        case 'top':
        case 'top-start':
        case 'top-end':
            transform = `translateY(${popHeight/2}px)`
            break
        case 'right':
        case 'right-start':
        case 'right-end':
            transform = `translateX(${-popWidth/2}px)`
            break
        case 'left':
        case 'left-start':
        case 'left-end':
            transform = `translateX(${popWidth/2}px)`
            break
    }

    return transform
}