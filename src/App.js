import React from 'react';
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import { Switch, Route, } from 'react-router-dom';
import './Styles/App.css';
import AboutPage from './Pages/AboutPage';
import PortfolioPage from './Pages/PortfolioPage';
import ContactPage from './Pages/ContactPage';
import BlogsPage from './Pages/BlogsPage';


function App() {
  return (
    <div className="App">

      <div className="App__sidebar" ><NavBar /></div>

      <div className="App__main-content" >
        <div className="App__content" >
          <Switch>
            <Route path="/" exact render={() => <HomePage />} />
            <Route path="/about" exact render={() => <AboutPage />} />
            <Route path="/portfolios" exact render={() => <PortfolioPage />} />
            <Route path="/blogs" exact render={() => <BlogsPage />} />
            <Route path="/contact" exact render={() => <ContactPage />} />
          </Switch>
        </div>
      </div>

    </div>
  );
}

export default App;
