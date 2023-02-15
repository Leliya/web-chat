import { UserAPI } from '../utils/api/UserAPI';
import { checkResponse } from '../utils/utility/checkResponse';

const userAPI = new UserAPI();

class UserController {
  public changeProfile(dataProfile: User): Promise<Indexed> {
    return userAPI.changeProfile(dataProfile).then(checkResponse<Indexed>);
  }

  public changePassword(dataProfile: User): Promise<Indexed> {
    return userAPI.changePassword(dataProfile).then(checkResponse<Indexed>);
  }

  public changeAvatar(dataAvatar: FormData): Promise<Indexed> {
    return userAPI.changeAvatar(dataAvatar).then(checkResponse<Indexed>);
  }

  public searchUserByLogin(data: { login: string }): Promise<User[]> {
    return userAPI.searchUserByLogin(data).then(checkResponse<User[]>);
  }
}

export default new UserController();
