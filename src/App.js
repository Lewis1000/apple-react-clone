import React from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Footer from './components/Footer';

const App = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Home />
      <Footer />
    </React.Fragment>
  );
}

export default App;
