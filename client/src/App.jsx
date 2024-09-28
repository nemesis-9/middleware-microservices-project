
import './App.css'
import Home from './components/Home'
import Header from './components/Header'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {

  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          {/* http://localhost:3000 */}
          {/* <Route path='/' element={<Home/>}></Route> */}
          <Route path='/home' element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
