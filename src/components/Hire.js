import React from 'react';
import Header from './Header/Header';
import './Superfluidstyles.css';
import { CreateFlow } from '../CreateFlow';

export default function Hire() {
  return (
    <div className="App">
      <Header />
      <CreateFlow />
    </div>
  );
}
