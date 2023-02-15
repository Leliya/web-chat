import { BASE_URL } from '../../data/const';
import { HTTPTransport } from './HTTP';

const userAPIInstance = new HTTPTransport(`${BASE_URL}/user/`);

export class UserAPI {
  changeProfile(dataProfile: User) {
    return userAPIInstance.put('profile', {
      data: dataProfile,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  changeAvatar(dataAvatar: FormData) {
    return userAPIInstance.put('profile/avatar', {
      data: dataAvatar,
    });
  }

  changePassword(dataProfile: User) {
    return userAPIInstance.put('password', {
      data: dataProfile,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  searchUserByLogin(login: { login: string }) {
    return userAPIInstance.post('search', {
      data: login,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
