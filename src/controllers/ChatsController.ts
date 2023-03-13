import { ChatsAPI } from '../utils/api/ChatsAPI';
import { checkResponse } from '../utils/utility/checkResponse';

const chatsAPI = new ChatsAPI();

class ChatsController {
  public createChat(title: Record<string, string>): Promise<Indexed> {
    return chatsAPI.createChat(title).then(checkResponse<Indexed>);
  }

  public deleteChat(id: number): Promise<Indexed> {
    return chatsAPI.deleteChat(id).then(checkResponse<Indexed>);
  }

  public getChats(): Promise<ChatType[]> {
    return chatsAPI.getChats().then(checkResponse<ChatType[]>);
  }

  public getToken(chatId: number): Promise<Indexed> {
    return chatsAPI.getTokenChat(chatId).then(checkResponse<Indexed>);
  }

  public addUsersInChat(userId: number, chatId: number): Promise<Indexed> {
    return chatsAPI.addUsersInChat(userId, chatId).then(checkResponse<Indexed>);
  }

  public deleteUserFromChat(userId: number, chatId: number): Promise<Indexed> {
    return chatsAPI
      .deleteUserFromChat(userId, chatId)
      .then(checkResponse<Indexed>);
  }
}

export default new ChatsController();
