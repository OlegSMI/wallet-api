import { ApolloClient, InMemoryCache } from "@apollo/client";

const APIURL =
  "https://api.thegraph.com/subgraphs/name/chimpytuts/darkpools-main-arbitrum";

const cache = new InMemoryCache();

export const client = new ApolloClient({
  uri: APIURL,
  cache: cache,
});

export const tokensQuery = `
  query getTheLatest($first: Int = 5) {
    swaps(orderBy: timestamp, orderDirection: desc, first: $first) {
      id
      caller
      valueUSD
      tokenInSym
      tokenOutSym
      tokenAmountIn
      tokenAmountOut
      poolId {
        address
      }
      timestamp
    }
  }
`;
