// pages/custom-tab-bar/index.ts
interface TabBarType {
    pagePath: string
    text: string
    iconPath: string
    selectedIconPath: string
}
interface TabBarDataType {
    tabBarList: TabBarType[]
    selectTab: number
    color: string
    selectColor: string
}
Component({
    /**
     * 组件的属性列表
     */
    properties: {},

    /**
     * 组件的初始数据
     */
    data: <TabBarDataType>{
        selectTab: 0,
        color: '#474A54',
        selectColor: '#474A54',
        tabBarList: [
            {
                pagePath: '/pages/index/index',
                text: '首页',
                iconPath: '/image/tabBar/icon_home.png',
                selectedIconPath: '/image/tabBar/icon_select_home.png'
            },
            {
                pagePath: '/pages/category/index',
                text: '分类',
                iconPath: '/image/tabBar/icon_category.png',
                selectedIconPath: '/image/tabBar/icon_select_category.png'
            },
            {
                pagePath: '/pages/found/index',
                text: '发现',
                iconPath: '/image/tabBar/icon_found.png',
                selectedIconPath: '/image/tabBar/icon_select_found.png'
            },
            {
                pagePath: '/pages/personal/index',
                text: '我的',
                iconPath: '/image/tabBar/icon_personal.png',
                selectedIconPath: '/image/tabBar/icon_select_personal.png'
            }
        ]
    },

    /**
     * 组件的方法列表
     */
    methods: {
        switchTab(e: any) {
            const data = e.currentTarget.dataset
            wx.switchTab({
                url: data.path
            })
            this.setData({ selectTab: data.index })
        }
    }
})
