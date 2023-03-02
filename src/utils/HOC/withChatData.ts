import { connect } from './connect';

export const withChatdata = connect((state) => ({
  user: state.user,
}));
