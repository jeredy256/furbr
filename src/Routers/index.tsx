import {Routes, Route} from 'react-router-dom'

//Rotas
import Home from '../components/Home/Home'
import Header from '../components/Header/Header'
import Erro from '../components/Error'
import Comentarios from '../components/Comentario'

//Nsfw
import Gay from '../components/pages/Nsfw/Gay'
import Hetero from '../components/pages/Nsfw/Hetero'
import Lesbi from '../components/pages/Nsfw/Lesbi'
import Futa from '../components/pages/Nsfw/Futa'
//Sfw
import Gays_ from '../components/pages/Sfw/Gays'
import Hetero_ from '../components/pages/Sfw/Hetero'
import Lesbi_ from '../components/pages/Sfw/Lesbica'


const MainRouter = () => {
    return(
        <Routes>
            <Route path='/furbr' element={<Home />} />
      <Route path='/furbr/header' element={<Header />} />
        {/* nsfw */}
        {/* <Route path='/gay' element={<Gay />} /> */}
        <Route path='/furbr/gay' element={<Gay />}/>

      <Route path='/furbr/hetero' element={<Hetero />} />
      <Route path='/furbr/lesbi' element={<Lesbi />} />
      <Route path='/furbr/futa' element={<Futa />} />
      {/* sfw */}
      <Route path='/furbr/gay_' element={<Gays_ />} />
      <Route path='/furbr/hetero_' element={<Hetero_ />} />
      <Route path='/furbr/lesbi_' element={<Lesbi_ />} />

      <Route path="/furbr/coment" element={<Comentarios />} />

      <Route path='*' element={<Erro />} />
      

        </Routes>
    )
}

export default MainRouter