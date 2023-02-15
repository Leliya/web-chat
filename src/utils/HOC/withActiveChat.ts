import { connect } from './connect';

export const withActiveChat = connect((state) => ({
  activeChat: state.activeChat,
}));
