// App.js
import React from 'react';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from './router/routes';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

const App = () => (
  <Router>
    <div className='sm:px-sm md:px-md px-sm'>
      <Header />
      <main>
        {renderRoutes(routes)}
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
