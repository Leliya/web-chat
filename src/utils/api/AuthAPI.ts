import { BASE_URL } from '../../data/const';
import { HTTPTransport } from './HTTP';

const authAPIInstance = new HTTPTransport(`${BASE_URL}/auth/`);

export class AuthAPI {
  getUser() {
    return authAPIInstance.get('user', {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  register(dataForm: RegisterType) {
    return authAPIInstance.post('signup', {
      data: dataForm,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  login(dataForm: LoginType) {
    return authAPIInstance.post('signin', {
      data: dataForm,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  logout() {
    return authAPIInstance.post('logout', {
      headers: { 'content-type': 'application/json' },
    });
  }
}
