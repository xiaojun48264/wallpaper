// pages/personal/index.ts

interface PersonalDataType {
    avatarUrl: string
    nickName: string
    signature: string
    authorizeState: boolean
}

Page({
    /**
     * 页面的初始数据
     */
    data: <PersonalDataType>{
        avatarUrl: '/image/personal/avatar.jpg',
        nickName: '点击登录',
        signature: '登录后可使用更多功能~',
        authorizeState: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {
        this.getUserInfo()
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {},

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        if (typeof this.getTabBar === 'function' && this.getTabBar()) {
            this.getTabBar().setData({
                selectTab: 3
            })
        }
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {},

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {},

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {},

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {},

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {},

    // 获取用户信息
    getUserInfo() {
        const userInfo = wx.getStorageSync('userInfo')
        if (userInfo) {
            this.setData({
                avatarUrl: userInfo.avatarUrl,
                nickName: userInfo.nickName,
                signature: '今天又是元气满满的一天~',
                authorizeState: true
            })
        }
    },
    // 用户授权
    userLogin() {
        if (this.data.authorizeState) return
        const _this = this
        wx.showModal({
            title: '授权登录',
            content: '亲，需要您授权登录',
            success({ confirm, cancel }) {
                if (cancel) {
                    wx.showToast({
                        title: '您已取消授权',
                        icon: 'none'
                    })
                    return
                }
                if (confirm) {
                    wx.getUserProfile({
                        lang: 'zh_CN',
                        desc: '你的个人信息仅用于登录',
                        success(info) {
                            const { userInfo } = info
                            _this.setData({
                                avatarUrl: userInfo.avatarUrl,
                                nickName: userInfo.nickName,
                                signature: '今天又是元气满满的一天~',
                                authorizeState: true
                            })
                            wx.setStorage({
                                key: 'userInfo',
                                data: userInfo
                            })
                        },
                        fail() {
                            wx.showToast({
                                title: '获取授权失败',
                                icon: 'none'
                            })
                        }
                    })
                }
            }
        })
    },
    // 用户退出
    userLogout() {
        wx.showModal({
            title: '温馨提醒',
            content: '确认退出登录吗？',
            success: ({ confirm }) => {
                if (confirm) {
                    wx.clearStorage({
                        success: () => {
                            this.setData({
                                avatarUrl: '/image/personal/avatar.jpg',
                                nickName: '点击登录',
                                signature: '登录后可使用更多功能~',
                                authorizeState: false
                            })
                        },
                        fail() {
                            wx.showToast({
                                title: '退出登录失败，请重试',
                                icon: 'none'
                            })
                        }
                    })
                }
            }
        })
    }
})
