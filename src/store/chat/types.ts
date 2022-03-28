/* eslint-disable camelcase */
import { MutationTree } from 'vuex';

export interface User {
  id: string;
  user_id: string;
  message: string;
  date: string,
  isAdmin: boolean,
}
export interface State {
  isIncoming: boolean;
  users: User[];
}

/* eslint-disable no-shadow */

export enum Mutations {
  SAVE_USER_DATA = 'SAVE_USER_DATA',
}

export type RootState = ReturnType<() => State>

export interface MutationsInterface extends MutationTree<RootState> {
  [Mutations.SAVE_USER_DATA](s: State, p: User): void;
}
export interface Getters {
  currentHour: (state: State) => number;
}
