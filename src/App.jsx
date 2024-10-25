import {BrowserRouter, Route ,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Success from './pages/Success'
import Error from './pages/Error'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

function App() {
  const currentTheme = useSelector((state)=>state.theme.theme)
  useEffect(() => {
    if (currentTheme === 'light') {
      document.body.style.backgroundColor = '#ede9e6';
      document.body.style.color = '#000000';
    } else {
      document.body.style.backgroundColor = '#000000';
      document.body.style.color = '#';
    }
  }, [currentTheme]);

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/success' element={<Success/>}/>
      <Route path='/*' element={<Error/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
