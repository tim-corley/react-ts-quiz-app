import { rest } from 'msw';
import testData from './testData.json';

export const handlers = [
  rest.get('https://opentdb.com/api.php', async (req, res, ctx) => {
    return res(ctx.json(testData));
  }),
];
