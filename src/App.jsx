import Home from './Pages/Home.jsx'
import Models from './Pages/Models.jsx'
import Buy from './Pages/Buy.jsx'
import Error404 from './Pages/Error404.jsx'

import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/modelos' element={<Models></Models>}></Route>
        <Route path='/compra' element={<Buy></Buy>}></Route>
        <Route path='*' element={<Error404></Error404>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
