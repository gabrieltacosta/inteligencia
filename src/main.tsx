import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import './index.css'
import App from './App.tsx'
import Ferramantas from './components/ferramentas.tsx'
import Consultas from './components/consultas.tsx'
import Previsao from './components/previsao.tsx'
import AreaBatalhoes from './components/area-batalhoes.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename='/unidades/6bprv/inteligencia/ferramentas/'>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Ferramantas />} />
      </Route>
      <Route path="/consulta" element={<App />}>
        <Route index element={<Consultas />} />
      </Route>
      <Route path="/previsao" element={<App />}>
        <Route index element={<Previsao />} />
      </Route>
      <Route path="/area-dos-batalhoes" element={<App />}>
        <Route index element={<AreaBatalhoes />} />
      </Route>
    </Routes>
  </BrowserRouter>,
)
