
import Navbar from './components/Landing/Navbar'


import { ThemeProvider } from '@emotion/react'
import { theme } from './theme'

import Landing from './pages/landing'


function App() {
  

  return (
   <ThemeProvider theme={theme}>
   <Navbar/>
   <Landing/>

   </ThemeProvider>
  )
}

export default App
