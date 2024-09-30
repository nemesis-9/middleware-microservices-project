
import './App.css'
import Home from './components/Home'
import Header from './components/Header'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Bills from './components/Bills'
import Services from './components/Services'
import Pay from './components/Pay'
function App() {

  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          {/* http://localhost:3000 */}
          <Route path='/' element={<Home/>}></Route>
          <Route path='/services' element={<Services/>}></Route>
          <Route path='/bills' element={<Bills/>}></Route>
          <Route path='/pay' element={<Pay/>}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
