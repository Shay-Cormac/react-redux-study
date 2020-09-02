import * as React from 'react'
import {Provider} from 'react-redux'
import {store} from './store'
import Todo from './Todo'

class App extends React.Component {
    render() {
        return(
            <Provider store={store}>
                <Todo />
            </Provider>
        )
    }
}

export default App 