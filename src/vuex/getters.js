const getters = {
    user: state => state.user,

    // 好友列表
    friendList: state => {
        // 排序 分组
        const friendList = state.friendList
        if (friendList.length === 0) return []

        const list = friendList.sort()
        let toList = []
        let group = []
        let last = list[0].substr(0, 1)
        for (let i = 0; i < list.length; i++) {

            const current = list[i].substr(0, 1)
            if (current === last) {
                group.push(list[i])
            }
            else {
                toList.push(group)
                group = []
                group.push(list[i])
            }

            if (i === list.length - 1) {
                toList.push(group)
            }
            else {
                last = current
            }

        }

        return toList
    },

    // 在线用户列表
    onlineList: state => {
        // 排序 分组
        const onlineList = state.onlineList
        if (onlineList.length === 0) return []

        const list = onlineList.sort()
        let toList = []
        let group = []
        let last = list[0].substr(0, 1)
        for (let i = 0; i < list.length; i++) {

            const current = list[i].substr(0, 1)
            if (current === last) {
                group.push(list[i])
            }
            else {
                toList.push(group)
                group = []
                group.push(list[i])
            }
            if (i === list.length - 1) {
                toList.push(group)
            }
            else {
                last = current
            }
        }

        return toList
    }
}

export default getters
