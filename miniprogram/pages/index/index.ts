// pages/index/index.ts
interface moduleItemType {
    label: string,
    path: string,
    icon: string
}

interface HomeDataType {
    modules: moduleItemType[]
}
Page({
    /**
     * 页面的初始数据
     */
    data: <HomeDataType>{
        modules: [
            { label: '4K壁纸', path: '', icon: '/image/home/icon_1.svg' },
            { label: '精美头像', path: '', icon: '/image/home/icon_2.svg' },
            { label: '美女壁纸', path: '', icon: '/image/home/icon_3.svg' },
            { label: '动漫卡通', path: '', icon: '/image/home/icon_4.svg' },
            { label: '情侣壁纸', path: '', icon: '/image/home/icon_5.svg' },
            { label: '创意潮图', path: '', icon: '/image/home/icon_6.svg' },
            { label: '签名套图', path: '', icon: '/image/home/icon_7.svg' },
            { label: '刘海制作', path: '', icon: '/image/home/icon_8.svg' }
        ]
    },

    /**
     * 方法
     */
    methods: {},

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        if (typeof this.getTabBar === 'function' && this.getTabBar()) {
            this.getTabBar().setData({
                selectTab: 0
            })
        }
    },

    onClickSearch() {
        wx.navigateTo({
            url: '/packageA/pages/search/index'
        })
    }
})
