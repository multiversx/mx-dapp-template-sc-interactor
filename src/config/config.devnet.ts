import { EnvironmentsEnum } from 'types';
// import abi from 'contracts/ '; 

export * from './sharedConfig';

export const API_URL = 'https://devnet-template-api.multiversx.com';
export const sampleAuthenticatedDomains = [API_URL];
export const environment = EnvironmentsEnum.devnet;
export const metamaskSnapWalletAddress =
  'https://devnet-snap-wallet.multiversx.com';

interface IWhitelistEndpoint {
  name: string,
  title: string
}

export const contractAbi = '' // = abi
export const contractAddress = '';
export const whitelistEndpoints: IWhitelistEndpoint[] = [
  {name: '', title: ''},
]
