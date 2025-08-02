import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './layout/Header';
import PageContent from './layout/PageContent';
import Footer from './layout/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <PageContent />
        <Footer />
      </div>
    </Router>
  );
}

export default App;