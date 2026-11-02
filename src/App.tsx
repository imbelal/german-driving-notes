import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Category } from './pages/Category'
import { Checklists } from './pages/Checklists'
import { Home } from './pages/Home'
import { Mistakes } from './pages/Mistakes'
import { Quiz } from './pages/Quiz'
import { NotFound } from './pages/NotFound'
import { Rules } from './pages/Rules'
import { ScenarioPage } from './pages/ScenarioPage'
import { Signs } from './pages/Signs'
import { Vocabulary } from './pages/Vocabulary'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="category/:id" element={<Category />} />
        <Route path="scenario/:id" element={<ScenarioPage />} />
        <Route path="mistakes" element={<Mistakes />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="checklists" element={<Checklists />} />
        <Route path="signs" element={<Signs />} />
        <Route path="rules" element={<Rules />} />
        <Route path="vocabulary" element={<Vocabulary />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
