import React from 'react';
import './index.css';
import AddTarget from '../AddTarjeta/AddTarjeta';
import Listado from '../List/Listado';

const App = () => (
  <div className="app">
    <AddTarget/>
    <Listado/>
  </div>
)

export default App;
