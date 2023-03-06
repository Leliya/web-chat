declare global {
  export type Nullable<T> = T | null;

  export type Keys<T extends Record<string, unknown>> = keyof T;
  export type Values<T extends Record<string, unknown>> = T[Keys<T>];

  export type Indexed = { [key: string]: unknown };

  export type SocketObject = Record<number, Nullable<WebSocket>>;

  declare module '*.svg' {
    const value: SVGElement;
    export = value;
  }

  export type User = {
    avatar?: string;
    display_name?: string;
    email: string;
    first_name: string;
    id: number;
    login: string;
    phone: string;
    second_name: string;
  };

  export type ChatType = {
    id: number;
    title: string;
    avatar: string;
    unread_count: number;
    last_message: {
      user: {
        first_name: string;
        second_name: string;
        avatar: string;
        email: string;
        login: string;
        phone: string;
      };
      time: string;
      content: string;
    };
  };

  export type LoginType = {
    login: string;
    password: string;
  };

  export type RegisterType = Omit<User, 'avatar' | 'display_name'>;

  export type MessageType = {
    id: number;
    user_id: number;
    chat_id: number;
    type: string;
    time: string;
    content: string;
    is_read: boolean;
    file: Nullable<string>;
  };

  export type AppState = {
    appIsInited: boolean;
    screen: Screens | null;
    user: User | null;
    chats: ChatType[];
    activeChat: Nullable<ChatType>;
    sockets: SocketObject;
    messages: MessageType[];
  };
}

export {};
