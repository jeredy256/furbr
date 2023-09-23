// Main.tsx
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Hetero from './components/pages/Nsfw/Hetero'
import Lesbi from './components/pages/Nsfw/Lesbi'
import Futa from './components/pages/Nsfw/Futa'
import Gay from './components/pages/Nsfw/Gay'
import Gays_ from './components/pages/Sfw/Gays'
import Hetero_ from './components/pages/Sfw/Hetero'
import Lesbi_ from './components/pages/Sfw/Lesbica'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <Routes>
      <Route path='/react-page' element={<Home />} />
      <Route path='/react-page/header' element={<Header />} />
        {/* nsfw */}
        <Route path='/react-page/gay' element={<Gay />} />
      <Route path='/react-page/hetero' element={<Hetero />} />
      <Route path='/react-page/lesbi' element={<Lesbi />} />
      <Route path='/react-page/futa' element={<Futa />} />
      {/* sfw */}
      <Route path='/react-page/gay_' element={<Gays_ />} />
      <Route path='/react-page/hetero_' element={<Hetero_ />} />
      <Route path='/react-page/lesbi_' element={<Lesbi_ />} />
      
      


    </Routes>
  </Router>
)



//  ReactDOM.createRoot(document.getElementById('root')!).render(
//   <Router>
//     <RouterProvide router={router}/>
//   </Router>
// )
