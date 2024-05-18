import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Páginas
import { Inicio } from './pages/Inicio'
import { CandidatosList } from './pages/CandidatosList'
import { Contacto } from './pages/Contacto'
import { Login } from './pages/Login'
import { Dashboard } from './pages/Dashboard'

//Menú
import { Menu } from './components/Menu'

//Contextos
import { AuthProvider } from './context/AuthContext'

export const App = () => {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Menu />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/candidatos' element={<CandidatosList />} />
            <Route path='/candidatos/:gender' element={<CandidatosList />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  )

}