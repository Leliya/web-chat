import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { BASE_URL } from '../../data/const';

const handlers = [
  rest.get(`${BASE_URL}/user`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        searchParamsWere: req.url.search,
      })
    );
  }),

  rest.post(`${BASE_URL}/logout`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        mode: req.mode,
        method: req.method,
        credentials: req.credentials,
      })
    );
  }),
];

export const server = setupServer(...handlers);
