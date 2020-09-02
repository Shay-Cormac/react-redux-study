import React from 'react'
import { connect } from 'react-redux'
import { inputChange, addValueAction } from './store/action'

const stateToProps = (state: any) => {
    return ({
        // inputValue: state.inputValue
        state
    })
}

const dispatchToProps = (dispatch: any) => {
    return ({
        inputChangeValue: (e: any) => {
            // 将 action 分离出去
            const action = inputChange(e.target.value)
            dispatch(action)
        },
        onEnter: (e: any) => {
            // console.log(e.keyCode);
            if (e.keyCode === 13) {
                const action = addValueAction()
                dispatch(action)
            }
        }
    })
}

// Typescript 类型别名——映射类型
// type connectProps = ReturnType<typeof stateToProps> & ReturnType<typeof dispatchToProps>

// 将映射类型规则加入组件，才能使用 stateToProps 、dispatchToProps，否则报错
// class Todo extends React.Component<connectProps> {
//     render() {
//         return (
//             <div>
//                 <input 
//                 type="text" 
//                 value={this.props.state.inputValue} 
//                 onChange={this.props.inputChangeValue} 
//                 onKeyUp={this.props.onEnter} 
//                 />
//                 <div>
//                     {this.props.state.list ? 
//                     this.props.state.list.map((item:any,index:number)=> <div key={index}>{item.things}</div> )
//                     : ''}
//                 </div>
//             </div>
//         )
//     }
// }

const Todo = (props: any) => {
    return (
        <div>
            <input type="text" value={props.state.inputValue} onChange={props.inputChangeValue} onKeyUp={props.onEnter} />
            <div>
                {props.state.list ? props.state.list.map((item: any, index: number) => <div key={index}>{item.things}</div>) : ''}
            </div>
        </div>
    )
}

export default connect(stateToProps, dispatchToProps)(Todo)