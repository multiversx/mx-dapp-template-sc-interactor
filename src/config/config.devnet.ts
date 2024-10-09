import abi from 'contracts/liquid-locking.abi.json'; // NOTE: replace this with your ABI file
import { EnvironmentsEnum } from 'types';

export * from './sharedConfig';

export const API_URL = 'https://devnet-template-api.multiversx.com';
export const sampleAuthenticatedDomains = [API_URL];
export const environment = EnvironmentsEnum.devnet;
export const metamaskSnapWalletAddress =
  'https://devnet-snap-wallet.multiversx.com';

interface IWhitelistEndpoint {
  name: string;
  title: string;
}

export const contractAbi = abi;
export const contractAddress = ''; // NOTE: add your contract address here

// NOTE: add the endpoints you want to interact with
// NOTE: `name` is endpoint's name from the ABI file; `title` is at your choice
export const whitelistEndpoints: IWhitelistEndpoint[] = [
  // { name: '', title: '' } // NOTE: uncomment this line and add your endpoints here
];
