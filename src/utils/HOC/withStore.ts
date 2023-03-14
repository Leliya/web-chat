import { connect } from './connect';

export const withStore = connect((state) => ({ store: state }));
