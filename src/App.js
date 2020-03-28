import React, { useState } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import HomeContainer from './components/home/homeContainer';
import HeaderComponent from './components/header/header';
import SearchPageComponent from './components/search-page/search-page-component';
import NavPanellFull from './components/nav-panel/nav-panel-component';
import BestContainer from './components/bests/bests-container';
import { SelectionContext, position } from './context/selection-view';
import Axios from 'axios';
import CategoriesList from './components/categories/categories-list.component';
import AccountComponent from './components/common/account/personal-account/account-component';
function App(props) {
  Axios.post('http://localhost:8080/router/authenticate', {
    login: 'werty@yandex.by',
    password: 'qqqqq'
  });
  const [stateContext, changeState] = useState(position.block);
  const viewPosition = {
    stateContext,
    toggleContext: toggleContext
  }
  function toggleContext(view) {
    changeState(view);
  }
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
        <SelectionContext.Provider value={viewPosition}>
          <section className="e-content">
            <Route exact path="/" render={() => <HomeContainer />}></Route>
            <Route  path="/home" render={() => <HomeContainer />}></Route>
            <Route  path="/best" render={() => <BestContainer />}></Route>
            <Route  path="/search" render={() => <SearchPageComponent />}></Route>
            {/* <Route exact path="/category" component={CategoriesComponent}></Route> */}
            <Route exact path="/category/:id?" component={CategoriesList}></Route>
            <Route  path="/account" component={AccountComponent}></Route>
            {/* <Route render={() => <div>not found</div>}></Route> */}
          </section>
        </SelectionContext.Provider>
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
