// Main.tsx
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
//nsfw
import Hetero from './components/pages/Nsfw/Hetero'
import Lesbi from './components/pages/Nsfw/Lesbi'
import Futa from './components/pages/Nsfw/Futa'
//sfw
import Gays_ from './components/pages/Sfw/Gays'
import Hetero_ from './components/pages/Sfw/Hetero'
import Lesbi_ from './components/pages/Sfw/Lesbica'
import Gay from './components/pages/Nsfw/Gay'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <Routes>
      <Route path='/furbr' element={<Home />} />
      <Route path='/furbr/header' element={<Header />} />
        {/* nsfw */}
        {/* <Route path='/gay' element={<Gay />} /> */}
        <Route path='/furbr/gay' element={<Gay />} />

      <Route path='/furbr/hetero' element={<Hetero />} />
      <Route path='/furbr/lesbi' element={<Lesbi />} />
      <Route path='/furbr/futa' element={<Futa />} />
      {/* sfw */}
      <Route path='/furbr/gay_' element={<Gays_ />} />
      <Route path='/furbr/hetero_' element={<Hetero_ />} />
      <Route path='/furbr/lesbi_' element={<Lesbi_ />} />
      
      


    </Routes>
  </Router>
)



//  ReactDOM.createRoot(document.getElementById('root')!).render(
//   <Router>
//     <RouterProvide router={router}/>
//   </Router>
// )
