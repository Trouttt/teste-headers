/* eslint-disable import/prefer-default-export */
/* eslint-disable no-shadow */

import { MutationTree } from 'vuex';
import { User, State } from './types';

export enum ChatMutations {
  CHANGE_INCOMING = 'CHANGE_INCOMING',
  SAVE_USER_DATA = 'SAVE_USER_DATA'
}

export const mutations: MutationTree<State> = {
  [ChatMutations.CHANGE_INCOMING](state, payload: boolean) {
    state.isIncoming = payload;
  },
  [ChatMutations.SAVE_USER_DATA](state, payload: User) {
    state.users.push(payload);
  },
};
