import { Route, Routes } from 'react-router-dom'
import Home from './home/home'
import Usuarios from './usuarios/usuarios'
import Publicaciones from './publicaciones/publicaciones'
import Recargas from './historialRecargas/recargas'
import Login from './login'
import { datosContext } from './DataContext'
import { useContext } from 'react'
import Ayuda from './ayuda/ayuda'
import Reportes from './reportes/reportes'
import AdminIngresos from './precio/adminIngresos'


function App() {
  const { usuario, } = useContext(datosContext);
  return (
    <>
      {usuario ?
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/usuarios' element={<Usuarios />} />
          <Route path='/publicaciones' element={<Publicaciones />} />
          <Route path='/recargas' element={<Recargas />} />
          <Route path='/ayuda' element={<Ayuda />} />
          <Route path='/reportes' element={<Reportes />} />
          <Route path='/ingresos' element={<AdminIngresos />} />
          <Route path='/*' element={<Home />} />
        </Routes > :
        <Login />
      }
    </>
  )
}

export default App
