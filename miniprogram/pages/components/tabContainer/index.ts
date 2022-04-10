// pages/components/tabContainer/index.ts

interface TabContainerDataType {
    top: number
    minHeight: number
    width: number
    containerHeight: string
}

Component({
    /**
     * 组件的属性列表
     */
    properties: {},

    /**
     * 组件的初始数据
     */
    data: <TabContainerDataType>{
        top: 0,
        minHeight: 0,
        width: 0,
        containerHeight: '100%'
    },

    /**
     * 组件的方法列表
     */
    methods: {
        getTop() {
            const { top, height, left } = wx.getMenuButtonBoundingClientRect()
            this.setData({ top, minHeight: height, width: left })
        },
        setContainerHeight() {
            const { windowHeight } = wx.getSystemInfoSync()
            this.createSelectorQuery()
                .select('.tab-container-header')
                .boundingClientRect(({ height }) => {
                    this.setData({ containerHeight: `${windowHeight - height - 20}px` })
                })
                .exec()
        }
    },
    lifetimes: {
        attached() {
            this.getTop()
            this.setContainerHeight()
        }
    },
    options: {
        multipleSlots: true
    }
})
