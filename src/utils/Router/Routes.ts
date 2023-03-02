import { Views } from '../screenList';

const routes = [
  {
    path: '/sign-up',
    block: Views.Register,
    shouldAuthorized: false,
  },
  {
    path: '/settings',
    block: Views.Profile,
    shouldAuthorized: true,
  },
  {
    path: '/messenger',
    block: Views.Chats,
    shouldAuthorized: true,
  },
  {
    path: '/',
    block: Views.Login,
    shouldAuthorized: false,
  },
  {
    path: '*',
    block: Views.PageNotFound,
    shouldAuthorized: false,
  },
];

export default routes;
