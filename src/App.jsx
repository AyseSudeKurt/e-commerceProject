import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from './layout/Header';
import PageContent from './layout/PageContent';
import Footer from './layout/Footer';

import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/shop">
          <ShopPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
