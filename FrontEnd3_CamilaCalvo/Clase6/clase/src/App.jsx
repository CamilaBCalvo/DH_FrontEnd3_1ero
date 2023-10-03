import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import games from './../../../../F3-classes-vite/src/fakeApi/games.json'

const App = () => {
  console.log(games)
  return (
    <div className='flex'>
      {games.map(( game, index) =>{
        return(
          <div>
        <h1>{game.name}</h1>
        <img src={game.imgUrl} alt={game.name}/>
      </div>
        )
      })}
    </div>
  )
}
export default App
