import React from 'react';
import Header from './Header';
import HeaderArea from './HeaderArea';
import Navigation from './Navigation';
import Footer from './Footer';

function App() {

  return (
    <div className="page">
        <div className="page__container">
          <Header />
          <HeaderArea />
          <Navigation/>
          <Footer />
        </div>
    </div>

  );
}

export default App;
