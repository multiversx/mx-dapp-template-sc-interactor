import { EnvironmentsEnum } from 'types';
// import abi from 'contracts/ '; 

export * from './sharedConfig';

export const API_URL = 'https://testnet-template-api.multiversx.com';
export const sampleAuthenticatedDomains = [API_URL];
export const environment = EnvironmentsEnum.testnet;
export const metamaskSnapWalletAddress =
  'https://testnet-snap-wallet.multiversx.com';

interface IWhitelistEndpoint {
  name: string,
  title: string
}

export const contractAbi = '' // = abi
export const contractAddress = '';
export const whitelistEndpoints: IWhitelistEndpoint[] = [
  {name: '', title: ''},
]
  