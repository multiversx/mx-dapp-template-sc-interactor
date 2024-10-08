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

export const contractAbi = abi; // NOTE: uncomment this line
export const contractAddress =
  'erd1qqqqqqqqqqqqqpgqd8fcu7nmwu68wscmj2dxgp52nuslrx46dk2s63kpqh';
export const whitelistEndpoints: IWhitelistEndpoint[] = [
  { name: 'lock', title: 'Lock' },
  { name: 'set_unbond_period', title: 'Unbond Period' }
];
