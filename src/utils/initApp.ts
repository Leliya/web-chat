import AuthController from '../controllers/AuthController';
import ChatsController from '../controllers/ChatsController';
import { createChatsSocket } from './createChatsSocket';
import { Dispatch } from './Store';

export function initApp(dispatch: Dispatch<AppState>) {
  AuthController.getUser()
    .then((data) => {
      dispatch({ user: data });
      ChatsController.getChats()
        .then((data) => {
          dispatch({ chats: data });
          return data;
        })
        .then((chats) => dispatch({ sockets: createChatsSocket(chats) }))
        .catch((err) => console.log(err))
        .finally(() => dispatch({ appIsInited: true }));
    })
    .catch((err) => {
      console.log(err);
      dispatch({ user: null });
      dispatch({ appIsInited: true });
    });
}
