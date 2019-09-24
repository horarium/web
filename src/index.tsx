import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/home'
import Docs from './components/docs';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Canvas from './components/docs/canvas';
import './style.css'


const AppRouter: React.FunctionComponent = () => {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/docs" component={Docs}/>
        <Route path="/docs/canvas" component={Canvas}/>
      </Router>
      <Footer />
    </div>
  )
}

ReactDOM.render(<AppRouter />, document.getElementById('root'))