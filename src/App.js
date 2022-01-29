import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Temel from './Components/Pages/Temel';
import Hakkimda from './Components/Pages/Hakkimda';
import Egitim from  './Components/Pages/Egitim';
import IlgiDers from  './Components/Pages/IlgiDers';
import IsTecrube from  './Components/Pages/IsTecrube';
import MeslekProj from  './Components/Pages/MeslekProj';
import Gonullu from  './Components/Pages/Gonullu';
import Dil from  './Components/Pages/Dil';
import IlgiAlan from './Components/Pages/IlgiAlan';
import Yayin from './Components/Pages/Yayin';
import Odul from './Components/Pages/Odul';
import Referans from './Components/Pages/Referans';
import MeslekYet from './Components/Pages/MeslekYet';



function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/temel' exact component={Temel} />
          <Route path='/hakkimda' exact component={Hakkimda} />
          <Route path='/egitim' exact component={Egitim} />
          <Route path='/IlgiDers' exact component={IlgiDers} />
          <Route path='/istecrube' exact component={IsTecrube} />
          <Route path='/meslekprojeler' exact component={MeslekProj} />
          <Route path='/gonullutecrube' exact component={Gonullu} />
          <Route path='/dil' exact component={Dil} />
          <Route path='/meslekyetenek' exact component={MeslekYet} />
          <Route path = '/ilgialan' exact component = {IlgiAlan}/>
          <Route path='/yayinlar' exact component={Yayin} />
          <Route path='/oduller' exact component={Odul} />
          <Route path='/referanslar' exact component={Referans} />*/
          
        
        </Switch>
      </Router>
    </>
  );
}

export default App;