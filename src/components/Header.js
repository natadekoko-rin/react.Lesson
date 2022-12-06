import logo from '../logo.svg'
import './styles.css'
function Header(prop) {
  const menu = ['Home', 'Kereta', 'Tank', 'Kapal']

  const navigation = () => {
    return menu.map((item, idx) => {
      return <button onClick={() => prop.onClick(idx + 1)}>{item}</button>
    })
  }

  return (
    <div>
      {/* header adalah componen */}
      <header className="header-wrapper">
        {/* <img className="logo" src={logo} alt="logo" /> */}
        <img src={logo} alt="logo" />
        {/* <img src={logo} alt="logo" /> */}
        <h1 className="header-tittle">Tambal Ban</h1>
        <nav className="navigation">{navigation()}</nav>

        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  )
}

export default Header
