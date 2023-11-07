import { ThemeProvider } from 'styled-components'
import lightTheme from './themes/light'
import darkTheme from './themes/dark'

import SideBar from './containers/Sidebar'
import About from './containers/About'
import EstiloGlobal, { Container } from './styles'
import Projects from './containers/Projects'
import { useState } from 'react'

function App() {
  const [dark, setDark] = useState(false)

  function changeTheme() {
    setDark(!dark)
  }
  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
      <EstiloGlobal />
      <Container>
        <SideBar changeTheme={changeTheme} />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
