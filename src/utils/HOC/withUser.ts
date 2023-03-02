import { connect } from './connect';

export const withUser = connect((state) => ({ user: state.user }));
