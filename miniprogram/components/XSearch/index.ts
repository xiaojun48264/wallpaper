// components/XSearch/index.ts
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        value: {
            type: String,
            value: ''
        },
        placeholder: {
            type: String,
            value: '' 
        },
        disabled: {
            type: Boolean,
            value: false
        },
        prefixIcon: {
            type: String,
            value: 'search'
        },
        suffixIcon: {
            type: String,
            value: ''
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onInput(e: any) {
            const value = e.detail.value
            this.setData({ value })
            this.triggerEvent('input', { value })
        },
        onClickInput(e: any) {
            this.triggerEvent('click-input', e.detail)
        }
    },
})
