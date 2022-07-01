import React from 'react'
import ReactDOM from 'react-dom'

const InputBlock = ({text}) => <input type='text' placeholder={text}/>
const Button = ({text}) => {
  return <button type='submit'>{text}</button>
}
const Header = ({head: {title, line, info: {fn, ln, em}}}) => {
  return (
    <header>
      <h1>{title}</h1>
      <p>{line}</p>
      <div>
        <InputBlock text={fn}/>
        <InputBlock text={ln}/>
        <InputBlock text={em}/>
      </div>
    </header>
  )
}
const App = () => {
  const head = {
    title: 'SUBSCRIBE',
    line: 'Sign up with your email',
    info: {
      fn: 'First name',
      ln: 'Last name',
      em: 'email'
    }
  }
  const bt = 'Subscribe'
  return (
    <div className='app'>
      <Header head={head} />
      <Button text={bt} />
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)