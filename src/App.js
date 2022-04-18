import React from 'react'
import Header from './components/Header'
import Main from './components/Main'

export default class Page extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    )
  }
}
