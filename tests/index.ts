import { assert } from 'chai';
import ApolloLink from '../src/index.js';

describe('mockNetworkInterfaceWithSchema', () => {
  it('can run a test', () => {
    const apolloLink = new ApolloLink();
    assert(apolloLink.canTest());
  });
});
