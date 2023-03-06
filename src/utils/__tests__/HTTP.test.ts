import { BASE_URL } from '../../data/const';
import { HTTPTransport } from '../api/HTTP';

const xhr = new HTTPTransport(BASE_URL);
describe('Проверка возможности отправлять запросы серверу', () => {
  it('GET-запрос успешно отправляется', () => {
    return xhr.get('/user').then((res) => {
      expect(res.status).toEqual(200);
    });
  });

  it.only('POST-запрос успешно отправляется', () => {
    return xhr.post('/logout').then((res) => {
      expect(res.status).toEqual(200);
      expect(res.response.method).toEqual('POST');
    });
  });
});
