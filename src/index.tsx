import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/home'
import Docs from './components/docs';
import Navbar from './components/navbar';
import './style.css'
import Footer from './components/footer';

const AppRouter: React.FunctionComponent = () => {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/docs" component={Docs} />
      </Router>
      <Footer />
    </div>

  )
}

ReactDOM.render(<AppRouter />, document.getElementById('root'))