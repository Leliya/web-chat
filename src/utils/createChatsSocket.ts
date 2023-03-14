import ChatsController from '../controllers/ChatsController';
import { ChatSocket } from './api/ChatSocket';

export function createChatsSocket(chats: ChatType[]): SocketObject {
  const sockets: SocketObject = {};
  return chats.reduce<SocketObject>((acc, chat: ChatType): SocketObject => {
    createChatSocket(chat.id)
      .then((result) => {
        acc[chat.id] = result;
      })
      .catch((err) => console.log(err));
    return acc;
  }, sockets);
}

export async function createChatSocket(chatId: number): Promise<WebSocket> {
  const promiseSocket = ChatsController.getToken(chatId)
    .then((res) => {
      return res.token as string;
    })
    .then((token) => {
      const user = window.store.getState().user
      if(user){
        return new ChatSocket(user.id, chatId, token).socket;
      }
      return
    })
    .catch((err) => console.log(err));
  const socket = await promiseSocket;
  return socket as WebSocket;
}
