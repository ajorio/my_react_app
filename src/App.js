import React, { Component, Fragment } from 'react'
import './App.css'
import Membre from './components/Membre'
import Button from './components/Button'
import './components/Button.css'

const famille = {
  membre1: {
    nom: 'Sophia',
    age: 30
  },
  membre2: {
    nom: 'Abdellah',
    age: 32
  }
}
class App extends Component {
  state = {
    famille,
    isShow: false
  }

  handleClick = (pas) => {
    const { famille } = { ...this.state }
    famille.membre1.age += pas
    this.setState(famille)
  }

  handleShowDescription = () => {
    const isShow = !this.state.isShow
    this.setState({ isShow })
  }

  render() {
    const { famille, isShow } = this.state
    const listeMembre = Object.keys(famille)
      .map(
        membre => (
          <Membre nom={famille[membre].nom} age={famille[membre].age} />
        )
      )

    let description = null
    if (isShow) {
      description = (
        <Fragment>
          <strong>Je suis un enfant</strong>
          <br />
        </Fragment>
      )
    }

    return (
      <div className='App'>
        <h1>Bonjour tout le monde!</h1>
        {listeMembre}
        <Membre nom='Yanis' age='2'>
          {description}
          <button onClick={this.handleShowDescription}>
            {
              this.state.isShow ? 'Cacher' : 'Montrer'
            }
          </button>
        </Membre>
        <Button vieillir={() => this.handleClick(2)} name='Vieillir de 2 ans' />
      </div>
    )
  }
}

export default App
