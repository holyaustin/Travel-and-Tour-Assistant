import React, { useState } from 'react';
// import { ethers } from 'ethers';
// import Web3Modal from 'web3modal';
// import { transferaddress, registeraddress } from '../contractconfig';
import Header from './Header/Header';

// import Register from '../../artifacts/contracts/Register.sol/TouristRegister.json';
// import Transfer from '../../artifacts/contracts/Transfer.sol/Transfer.json';

export default function Become() {
  const [formInput, updateFormInput] = useState({ price: '', name: '', description: '' });

  // eslint-disable-next-line no-empty-function
  async function Reg() {

  }

  return (
    <>
      <Header />
      <div className="flex justify-center">
        <title>Register as a Tour Guide</title>
        <div className="w-1/2 flex flex-col pb-12">
          <input
            placeholder="Wallet Address"
            className="mt-8 border rounded p-4"
            onChange={(e) => updateFormInput({ ...formInput, wallet: e.target.value })}
          />
          <input
            placeholder="Enter your Surname"
            className="mt-8 border rounded p-4"
            onChange={(e) => updateFormInput({ ...formInput, surname: e.target.value })}
          />
          <input
            placeholder="Enter Othernames"
            className="mt-8 border rounded p-4"
            onChange={(e) => updateFormInput({ ...formInput, othernames: e.target.value })}
          />
          <input
            placeholder="Enter your City name here"
            className="mt-2 border rounded p-4"
            onChange={(e) => updateFormInput({ ...formInput, city: e.target.value })}
          />
          <input
            placeholder="Enter your Counrtry Name Here"
            className="mt-2 border rounded p-4"
            onChange={(e) => updateFormInput({ ...formInput, country: e.target.value })}
          />

          <button type="button" onClick={Reg} className="font-bold mt-4 bg-blue-700 text-white rounded p-4 shadow-lg">
            Register
          </button>
        </div>
      </div>
    </>
  );
}
