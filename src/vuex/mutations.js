import router from '../router'

let mutations = {
    // 更改屏幕切换方式 push pop
    push (state, {to, from}) {
        // 更改切换方式
        state.pushOrPop = 'push'
        // 压入 popStack 栈顶
        state.popStack.push(from)
        router.push({name: to})
    },
    pop (state) {
        state.pushOrPop = 'pop'
        // 出栈
        const name = state.popStack.pop()
        router.push({name})
    }
}

export default mutations
