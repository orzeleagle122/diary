import { rest } from 'msw';
import { students as users } from 'mocks/data/students';

export const handlers = [
  rest.get('/students', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ users }));
  }),
];
