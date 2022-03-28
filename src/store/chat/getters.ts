/* eslint-disable import/prefer-default-export */
import { GetterTree } from 'vuex';
import { State } from './types';
import { RootState } from '../types';

export const getters: GetterTree<State, RootState> = {
  statusIncoming(state): boolean {
    return state.isIncoming;
  },
};
