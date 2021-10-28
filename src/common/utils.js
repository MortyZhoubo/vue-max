export default {
    // 防抖
    debounce(func, delay) {
        let timer = null
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout((func, delay))
    },
    //节流
    //func函数必须返回值
    throttle(func, delay,judgeTimer) {
        let timer = judgeTimer ? judgeTimer : "start"
        if(timer === "start"){
            timer = false
            func((res)=>{
                timer = res
            })
        }else{
            if(!timer){
                return throttle(func,delay,timer)
            }else{
                return;
            }
        }
    }
}