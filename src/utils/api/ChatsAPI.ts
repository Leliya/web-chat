import { BASE_URL } from '../../data/const';
import { HTTPTransport } from './HTTP';

const chatsAPIInstance = new HTTPTransport(`${BASE_URL}/chats/`);

export class ChatsAPI {
  getChats() {
    return chatsAPIInstance.get('', {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  createChat(title: Record<string, string>) {
    return chatsAPIInstance.post('', {
      data: title,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  getTokenChat(chatId: number) {
    return chatsAPIInstance.post(`token/${chatId}`, {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  deleteChat(id:number) {
    return chatsAPIInstance.delete('', {
      data: {
        chatId: id,
      },
      headers: { 'Content-Type': 'application/json' },
    });
  }

  addUsersInChat(userId: number, chatId: number) {
    return chatsAPIInstance.put('users', {
      data: {
        users: [userId],
        chatId: chatId,
      },
      headers: { 'content-type': 'application/json' },
    });
  }

  deleteUserFromChat(userId: number, chatId: number) {
    return chatsAPIInstance.delete('users', {
      data: {
        users: [userId],
        chatId: chatId,
      },
      headers: { 'content-type': 'application/json' },
    });
  }
}
