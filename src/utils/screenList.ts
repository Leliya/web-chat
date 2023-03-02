import Login from '../pages/login/login';
import Register from '../pages/register/register';
import Profile from '../pages/profile/profile';
import Chats from '../pages/chats/chats';
import { PageNotFound } from '../pages/pageNotFound/pageNotFound';
import { PageServerError } from '../pages/pageServerError/pageServerError';
import { BlockClass } from './Block';

export enum Views {
  Register = 'register',
  Login = 'login',
  Profile = 'profile',
  Chats = 'chats',
  PageNotFound = 'pageNotFound',
  PageServerError = 'pageServerError',
}

const map: Record<Views, BlockClass<any>> = {
  [Views.Register]: Register,
  [Views.Login]: Login,
  [Views.Profile]: Profile,
  [Views.Chats]: Chats,
  [Views.PageNotFound]: PageNotFound,
  [Views.PageServerError]: PageServerError,
};

export const getScreenComponent = (screen: Views): BlockClass<any> => {
  return map[screen];
};
