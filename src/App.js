import React from 'react'
import './App.css'
import ListOfGifs from './components/ListOfGifs'
import { Link, Route } from 'wouter'
/* Route, nos sirve para darle una ruta especifica a nuestro componente renderizado,   en este caso la pasamos como parametro (props) la keyword
   Link, nos srive para hacer enlaces  que funcionen con el history push, es decir que actualizara el enlce sin necesidad de refrescar el navegador
*/

export default function App() {
  //const [keyword, setKeyword] = useState('matrix');
  return (
    <div className="App">
      <section className="App-content">
      <h1>App</h1>
       <Link to="/gif/soccer">Gifs de futbol</Link>
       <Link to="/gif/developer">Gifs de web developer</Link>
       <Link to="/gif/guerra">Gifs de guerra</Link>
        <Route component = {ListOfGifs} path='/gif/:keyword' />
      </section>
    </div>
  )
}

