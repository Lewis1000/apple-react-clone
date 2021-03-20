import React from 'react';
import Icon from './components/Icon';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Footer from './components/Footer';

const App = () => {
  return (
    <React.Fragment>
      <Icon />
      <Navigation />
      <Home />
      <Footer />
    </React.Fragment>
  );
}

export default App;
