import React from 'react';
import './App.css';
import Header from './components/header/header.component';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './pages/homePage/homePage.component'
import ProductListing from './pages/ProductListing/productListing.component'
import Footer from './components/footer/footer.component';
import { BrowserRouter } from 'react-router-dom';
import SignIn from './pages/sign-in/sign-in.component';
import SignUp from './components/signUp/signUp.component';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/PLP" component={ProductListing}></Route>
          <Route path="/login" component={SignIn}></Route>
          <Route path="/register" component={SignUp}></Route>

        </Switch>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
