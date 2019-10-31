import React, { PureComponent, Suspense } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { CookiesProvider } from 'react-cookie'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'antd/dist/antd.css'
import './styles/index.scss'
import 'react-app-polyfill/ie9'
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import * as serviceWorker from './serviceWorker'

import redux from './redux'
import { TopBarProgress } from './components'
import { AuthLayout } from './containers'

class App extends PureComponent {
  render() {
    return (
      <CookiesProvider>
        <Provider store={redux}>
          <BrowserRouter>
            <Suspense fallback={<TopBarProgress />}>
              <Switch>
                <Route exact path="/login" render={props => <AuthLayout {...this.props} {...props} />} />
              </Switch>
            </Suspense>
          </BrowserRouter>
        </Provider>
      </CookiesProvider>
    )
  }
}

const Root = () => <App />
ReactDOM.render(<Root />, document.getElementById('root'))
serviceWorker.register()