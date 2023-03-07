import { SOCKET_URL } from '../../data/const';
import { isArray } from '../utility/isArray';
import { isObject } from '../utility/isObject';

export class ChatSocket {
  socket: WebSocket;
  checkConnection: NodeJS.Timer | undefined;
  chatId: number;
  userId: number;
  token: string;

  constructor(userId: number, chatId: number, token: string) {
    this.socket = new WebSocket(
      `${SOCKET_URL}${userId}/${chatId}/${token}`
    );
    this.userId = userId;
    this.chatId = chatId;
    this.token = token;
    this.start();
  }

  _check() {
    if (this.socket.readyState === 3) {
      this.restart()
    }
    this.socket.send(
      JSON.stringify({
        type: 'ping',
      })
    );
  }

  restart() {
    this.socket = new WebSocket(
      `${SOCKET_URL}${this.userId}/${this.chatId}/${this.token}`
    );
    this.start();
  }

  start() {
    this.socket.addEventListener('open', () => {
      console.log('Соединение установлено');
      this.checkConnection = setInterval(() => {
        if (this.socket.readyState === 3) {
          clearInterval(this.checkConnection);
          this.restart()
          return
        }
        this._check();
      }, 10000);
    });

    this.socket.addEventListener('close', (event) => {
      if (event.wasClean) {
        console.log('Соединение закрыто чисто');
      } else {
        console.log('Обрыв соединения');
      }

      console.log(`Код: ${event.code} | Причина: ${event.reason}`);
      this.restart();
    });

    this.socket.addEventListener('message', (event) => {
      const message = JSON.parse(event.data);
      if (message.type === 'pong') {
        return;
      }

      if (message.type === 'message' || message[0]?.type === 'message') {
        const state = window.store.getState();
        const oldMessages = state.messages;

        if (isArray(message)) {
          window.store.set({ messages: message.reverse() }, '');
        }

        if (isObject(message) && !isArray(message)) {
          const newMessage = message as MessageType;
          const activeChatId = state.activeChat?.id;
          if (this.chatId === activeChatId) {
            console.log(oldMessages, newMessage)
            window.store.set({ messages: [...oldMessages, newMessage] }, '');
          }
        }
      }
    });

    this.socket.addEventListener('error', (event) => {
      console.log('Ошибка', event);
    });
  }
}
