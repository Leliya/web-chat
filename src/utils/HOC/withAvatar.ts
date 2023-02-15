import { RESOURCE_URL } from '../../data/const';
import { connect } from './connect';

export const withAvatar = connect((state) => ({
  avatar: RESOURCE_URL + state.user.avatar,
}));
