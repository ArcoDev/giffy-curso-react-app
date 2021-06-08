import React from 'react'
import './App.css'
import ListOfGifs from './components/ListOfGifs'

export default function App() {
  //const [keyword, setKeyword] = useState('matrix');
  return (
    <div className="App">
      <section className="App-content">
      <ListOfGifs keyword='code' />
      </section>
    </div>
  )
}

