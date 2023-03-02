import { AuthAPI } from '../utils/api/AuthAPI';
import { checkResponse } from '../utils/utility/checkResponse';

const authAPI = new AuthAPI();

class AuthController {
  public getUser(): Promise<User> {
    return authAPI.getUser().then(checkResponse<User>);
  }

  public register(data: RegisterType): Promise<Indexed> {
    return authAPI.register(data).then(checkResponse<Indexed>);
  }

  public login(data: LoginType): Promise<Indexed> {
    return authAPI.login(data).then(checkResponse<Indexed>);
  }

  public logout(): Promise<Indexed> {
    return authAPI.logout().then(checkResponse<Indexed>);
  }
}

export default new AuthController();
