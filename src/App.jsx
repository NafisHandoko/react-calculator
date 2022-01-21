import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [buttons, setButtons] = useState([
    {
      id: 'clear',
      text: 'clear',
      className: 'clear'
    },
    {
      id: 'seven',
      text: '7',
      className: 'number'
    },
    {
      id: 'eight',
      text: '8',
      className: 'number'
    },
    {
      id: 'nine',
      text: '9',
      className: 'number'
    },
    {
      id: 'add',
      text: '+',
      className: 'operator'
    },
    {
      id: 'four',
      text: '4',
      className: 'number'
    },
    {
      id: 'five',
      text: '5',
      className: 'number'
    },
    {
      id: 'six',
      text: '6',
      className: 'number'
    },
    {
      id: 'subtract',
      text: '-',
      className: 'operator'
    },
    {
      id: 'one',
      text: '1',
      className: 'number'
    },
    {
      id: 'two',
      text: '2',
      className: 'number'
    },
    {
      id: 'three',
      text: '3',
      className: 'number'
    },
    {
      id: 'multiply',
      text: 'x',
      className: 'operator'
    },
    {
      id: 'decimal',
      text: '.',
      className: 'decimal'
    },
    {
      id: 'zero',
      text: '0',
      className: 'number'
    },
    {
      id: 'equals',
      text: '=',
      className: 'equals'
    },
    {
      id: 'divide',
      text: '/',
      className: 'operator'
    }
  ])

  const [display, setDisplay] = useState('0')

  const addNumber = (e) => {
    let btnKey = e.target.innerText
    if(display==='0'){
      setDisplay(btnKey)
    }else{
      setDisplay(display+btnKey)
    }
  }

  const addOperator = (e) => {
    let oprKey = e.target.innerText
    if(oprKey==='x'){
      oprKey = '*'
    }
    setDisplay(display+oprKey)
  }

  const clearDisplay = () => {
    setDisplay('0')
  }

  const calculate = () => {
    setDisplay(eval(document.getElementById('display').innerText))
  }

  useEffect(() => {
    const numberBtns = document.getElementsByClassName('number')
    const operatorBtns = document.getElementsByClassName('operator')
    const clearBtn = document.getElementById('clear')
    const equalsBtn = document.getElementById('equals')
    Array.from(numberBtns).forEach(function(btn) {
      btn.addEventListener('click', addNumber);
    });
    Array.from(operatorBtns).forEach(function(btn) {
      btn.addEventListener('click', addOperator);
    });
    clearBtn.addEventListener('click', clearDisplay)
    equalsBtn.addEventListener('click', calculate)
  })

  return (
    <div className="container">
      <div className="calculator">
        <div id="display">{display}</div>
        <div className="buttons">
          {buttons.map((button) => (
            <button key={button.id} id={button.id} className={`button ${button.className}`}>{button.text}</button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
