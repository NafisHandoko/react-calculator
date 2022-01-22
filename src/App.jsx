import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  // const [buttons, setButtons] = useState([
  //   {
  //     id: 'clear',
  //     text: 'clear',
  //     handler: clearDisplay
  //   },
  //   {
  //     id: 'seven',
  //     text: '7',
  //     handler: addNumber
  //   },
  //   {
  //     id: 'eight',
  //     text: '8',
  //     handler: addNumber
  //   },
  //   {
  //     id: 'nine',
  //     text: '9',
  //     handler: addNumber
  //   },
  //   {
  //     id: 'add',
  //     text: '+',
  //     handler: addOperator
  //   },
  //   {
  //     id: 'four',
  //     text: '4',
  //     handler: addNumber
  //   },
  //   {
  //     id: 'five',
  //     text: '5',
  //     handler: addNumber
  //   },
  //   {
  //     id: 'six',
  //     text: '6',
  //     handler: addNumber
  //   },
  //   {
  //     id: 'subtract',
  //     text: '-',
  //     handler: addOperator
  //   },
  //   {
  //     id: 'one',
  //     text: '1',
  //     handler: addNumber
  //   },
  //   {
  //     id: 'two',
  //     text: '2',
  //     handler: addNumber
  //   },
  //   {
  //     id: 'three',
  //     text: '3',
  //     handler: addNumber
  //   },
  //   {
  //     id: 'multiply',
  //     text: 'x',
  //     handler: addOperator
  //   },
  //   {
  //     id: 'decimal',
  //     text: '.',
  //     handler: addDecimal
  //   },
  //   {
  //     id: 'zero',
  //     text: '0',
  //     handler: addNumber
  //   },
  //   {
  //     id: 'equals',
  //     text: '=',
  //     handler: calculate
  //   },
  //   {
  //     id: 'divide',
  //     text: '/',
  //     handler: addOperator
  //   }
  // ])

  // useEffect(() => {
  //   const numberBtns = document.getElementsByClassName('number')
  //   const operatorBtns = document.getElementsByClassName('operator')
  //   const clearBtn = document.getElementById('clear')
  //   const equalsBtn = document.getElementById('equals')
  //   Array.from(numberBtns).forEach(function(btn) {
  //     btn.addEventListener('click', addNumber);
  //   });
  //   Array.from(operatorBtns).forEach(function(btn) {
  //     btn.addEventListener('click', addOperator);
  //   });
  //   clearBtn.addEventListener('click', clearDisplay)
  //   equalsBtn.addEventListener('click', calculate)
  // })
  const [display, setDisplay] = useState('0')
  const [incomma, setIncomma] = useState(false)

  const addNumber = (e) => {
    const btnKey = e.target.innerText
    if(display=='0'){
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
    setIncomma(false)
  }

  const addDecimal = () => {
    if(incomma===false){
      setDisplay(display+'.')
      setIncomma(true)
    }else{
      setDisplay(display)
    }
  }

  const clearDisplay = () => {
    setDisplay('0')
  }

  const calculate = () => {
    setDisplay(eval(display)+'')
  }

  return (
    <div className="container">
      <div className="calculator">
        <div id="display">{display}</div>
        <div className="buttons">
          {/* {buttons.map((button) => (
            <button key={button.id} id={button.id} className="button" onClick={button.handler}>{button.text}</button>
          ))} */}
          <button id="clear" className="button" onClick={clearDisplay}>clear</button>

          <button id="seven" className="button" onClick={addNumber}>7</button>
          <button id="eight" className="button" onClick={addNumber}>8</button>
          <button id="nine" className="button" onClick={addNumber}>9</button>
          <button id="add" className="button" onClick={addOperator}>+</button>

          <button id="four" className="button" onClick={addNumber}>4</button>
          <button id="five" className="button" onClick={addNumber}>5</button>
          <button id="six" className="button" onClick={addNumber}>6</button>
          <button id="subtract" className="button" onClick={addOperator}>-</button>

          <button id="one" className="button" onClick={addNumber}>1</button>
          <button id="two" className="button" onClick={addNumber}>2</button>
          <button id="three" className="button" onClick={addNumber}>3</button>
          <button id="multiply" className="button" onClick={addOperator}>x</button>

          <button id="decimal" className="button" onClick={addDecimal}>.</button>
          <button id="zero" className="button" onClick={addNumber}>0</button>
          <button id="equals" className="button" onClick={calculate}>=</button>
          <button id="divide" className="button" onClick={addOperator}>/</button>
        </div>
      </div>
    </div>
  )
}

export default App
