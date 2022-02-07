/* eslint-disable no-alert */
import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import Header from './Header/Header';
import '../index.css';
import background from '../images/bg.jpg';

const theme = {
  blue: {
    default: '#3f51b5',
    hover: '#283593',
  },
  pink: {
    default: '#e91e63',
    hover: '#ad1457',
  },
};

const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

Button.defaultProps = {
  theme: 'blue',
};

function Home() {
  const [currentAccount, setCurrentAccount] = useState('');

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert('Get MetaMask!');
        return;
      }
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });
      console.log('Connected', accounts[0]);
      setCurrentAccount(accounts[0]);
      // let account = currentAccount;
      // Setup listener! This is for the case where a user comes to our site
      // and connected their wallet for the first time.
      // setupEventListener()
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log('Make sure you have metamask!');
      return;
    }
    console.log('We have the ethereum object', ethereum);

    const accounts = await ethereum.request({ method: 'eth_accounts' });
    const chain = await window.ethereum.request({ method: 'eth_chainId' });
    const chainId = chain;
    console.log('chain ID:', chain);
    console.log('global Chain Id:', chainId);
    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log('Found an authorized account:', account);
      setCurrentAccount(account);
      // Setup listener! This is for the case where a user comes to our site
      // and ALREADY had their wallet connected + authorized.
      // setupEventListener()
    } else {
      console.log('No authorized account found');
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <div className="gradient-bg-welcome" style={{ backgroundImage: `url(${background})`, width: '100%' }}>

      <Header />
      <div className="container">
        <div className="d-flex flex-row my-5">
          <div className="col-lg-8">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="images/tourist3.jpg"
              alt="Front-page"
            />
          </div>
          <div className="col-lg-5" style={{ color: 'white', fontWweight: '700' }}>
            <h1 className="font-weight-light"><b> Hire a Tourist Assistant</b> </h1>
            <br />   <br />
            <h4 align="justify">
              You do not have to be on that vacation without a tourist guide.
              This sytem maps you to a guide that tours you around. The tourist guide
              helps to answer questions as you tour around the location you are in.
              All you need is your Web3 wallet and you have a tour guide to experience
              the best tour ever.
            </h4>
            <br /><br /><br />
            <p>
              <a href="/Explore" target="_self" rel="noreferrer">
                <Button id="btn-login" variant="primary" size="lg" style={{ width: '100%', padding: '20px 7px 20px 7px', fontSize: '36px' }}> Explore the world</Button>
              </a>
            </p>
            <br />
            <p>
              <div>
                {currentAccount === '' ? (
                  <Button type="button" onClick={connectWallet} variant="primary" size="lg" style={{ width: '100%', padding: '20px 7px 20px 7px', fontSize: '36px' }}> Connect Wallet </Button>
                ) : (
                  <Card style={{ width: '100%', padding: '20px 7px 20px 7px', fontSize: '30px', color: 'red', textAlign: 'center' }}>
                    {`${currentAccount.substring(0, 8)} ... ${currentAccount.substring(
                      34,
                    )}`}
                  </Card>
                )}

              </div>

            </p>
          </div>
        </div>

      </div>
      <br />
      <div className="container" style={{ width: '100%' }}>
        <div className="d-flex flex-row">
          <div className="col-lg-15">
            <p>
              <a href="/Explore" target="_self" rel="noreferrer">
                <Button id="btn-login" variant="primary" size="lg" style={{ width: '100%', padding: '7px 7px 7px 7px', fontSize: '36px' }}> Know a Place before you visit ot with our Map</Button>
              </a>
            </p>

            <p>
              <a href="/Explore" target="_self" rel="noreferrer">
                <Button id="btn-login" variant="primary" size="lg" style={{ width: '100%', padding: '7px 7px 7px 7px', fontSize: '36px' }}> Engage a Tour Guide with the power of Web3</Button>
              </a>
            </p>
            <p>
              <a href="/Explore" target="_self" rel="noreferrer">
                <Button id="btn-login" variant="primary" size="lg" style={{ width: '100%', padding: '7px 7px 7px 7px', margin: '1px 1px 15px 1px', fontSize: '36px' }}> Mint Places of Attractions as NFTs</Button>
              </a>
            </p>
            <p>
              <a href="/Explore" target="_self" rel="noreferrer">
                <Button id="btn-login" variant="primary" size="lg" style={{ width: '100%', padding: '7px 7px 7px 7px', fontSize: '36px' }}> Explore Restaurants with Rankings and Awards</Button>
              </a>
            </p>

            <p>
              <a href="/Explore" target="_self" rel="noreferrer">
                <Button id="btn-login" variant="primary" size="lg" style={{ width: '100%', padding: '7px 7px 7px 7px', fontSize: '36px' }}> Experience Best Tour Ever</Button>
              </a>
            </p>
            <br />
          </div>
        </div>

      </div>

    </div>

  );
}

export default Home;
