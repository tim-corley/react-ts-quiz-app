import { rest } from 'msw';
import testData from './testData.json';

export const handlers = [
  rest.get('https://opentdb.com/api.php', async (req, res, ctx) => {
    return await res(ctx.json(testData));
  }),
];

// https://codeburst.io/configuring-mock-service-worker-msw-c62c9d9e4a6a
// https://mswjs.io/docs/api/response/network-error
// https://mswjs.io/docs/recipes/mocking-error-responses
export const networkErrorHandlers = [
  rest.get('*', async (req, res, ctx) => {
    // res.networkError('Oops! Something went wrong...')
    return await res(ctx.status(404));
  }),
];
