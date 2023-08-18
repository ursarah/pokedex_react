
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// rotas 
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages 
import Home from './pages/Home.jsx'
import Pokemon from './pages/Pokemon.jsx'
import DetPoke from './pages/DetPoke.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes >
      <Route element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="pokemon" element={<Pokemon />} />
        <Route path="pokemon/detPokemon/:id" element={<DetPoke />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
