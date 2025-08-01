import React from 'react';
import { Switch, Route } from 'react-router-dom'; // Switch ve Route import ediliyor

// Sayfa bileşenlerinizi import edin
import HomePage from '../pages/HomePage';

function PageContent() {
    return (
        <main className="flex-grow p-4">
            {/* V5'te Routes yerine Switch kullanılır */}
            <Switch>
                {/*
          V5'te Route'lar `component` prop'u ile render edilir ve
          ana sayfa için `exact` prop'u eklenir.
        */}
                <Route exact path="/" component={HomePage} />

                {/* Diğer sayfalar buraya eklenecek */}
                {/* Örnek: <Route path="/products" component={ProductsPage} /> */}
            </Switch>
        </main>
    );
}

export default PageContent;