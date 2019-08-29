import React from 'react'
import ReactDOM from 'react-dom'
import Hero from './components/hero'
import Navbar from './components/navbar'
import Footer from './components/footer';
import './style.css'

function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))