/* eslint-disable import/prefer-default-export */
import { Module } from 'vuex';
import { State } from './types';
import { RootState } from '../types';
import { getters } from './getters';
import { mutations } from './mutations';

const state: State = {
  isIncoming: true,
  users: [
    {
      id: '1',
      user_id: 'attendent',
      message: 'teste',
      date: '15:50',
      isAdmin: false,
    },
  ],
};

export const chat: Module<State, RootState> = {
  state, getters, mutations,
};
