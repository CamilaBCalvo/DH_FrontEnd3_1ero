import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card/Card'
import Header from './components/header/Header'

function App() {
  return (
    <div>
        <Header/>
        <Card title="Card title">
          card body 
        </Card>
        <div className="green-theme">
          <Card title="Card title">
            card body
          </Card>
        </div>
        <div className="blue-theme">
          <Card title="Card title">
            card body
          </Card>
        </div>
    </div>
  )
}
export default App
