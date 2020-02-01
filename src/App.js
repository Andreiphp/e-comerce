import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import HomeContainer from './components/home/homeContainer';
import HeaderComponent from './components/header/header';
import SearchPageComponent from './components/search-page/search-page-component';
import NavPanellFull from './components/nav-panel/nav-panel-component';
function App(props) {
  return (
    <main className="">
      <header>
        <HeaderComponent />
      </header>
      <div className="">
        <NavPanellFull />
      </div>
      <div className="e-container e-flex">
        <div className="e-sidebar">
dsfsdfdsf
        </div>
        <section className="e-content">
          <Route path="/home" render={() => <HomeContainer />}></Route>
          <Route path="/search" render={() => <SearchPageComponent />}></Route>
        </section>

      </div>
      {/* <Route path="/hit" render={() => { <HitContainer /> }}></Route>
      <Route path="/brands" render={() => { <BrandsContainer /> }}></Route>
      <Route path="/about" render={() => { <aboutContainer /> }}></Route>
      <Route path="/contacts" render={() => { <contactsContainer /> }}></Route>
      <Route path="/cart" render={() => { <cartContainer /> }}></Route> */}
    </main>
  );
}

export default App;
