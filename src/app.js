import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import 'react-dates/lib/css/_datepicker.css'
import 'normalize.css/normalize.css'
import LoadingPage from './components/LoadingPage'


const jsx = (
  <AppRouter/>
)

let hasRendered = false

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('sign-this-letter'))
    hasRendered = true
  }
}
ReactDOM.render(<LoadingPage/>, document.getElementById('sign-this-letter'))

renderApp()
