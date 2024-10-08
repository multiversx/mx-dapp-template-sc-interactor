import { EndpointDefinition } from '@multiversx/sdk-core/out/smartcontracts';
import { useSCExplorerContext } from '@multiversx/sdk-dapp-sc-explorer/contexts/SCExplorerContextProvider';
import { Endpoint } from './Endpoint';

export const Endpoints = () => {
  const { smartContract } = useSCExplorerContext();

  const endpoints = smartContract?.abiRegistry
    ?.endpoints as EndpointDefinition[];

  if (!(endpoints && endpoints.length > 0)) {
    return null;
  }
  return <Endpoint endpoints={endpoints} />;
};
