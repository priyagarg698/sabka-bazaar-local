import React from 'react';
import './App.css';
import Header from './components/header/header.component';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './pages/homePage/homePage.component'
import Footer from './components/footer/footer.component';
import { BrowserRouter } from 'react-router-dom';
import SignInPage from './pages/sign-in/signInPage.component';
import SignUpPage from './pages/sign-up/signUpPage.component';
import PlpPage from './pages/PLPPage/PlpPage.component';
function App() {
  return (
    <div>
      <Header></Header>
      <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/PLP" component={PlpPage}></Route>
          <Route path="/login" component={SignInPage}></Route>
          <Route path="/register" component={SignUpPage}></Route>

        </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
