import React, { Component } from 'react'
import Header from './components/Header'
import ConnectedForm from './ConnectedForm'
import ConnectedHistory from './ConnectedHistory'

class App extends Component {
  render() {
    return (
      <div className="system-sans-serif">
        <Header title="mpg saver" />
        <ConnectedForm />
        <ConnectedHistory />
      </div>
    )
  }
}

export default App
