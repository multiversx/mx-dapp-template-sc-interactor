import { EndpointDefinition } from '@multiversx/sdk-core/out';
import { whitelistEndpoints } from 'config';
import { EndpointDisplay } from './EndpointDisplay';

export const Endpoint = ({
  endpoints = []
}: {
  endpoints: EndpointDefinition[];
}) => {
  if (endpoints.length === 0) {
    return null;
  }

  const filteredEndpoints =
    whitelistEndpoints?.length > 0
      ? whitelistEndpoints
          .map(({ name }) =>
            endpoints.find((endpoint) => endpoint.name === name)
          )
          .filter((endpoint) => endpoint != null)
      : endpoints;

  // if (whitelistEndpoints && whitelistEndpoints.length > 0) {
  //   const filteredEndpoints = whitelistEndpoints
  //     .map(({ name }) => endpoints.find((endpoint) => endpoint.name === name))
  //     .filter((endpoint) => endpoint !== undefined);

  //   if (filteredEndpoints.length !== 0) {
  //     endpoints = filteredEndpoints;
  //   }
  // }
  return (
    <div className='flex flex-col gap-6'>
      {filteredEndpoints.map((endpoint, index) => {
        return (
          <EndpointDisplay
            key={`${endpoint.name}-${index}`}
            endpoint={endpoint}
          />
        );
      })}
    </div>
  );
};
