import { useState, useEffect } from 'react'
import './App.css'
import Feature2 from './pages/Feature'
import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'

function App() {
  const [menu, setMenu] = useState(1) //sdate adalah semacam seter geter di function, seteMenu==seter untuk set nilai var didepanya, 1 nilai default
  const [title, setTitle] = useState('')
  // let title

  // useEffect(() => {
  //   if (menu === 1) {
  //     setTitle('ini contoh useEffect')
  //   } else if (menu === 2) {
  //     setTitle('ini menu feature')
  //   }
  // }, [menu]) //[]ini indikator kapan akan dipanggil

  const content = () => {
    if (menu === 1) {
      return <Home />
    } else if (menu === 2) {
      return <Feature2 img={1} />
    } else if (menu === 3) {
      return <Feature2 img={2} />
    } else if (menu === 4) {
      return <Feature2 img={3} />
    }
  }

  return (
    <div className="App">
      {title}
      <Header onClick={setMenu} />
      {content()}
      <Footer />
    </div>
  )
}

export default App
