
export const isAuthenticatedSelector = (state) => (
  !state.sessionReducer.checked
  || state.sessionReducer.authenticated
);

export const userSelector = (state) => state.sessionReducer.user;
