import { logout } from '../auth';
import { Views } from '../screenList';

export function checkResponse<T>(res: XMLHttpRequest): Promise<T> | never {
  if (res.status === (200 || 201)) {
    return res.response;
  }

  if (res.status === 401) {
    logout(window.router);
    return Promise.reject(`Ошибка ${res.status}. Пользователь не авторизован`);
  }

  if (res.status === 500) {
    window.store.set({ screen: Views.PageServerError }, '');
    return Promise.reject(`Ошибка ${res.status}. Пользователь не авторизован`);
  } else {
    return Promise.reject(`Ошибка ${res.status}. ${res.response.reason}`);
  }
}
