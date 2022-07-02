import React from 'react'
import ReactDom from 'react-dom'

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = Math.floor(num / 2); i > 1; i--) {
    if (num % i === 0) return false;
  }
  return true;
}

const ColorBox = ({number}) => {
  const colorMap = {
    green: 'green',
    yellow: 'yellow',
    red: 'red'
  }
  // 根据number判断色块颜色
  let color;
  if (isPrime(number)) color = colorMap.red;
  else if (number % 2 === 0) color = colorMap.green;
  else color = colorMap.yellow;

  const style = {
    backgroundColor: color
  }
  return <div className='colorBox' style={style}><span>{number}</span></div>
}

const MainBox = ({boxCount}) => {
  let rowArr = [];
  for (let i = 0; i < boxCount; i++) {
    rowArr.push(<ColorBox number={i}/>);
  }
  return (
    <div className='mainBox2'>
      {rowArr}
    </div>
  )
}

const App = () => {
  return (
    <div className='mainView'>
      <h1>30 Days Of React</h1>
      <h3>Number Generator</h3>
      <MainBox boxCount={32} colCount={8}/>
    </div>
  )
}

const rootElemnt = document.getElementById('root');
ReactDom.render(<App />, rootElemnt);