// index.js
import React from 'react'
import ReactDOM from 'react-dom'

const UserCard = ({user: {firstName, lastName, image}}) => (
  <div className='user-card-wrapper'>
    <img src={image} alt={firstName + ' ' + lastName} />
    <h2>{firstName} {lastName}</h2>
  </div>
)

const Button = ({text, onClick}) => (
  <button onClick={onClick} className='appBt'>
    {text}
  </button>
)

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      welcome,
      title,
      subtitle,
      author: {firstName, lastName},
      date,
    } = this.props.data

    return (
      <header style={this.props.styles}>
        <div className='header-wrapper'>
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{date}</small>
        </div>
      </header>
    )
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      user,
      greetPeople,
      handleTime,
      changeBackground,
    } = this.props

    return (
      <main style={this.props.styles}>
        <div className='main-wrapper'>
          <p>Prerequisite to get started react.js:</p>
          <UserCard user={user} />
          <Button
            text='Greet People'
            onClick={greetPeople}
          />
          <Button text='Show Time' onClick={handleTime} />
          <Button text='Change Background' onClick={changeBackground} />
        </div>
      </main>
    )
  }
}

class Footer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <footer style={this.props.styles}>
        <div className='footer-wrapper'>
          <p>Copyright {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    styles: {
      backgroundColor: 'deepskyblue',
      color: 'black',
    },

    mainStyles: {
      backgroundColor: 'white',
      color: 'black',
    }
  }

  greetPeople = () => {
    alert('Welcome Here')
  }

  handleTime = () =>  {
    alert(new Date())
  }

  changeBackground = () => {
    this.setState({
      styles: {
        backgroundColor: this.state.styles.backgroundColor === 'deepskyblue' ? 'grey' : 'deepskyblue',
        color: this.state.styles.color === 'black' ? 'white' : 'black'
      },
      mainStyles: {
        backgroundColor: this.state.mainStyles.backgroundColor === 'white' ? 'purple' : 'white',
        color: this.state.styles.color === 'black' ? 'white' : 'black'
      },
    })
    console.log(this.state.mainStyles)
  }

  render() {
    const user = {
      firstName: 'Chen',
      lastName: 'Jiacong',
      image: 'pic.jpg'
    }
    const data = {
      welcome: 'Welcome to 30 Days Of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
        firstName: user.firstName,
        lastName: user.lastName
      },
      date: 'July 2, 2022',
    }

    return (
      <div className='app'>
        <Header data={data} styles={this.state.styles}/>
        <Main
          user={user}
          greetPeople={this.greetPeople}
          handleTime={this.handleTime}
          changeBackground={this.changeBackground}
          styles={this.state.mainStyles}
        />
        <Footer date={new Date()} styles={this.state.styles} />
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)