import './App.css'
import Card from './components/Card'

function App() {

  const usuario = {
    nome: "Filipe Bratti",
    idade: 36,
    foto: "https://avatars.githubusercontent.com/u/118012320?v=4",
    github: "https://github.com/filipebratti",
    linkedin: "https://www.linkedin.com/in/filipe-bratti-schmidt-408a925b/"
  }

  return (
    <div>
      <Card usuario={usuario} />
    </div>
  )
}

export default App