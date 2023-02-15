import { connect } from './connect';

export const withChats = connect((state) => ({
  chats: state.chats,
}));
