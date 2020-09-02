

// 使用大写注册常量方便调用
export const CHANGE_INPUT = 'changeInput'
export const ADD_VALUE = 'addList'
export const DELETE = 'delete'

export const inputChange = (value: any) => ({
    type:CHANGE_INPUT,
    value: value
})

export const addValueAction = () => ({
    type:ADD_VALUE
})