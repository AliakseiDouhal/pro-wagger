import {createSelector} from 'reselect'

export const wagersSelector = (state) => state.wagers;

export const activeWagersSelector = createSelector(wagersSelector, wagers => {
    return wagers.wagers
  }
);
