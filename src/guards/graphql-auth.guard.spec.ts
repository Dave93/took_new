import { GraphqlAuthGuard } from './graphql-auth.guard';

describe('GraphqlAuthGuard', () => {
  it('should be defined', () => {
    expect(new GraphqlAuthGuard()).toBeDefined();
  });
});
