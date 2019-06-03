import u from 'updeep';

export const actions = {
  async request({ dispatch, rootGetters }, config) {
    const accessToken = rootGetters['auth/accessToken'];
    return dispatch(
      'api/request',
      u(config, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }),
      { root: true }
    );
  }
};

export default {
  actions
};
