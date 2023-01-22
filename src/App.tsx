import './App.scss';
import { Register } from './Register';
import { ProviderUser } from './Action/Action';
import React from 'react';

const App = () => {
  return (
    <ProviderUser>
      <div className="App">
        <Register></Register>
      </div>
    </ProviderUser>
  );
};

export default App;
