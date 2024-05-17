import React from 'react'
import ReactDOM from 'react-dom/client'
import { MainRouterProvider } from './router/Router'
import { store } from './store/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <MainRouterProvider />
    </Provider>
)
