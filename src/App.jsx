import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [buttons, setButtons] = useState([
    {
      id: 'clear',
      text: 'clear'
    },
    {
      id: 'seven',
      text: '7'
    },
    {
      id: 'eight',
      text: '8',
    },
    {
      id: 'nine',
      text: '9'
    },
    {
      id: 'add',
      text: '+'
    },
    {
      id: 'four',
      text: '4'
    },
    {
      id: 'five',
      text: '5'
    },
    {
      id: 'six',
      text: '6'
    },
    {
      id: 'subtract',
      text: '-'
    },
    {
      id: 'one',
      text: '1'
    },
    {
      id: 'two',
      text: '2'
    },
    {
      id: 'three',
      text: '3'
    },
    {
      id: 'multiply',
      text: 'x'
    },
    {
      id: 'decimal',
      text: '.'
    },
    {
      id: 'zero',
      text: '0'
    },
    {
      id: 'equals',
      text: '='
    },
    {
      id: 'divide',
      text: '/'
    }
  ])

  const [display, setDisplay] = useState('0')

  return (
    <div className="container">
      <div className="calculator">
        <div id="display">{display}</div>
        <div className="buttons">
          {buttons.map((button) => (
            <button id={button.id} className="button">{button.text}</button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
