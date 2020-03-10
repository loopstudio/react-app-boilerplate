/* eslint-disable  import/no-named-as-default */
import produce from 'immer';

export default (initialState, handlers) => {
  return (state = initialState, { type, payload }) => {
    return produce(state, (draft) => {
      const handler = handlers[type];
      return handler ? handler(draft, payload) : state;
    });
  };
};
