import { getArraysSortDate } from '../utility/getArraysSortDate';
import { connect } from './connect';

export const withMessages = connect((state) => ({
  messages: getArraysSortDate(state.messages),
  user: state.user,
  activeChat: state.activeChat,
}));
