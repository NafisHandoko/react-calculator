import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
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
    let oprCount = 0
    let revStr = display.split('').reverse()
    for(let symbol of revStr){
      if(symbol=='-' || symbol=='+' || symbol=='*' || symbol=='/'){
        oprCount+=1
      }else{
        break
      }
    }
    if(oprCount===0){
      setDisplay(display+oprKey)
    }else{
      setDisplay(display.slice(0,-oprCount)+oprKey)
    }
    setIncomma(false)
  }

  const subtract = () => {
    setDisplay(display+'-')
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
    setIncomma(false)
  }

  const calculate = () => {
    setDisplay(eval(display)+'')
    if(display.includes('.',0)){
      setIncomma(true)
    }else{
      setIncomma(false)
    }
  }

  return (
    <div className="container">
      <div className="desc">
        <h1>React Calculator</h1>
        <p>Copyright 2022 by Nafis Handoko</p>
      </div>
      <div className="calculator">
        <div id="display">{display}</div>
        <div className="buttons">
          <button id="clear" className="button" onClick={clearDisplay}>clear</button>
          <a href="https://github.com/NafisHandoko/react-calculator" className="repo" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a>
          
          <button id="seven" className="button" onClick={addNumber}>7</button>
          <button id="eight" className="button" onClick={addNumber}>8</button>
          <button id="nine" className="button" onClick={addNumber}>9</button>
          <button id="add" className="button" onClick={addOperator}>+</button>

          <button id="four" className="button" onClick={addNumber}>4</button>
          <button id="five" className="button" onClick={addNumber}>5</button>
          <button id="six" className="button" onClick={addNumber}>6</button>
          <button id="subtract" className="button" onClick={subtract}>-</button>

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
