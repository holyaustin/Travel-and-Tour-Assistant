/* eslint-disable no-undef */
/* eslint-disable no-shadow */
/* Moralis init code */

const serverUrl = 'https://mbfc1qyjblsu.usemoralis.com:2053/server';
const appId = '5H4FBm8Wzvqok34TDv1ZSUu5Mo7NjTqJl1XGLosO';
Moralis.start({ serverUrl, appId });

/* Authentication code */
async function login() {
  let user = Moralis.User.current();
  if (!user) {
    user = await Moralis.authenticate({ signingMessage: 'Log in using Moralis' })
      .then((user) => {
        console.log('logged in user:', user);
        console.log(user.get('ethAddress'));
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

async function logOut() {
  await Moralis.User.logOut();
  console.log('logged out');
}

document.getElementById('btn-login').onclick = login;
document.getElementById('btn-logout').onclick = logOut;
