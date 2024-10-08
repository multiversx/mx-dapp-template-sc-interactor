import { EnvironmentsEnum } from 'types';
// import abi from 'contracts/ '; 

export * from './sharedConfig';

export const API_URL = 'https://template-api.multiversx.com';
export const sampleAuthenticatedDomains = [API_URL];
export const environment = EnvironmentsEnum.mainnet;
export const metamaskSnapWalletAddress = 'https://snap-wallet.multiversx.com';

interface IWhitelistEndpoint {
  name: string,
  title: string
}

export const contractAbi = '' // = abi
export const contractAddress = '';
export const whitelistEndpoints: IWhitelistEndpoint[] = [
  {name: '', title: ''},
]