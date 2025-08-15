import React from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";

import Header from './layout/Header';
import AboutHeader from './layout/AboutHeader'; // About sayfası için özel header
import Footer from './layout/Footer';

import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import About from './pages/About';

function AppLayout() {
  const location = useLocation();

  // Eğer /about sayfasındaysak özel header kullan
  const isAboutPage = location.pathname === '/about';

  return (
    <div className="flex flex-col min-h-screen">
      {isAboutPage ? <AboutHeader /> : <Header />}

      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/shop">
          <ShopPage />
        </Route>
        <Route path="/productDetail">
          <ProductDetailPage />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}
