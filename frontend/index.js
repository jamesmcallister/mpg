import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import Reducers from './reducers'
import App from './App'
import './variables.css'
import './tachyons.css'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-client'
import { createNetworkInterface } from 'apollo-client/transport/networkInterface'

const store = createStore(Reducers)

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:4000/graphql'
})

const client = new ApolloClient({
  networkInterface
})

render(
  <ApolloProvider store={store} client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
