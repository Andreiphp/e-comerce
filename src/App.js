import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import HomeContainer from './components/home/homeContainer';
import HeaderComponent from './components/header/header';
import SearchPageComponent from './components/search-page/search-page-component';
function App(props) {
  console.log(props);
  return (
    <main className="">
      <header>
        <HeaderComponent />
      </header>
      <Route path="/home" render={() => <HomeContainer />}></Route>
      <Route path="/search" render={() => <SearchPageComponent/>}></Route>
      {/* <Route path="/hit" render={() => { <HitContainer /> }}></Route>
      <Route path="/brands" render={() => { <BrandsContainer /> }}></Route>
      <Route path="/about" render={() => { <aboutContainer /> }}></Route>
      <Route path="/contacts" render={() => { <contactsContainer /> }}></Route>
      <Route path="/cart" render={() => { <cartContainer /> }}></Route> */}
    </main>
  );
}

export default App;
